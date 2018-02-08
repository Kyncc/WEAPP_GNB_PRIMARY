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
                _context2.next = 23;
                break;

              case 19:
                _context2.prev = 19;
                _context2.t0 = _context2['catch'](0);

                _wepy2.default.hideLoading();
                console.log(_context2.t0);

              case 23:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ1c2VySW5mbyIsIm5hbWUiLCJoZWFkSW1nIiwidmlwIiwicmVmdW5kIiwibWV0aG9kcyIsIl9pbnRvIiwidXJsIiwid3giLCJuYXZpZ2F0ZVRvIiwiX3JlZnVuZCIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJfc2V0UmVmdW5kIiwiX2dldFVzZXJJbmZvIiwiaGlkZUxvYWRpbmciLCJzaG93TW9kYWwiLCJjb250ZW50IiwiY29uZmlybVRleHQiLCJzaG93Q2FuY2VsIiwiY29uc29sZSIsImxvZyIsInNob3dUb2FzdCIsImljb24iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJtZXRob2QiLCJzdWNjZXNzIiwicmVzIiwiZmFpbCIsImVyciIsImxvZ2luIiwiY29kZSIsInNldFN0b3JhZ2VTeW5jIiwib3BlbmlkIiwic2Vzc2lvbl9rZXkiLCJ1bmlvbmlkIiwiZ2V0U3RvcmFnZVN5bmMiLCJsZW5ndGgiLCJfbG9naW4iLCJfZ2V0T3BlbklkIiwic3dpdGNoVGFiIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsZ0JBQVU7QUFDUkMsY0FBTSxFQURFO0FBRVJDLGlCQUFTLEVBRkQ7QUFHUkMsYUFBSyxFQUhHO0FBSVJDLGdCQUFRO0FBSkE7QUFETCxLLFFBU1BDLE8sR0FBVTtBQUNSQyxXQURRLGlCQUNEQyxHQURDLEVBQ0k7QUFDVkMsV0FBR0MsVUFBSCxDQUFjO0FBQ1pGLGVBQUtBO0FBRE8sU0FBZDtBQUdELE9BTE87O0FBTVI7QUFDTUcsYUFQRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFTSixp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dUJBQ0UsS0FBS1EsVUFBTCxDQUFnQlIsSUFBaEIsQzs7Ozt1QkFFRixLQUFLcEIsWUFBTCxFOzs7QUFDTixxQkFBS2QsUUFBTCxDQUFjQyxJQUFkLEdBQXFCLGVBQUtzQyxjQUFMLENBQW9CLE1BQXBCLEVBQTRCdEMsSUFBakQ7QUFDQSxxQkFBS0QsUUFBTCxDQUFjRSxPQUFkLEdBQXdCLGVBQUtxQyxjQUFMLENBQW9CLE1BQXBCLEVBQTRCckMsT0FBcEQ7QUFDQSxxQkFBS0YsUUFBTCxDQUFjSSxNQUFkLEdBQXVCLGVBQUttQyxjQUFMLENBQW9CLE1BQXBCLEVBQTRCbkMsTUFBbkQ7QUFDQSxxQkFBS0osUUFBTCxDQUFjRyxHQUFkLEdBQW9CLGVBQUtvQyxjQUFMLENBQW9CLE1BQXBCLEVBQTRCcEMsR0FBaEQ7QUFDQSwrQkFBS1ksV0FBTDtBQUNBLCtCQUFLNEIsU0FBTCxDQUFlLEVBQUVwQyw0QkFBRixFQUFmO0FBQ0EscUJBQUtxQyxNQUFMOzs7Ozs7OztBQUVBLCtCQUFLN0IsV0FBTDtBQUNBSyx3QkFBUUMsR0FBUjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUlNO0FBQ1IsV0FBS3JCLFFBQUwsQ0FBY0MsSUFBZCxHQUFxQixlQUFLc0MsY0FBTCxDQUFvQixNQUFwQixFQUE0QnRDLElBQWpEO0FBQ0EsV0FBS0QsUUFBTCxDQUFjRSxPQUFkLEdBQXdCLGVBQUtxQyxjQUFMLENBQW9CLE1BQXBCLEVBQTRCckMsT0FBcEQ7QUFDQSxXQUFLRixRQUFMLENBQWNJLE1BQWQsR0FBdUIsZUFBS21DLGNBQUwsQ0FBb0IsTUFBcEIsRUFBNEJuQyxNQUFuRDtBQUNBLFdBQUtKLFFBQUwsQ0FBY0csR0FBZCxHQUFvQixlQUFLb0MsY0FBTCxDQUFvQixNQUFwQixFQUE0QnBDLEdBQWhEO0FBQ0EsV0FBS3lDLE1BQUw7QUFDRDs7OztFQS9JZ0MsZUFBS0MsSTs7a0JBQW5CakQsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qEJ1xuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICB1c2VySW5mbzoge1xuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgaGVhZEltZzogJycsXG4gICAgICAgIHZpcDogJycsXG4gICAgICAgIHJlZnVuZDogZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgX2ludG8gKHVybCkge1xuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6IHVybFxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIC8vIOWPkei1t+mAgOasvlxuICAgICAgYXN5bmMgX3JlZnVuZCAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgd2VweS5zaG93TG9hZGluZyh7dGl0bGU6ICfor7fnqI3lgJknfSlcbiAgICAgICAgICAvLyDlj5HotbfpgIDmrL7mjqXlj6NcbiAgICAgICAgICBhd2FpdCB0aGlzLl9zZXRSZWZ1bmQoKVxuICAgICAgICAgIC8vIOmHjeaWsOiOt+W+l+eUqOaIt+S/oeaBr1xuICAgICAgICAgIGF3YWl0IHRoaXMuX2dldFVzZXJJbmZvKClcbiAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICB0aXRsZTogJ+eUs+ivt+aIkOWKnycsXG4gICAgICAgICAgICBjb250ZW50OiAn5oiR5Lus5bCG5ZyoMjTlsI/ml7blhoXlrozmiJDpgIDmrL4nLFxuICAgICAgICAgICAgY29uZmlybVRleHQ6ICfnn6XpgZPkuoYnLFxuICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICflh7rplJnkuobor7fnqI3lkI7ph43or5UnLFxuICAgICAgICAgICAgaWNvbjogJ25vbmUnXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDlj5HotbfpgIDmrL4gKi9cbiAgICBfc2V0UmVmdW5kICgpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly93ZWNoYXQuZ3VpbmFiZW4uY29tL21pbmktcHJvZ3JhbS9yZWZ1bmQnLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvKiog5b6u5L+h5pyN5Yqh5Zmo6I635Y+WQ09ERSAqL1xuICAgIF9sb2dpbiAoKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LmxvZ2luKHtcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5jb2RlKVxuICAgICAgICAgICAgcmVzb2x2ZShyZXMuY29kZSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8qKiDpgJrov4djb2Rl6I635Y+WT1BFTklEICovXG4gICAgX2dldE9wZW5JZCAoY29kZSkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL3dlY2hhdC5ndWluYWJlbi5jb20vbWluaS1wcm9ncmFtL29wZW5JZCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgY29kZTogY29kZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdvcGVuSWQnLCByZXMub3BlbmlkKVxuICAgICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnc2Vzc2lvbl9rZXknLCByZXMuc2Vzc2lvbl9rZXkpXG4gICAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCd1bmlvbmlkJywgcmVzLnVuaW9uaWQpXG4gICAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8qKiDojrflj5bnlKjmiLfkv6Hmga8gKi9cbiAgICBfZ2V0VXNlckluZm8gKCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL3ByaW1hcnkuZ3VpbmFiZW4uY29tL21lbWJlci9pbmZvJyxcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ1VzZXInLCByZXMpXG4gICAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIGFzeW5jIG9uTG9hZCgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAxIOiOt+WPluaYr+WQpuWtmOaciW9wZW5JZCDlpoLmnpzmsqHmnInku6PooajkuLrnmbvlvZXov4dcbiAgICAgICAgICogMiDojrflj5ZvcGVuSWRcbiAgICAgICAgICogMyDlnKjpgJrov4dvcGVuSWTojrflvpfnlKjmiLfkv6Hmga9cbiAgICAgICAgICovXG4gICAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe3RpdGxlOiAn6K+356iN5YCZJ30pXG4gICAgICAgIGlmICh3ZXB5LmdldFN0b3JhZ2VTeW5jKCdvcGVuSWQnKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBsZXQgY29kZSA9IGF3YWl0IHRoaXMuX2xvZ2luKClcbiAgICAgICAgICBhd2FpdCB0aGlzLl9nZXRPcGVuSWQoY29kZSlcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCB0aGlzLl9nZXRVc2VySW5mbygpXG4gICAgICAgIHRoaXMudXNlckluZm8ubmFtZSA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXInKS5uYW1lXG4gICAgICAgIHRoaXMudXNlckluZm8uaGVhZEltZyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXInKS5oZWFkSW1nXG4gICAgICAgIHRoaXMudXNlckluZm8ucmVmdW5kID0gd2VweS5nZXRTdG9yYWdlU3luYygnVXNlcicpLnJlZnVuZFxuICAgICAgICB0aGlzLnVzZXJJbmZvLnZpcCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXInKS52aXBcbiAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgIHdlcHkuc3dpdGNoVGFiKHsgdXJsOiBgL3BhZ2VzL3dvcmtib29rL2luZGV4YCB9KVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvblNob3cgKCkge1xuICAgICAgdGhpcy51c2VySW5mby5uYW1lID0gd2VweS5nZXRTdG9yYWdlU3luYygnVXNlcicpLm5hbWVcbiAgICAgIHRoaXMudXNlckluZm8uaGVhZEltZyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXInKS5oZWFkSW1nXG4gICAgICB0aGlzLnVzZXJJbmZvLnJlZnVuZCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXInKS5yZWZ1bmRcbiAgICAgIHRoaXMudXNlckluZm8udmlwID0gd2VweS5nZXRTdG9yYWdlU3luYygnVXNlcicpLnZpcFxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cbiAgfVxuIl19