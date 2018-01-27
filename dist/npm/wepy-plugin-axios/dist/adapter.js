'use strict';

/** 请求队列 */
var queue = [];

/** 未完成的请求数 */
var pendingRequests = 0;

/** 最多同时发送的请求数 */
var MAX_PENDING_REQUESTS = 5;

/** 检查是否可以发送下一个请求. 如果可以，则发送 */
function checkQueue () {
  var loop = function () {
    var item = queue.shift();
    if (!item) { return 'break' }

    pendingRequests++;
    new Promise(item.promiseFunc).then(function (result) {
      pendingRequests--;
      item.resolve(result);
      checkQueue();
    }).catch(function (err) {
      pendingRequests--;
      item.reject(err);
      checkQueue();
    });
  };

  while (pendingRequests < MAX_PENDING_REQUESTS) {
    var returned = loop();

    if ( returned === 'break' ) break;
  }
}

/**
 * 将一个请求加入队列中. 如果当前没有正在排队的请求则立即发送
 *
 * @param {Function} promiseFunc 要入队的请求
 */
function enqueue (promiseFunc) {
  return new Promise(function (resolve, reject) {
    queue.push({ resolve: resolve, reject: reject, promiseFunc: promiseFunc });
    checkQueue();
  })
}

/**
 * 将 headers 对象中的 key 都转为标准格式
 *
 * @param {object} headers 要转换的 headers 对象
 */
function normalizeHeaders (headers) {
  if (headers == null) { return {} }

  var result = {};
  Object.keys(headers).forEach(function (key) {
    if (headers[key] == null) { return }

    var keyParts = key.split('-').map(function (part) {
      return part[0].toUpperCase() + part.slice(1).toLowerCase()
    });

    result[keyParts.join('-')] = headers[key];
  });

  return result
}

/**
 * 将 headers 对象中的 key 都转为小写
 *
 * @param {object} headers 要转换的 headers 对象
 */
function lowerCaseHeaders (headers) {
  if (headers == null) { return {} }

  var result = {};
  Object.keys(headers).forEach(function (key) {
    result[key.toLowerCase()] = headers[key];
  });

  return result
}

/**
 * URL 编码
 *
 * @param {string} val 要编码的字符串
 */
function encode (val) {
  return encodeURIComponent(val)
    .replace(/%40/gi, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}

/**
 * 拼接 URL 与参数
 *
 * @param {string} url 原 URL
 * @param {object} params 要拼接的参数
 * @param {Function} paramsSerializer 参数序列化方法
 */
function buildURL (url, params, paramsSerializer) {
  if (!params) { return url }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else {
    var parts = [];

    Object.keys(params).forEach(function (key) {
      var val = params[key];
      if (val == null) { return }

      if (Array.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      Object.keys(val).forEach(function (valKey) {
        var v = val[valKey];
        if (Object.prototype.toString.call(v) === '[object Date]') {
          v = v.toISOString();
        } else if (v != null && typeof v === 'object') {
          v = JSON.stringify(v);
        }

        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url
}

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The error.
 */
var enhanceError = function enhanceError(error, config, code, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.response = response;
  return error;
};

/**
 * Create an Error with the specified message, config, error code, and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
var createError = function createError(message, config, code, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, response);
};

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
var settle = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response
    ));
  }
};

var supportedMethods = ['OPTIONS', 'GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'TRACE', 'CONNECT'];
var supportedResponseTypes = ['json', 'text', 'file'];

/**
 * 创建用于微信小程序的 axios adapter
 *
 * @param {AxiosInstance} axios 原始 axios 对象
 * @returns {AxiosAdapter} 用于微信小程序的 axios adapter
 */
function wepyAxiosAdapterFactory (axios) {
  // 不使用默认的 transformResponse
  axios.defaults['transformResponse'] = [];

  // 使用自定义的 transformRequest
  axios.defaults['transformRequest'] = [function (data, headers) {
    var contentTypeKey = Object.keys(headers).find(function (key) { return /content-type/i.test(key); });
    if (contentTypeKey == null && data != null && typeof data === 'object') {
      headers['Content-Type'] = 'application/json; charset=utf8';
    }

    return data
  }];

  // 删除无法使用的 axios 选项
  ['timeout', 'xsrfCookieName', 'xsrfHeaderName', 'maxContentLength'].forEach(function (item) {
    delete axios.defaults[item];
  });

  /**
   * 用于微信小程序的 axios adapter
   *
   * @type {AxiosAdapter}
   */
  return function wepyAxiosAdapter (config) {
    return enqueue(function (resolve, reject) {
      /** 发送普通请求或是上传、下载请求 */
      var requestType = 'request';

      /** 请求所使用的参数 */
      var request = {
        url: buildURL(config.url, config.params, config.paramsSerializer),
        header: normalizeHeaders(config.headers)
      };

      // 必须在 URL 中指定是 http 还是 https 协议
      if (!/https?:\/\//.test(request.url)) {
        return reject(createError('Request protocol must be http or https', config))
      }

      // 处理调用上传文件接口的情况
      if (config.data && config.data.$upload) {
        var ref = config.data.$upload;
        var filePath = ref.filePath;
        var name = ref.name;
        if (typeof filePath === 'string' && typeof name === 'string') {
          if (config.method !== 'post') {
            return reject(createError('HTTP methods must be POST when uploading file', config))
          }

          requestType = 'uploadFile';
          config.responseType = 'file';

          request.filePath = filePath;
          request.name = name;
          request.formData = config.data;
          delete config.data.$upload;
        } else {
          return reject(createError('Invalid upload paramaters', config))
        }
      }

      // 处理响应类型和下载接口类型
      if (config.responseType && supportedResponseTypes.indexOf(config.responseType) === -1) {
        // 只接受 json 或 text 的返回类型
        return reject(createError('Unsupported responseType', config))
      } else if (requestType === 'request') {
        // 确认是否调用下载文件接口
        if (config.responseType === 'file') {
          if (config.method !== 'get') {
            reject(createError('HTTP method must be GET when downloading file', config));
          } else {
            requestType = 'downloadFile';
          }
        } else {
          // 普通请求必须使用 https
          if (undefined === 'production' && config.url.slice(0, 5).toLowerCase() !== 'https') {
            return reject(createError('Requesting an http URL is not allowed', config))
          }

          // 检查小程序是否支持所使用的 method
          config.method = config.method.toUpperCase();
          if (supportedMethods.indexOf(config.method) === -1) {
            return reject(createError('Unsupported request method', config))
          }

          request.data = config.data;
          request.method = config.method;

          // 增加 Content-Type
          if (!request.header['Content-Type'] && config.data && typeof config.data === 'object') {
            request.header['Content-Type'] = 'application/json; charset=utf-8';
          }
        }
      }

      // 加入回调函数
      request.success = function (response) {
        // 按照 axios 的返回格式构造返回值
        settle(resolve, reject, {
          data: response.data || response.tempFilePath,
          status: response.statusCode,
          headers: lowerCaseHeaders(response.header),
          config: config,
          request: request
        });
      };

      request.fail = function (response) { return reject(createError(response.errMsg, config)); };

      // 发送请求
      wx[requestType](request);
    })
  }
}

module.exports = wepyAxiosAdapterFactory;
//# sourceMappingURL=adapter.js.map
