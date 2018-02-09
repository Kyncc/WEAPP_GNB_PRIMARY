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
        vip: '',
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
            console.log(res.code);
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
            _wepy2.default.setStorageSync('unionid', res.unionid);
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
                this.userInfo.vip = _wepy2.default.getStorageSync('User').vip;
                _wepy2.default.hideLoading();
                _wepy2.default.switchTab({ url: '/pages/workbook/index' });
                this.$apply();
                _context2.next = 22;
                break;

              case 19:
                _context2.prev = 19;
                _context2.t0 = _context2['catch'](0);

                _wepy2.default.hideLoading();

              case 22:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 19]]);
      }));

      function onLoad() {
        return _ref3.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'onShow',
    value: function onShow() {
      this.userInfo.name = _wepy2.default.getStorageSync('User').name;
      this.userInfo.headImg = _wepy2.default.getStorageSync('User').headImg;
      this.userInfo.refund = _wepy2.default.getStorageSync('User').refund;
      this.userInfo.vip = _wepy2.default.getStorageSync('User').vip;
      this.$apply();
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/my/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ1c2VySW5mbyIsIm5hbWUiLCJoZWFkSW1nIiwidmlwIiwicmVmdW5kIiwibWV0aG9kcyIsIl9pbnRvIiwidXJsIiwid3giLCJuYXZpZ2F0ZVRvIiwiX3JlZnVuZCIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJfc2V0UmVmdW5kIiwiX2dldFVzZXJJbmZvIiwiaGlkZUxvYWRpbmciLCJzaG93TW9kYWwiLCJjb250ZW50IiwiY29uZmlybVRleHQiLCJzaG93Q2FuY2VsIiwiY29uc29sZSIsImxvZyIsInNob3dUb2FzdCIsImljb24iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJtZXRob2QiLCJzdWNjZXNzIiwicmVzIiwiZmFpbCIsImVyciIsImxvZ2luIiwiY29kZSIsInNldFN0b3JhZ2VTeW5jIiwib3BlbmlkIiwic2Vzc2lvbl9rZXkiLCJ1bmlvbmlkIiwiZ2V0U3RvcmFnZVN5bmMiLCJsZW5ndGgiLCJfbG9naW4iLCJfZ2V0T3BlbklkIiwic3dpdGNoVGFiIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsZ0JBQVU7QUFDUkMsY0FBTSxFQURFO0FBRVJDLGlCQUFTLEVBRkQ7QUFHUkMsYUFBSyxFQUhHO0FBSVJDLGdCQUFRO0FBSkE7QUFETCxLLFFBU1BDLE8sR0FBVTtBQUNSQyxXQURRLGlCQUNEQyxHQURDLEVBQ0k7QUFDVkMsV0FBR0MsVUFBSCxDQUFjO0FBQ1pGLGVBQUtBO0FBRE8sU0FBZDtBQUdELE9BTE87O0FBTVI7QUFDTUcsYUFQRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFTSixp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dUJBQ0UsS0FBS1EsVUFBTCxDQUFnQlIsSUFBaEIsQzs7Ozt1QkFFRixLQUFLcEIsWUFBTCxFOzs7QUFDTixxQkFBS2QsUUFBTCxDQUFjQyxJQUFkLEdBQXFCLGVBQUtzQyxjQUFMLENBQW9CLE1BQXBCLEVBQTRCdEMsSUFBakQ7QUFDQSxxQkFBS0QsUUFBTCxDQUFjRSxPQUFkLEdBQXdCLGVBQUtxQyxjQUFMLENBQW9CLE1BQXBCLEVBQTRCckMsT0FBcEQ7QUFDQSxxQkFBS0YsUUFBTCxDQUFjSSxNQUFkLEdBQXVCLGVBQUttQyxjQUFMLENBQW9CLE1BQXBCLEVBQTRCbkMsTUFBbkQ7QUFDQSxxQkFBS0osUUFBTCxDQUFjRyxHQUFkLEdBQW9CLGVBQUtvQyxjQUFMLENBQW9CLE1BQXBCLEVBQTRCcEMsR0FBaEQ7QUFDQSwrQkFBS1ksV0FBTDtBQUNBLCtCQUFLNEIsU0FBTCxDQUFlLEVBQUVwQyw0QkFBRixFQUFmO0FBQ0EscUJBQUtxQyxNQUFMOzs7Ozs7OztBQUVBLCtCQUFLN0IsV0FBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUlNO0FBQ1IsV0FBS2YsUUFBTCxDQUFjQyxJQUFkLEdBQXFCLGVBQUtzQyxjQUFMLENBQW9CLE1BQXBCLEVBQTRCdEMsSUFBakQ7QUFDQSxXQUFLRCxRQUFMLENBQWNFLE9BQWQsR0FBd0IsZUFBS3FDLGNBQUwsQ0FBb0IsTUFBcEIsRUFBNEJyQyxPQUFwRDtBQUNBLFdBQUtGLFFBQUwsQ0FBY0ksTUFBZCxHQUF1QixlQUFLbUMsY0FBTCxDQUFvQixNQUFwQixFQUE0Qm5DLE1BQW5EO0FBQ0EsV0FBS0osUUFBTCxDQUFjRyxHQUFkLEdBQW9CLGVBQUtvQyxjQUFMLENBQW9CLE1BQXBCLEVBQTRCcEMsR0FBaEQ7QUFDQSxXQUFLeUMsTUFBTDtBQUNEOzs7O0VBOUlnQyxlQUFLQyxJOztrQkFBbkJqRCxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoQnXG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIHVzZXJJbmZvOiB7XG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICBoZWFkSW1nOiAnJyxcbiAgICAgICAgdmlwOiAnJyxcbiAgICAgICAgcmVmdW5kOiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBfaW50byAodXJsKSB7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogdXJsXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgLy8g5Y+R6LW36YCA5qy+XG4gICAgICBhc3luYyBfcmVmdW5kICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB3ZXB5LnNob3dMb2FkaW5nKHt0aXRsZTogJ+ivt+eojeWAmSd9KVxuICAgICAgICAgIC8vIOWPkei1t+mAgOasvuaOpeWPo1xuICAgICAgICAgIGF3YWl0IHRoaXMuX3NldFJlZnVuZCgpXG4gICAgICAgICAgLy8g6YeN5paw6I635b6X55So5oi35L+h5oGvXG4gICAgICAgICAgYXdhaXQgdGhpcy5fZ2V0VXNlckluZm8oKVxuICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgIHRpdGxlOiAn55Sz6K+35oiQ5YqfJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfmiJHku6zlsIblnKgyNOWwj+aXtuWGheWujOaIkOmAgOasvicsXG4gICAgICAgICAgICBjb25maXJtVGV4dDogJ+efpemBk+S6hicsXG4gICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ+WHuumUmeS6huivt+eojeWQjumHjeivlScsXG4gICAgICAgICAgICBpY29uOiAnbm9uZSdcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOWPkei1t+mAgOasviAqL1xuICAgIF9zZXRSZWZ1bmQgKCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL3dlY2hhdC5ndWluYWJlbi5jb20vbWluaS1wcm9ncmFtL3JlZnVuZCcsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8qKiDlvq7kv6HmnI3liqHlmajojrflj5ZDT0RFICovXG4gICAgX2xvZ2luICgpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkubG9naW4oe1xuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmNvZGUpXG4gICAgICAgICAgICByZXNvbHZlKHJlcy5jb2RlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqIOmAmui/h2NvZGXojrflj5ZPUEVOSUQgKi9cbiAgICBfZ2V0T3BlbklkIChjb2RlKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vd2VjaGF0Lmd1aW5hYmVuLmNvbS9taW5pLXByb2dyYW0vb3BlbklkJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBjb2RlOiBjb2RlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ29wZW5JZCcsIHJlcy5vcGVuaWQpXG4gICAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdzZXNzaW9uX2tleScsIHJlcy5zZXNzaW9uX2tleSlcbiAgICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ3VuaW9uaWQnLCByZXMudW5pb25pZClcbiAgICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqIOiOt+WPlueUqOaIt+S/oeaBryAqL1xuICAgIF9nZXRVc2VySW5mbyAoKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vcHJpbWFyeS5ndWluYWJlbi5jb20vbWVtYmVyL2luZm8nLFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnVXNlcicsIHJlcylcbiAgICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgYXN5bmMgb25Mb2FkKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIDEg6I635Y+W5piv5ZCm5a2Y5pyJb3BlbklkIOWmguaenOayoeacieS7o+ihqOS4uueZu+W9lei/h1xuICAgICAgICAgKiAyIOiOt+WPlm9wZW5JZFxuICAgICAgICAgKiAzIOWcqOmAmui/h29wZW5JZOiOt+W+l+eUqOaIt+S/oeaBr1xuICAgICAgICAgKi9cbiAgICAgICAgd2VweS5zaG93TG9hZGluZyh7dGl0bGU6ICfor7fnqI3lgJknfSlcbiAgICAgICAgaWYgKHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ29wZW5JZCcpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGxldCBjb2RlID0gYXdhaXQgdGhpcy5fbG9naW4oKVxuICAgICAgICAgIGF3YWl0IHRoaXMuX2dldE9wZW5JZChjb2RlKVxuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHRoaXMuX2dldFVzZXJJbmZvKClcbiAgICAgICAgdGhpcy51c2VySW5mby5uYW1lID0gd2VweS5nZXRTdG9yYWdlU3luYygnVXNlcicpLm5hbWVcbiAgICAgICAgdGhpcy51c2VySW5mby5oZWFkSW1nID0gd2VweS5nZXRTdG9yYWdlU3luYygnVXNlcicpLmhlYWRJbWdcbiAgICAgICAgdGhpcy51c2VySW5mby5yZWZ1bmQgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdVc2VyJykucmVmdW5kXG4gICAgICAgIHRoaXMudXNlckluZm8udmlwID0gd2VweS5nZXRTdG9yYWdlU3luYygnVXNlcicpLnZpcFxuICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgd2VweS5zd2l0Y2hUYWIoeyB1cmw6IGAvcGFnZXMvd29ya2Jvb2svaW5kZXhgIH0pXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvblNob3cgKCkge1xuICAgICAgdGhpcy51c2VySW5mby5uYW1lID0gd2VweS5nZXRTdG9yYWdlU3luYygnVXNlcicpLm5hbWVcbiAgICAgIHRoaXMudXNlckluZm8uaGVhZEltZyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXInKS5oZWFkSW1nXG4gICAgICB0aGlzLnVzZXJJbmZvLnJlZnVuZCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXInKS5yZWZ1bmRcbiAgICAgIHRoaXMudXNlckluZm8udmlwID0gd2VweS5nZXRTdG9yYWdlU3luYygnVXNlcicpLnZpcFxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cbiAgfVxuIl19