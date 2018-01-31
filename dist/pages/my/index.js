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
        name: '加载中...',
        headImg: ''
      }
    }, _this.components = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: '_login',

    /** 微信服务器获取CODE */
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
          url: 'https://wechat.guinaben.com/pay/openId',
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
          url: 'https://wechat.guinaben.com/primary/member/info',
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
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var code;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                if (!(_wepy2.default.getStorageSync('openId').length === 0)) {
                  _context.next = 7;
                  break;
                }

                _context.next = 4;
                return this._login();

              case 4:
                code = _context.sent;
                _context.next = 7;
                return this._getOpenId(code);

              case 7:
                _context.next = 9;
                return this._getUserInfo();

              case 9:
                this.userInfo.name = _wepy2.default.getStorageSync('User').name;
                this.userInfo.headImg = _wepy2.default.getStorageSync('User').headImg;
                this.$apply();
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context['catch'](0);

                console.log(_context.t0);

              case 17:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 14]]);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/my/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ1c2VySW5mbyIsIm5hbWUiLCJoZWFkSW1nIiwiY29tcG9uZW50cyIsIm1ldGhvZHMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImxvZ2luIiwic3VjY2VzcyIsInJlcyIsImNvZGUiLCJyZXF1ZXN0IiwidXJsIiwic2V0U3RvcmFnZVN5bmMiLCJvcGVuaWQiLCJzZXNzaW9uX2tleSIsImZhaWwiLCJlcnIiLCJnZXRTdG9yYWdlU3luYyIsImxlbmd0aCIsIl9sb2dpbiIsIl9nZXRPcGVuSWQiLCJfZ2V0VXNlckluZm8iLCIkYXBwbHkiLCJjb25zb2xlIiwibG9nIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsZ0JBQVU7QUFDUkMsY0FBTSxRQURFO0FBRVJDLGlCQUFTO0FBRkQ7QUFETCxLLFFBT1BDLFUsR0FBYSxFLFFBRWJDLE8sR0FBVSxFOzs7Ozs7QUFDVjs2QkFDVTtBQUNSLGFBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Qyx1QkFBS0MsS0FBTCxDQUFXO0FBQ1RDLGlCQURTLG1CQUNBQyxHQURBLEVBQ0s7QUFDWkosb0JBQVFJLElBQUlDLElBQVo7QUFDRDtBQUhRLFNBQVg7QUFLRCxPQU5NLENBQVA7QUFPRDtBQUNEOzs7OytCQUNZQSxJLEVBQU07QUFDaEIsYUFBTyxJQUFJTixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLHVCQUFLSyxPQUFMLENBQWE7QUFDWEMsZUFBSyx3Q0FETTtBQUVYZCxnQkFBTTtBQUNKWSxrQkFBTUE7QUFERixXQUZLO0FBS1hGLGlCQUxXLG1CQUtGQyxHQUxFLEVBS0c7QUFDWiwyQkFBS0ksY0FBTCxDQUFvQixRQUFwQixFQUE4QkosSUFBSUssTUFBbEM7QUFDQSwyQkFBS0QsY0FBTCxDQUFvQixhQUFwQixFQUFtQ0osSUFBSU0sV0FBdkM7QUFDQVYsb0JBQVFJLEdBQVI7QUFDRCxXQVRVO0FBVVhPLGNBVlcsZ0JBVUxDLEdBVkssRUFVQTtBQUNUWCxtQkFBT1csR0FBUDtBQUNEO0FBWlUsU0FBYjtBQWNELE9BZk0sQ0FBUDtBQWdCRDs7QUFFRDs7OzttQ0FDZ0I7QUFDZCxhQUFPLElBQUliLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsdUJBQUtLLE9BQUwsQ0FBYTtBQUNYQyxlQUFLLGlEQURNO0FBRVhKLGlCQUZXLG1CQUVGQyxHQUZFLEVBRUc7QUFDWiwyQkFBS0ksY0FBTCxDQUFvQixNQUFwQixFQUE0QkosR0FBNUI7QUFDQUosb0JBQVFJLEdBQVI7QUFDRCxXQUxVO0FBTVhPLGNBTlcsZ0JBTUxDLEdBTkssRUFNQTtBQUNUWCxtQkFBT1csR0FBUDtBQUNEO0FBUlUsU0FBYjtBQVVELE9BWE0sQ0FBUDtBQVlEOzs7Ozs7Ozs7Ozs7c0JBU08sZUFBS0MsY0FBTCxDQUFvQixRQUFwQixFQUE4QkMsTUFBOUIsS0FBeUMsQzs7Ozs7O3VCQUMxQixLQUFLQyxNQUFMLEU7OztBQUFiVixvQjs7dUJBQ0UsS0FBS1csVUFBTCxDQUFnQlgsSUFBaEIsQzs7Ozt1QkFFRixLQUFLWSxZQUFMLEU7OztBQUNOLHFCQUFLdkIsUUFBTCxDQUFjQyxJQUFkLEdBQXFCLGVBQUtrQixjQUFMLENBQW9CLE1BQXBCLEVBQTRCbEIsSUFBakQ7QUFDQSxxQkFBS0QsUUFBTCxDQUFjRSxPQUFkLEdBQXdCLGVBQUtpQixjQUFMLENBQW9CLE1BQXBCLEVBQTRCakIsT0FBcEQ7QUFDQSxxQkFBS3NCLE1BQUw7Ozs7Ozs7O0FBRUFDLHdCQUFRQyxHQUFSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBN0U2QixlQUFLQyxJOztrQkFBbkIvQixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoQnXG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIHVzZXJJbmZvOiB7XG4gICAgICAgIG5hbWU6ICfliqDovb3kuK0uLi4nLFxuICAgICAgICBoZWFkSW1nOiAnJ1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudHMgPSB7fVxuXG4gICAgbWV0aG9kcyA9IHt9XG4gICAgLyoqIOW+ruS/oeacjeWKoeWZqOiOt+WPlkNPREUgKi9cbiAgICBfbG9naW4gKCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5sb2dpbih7XG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlcy5jb2RlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuICAgIC8qKiDpgJrov4djb2Rl6I635Y+WT1BFTklEICovXG4gICAgX2dldE9wZW5JZCAoY29kZSkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL3dlY2hhdC5ndWluYWJlbi5jb20vcGF5L29wZW5JZCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgY29kZTogY29kZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdvcGVuSWQnLCByZXMub3BlbmlkKVxuICAgICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnc2Vzc2lvbl9rZXknLCByZXMuc2Vzc2lvbl9rZXkpXG4gICAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8qKiDojrflj5bnlKjmiLfkv6Hmga8gKi9cbiAgICBfZ2V0VXNlckluZm8gKCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL3dlY2hhdC5ndWluYWJlbi5jb20vcHJpbWFyeS9tZW1iZXIvaW5mbycsXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdVc2VyJywgcmVzKVxuICAgICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBhc3luYyBvbkxvYWQoKSB7XG4gICAgICB0cnkge1xuICAgICAgICAvKipcbiAgICAgICAgICogMSDojrflj5bmmK/lkKblrZjmnIlvcGVuSWQg5aaC5p6c5rKh5pyJ5Luj6KGo5Li655m75b2V6L+HXG4gICAgICAgICAqIDIg6I635Y+Wb3BlbklkXG4gICAgICAgICAqIDMg5Zyo6YCa6L+Hb3Blbklk6I635b6X55So5oi35L+h5oGvXG4gICAgICAgICAqL1xuICAgICAgICBpZiAod2VweS5nZXRTdG9yYWdlU3luYygnb3BlbklkJykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgbGV0IGNvZGUgPSBhd2FpdCB0aGlzLl9sb2dpbigpXG4gICAgICAgICAgYXdhaXQgdGhpcy5fZ2V0T3BlbklkKGNvZGUpXG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgdGhpcy5fZ2V0VXNlckluZm8oKVxuICAgICAgICB0aGlzLnVzZXJJbmZvLm5hbWUgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdVc2VyJykubmFtZVxuICAgICAgICB0aGlzLnVzZXJJbmZvLmhlYWRJbWcgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdVc2VyJykuaGVhZEltZ1xuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19