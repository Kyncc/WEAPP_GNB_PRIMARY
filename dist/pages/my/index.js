'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的'
    }, _this.data = {
      userInfo: {
        name: '',
        headImg: '',
        refund: false
      }
    }, _this.methods = {
      _into: function _into(url) {
        wx.navigateTo({
          url: url
        });
      },

      // 发起退款
      _refund: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;

                  _wepy2.default.showLoading({ title: '请稍候' });
                  // 发起退款接口
                  _context.next = 4;
                  return this._setRefund();

                case 4:
                  _context.next = 6;
                  return this._getUserInfo();

                case 6:
                  _wepy2.default.hideLoading();
                  _wepy2.default.showModal({
                    title: '申请成功',
                    content: '我们将在24小时内完成退款',
                    confirmText: '知道了',
                    showCancel: false
                  });
                  _context.next = 15;
                  break;

                case 10:
                  _context.prev = 10;
                  _context.t0 = _context['catch'](0);

                  console.log(_context.t0);
                  _wepy2.default.hideLoading();
                  _wepy2.default.showToast({
                    title: '出错了请稍后重试',
                    icon: 'none'
                  });

                case 15:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[0, 10]]);
        }));

        function _refund() {
          return _ref2.apply(this, arguments);
        }

        return _refund;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: '_setRefund',


    /** 发起退款 */
    value: function _setRefund() {
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://wechat.guinaben.com/mini-program/refund',
          method: 'POST',
          success: function success(res) {
            resolve(res);
          },
          fail: function fail(err) {
            reject(err);
          }
        });
      });
    }

    /** 微信服务器获取CODE */

  }, {
    key: '_login',
    value: function _login() {
      return new Promise(function (resolve, reject) {
        _wepy2.default.login({
          success: function success(res) {
            resolve(res.code);
          }
        });
      });
    }

    /** 通过code获取OPENID */

  }, {
    key: '_getOpenId',
    value: function _getOpenId(code) {
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://wechat.guinaben.com/mini-program/openId',
          data: {
            code: code
          },
          success: function success(res) {
            _wepy2.default.setStorageSync('openId', res.openid);
            _wepy2.default.setStorageSync('session_key', res.session_key);
            resolve(res);
          },
          fail: function fail(err) {
            reject(err);
          }
        });
      });
    }

    /** 获取用户信息 */

  }, {
    key: '_getUserInfo',
    value: function _getUserInfo() {
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://primary.guinaben.com/member/info',
          success: function success(res) {
            _wepy2.default.setStorageSync('User', res);
            resolve(res);
          },
          fail: function fail(err) {
            reject(err);
          }
        });
      });
    }
  }, {
    key: 'onLoad',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var code;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;

                /**
                 * 1 获取是否存有openId 如果没有代表为登录过
                 * 2 获取openId
                 * 3 在通过openId获得用户信息
                 */
                _wepy2.default.showLoading({ title: '请稍候' });

                if (!(_wepy2.default.getStorageSync('openId').length === 0)) {
                  _context2.next = 8;
                  break;
                }

                _context2.next = 5;
                return this._login();

              case 5:
                code = _context2.sent;
                _context2.next = 8;
                return this._getOpenId(code);

              case 8:
                _context2.next = 10;
                return this._getUserInfo();

              case 10:
                this.userInfo.name = _wepy2.default.getStorageSync('User').name;
                this.userInfo.headImg = _wepy2.default.getStorageSync('User').headImg;
                this.userInfo.refund = _wepy2.default.getStorageSync('User').refund;
                _wepy2.default.hideLoading();
                this.$apply();
                _context2.next = 21;
                break;

              case 17:
                _context2.prev = 17;
                _context2.t0 = _context2['catch'](0);

                _wepy2.default.hideLoading();
                console.log(_context2.t0);

              case 21:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 17]]);
      }));

      function onLoad() {
        return _ref3.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/my/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ1c2VySW5mbyIsIm5hbWUiLCJoZWFkSW1nIiwicmVmdW5kIiwibWV0aG9kcyIsIl9pbnRvIiwidXJsIiwid3giLCJuYXZpZ2F0ZVRvIiwiX3JlZnVuZCIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJfc2V0UmVmdW5kIiwiX2dldFVzZXJJbmZvIiwiaGlkZUxvYWRpbmciLCJzaG93TW9kYWwiLCJjb250ZW50IiwiY29uZmlybVRleHQiLCJzaG93Q2FuY2VsIiwiY29uc29sZSIsImxvZyIsInNob3dUb2FzdCIsImljb24iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJtZXRob2QiLCJzdWNjZXNzIiwicmVzIiwiZmFpbCIsImVyciIsImxvZ2luIiwiY29kZSIsInNldFN0b3JhZ2VTeW5jIiwib3BlbmlkIiwic2Vzc2lvbl9rZXkiLCJnZXRTdG9yYWdlU3luYyIsImxlbmd0aCIsIl9sb2dpbiIsIl9nZXRPcGVuSWQiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxnQkFBVTtBQUNSQyxjQUFNLEVBREU7QUFFUkMsaUJBQVMsRUFGRDtBQUdSQyxnQkFBUTtBQUhBO0FBREwsSyxRQVFQQyxPLEdBQVU7QUFDUkMsV0FEUSxpQkFDREMsR0FEQyxFQUNJO0FBQ1ZDLFdBQUdDLFVBQUgsQ0FBYztBQUNaRixlQUFLQTtBQURPLFNBQWQ7QUFHRCxPQUxPOztBQU1SO0FBQ01HLGFBUEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBU0osaUNBQUtDLFdBQUwsQ0FBaUIsRUFBQ0MsT0FBTyxLQUFSLEVBQWpCO0FBQ0E7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QUFDQSxxQkFBS0QsUUFBTCxDQUFjRSxPQUFkLEdBQXdCLGVBQUttQyxjQUFMLENBQW9CLE1BQXBCLEVBQTRCbkMsT0FBcEQ7QUFDQSxxQkFBS0YsUUFBTCxDQUFjRyxNQUFkLEdBQXVCLGVBQUtrQyxjQUFMLENBQW9CLE1BQXBCLEVBQTRCbEMsTUFBbkQ7QUFDQSwrQkFBS1csV0FBTDtBQUNBLHFCQUFLMkIsTUFBTDs7Ozs7Ozs7QUFFQSwrQkFBSzNCLFdBQUw7QUFDQUssd0JBQVFDLEdBQVI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFoSTZCLGVBQUtzQixJOztrQkFBbkI5QyxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoQnXG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIHVzZXJJbmZvOiB7XG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICBoZWFkSW1nOiAnJyxcbiAgICAgICAgcmVmdW5kOiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBfaW50byAodXJsKSB7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogdXJsXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgLy8g5Y+R6LW36YCA5qy+XG4gICAgICBhc3luYyBfcmVmdW5kICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB3ZXB5LnNob3dMb2FkaW5nKHt0aXRsZTogJ+ivt+eojeWAmSd9KVxuICAgICAgICAgIC8vIOWPkei1t+mAgOasvuaOpeWPo1xuICAgICAgICAgIGF3YWl0IHRoaXMuX3NldFJlZnVuZCgpXG4gICAgICAgICAgLy8g6YeN5paw6I635b6X55So5oi35L+h5oGvXG4gICAgICAgICAgYXdhaXQgdGhpcy5fZ2V0VXNlckluZm8oKVxuICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgIHRpdGxlOiAn55Sz6K+35oiQ5YqfJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfmiJHku6zlsIblnKgyNOWwj+aXtuWGheWujOaIkOmAgOasvicsXG4gICAgICAgICAgICBjb25maXJtVGV4dDogJ+efpemBk+S6hicsXG4gICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ+WHuumUmeS6huivt+eojeWQjumHjeivlScsXG4gICAgICAgICAgICBpY29uOiAnbm9uZSdcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOWPkei1t+mAgOasviAqL1xuICAgIF9zZXRSZWZ1bmQgKCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL3dlY2hhdC5ndWluYWJlbi5jb20vbWluaS1wcm9ncmFtL3JlZnVuZCcsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8qKiDlvq7kv6HmnI3liqHlmajojrflj5ZDT0RFICovXG4gICAgX2xvZ2luICgpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkubG9naW4oe1xuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXMuY29kZSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8qKiDpgJrov4djb2Rl6I635Y+WT1BFTklEICovXG4gICAgX2dldE9wZW5JZCAoY29kZSkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL3dlY2hhdC5ndWluYWJlbi5jb20vbWluaS1wcm9ncmFtL29wZW5JZCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgY29kZTogY29kZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdvcGVuSWQnLCByZXMub3BlbmlkKVxuICAgICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnc2Vzc2lvbl9rZXknLCByZXMuc2Vzc2lvbl9rZXkpXG4gICAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8qKiDojrflj5bnlKjmiLfkv6Hmga8gKi9cbiAgICBfZ2V0VXNlckluZm8gKCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL3ByaW1hcnkuZ3VpbmFiZW4uY29tL21lbWJlci9pbmZvJyxcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ1VzZXInLCByZXMpXG4gICAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIGFzeW5jIG9uTG9hZCgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAxIOiOt+WPluaYr+WQpuWtmOaciW9wZW5JZCDlpoLmnpzmsqHmnInku6PooajkuLrnmbvlvZXov4dcbiAgICAgICAgICogMiDojrflj5ZvcGVuSWRcbiAgICAgICAgICogMyDlnKjpgJrov4dvcGVuSWTojrflvpfnlKjmiLfkv6Hmga9cbiAgICAgICAgICovXG4gICAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe3RpdGxlOiAn6K+356iN5YCZJ30pXG4gICAgICAgIGlmICh3ZXB5LmdldFN0b3JhZ2VTeW5jKCdvcGVuSWQnKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBsZXQgY29kZSA9IGF3YWl0IHRoaXMuX2xvZ2luKClcbiAgICAgICAgICBhd2FpdCB0aGlzLl9nZXRPcGVuSWQoY29kZSlcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCB0aGlzLl9nZXRVc2VySW5mbygpXG4gICAgICAgIHRoaXMudXNlckluZm8ubmFtZSA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXInKS5uYW1lXG4gICAgICAgIHRoaXMudXNlckluZm8uaGVhZEltZyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXInKS5oZWFkSW1nXG4gICAgICAgIHRoaXMudXNlckluZm8ucmVmdW5kID0gd2VweS5nZXRTdG9yYWdlU3luYygnVXNlcicpLnJlZnVuZFxuICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=