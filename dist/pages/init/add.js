'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _zanField = require('./../../components/zan-field.js');

var _zanField2 = _interopRequireDefault(_zanField);

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
    }, _this.$repeat = {}, _this.$props = { "searchField": { "xmlns:v-bind": "", "v-bind:options.sync": "base_search", "componentId": "searchField" } }, _this.$events = {}, _this.components = {
      searchField: _zanField2.default
    }, _this.data = {
      gradeName: '',
      textbookId: '',
      workbookList: [],
      base_search: {
        title: '搜索习题册',
        value: '',
        placeholder: '请输入练习册名称'
      }
    }, _this.events = {
      zanFieldChange: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  this.base_search.value = e.detail.value;
                  _context.next = 3;
                  return this._getAllWorkbook(this.textbookId, this.base_search.value);

                case 3:
                  this.workbookList = _context.sent;

                  this.$apply();

                case 5:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function zanFieldChange(_x) {
          return _ref2.apply(this, arguments);
        }

        return zanFieldChange;
      }()
    }, _this.methods = {
      /** 查看练习册大图 */
      _preview: function _preview(url) {
        _wepy2.default.previewImage({ current: url + '-primaryError', urls: [url + '-primaryError'] });
      },

      /** 练习册增加删除 */
      _edit: function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(index, id) {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this._setWorkbook(id);

                case 2:
                  this.workbookList[index].status = _context2.sent;

                  this.$apply();

                case 4:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function _edit(_x2, _x3) {
          return _ref3.apply(this, arguments);
        }

        return _edit;
      }(),

      /**  进入我的资料 */
      _begin: function _begin() {
        _wepy2.default.reLaunch({
          url: '/pages/workbook/index'
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
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(options) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.gradeName = options.name;
                this.textbookId = options.textbookId;
                _context3.next = 4;
                return this._getAllWorkbook(this.textbookId, this.base_search.value);

              case 4:
                this.workbookList = _context3.sent;

                this.$apply();

              case 6:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onLoad(_x4) {
        return _ref4.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return InitAddWorkbook;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(InitAddWorkbook , 'pages/init/add'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC5qcyJdLCJuYW1lcyI6WyJJbml0QWRkV29ya2Jvb2siLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwic2VhcmNoRmllbGQiLCJkYXRhIiwiZ3JhZGVOYW1lIiwidGV4dGJvb2tJZCIsIndvcmtib29rTGlzdCIsImJhc2Vfc2VhcmNoIiwidGl0bGUiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwiZXZlbnRzIiwiemFuRmllbGRDaGFuZ2UiLCJlIiwiZGV0YWlsIiwiX2dldEFsbFdvcmtib29rIiwiJGFwcGx5IiwibWV0aG9kcyIsIl9wcmV2aWV3IiwidXJsIiwicHJldmlld0ltYWdlIiwiY3VycmVudCIsInVybHMiLCJfZWRpdCIsImluZGV4IiwiaWQiLCJfc2V0V29ya2Jvb2siLCJzdGF0dXMiLCJfYmVnaW4iLCJyZUxhdW5jaCIsIm5hbWUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJzdWNjZXNzIiwicmVzIiwiZmFpbCIsImVyciIsIm1ldGhvZCIsIndvcmtib29rSWQiLCJvcHRpb25zIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGU7Ozs7Ozs7Ozs7Ozs7O3dNQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLGVBQWMsRUFBQyxnQkFBZSxFQUFoQixFQUFtQix1QkFBc0IsYUFBekMsRUFBdUQsZUFBYyxhQUFyRSxFQUFmLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDO0FBRFEsSyxRQUlWQyxJLEdBQU87QUFDTEMsaUJBQVcsRUFETjtBQUVMQyxrQkFBWSxFQUZQO0FBR0xDLG9CQUFjLEVBSFQ7QUFJTEMsbUJBQWE7QUFDWEMsZUFBTyxPQURJO0FBRVhDLGVBQU8sRUFGSTtBQUdYQyxxQkFBYTtBQUhGO0FBSlIsSyxRQVdQQyxNLEdBQVM7QUFDREMsb0JBREM7QUFBQSw2RkFDY0MsQ0FEZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUwsdUJBQUtOLFdBQUwsQ0FBaUJFLEtBQWpCLEdBQXlCSSxFQUFFQyxNQUFGLENBQVNMLEtBQWxDO0FBRks7QUFBQSx5QkFHcUIsS0FBS00sZUFBTCxDQUFxQixLQUFLVixVQUExQixFQUFzQyxLQUFLRSxXQUFMLENBQWlCRSxLQUF2RCxDQUhyQjs7QUFBQTtBQUdMLHVCQUFLSCxZQUhBOztBQUlMLHVCQUFLVSxNQUFMOztBQUpLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsSyxRQVFUQyxPLEdBQVU7QUFDUjtBQUNBQyxjQUZRLG9CQUVFQyxHQUZGLEVBRU87QUFDYix1QkFBS0MsWUFBTCxDQUFrQixFQUFDQyxTQUFZRixHQUFaLGtCQUFELEVBQWlDRyxNQUFNLENBQUlILEdBQUosbUJBQXZDLEVBQWxCO0FBQ0QsT0FKTzs7QUFLUjtBQUNNSSxXQU5FO0FBQUEsOEZBTUtDLEtBTkwsRUFNWUMsRUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFPa0MsS0FBS0MsWUFBTCxDQUFrQkQsRUFBbEIsQ0FQbEM7O0FBQUE7QUFPTix1QkFBS25CLFlBQUwsQ0FBa0JrQixLQUFsQixFQUF5QkcsTUFQbkI7O0FBUU4sdUJBQUtYLE1BQUw7O0FBUk07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBVVI7QUFDQVksWUFYUSxvQkFXRTtBQUNSLHVCQUFLQyxRQUFMLENBQWM7QUFDWlYsZUFBSztBQURPLFNBQWQ7QUFHRDtBQWZPLEs7Ozs7Ozs7QUFrQlY7b0NBQ2lCTSxFLEVBQUlLLEksRUFBTTtBQUN6QixhQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsdUJBQUtDLE9BQUwsQ0FBYTtBQUNYZixlQUFLLDJDQURNO0FBRVhoQixnQkFBTTtBQUNKRSx3QkFBWW9CLEVBRFI7QUFFSkssa0JBQU1BO0FBRkYsV0FGSztBQU1YSyxpQkFOVyxtQkFNRkMsR0FORSxFQU1HO0FBQ1pKLG9CQUFRSSxHQUFSO0FBQ0QsV0FSVTtBQVNYQyxjQVRXLGdCQVNMQyxHQVRLLEVBU0E7QUFDVEwsbUJBQU9LLEdBQVA7QUFDRDtBQVhVLFNBQWI7QUFhRCxPQWRNLENBQVA7QUFlRDs7QUFFRDs7OztpQ0FDY2IsRSxFQUFJO0FBQ2hCLGFBQU8sSUFBSU0sT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Qyx1QkFBS0MsT0FBTCxDQUFhO0FBQ1hmLGVBQUssNENBRE07QUFFWG9CLGtCQUFRLE1BRkc7QUFHWHBDLGdCQUFNO0FBQ0pxQyx3QkFBWWY7QUFEUixXQUhLO0FBTVhVLGlCQU5XLG1CQU1GQyxHQU5FLEVBTUc7QUFDWkosb0JBQVFJLElBQUlULE1BQVo7QUFDRCxXQVJVO0FBU1hVLGNBVFcsZ0JBU0xDLEdBVEssRUFTQTtBQUNUTCxtQkFBT0ssR0FBUDtBQUNEO0FBWFUsU0FBYjtBQWFELE9BZE0sQ0FBUDtBQWVEOzs7OzRGQUVZRyxPOzs7OztBQUNYLHFCQUFLckMsU0FBTCxHQUFpQnFDLFFBQVFYLElBQXpCO0FBQ0EscUJBQUt6QixVQUFMLEdBQWtCb0MsUUFBUXBDLFVBQTFCOzt1QkFDMEIsS0FBS1UsZUFBTCxDQUFxQixLQUFLVixVQUExQixFQUFzQyxLQUFLRSxXQUFMLENBQWlCRSxLQUF2RCxDOzs7QUFBMUIscUJBQUtILFk7O0FBQ0wscUJBQUtVLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEzRnlDLGVBQUswQixJOztrQkFBN0IvQyxlIiwiZmlsZSI6ImFkZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgemFuRmllbGQgZnJvbSAnQC9jb21wb25lbnRzL3phbi1maWVsZCdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbml0QWRkV29ya2Jvb2sgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfplJnpopjlvZLnurPmnKzlsI/lrabmlbDlraYnXG4gICAgfVxuXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInNlYXJjaEZpZWxkXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpvcHRpb25zLnN5bmNcIjpcImJhc2Vfc2VhcmNoXCIsXCJjb21wb25lbnRJZFwiOlwic2VhcmNoRmllbGRcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgc2VhcmNoRmllbGQ6IHphbkZpZWxkXG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGdyYWRlTmFtZTogJycsXG4gICAgICB0ZXh0Ym9va0lkOiAnJyxcbiAgICAgIHdvcmtib29rTGlzdDogW10sXG4gICAgICBiYXNlX3NlYXJjaDoge1xuICAgICAgICB0aXRsZTogJ+aQnOe0ouS5oOmimOWGjCcsXG4gICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICfor7fovpPlhaXnu4PkuaDlhozlkI3np7AnXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgICAgYXN5bmMgemFuRmllbGRDaGFuZ2UoZSkge1xuICAgICAgICB0aGlzLmJhc2Vfc2VhcmNoLnZhbHVlID0gZS5kZXRhaWwudmFsdWVcbiAgICAgICAgdGhpcy53b3JrYm9va0xpc3QgPSBhd2FpdCB0aGlzLl9nZXRBbGxXb3JrYm9vayh0aGlzLnRleHRib29rSWQsIHRoaXMuYmFzZV9zZWFyY2gudmFsdWUpXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgLyoqIOafpeeci+e7g+S5oOWGjOWkp+WbviAqL1xuICAgICAgX3ByZXZpZXcgKHVybCkge1xuICAgICAgICB3ZXB5LnByZXZpZXdJbWFnZSh7Y3VycmVudDogYCR7dXJsfS1wcmltYXJ5RXJyb3JgLCB1cmxzOiBbYCR7dXJsfS1wcmltYXJ5RXJyb3JgXX0pXG4gICAgICB9LFxuICAgICAgLyoqIOe7g+S5oOWGjOWinuWKoOWIoOmZpCAqL1xuICAgICAgYXN5bmMgX2VkaXQgKGluZGV4LCBpZCkge1xuICAgICAgICB0aGlzLndvcmtib29rTGlzdFtpbmRleF0uc3RhdHVzID0gYXdhaXQgdGhpcy5fc2V0V29ya2Jvb2soaWQpXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0sXG4gICAgICAvKiogIOi/m+WFpeaIkeeahOi1hOaWmSAqL1xuICAgICAgX2JlZ2luICgpIHtcbiAgICAgICAgd2VweS5yZUxhdW5jaCh7XG4gICAgICAgICAgdXJsOiAnL3BhZ2VzL3dvcmtib29rL2luZGV4J1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDojrflj5blhajpg6jkuaDpopjlhowgKi9cbiAgICBfZ2V0QWxsV29ya2Jvb2sgKGlkLCBuYW1lKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vcHJpbWFyeS5ndWluYWJlbi5jb20vd29ya2Jvb2svYWxsJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB0ZXh0Ym9va0lkOiBpZCxcbiAgICAgICAgICAgIG5hbWU6IG5hbWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvKiog57yW6L6R5Lmg6aKY5YaMICovXG4gICAgX3NldFdvcmtib29rIChpZCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL3ByaW1hcnkuZ3VpbmFiZW4uY29tL3dvcmtib29rL2VkaXQnLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHdvcmtib29rSWQ6IGlkXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzLnN0YXR1cylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIGFzeW5jIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICB0aGlzLmdyYWRlTmFtZSA9IG9wdGlvbnMubmFtZVxuICAgICAgdGhpcy50ZXh0Ym9va0lkID0gb3B0aW9ucy50ZXh0Ym9va0lkXG4gICAgICB0aGlzLndvcmtib29rTGlzdCA9IGF3YWl0IHRoaXMuX2dldEFsbFdvcmtib29rKHRoaXMudGV4dGJvb2tJZCwgdGhpcy5iYXNlX3NlYXJjaC52YWx1ZSlcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG4gIH1cbiJdfQ==