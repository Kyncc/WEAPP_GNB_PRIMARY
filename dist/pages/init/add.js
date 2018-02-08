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

var InitAddWorkbook = function (_wepy$page) {
  _inherits(InitAddWorkbook, _wepy$page);

  function InitAddWorkbook() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, InitAddWorkbook);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InitAddWorkbook.__proto__ || Object.getPrototypeOf(InitAddWorkbook)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '错题归纳本小学数学'
    }, _this.data = {
      gradeName: '',
      textbookId: '',
      workbookList: []
    }, _this.methods = {
      /** 查看练习册大图 */
      _preview: function _preview(url) {
        _wepy2.default.previewImage({ current: url + '-primaryError', urls: [url + '-primaryError'] });
      },

      /** 练习册增加删除 */
      _edit: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(index, id) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this._setWorkbook(id);

                case 2:
                  this.workbookList[index].status = _context.sent;

                  this.$apply();

                case 4:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function _edit(_x, _x2) {
          return _ref2.apply(this, arguments);
        }

        return _edit;
      }(),

      /**  进入我的资料 */
      _begin: function _begin() {
        _wepy2.default.reLaunch({
          url: '/pages/my/index'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InitAddWorkbook, [{
    key: '_getAllWorkbook',


    /** 获取全部习题册 */
    value: function _getAllWorkbook(id, name) {
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://primary.guinaben.com/workbook/all',
          data: {
            textbookId: id,
            name: name
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

    /** 编辑习题册 */

  }, {
    key: '_setWorkbook',
    value: function _setWorkbook(id) {
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://primary.guinaben.com/workbook/edit',
          method: 'POST',
          data: {
            workbookId: id
          },
          success: function success(res) {
            resolve(res.status);
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
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(options) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.gradeName = options.name;
                this.textbookId = options.textbookId;
                _context2.next = 4;
                return this._getAllWorkbook(this.textbookId, '');

              case 4:
                this.workbookList = _context2.sent;

                this.$apply();

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onLoad(_x3) {
        return _ref3.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return InitAddWorkbook;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(InitAddWorkbook , 'pages/init/add'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC5qcyJdLCJuYW1lcyI6WyJJbml0QWRkV29ya2Jvb2siLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImdyYWRlTmFtZSIsInRleHRib29rSWQiLCJ3b3JrYm9va0xpc3QiLCJtZXRob2RzIiwiX3ByZXZpZXciLCJ1cmwiLCJwcmV2aWV3SW1hZ2UiLCJjdXJyZW50IiwidXJscyIsIl9lZGl0IiwiaW5kZXgiLCJpZCIsIl9zZXRXb3JrYm9vayIsInN0YXR1cyIsIiRhcHBseSIsIl9iZWdpbiIsInJlTGF1bmNoIiwibmFtZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsInN1Y2Nlc3MiLCJyZXMiLCJmYWlsIiwiZXJyIiwibWV0aG9kIiwid29ya2Jvb2tJZCIsIm9wdGlvbnMiLCJfZ2V0QWxsV29ya2Jvb2siLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGU7Ozs7Ozs7Ozs7Ozs7O3dNQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxpQkFBVyxFQUROO0FBRUxDLGtCQUFZLEVBRlA7QUFHTEMsb0JBQWM7QUFIVCxLLFFBTVBDLE8sR0FBVTtBQUNSO0FBQ0FDLGNBRlEsb0JBRUVDLEdBRkYsRUFFTztBQUNiLHVCQUFLQyxZQUFMLENBQWtCLEVBQUNDLFNBQVlGLEdBQVosa0JBQUQsRUFBaUNHLE1BQU0sQ0FBSUgsR0FBSixtQkFBdkMsRUFBbEI7QUFDRCxPQUpPOztBQUtSO0FBQ01JLFdBTkU7QUFBQSw2RkFNS0MsS0FOTCxFQU1ZQyxFQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQU9rQyxLQUFLQyxZQUFMLENBQWtCRCxFQUFsQixDQVBsQzs7QUFBQTtBQU9OLHVCQUFLVCxZQUFMLENBQWtCUSxLQUFsQixFQUF5QkcsTUFQbkI7O0FBUU4sdUJBQUtDLE1BQUw7O0FBUk07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBVVI7QUFDQUMsWUFYUSxvQkFXRTtBQUNSLHVCQUFLQyxRQUFMLENBQWM7QUFDWlgsZUFBSztBQURPLFNBQWQ7QUFHRDtBQWZPLEs7Ozs7Ozs7QUFrQlY7b0NBQ2lCTSxFLEVBQUlNLEksRUFBTTtBQUN6QixhQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsdUJBQUtDLE9BQUwsQ0FBYTtBQUNYaEIsZUFBSywyQ0FETTtBQUVYTixnQkFBTTtBQUNKRSx3QkFBWVUsRUFEUjtBQUVKTSxrQkFBTUE7QUFGRixXQUZLO0FBTVhLLGlCQU5XLG1CQU1GQyxHQU5FLEVBTUc7QUFDWkosb0JBQVFJLEdBQVI7QUFDRCxXQVJVO0FBU1hDLGNBVFcsZ0JBU0xDLEdBVEssRUFTQTtBQUNUTCxtQkFBT0ssR0FBUDtBQUNEO0FBWFUsU0FBYjtBQWFELE9BZE0sQ0FBUDtBQWVEOztBQUVEOzs7O2lDQUNjZCxFLEVBQUk7QUFDaEIsYUFBTyxJQUFJTyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLHVCQUFLQyxPQUFMLENBQWE7QUFDWGhCLGVBQUssNENBRE07QUFFWHFCLGtCQUFRLE1BRkc7QUFHWDNCLGdCQUFNO0FBQ0o0Qix3QkFBWWhCO0FBRFIsV0FISztBQU1YVyxpQkFOVyxtQkFNRkMsR0FORSxFQU1HO0FBQ1pKLG9CQUFRSSxJQUFJVixNQUFaO0FBQ0QsV0FSVTtBQVNYVyxjQVRXLGdCQVNMQyxHQVRLLEVBU0E7QUFDVEwsbUJBQU9LLEdBQVA7QUFDRDtBQVhVLFNBQWI7QUFhRCxPQWRNLENBQVA7QUFlRDs7Ozs0RkFFWUcsTzs7Ozs7QUFDWCxxQkFBSzVCLFNBQUwsR0FBaUI0QixRQUFRWCxJQUF6QjtBQUNBLHFCQUFLaEIsVUFBTCxHQUFrQjJCLFFBQVEzQixVQUExQjs7dUJBQzBCLEtBQUs0QixlQUFMLENBQXFCLEtBQUs1QixVQUExQixFQUFzQyxFQUF0QyxDOzs7QUFBMUIscUJBQUtDLFk7O0FBQ0wscUJBQUtZLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF2RXlDLGVBQUtnQixJOztrQkFBN0JsQyxlIiwiZmlsZSI6ImFkZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluaXRBZGRXb3JrYm9vayBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mUmemimOW9kue6s+acrOWwj+WtpuaVsOWtpidcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgZ3JhZGVOYW1lOiAnJyxcbiAgICAgIHRleHRib29rSWQ6ICcnLFxuICAgICAgd29ya2Jvb2tMaXN0OiBbXVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICAvKiog5p+l55yL57uD5Lmg5YaM5aSn5Zu+ICovXG4gICAgICBfcHJldmlldyAodXJsKSB7XG4gICAgICAgIHdlcHkucHJldmlld0ltYWdlKHtjdXJyZW50OiBgJHt1cmx9LXByaW1hcnlFcnJvcmAsIHVybHM6IFtgJHt1cmx9LXByaW1hcnlFcnJvcmBdfSlcbiAgICAgIH0sXG4gICAgICAvKiog57uD5Lmg5YaM5aKe5Yqg5Yig6ZmkICovXG4gICAgICBhc3luYyBfZWRpdCAoaW5kZXgsIGlkKSB7XG4gICAgICAgIHRoaXMud29ya2Jvb2tMaXN0W2luZGV4XS5zdGF0dXMgPSBhd2FpdCB0aGlzLl9zZXRXb3JrYm9vayhpZClcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSxcbiAgICAgIC8qKiAg6L+b5YWl5oiR55qE6LWE5paZICovXG4gICAgICBfYmVnaW4gKCkge1xuICAgICAgICB3ZXB5LnJlTGF1bmNoKHtcbiAgICAgICAgICB1cmw6ICcvcGFnZXMvbXkvaW5kZXgnXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOiOt+WPluWFqOmDqOS5oOmimOWGjCAqL1xuICAgIF9nZXRBbGxXb3JrYm9vayAoaWQsIG5hbWUpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9wcmltYXJ5Lmd1aW5hYmVuLmNvbS93b3JrYm9vay9hbGwnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHRleHRib29rSWQ6IGlkLFxuICAgICAgICAgICAgbmFtZTogbmFtZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8qKiDnvJbovpHkuaDpopjlhowgKi9cbiAgICBfc2V0V29ya2Jvb2sgKGlkKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vcHJpbWFyeS5ndWluYWJlbi5jb20vd29ya2Jvb2svZWRpdCcsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgd29ya2Jvb2tJZDogaWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXMuc3RhdHVzKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgYXN5bmMgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMuZ3JhZGVOYW1lID0gb3B0aW9ucy5uYW1lXG4gICAgICB0aGlzLnRleHRib29rSWQgPSBvcHRpb25zLnRleHRib29rSWRcbiAgICAgIHRoaXMud29ya2Jvb2tMaXN0ID0gYXdhaXQgdGhpcy5fZ2V0QWxsV29ya2Jvb2sodGhpcy50ZXh0Ym9va0lkLCAnJylcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG4gIH1cbiJdfQ==