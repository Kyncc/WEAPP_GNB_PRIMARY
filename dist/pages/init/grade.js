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

var InitGrade = function (_wepy$page) {
  _inherits(InitGrade, _wepy$page);

  function InitGrade() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, InitGrade);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InitGrade.__proto__ || Object.getPrototypeOf(InitGrade)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '错题归纳本小学数学'

      /** 设置用户信息 */
    }, _this.methods = {
      _intoWorkbook: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(val) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this._setUserInfo(val);

                case 2:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function _intoWorkbook(_x) {
          return _ref2.apply(this, arguments);
        }

        return _intoWorkbook;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InitGrade, [{
    key: '_setUserInfo',
    value: function _setUserInfo(grade) {
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://primary.guinaben.com/member/infoEdit',
          method: 'POST',
          data: {
            grade: grade,
            school: '',
            name: _wepy2.default.getStorageSync('User').nickName,
            openId: _wepy2.default.getStorageSync('openId'),
            headImg: _wepy2.default.getStorageSync('User').avatarUrl,
            sex: _wepy2.default.getStorageSync('User').gender
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
    value: function onLoad() {
      _wepy2.default.getUserInfo({
        success: function success(res) {
          _wepy2.default.setStorageSync('User', res.userInfo);
        }
      });
    }
  }]);

  return InitGrade;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(InitGrade , 'pages/init/grade'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyYWRlLmpzIl0sIm5hbWVzIjpbIkluaXRHcmFkZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJtZXRob2RzIiwiX2ludG9Xb3JrYm9vayIsInZhbCIsIl9zZXRVc2VySW5mbyIsImdyYWRlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwiZGF0YSIsInNjaG9vbCIsIm5hbWUiLCJnZXRTdG9yYWdlU3luYyIsIm5pY2tOYW1lIiwib3BlbklkIiwiaGVhZEltZyIsImF2YXRhclVybCIsInNleCIsImdlbmRlciIsInN1Y2Nlc3MiLCJyZXMiLCJmYWlsIiwiZXJyIiwiZ2V0VXNlckluZm8iLCJzZXRTdG9yYWdlU3luYyIsInVzZXJJbmZvIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7O0FBRzFCO0FBSlMsSyxRQTRCVEMsTyxHQUFVO0FBQ0ZDLG1CQURFO0FBQUEsNkZBQ2FDLEdBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRUEsS0FBS0MsWUFBTCxDQUFrQkQsR0FBbEIsQ0FGQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLEs7Ozs7O2lDQXZCSUUsSyxFQUFPO0FBQ25CLGFBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Qyx1QkFBS0MsT0FBTCxDQUFhO0FBQ1hDLGVBQUssOENBRE07QUFFWEMsa0JBQVEsTUFGRztBQUdYQyxnQkFBTTtBQUNKUCxtQkFBT0EsS0FESDtBQUVKUSxvQkFBUSxFQUZKO0FBR0pDLGtCQUFNLGVBQUtDLGNBQUwsQ0FBb0IsTUFBcEIsRUFBNEJDLFFBSDlCO0FBSUpDLG9CQUFRLGVBQUtGLGNBQUwsQ0FBb0IsUUFBcEIsQ0FKSjtBQUtKRyxxQkFBUyxlQUFLSCxjQUFMLENBQW9CLE1BQXBCLEVBQTRCSSxTQUxqQztBQU1KQyxpQkFBSyxlQUFLTCxjQUFMLENBQW9CLE1BQXBCLEVBQTRCTTtBQU43QixXQUhLO0FBV1hDLGlCQVhXLG1CQVdGQyxHQVhFLEVBV0c7QUFDWmhCLG9CQUFRZ0IsR0FBUjtBQUNELFdBYlU7QUFjWEMsY0FkVyxnQkFjTEMsR0FkSyxFQWNBO0FBQ1RqQixtQkFBT2lCLEdBQVA7QUFDRDtBQWhCVSxTQUFiO0FBa0JELE9BbkJNLENBQVA7QUFvQkQ7Ozs2QkFXUTtBQUNQLHFCQUFLQyxXQUFMLENBQWlCO0FBQ2ZKLGVBRGUsbUJBQ05DLEdBRE0sRUFDRDtBQUNaLHlCQUFLSSxjQUFMLENBQW9CLE1BQXBCLEVBQTRCSixJQUFJSyxRQUFoQztBQUNEO0FBSGMsT0FBakI7QUFLRDs7OztFQTVDb0MsZUFBS0MsSTs7a0JBQXZCL0IsUyIsImZpbGUiOiJncmFkZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluaXRHcmFkZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mUmemimOW9kue6s+acrOWwj+WtpuaVsOWtpidcbiAgICB9XG5cbiAgICAvKiog6K6+572u55So5oi35L+h5oGvICovXG4gICAgX3NldFVzZXJJbmZvIChncmFkZSkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL3ByaW1hcnkuZ3VpbmFiZW4uY29tL21lbWJlci9pbmZvRWRpdCcsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZ3JhZGU6IGdyYWRlLFxuICAgICAgICAgICAgc2Nob29sOiAnJyxcbiAgICAgICAgICAgIG5hbWU6IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXInKS5uaWNrTmFtZSxcbiAgICAgICAgICAgIG9wZW5JZDogd2VweS5nZXRTdG9yYWdlU3luYygnb3BlbklkJyksXG4gICAgICAgICAgICBoZWFkSW1nOiB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdVc2VyJykuYXZhdGFyVXJsLFxuICAgICAgICAgICAgc2V4OiB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdVc2VyJykuZ2VuZGVyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGFzeW5jIF9pbnRvV29ya2Jvb2sgKHZhbCkge1xuICAgICAgICBhd2FpdCB0aGlzLl9zZXRVc2VySW5mbyh2YWwpXG4gICAgICAgIC8vIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAvLyAgIHVybDogYC9wYWdlcy9pbml0L3dvcmtib29rP2dyYWRlPSR7dmFsfWBcbiAgICAgICAgLy8gfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnVXNlcicsIHJlcy51c2VySW5mbylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==