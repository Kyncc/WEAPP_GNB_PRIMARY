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
                this.userInfo.vip = _wepy2.default.getStorageSync('User').vip;
                _wepy2.default.hideLoading();
                this.$apply();
                _context2.next = 22;
                break;

              case 18:
                _context2.prev = 18;
                _context2.t0 = _context2['catch'](0);

                _wepy2.default.hideLoading();
                console.log(_context2.t0);

              case 22:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 18]]);
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
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/my/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ1c2VySW5mbyIsIm5hbWUiLCJoZWFkSW1nIiwidmlwIiwicmVmdW5kIiwibWV0aG9kcyIsIl9pbnRvIiwidXJsIiwid3giLCJuYXZpZ2F0ZVRvIiwiX3JlZnVuZCIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJfc2V0UmVmdW5kIiwiX2dldFVzZXJJbmZvIiwiaGlkZUxvYWRpbmciLCJzaG93TW9kYWwiLCJjb250ZW50IiwiY29uZmlybVRleHQiLCJzaG93Q2FuY2VsIiwiY29uc29sZSIsImxvZyIsInNob3dUb2FzdCIsImljb24iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJtZXRob2QiLCJzdWNjZXNzIiwicmVzIiwiZmFpbCIsImVyciIsImxvZ2luIiwiY29kZSIsInNldFN0b3JhZ2VTeW5jIiwib3BlbmlkIiwic2Vzc2lvbl9rZXkiLCJnZXRTdG9yYWdlU3luYyIsImxlbmd0aCIsIl9sb2dpbiIsIl9nZXRPcGVuSWQiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxnQkFBVTtBQUNSQyxjQUFNLEVBREU7QUFFUkMsaUJBQVMsRUFGRDtBQUdSQyxhQUFLLEVBSEc7QUFJUkMsZ0JBQVE7QUFKQTtBQURMLEssUUFTUEMsTyxHQUFVO0FBQ1JDLFdBRFEsaUJBQ0RDLEdBREMsRUFDSTtBQUNWQyxXQUFHQyxVQUFILENBQWM7QUFDWkYsZUFBS0E7QUFETyxTQUFkO0FBR0QsT0FMTzs7QUFNUjtBQUNNRyxhQVBFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVNKLGlDQUFLQyxXQUFMLENBQWlCLEVBQUND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QixNQUFwQixFQUE0QnJDLElBQWpEO0FBQ0EscUJBQUtELFFBQUwsQ0FBY0UsT0FBZCxHQUF3QixlQUFLb0MsY0FBTCxDQUFvQixNQUFwQixFQUE0QnBDLE9BQXBEO0FBQ0EscUJBQUtGLFFBQUwsQ0FBY0ksTUFBZCxHQUF1QixlQUFLa0MsY0FBTCxDQUFvQixNQUFwQixFQUE0QmxDLE1BQW5EO0FBQ0EscUJBQUtKLFFBQUwsQ0FBY0csR0FBZCxHQUFvQixlQUFLbUMsY0FBTCxDQUFvQixNQUFwQixFQUE0Qm5DLEdBQWhEO0FBQ0EsK0JBQUtZLFdBQUw7QUFDQSxxQkFBSzJCLE1BQUw7Ozs7Ozs7O0FBRUEsK0JBQUszQixXQUFMO0FBQ0FLLHdCQUFRQyxHQUFSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBSU07QUFDUixXQUFLckIsUUFBTCxDQUFjQyxJQUFkLEdBQXFCLGVBQUtxQyxjQUFMLENBQW9CLE1BQXBCLEVBQTRCckMsSUFBakQ7QUFDQSxXQUFLRCxRQUFMLENBQWNFLE9BQWQsR0FBd0IsZUFBS29DLGNBQUwsQ0FBb0IsTUFBcEIsRUFBNEJwQyxPQUFwRDtBQUNBLFdBQUtGLFFBQUwsQ0FBY0ksTUFBZCxHQUF1QixlQUFLa0MsY0FBTCxDQUFvQixNQUFwQixFQUE0QmxDLE1BQW5EO0FBQ0EsV0FBS0osUUFBTCxDQUFjRyxHQUFkLEdBQW9CLGVBQUttQyxjQUFMLENBQW9CLE1BQXBCLEVBQTRCbkMsR0FBaEQ7QUFDRDs7OztFQTNJZ0MsZUFBS3dDLEk7O2tCQUFuQi9DLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahCdcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgdXNlckluZm86IHtcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGhlYWRJbWc6ICcnLFxuICAgICAgICB2aXA6ICcnLFxuICAgICAgICByZWZ1bmQ6IGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIF9pbnRvICh1cmwpIHtcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiB1cmxcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICAvLyDlj5HotbfpgIDmrL5cbiAgICAgIGFzeW5jIF9yZWZ1bmQgKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe3RpdGxlOiAn6K+356iN5YCZJ30pXG4gICAgICAgICAgLy8g5Y+R6LW36YCA5qy+5o6l5Y+jXG4gICAgICAgICAgYXdhaXQgdGhpcy5fc2V0UmVmdW5kKClcbiAgICAgICAgICAvLyDph43mlrDojrflvpfnlKjmiLfkv6Hmga9cbiAgICAgICAgICBhd2FpdCB0aGlzLl9nZXRVc2VySW5mbygpXG4gICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6ICfnlLPor7fmiJDlip8nLFxuICAgICAgICAgICAgY29udGVudDogJ+aIkeS7rOWwhuWcqDI05bCP5pe25YaF5a6M5oiQ6YCA5qy+JyxcbiAgICAgICAgICAgIGNvbmZpcm1UZXh0OiAn55+l6YGT5LqGJyxcbiAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAn5Ye66ZSZ5LqG6K+356iN5ZCO6YeN6K+VJyxcbiAgICAgICAgICAgIGljb246ICdub25lJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiog5Y+R6LW36YCA5qy+ICovXG4gICAgX3NldFJlZnVuZCAoKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vd2VjaGF0Lmd1aW5hYmVuLmNvbS9taW5pLXByb2dyYW0vcmVmdW5kJyxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqIOW+ruS/oeacjeWKoeWZqOiOt+WPlkNPREUgKi9cbiAgICBfbG9naW4gKCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5sb2dpbih7XG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlcy5jb2RlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqIOmAmui/h2NvZGXojrflj5ZPUEVOSUQgKi9cbiAgICBfZ2V0T3BlbklkIChjb2RlKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vd2VjaGF0Lmd1aW5hYmVuLmNvbS9taW5pLXByb2dyYW0vb3BlbklkJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBjb2RlOiBjb2RlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ29wZW5JZCcsIHJlcy5vcGVuaWQpXG4gICAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdzZXNzaW9uX2tleScsIHJlcy5zZXNzaW9uX2tleSlcbiAgICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqIOiOt+WPlueUqOaIt+S/oeaBryAqL1xuICAgIF9nZXRVc2VySW5mbyAoKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vcHJpbWFyeS5ndWluYWJlbi5jb20vbWVtYmVyL2luZm8nLFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnVXNlcicsIHJlcylcbiAgICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgYXN5bmMgb25Mb2FkKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIDEg6I635Y+W5piv5ZCm5a2Y5pyJb3BlbklkIOWmguaenOayoeacieS7o+ihqOS4uueZu+W9lei/h1xuICAgICAgICAgKiAyIOiOt+WPlm9wZW5JZFxuICAgICAgICAgKiAzIOWcqOmAmui/h29wZW5JZOiOt+W+l+eUqOaIt+S/oeaBr1xuICAgICAgICAgKi9cbiAgICAgICAgd2VweS5zaG93TG9hZGluZyh7dGl0bGU6ICfor7fnqI3lgJknfSlcbiAgICAgICAgaWYgKHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ29wZW5JZCcpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGxldCBjb2RlID0gYXdhaXQgdGhpcy5fbG9naW4oKVxuICAgICAgICAgIGF3YWl0IHRoaXMuX2dldE9wZW5JZChjb2RlKVxuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHRoaXMuX2dldFVzZXJJbmZvKClcbiAgICAgICAgdGhpcy51c2VySW5mby5uYW1lID0gd2VweS5nZXRTdG9yYWdlU3luYygnVXNlcicpLm5hbWVcbiAgICAgICAgdGhpcy51c2VySW5mby5oZWFkSW1nID0gd2VweS5nZXRTdG9yYWdlU3luYygnVXNlcicpLmhlYWRJbWdcbiAgICAgICAgdGhpcy51c2VySW5mby5yZWZ1bmQgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdVc2VyJykucmVmdW5kXG4gICAgICAgIHRoaXMudXNlckluZm8udmlwID0gd2VweS5nZXRTdG9yYWdlU3luYygnVXNlcicpLnZpcFxuICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICB9XG4gICAgfVxuXG4gICAgb25TaG93ICgpIHtcbiAgICAgIHRoaXMudXNlckluZm8ubmFtZSA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXInKS5uYW1lXG4gICAgICB0aGlzLnVzZXJJbmZvLmhlYWRJbWcgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdVc2VyJykuaGVhZEltZ1xuICAgICAgdGhpcy51c2VySW5mby5yZWZ1bmQgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdVc2VyJykucmVmdW5kXG4gICAgICB0aGlzLnVzZXJJbmZvLnZpcCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXInKS52aXBcbiAgICB9XG4gIH1cbiJdfQ==