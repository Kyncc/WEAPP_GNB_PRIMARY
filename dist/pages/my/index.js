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
        nickName: '加载中...'
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
          url: 'https://primary.guinaben.com/info',
          data: {
            openId: _wepy2.default.getStorageSync('openId')
          },
          success: function success(res) {
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
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](0);

                console.log(_context.t0);

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 11]]);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ1c2VySW5mbyIsIm5pY2tOYW1lIiwiY29tcG9uZW50cyIsIm1ldGhvZHMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImxvZ2luIiwic3VjY2VzcyIsInJlcyIsImNvZGUiLCJyZXF1ZXN0IiwidXJsIiwic2V0U3RvcmFnZVN5bmMiLCJvcGVuaWQiLCJzZXNzaW9uX2tleSIsImZhaWwiLCJlcnIiLCJvcGVuSWQiLCJnZXRTdG9yYWdlU3luYyIsImxlbmd0aCIsIl9sb2dpbiIsIl9nZXRPcGVuSWQiLCJfZ2V0VXNlckluZm8iLCJjb25zb2xlIiwibG9nIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsZ0JBQVU7QUFDUkMsa0JBQVU7QUFERjtBQURMLEssUUFNUEMsVSxHQUFhLEUsUUFFYkMsTyxHQUFVLEU7Ozs7OztBQUNWOzZCQUNVO0FBQ1IsYUFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLHVCQUFLQyxLQUFMLENBQVc7QUFDVEMsaUJBRFMsbUJBQ0FDLEdBREEsRUFDSztBQUNaSixvQkFBUUksSUFBSUMsSUFBWjtBQUNEO0FBSFEsU0FBWDtBQUtELE9BTk0sQ0FBUDtBQU9EO0FBQ0Q7Ozs7K0JBQ1lBLEksRUFBTTtBQUNoQixhQUFPLElBQUlOLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsdUJBQUtLLE9BQUwsQ0FBYTtBQUNYQyxlQUFLLHdDQURNO0FBRVhiLGdCQUFNO0FBQ0pXLGtCQUFNQTtBQURGLFdBRks7QUFLWEYsaUJBTFcsbUJBS0ZDLEdBTEUsRUFLRztBQUNaLDJCQUFLSSxjQUFMLENBQW9CLFFBQXBCLEVBQThCSixJQUFJSyxNQUFsQztBQUNBLDJCQUFLRCxjQUFMLENBQW9CLGFBQXBCLEVBQW1DSixJQUFJTSxXQUF2QztBQUNBVixvQkFBUUksR0FBUjtBQUNELFdBVFU7QUFVWE8sY0FWVyxnQkFVTEMsR0FWSyxFQVVBO0FBQ1RYLG1CQUFPVyxHQUFQO0FBQ0Q7QUFaVSxTQUFiO0FBY0QsT0FmTSxDQUFQO0FBZ0JEO0FBQ0Q7Ozs7bUNBQ2dCO0FBQ2QsYUFBTyxJQUFJYixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLHVCQUFLSyxPQUFMLENBQWE7QUFDWEMsZUFBSyxtQ0FETTtBQUVYYixnQkFBTTtBQUNKbUIsb0JBQVEsZUFBS0MsY0FBTCxDQUFvQixRQUFwQjtBQURKLFdBRks7QUFLWFgsaUJBTFcsbUJBS0ZDLEdBTEUsRUFLRztBQUNaSixvQkFBUUksR0FBUjtBQUNELFdBUFU7QUFRWE8sY0FSVyxnQkFRTEMsR0FSSyxFQVFBO0FBQ1RYLG1CQUFPVyxHQUFQO0FBQ0Q7QUFWVSxTQUFiO0FBWUQsT0FiTSxDQUFQO0FBY0Q7Ozs7Ozs7Ozs7OztzQkFJTyxlQUFLRSxjQUFMLENBQW9CLFFBQXBCLEVBQThCQyxNQUE5QixLQUF5QyxDOzs7Ozs7dUJBQzFCLEtBQUtDLE1BQUwsRTs7O0FBQWJYLG9COzt1QkFDRSxLQUFLWSxVQUFMLENBQWdCWixJQUFoQixDOzs7O3VCQUVGLEtBQUthLFlBQUwsRTs7Ozs7Ozs7OztBQUVOQyx3QkFBUUMsR0FBUjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXJFNkIsZUFBS0MsSTs7a0JBQW5COUIsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qEJ1xuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICB1c2VySW5mbzoge1xuICAgICAgICBuaWNrTmFtZTogJ+WKoOi9veS4rS4uLidcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRzID0ge31cblxuICAgIG1ldGhvZHMgPSB7fVxuICAgIC8qKiDlvq7kv6HmnI3liqHlmajojrflj5ZDT0RFICovXG4gICAgX2xvZ2luICgpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkubG9naW4oe1xuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXMuY29kZSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cbiAgICAvKiog6YCa6L+HY29kZeiOt+WPlk9QRU5JRCAqL1xuICAgIF9nZXRPcGVuSWQgKGNvZGUpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly93ZWNoYXQuZ3VpbmFiZW4uY29tL3BheS9vcGVuSWQnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGNvZGU6IGNvZGVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnb3BlbklkJywgcmVzLm9wZW5pZClcbiAgICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ3Nlc3Npb25fa2V5JywgcmVzLnNlc3Npb25fa2V5KVxuICAgICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG4gICAgLyoqIOiOt+WPlueUqOaIt+S/oeaBryAqL1xuICAgIF9nZXRVc2VySW5mbyAoKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vcHJpbWFyeS5ndWluYWJlbi5jb20vaW5mbycsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgb3BlbklkOiB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdvcGVuSWQnKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIGFzeW5jIG9uTG9hZCgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICh3ZXB5LmdldFN0b3JhZ2VTeW5jKCdvcGVuSWQnKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBsZXQgY29kZSA9IGF3YWl0IHRoaXMuX2xvZ2luKClcbiAgICAgICAgICBhd2FpdCB0aGlzLl9nZXRPcGVuSWQoY29kZSlcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCB0aGlzLl9nZXRVc2VySW5mbygpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19