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
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var code;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                /**
                 * 1 获取是否存有openId 如果没有代表为登录过
                 * 2 获取openId
                 * 3 在通过openId获得用户信息
                 */
                _wepy2.default.showLoading({ title: '加载中' });

                if (!(_wepy2.default.getStorageSync('openId').length === 0)) {
                  _context.next = 8;
                  break;
                }

                _context.next = 5;
                return this._login();

              case 5:
                code = _context.sent;
                _context.next = 8;
                return this._getOpenId(code);

              case 8:
                _context.next = 10;
                return this._getUserInfo();

              case 10:
                this.userInfo.name = _wepy2.default.getStorageSync('User').name;
                this.userInfo.headImg = _wepy2.default.getStorageSync('User').headImg;
                _wepy2.default.hideLoading();
                this.$apply();
                _context.next = 20;
                break;

              case 16:
                _context.prev = 16;
                _context.t0 = _context['catch'](0);

                _wepy2.default.hideLoading();
                console.log(_context.t0);

              case 20:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 16]]);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ1c2VySW5mbyIsIm5hbWUiLCJoZWFkSW1nIiwiY29tcG9uZW50cyIsIm1ldGhvZHMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImxvZ2luIiwic3VjY2VzcyIsInJlcyIsImNvZGUiLCJyZXF1ZXN0IiwidXJsIiwic2V0U3RvcmFnZVN5bmMiLCJvcGVuaWQiLCJzZXNzaW9uX2tleSIsImZhaWwiLCJlcnIiLCJzaG93TG9hZGluZyIsInRpdGxlIiwiZ2V0U3RvcmFnZVN5bmMiLCJsZW5ndGgiLCJfbG9naW4iLCJfZ2V0T3BlbklkIiwiX2dldFVzZXJJbmZvIiwiaGlkZUxvYWRpbmciLCIkYXBwbHkiLCJjb25zb2xlIiwibG9nIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsZ0JBQVU7QUFDUkMsY0FBTSxFQURFO0FBRVJDLGlCQUFTO0FBRkQ7QUFETCxLLFFBT1BDLFUsR0FBYSxFLFFBRWJDLE8sR0FBVSxFOzs7Ozs7QUFDVjs2QkFDVTtBQUNSLGFBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Qyx1QkFBS0MsS0FBTCxDQUFXO0FBQ1RDLGlCQURTLG1CQUNBQyxHQURBLEVBQ0s7QUFDWkosb0JBQVFJLElBQUlDLElBQVo7QUFDRDtBQUhRLFNBQVg7QUFLRCxPQU5NLENBQVA7QUFPRDtBQUNEOzs7OytCQUNZQSxJLEVBQU07QUFDaEIsYUFBTyxJQUFJTixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLHVCQUFLSyxPQUFMLENBQWE7QUFDWEMsZUFBSyxpREFETTtBQUVYZCxnQkFBTTtBQUNKWSxrQkFBTUE7QUFERixXQUZLO0FBS1hGLGlCQUxXLG1CQUtGQyxHQUxFLEVBS0c7QUFDWiwyQkFBS0ksY0FBTCxDQUFvQixRQUFwQixFQUE4QkosSUFBSUssTUFBbEM7QUFDQSwyQkFBS0QsY0FBTCxDQUFvQixhQUFwQixFQUFtQ0osSUFBSU0sV0FBdkM7QUFDQVYsb0JBQVFJLEdBQVI7QUFDRCxXQVRVO0FBVVhPLGNBVlcsZ0JBVUxDLEdBVkssRUFVQTtBQUNUWCxtQkFBT1csR0FBUDtBQUNEO0FBWlUsU0FBYjtBQWNELE9BZk0sQ0FBUDtBQWdCRDs7QUFFRDs7OzttQ0FDZ0I7QUFDZCxhQUFPLElBQUliLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsdUJBQUtLLE9BQUwsQ0FBYTtBQUNYQyxlQUFLLDBDQURNO0FBRVhKLGlCQUZXLG1CQUVGQyxHQUZFLEVBRUc7QUFDWiwyQkFBS0ksY0FBTCxDQUFvQixNQUFwQixFQUE0QkosR0FBNUI7QUFDQUosb0JBQVFJLEdBQVI7QUFDRCxXQUxVO0FBTVhPLGNBTlcsZ0JBTUxDLEdBTkssRUFNQTtBQUNUWCxtQkFBT1csR0FBUDtBQUNEO0FBUlUsU0FBYjtBQVVELE9BWE0sQ0FBUDtBQVlEOzs7Ozs7Ozs7Ozs7QUFJRzs7Ozs7QUFLQSwrQkFBS0MsV0FBTCxDQUFpQixFQUFDQyxPQUFPLEtBQVIsRUFBakI7O3NCQUNJLGVBQUtDLGNBQUwsQ0FBb0IsUUFBcEIsRUFBOEJDLE1BQTlCLEtBQXlDLEM7Ozs7Ozt1QkFDMUIsS0FBS0MsTUFBTCxFOzs7QUFBYlosb0I7O3VCQUNFLEtBQUthLFVBQUwsQ0FBZ0JiLElBQWhCLEM7Ozs7dUJBRUYsS0FBS2MsWUFBTCxFOzs7QUFDTixxQkFBS3pCLFFBQUwsQ0FBY0MsSUFBZCxHQUFxQixlQUFLb0IsY0FBTCxDQUFvQixNQUFwQixFQUE0QnBCLElBQWpEO0FBQ0EscUJBQUtELFFBQUwsQ0FBY0UsT0FBZCxHQUF3QixlQUFLbUIsY0FBTCxDQUFvQixNQUFwQixFQUE0Qm5CLE9BQXBEO0FBQ0EsK0JBQUt3QixXQUFMO0FBQ0EscUJBQUtDLE1BQUw7Ozs7Ozs7O0FBRUEsK0JBQUtELFdBQUw7QUFDQUUsd0JBQVFDLEdBQVI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFoRjZCLGVBQUtDLEk7O2tCQUFuQmxDLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahCdcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgdXNlckluZm86IHtcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGhlYWRJbWc6ICcnXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50cyA9IHt9XG5cbiAgICBtZXRob2RzID0ge31cbiAgICAvKiog5b6u5L+h5pyN5Yqh5Zmo6I635Y+WQ09ERSAqL1xuICAgIF9sb2dpbiAoKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LmxvZ2luKHtcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzLmNvZGUpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG4gICAgLyoqIOmAmui/h2NvZGXojrflj5ZPUEVOSUQgKi9cbiAgICBfZ2V0T3BlbklkIChjb2RlKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vd2VjaGF0Lmd1aW5hYmVuLmNvbS9taW5pLXByb2dyYW0vb3BlbklkJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBjb2RlOiBjb2RlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ29wZW5JZCcsIHJlcy5vcGVuaWQpXG4gICAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdzZXNzaW9uX2tleScsIHJlcy5zZXNzaW9uX2tleSlcbiAgICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqIOiOt+WPlueUqOaIt+S/oeaBryAqL1xuICAgIF9nZXRVc2VySW5mbyAoKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vcHJpbWFyeS5ndWluYWJlbi5jb20vbWVtYmVyL2luZm8nLFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnVXNlcicsIHJlcylcbiAgICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgYXN5bmMgb25Mb2FkKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIDEg6I635Y+W5piv5ZCm5a2Y5pyJb3BlbklkIOWmguaenOayoeacieS7o+ihqOS4uueZu+W9lei/h1xuICAgICAgICAgKiAyIOiOt+WPlm9wZW5JZFxuICAgICAgICAgKiAzIOWcqOmAmui/h29wZW5JZOiOt+W+l+eUqOaIt+S/oeaBr1xuICAgICAgICAgKi9cbiAgICAgICAgd2VweS5zaG93TG9hZGluZyh7dGl0bGU6ICfliqDovb3kuK0nfSlcbiAgICAgICAgaWYgKHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ29wZW5JZCcpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGxldCBjb2RlID0gYXdhaXQgdGhpcy5fbG9naW4oKVxuICAgICAgICAgIGF3YWl0IHRoaXMuX2dldE9wZW5JZChjb2RlKVxuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHRoaXMuX2dldFVzZXJJbmZvKClcbiAgICAgICAgdGhpcy51c2VySW5mby5uYW1lID0gd2VweS5nZXRTdG9yYWdlU3luYygnVXNlcicpLm5hbWVcbiAgICAgICAgdGhpcy51c2VySW5mby5oZWFkSW1nID0gd2VweS5nZXRTdG9yYWdlU3luYygnVXNlcicpLmhlYWRJbWdcbiAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19