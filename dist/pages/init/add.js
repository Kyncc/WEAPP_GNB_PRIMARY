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

// import searchBar from '@/components/gnb-searchBar'

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
    }, _this.components = {
      // searchBar: searchBar
    }, _this.data = {
      // name: '123',
      gradeName: '',
      textbookId: '',
      workbookList: [],
      search: {
        title: '',
        value: '',
        placeholder: '搜索习题册'
      }
    }, _this.events = {
      zanFieldChange: function zanFieldChange(e) {
        // let { componentId, detail } = e
        // this.$apply()
      }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC5qcyJdLCJuYW1lcyI6WyJJbml0QWRkV29ya2Jvb2siLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJncmFkZU5hbWUiLCJ0ZXh0Ym9va0lkIiwid29ya2Jvb2tMaXN0Iiwic2VhcmNoIiwidGl0bGUiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwiZXZlbnRzIiwiemFuRmllbGRDaGFuZ2UiLCJlIiwibWV0aG9kcyIsIl9wcmV2aWV3IiwidXJsIiwicHJldmlld0ltYWdlIiwiY3VycmVudCIsInVybHMiLCJfZWRpdCIsImluZGV4IiwiaWQiLCJfc2V0V29ya2Jvb2siLCJzdGF0dXMiLCIkYXBwbHkiLCJfYmVnaW4iLCJyZUxhdW5jaCIsIm5hbWUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJzdWNjZXNzIiwicmVzIiwiZmFpbCIsImVyciIsIm1ldGhvZCIsIndvcmtib29rSWQiLCJvcHRpb25zIiwiX2dldEFsbFdvcmtib29rIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0lBRXFCQSxlOzs7Ozs7Ozs7Ozs7Ozt3TUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxVLEdBQWE7QUFDWDtBQURXLEssUUFJYkMsSSxHQUFPO0FBQ0w7QUFDQUMsaUJBQVcsRUFGTjtBQUdMQyxrQkFBWSxFQUhQO0FBSUxDLG9CQUFjLEVBSlQ7QUFLTEMsY0FBUTtBQUNOQyxlQUFPLEVBREQ7QUFFTkMsZUFBTyxFQUZEO0FBR05DLHFCQUFhO0FBSFA7QUFMSCxLLFFBWVBDLE0sR0FBUztBQUNQQyxvQkFETywwQkFDUUMsQ0FEUixFQUNXO0FBQ2hCO0FBQ0E7QUFDRDtBQUpNLEssUUFPVEMsTyxHQUFVO0FBQ1I7QUFDQUMsY0FGUSxvQkFFRUMsR0FGRixFQUVPO0FBQ2IsdUJBQUtDLFlBQUwsQ0FBa0IsRUFBQ0MsU0FBWUYsR0FBWixrQkFBRCxFQUFpQ0csTUFBTSxDQUFJSCxHQUFKLG1CQUF2QyxFQUFsQjtBQUNELE9BSk87O0FBS1I7QUFDTUksV0FORTtBQUFBLDZGQU1LQyxLQU5MLEVBTVlDLEVBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBT2tDLEtBQUtDLFlBQUwsQ0FBa0JELEVBQWxCLENBUGxDOztBQUFBO0FBT04sdUJBQUtoQixZQUFMLENBQWtCZSxLQUFsQixFQUF5QkcsTUFQbkI7O0FBUU4sdUJBQUtDLE1BQUw7O0FBUk07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBVVI7QUFDQUMsWUFYUSxvQkFXRTtBQUNSLHVCQUFLQyxRQUFMLENBQWM7QUFDWlgsZUFBSztBQURPLFNBQWQ7QUFHRDtBQWZPLEs7Ozs7Ozs7QUFrQlY7b0NBQ2lCTSxFLEVBQUlNLEksRUFBTTtBQUN6QixhQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsdUJBQUtDLE9BQUwsQ0FBYTtBQUNYaEIsZUFBSywyQ0FETTtBQUVYYixnQkFBTTtBQUNKRSx3QkFBWWlCLEVBRFI7QUFFSk0sa0JBQU1BO0FBRkYsV0FGSztBQU1YSyxpQkFOVyxtQkFNRkMsR0FORSxFQU1HO0FBQ1pKLG9CQUFRSSxHQUFSO0FBQ0QsV0FSVTtBQVNYQyxjQVRXLGdCQVNMQyxHQVRLLEVBU0E7QUFDVEwsbUJBQU9LLEdBQVA7QUFDRDtBQVhVLFNBQWI7QUFhRCxPQWRNLENBQVA7QUFlRDs7QUFFRDs7OztpQ0FDY2QsRSxFQUFJO0FBQ2hCLGFBQU8sSUFBSU8sT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Qyx1QkFBS0MsT0FBTCxDQUFhO0FBQ1hoQixlQUFLLDRDQURNO0FBRVhxQixrQkFBUSxNQUZHO0FBR1hsQyxnQkFBTTtBQUNKbUMsd0JBQVloQjtBQURSLFdBSEs7QUFNWFcsaUJBTlcsbUJBTUZDLEdBTkUsRUFNRztBQUNaSixvQkFBUUksSUFBSVYsTUFBWjtBQUNELFdBUlU7QUFTWFcsY0FUVyxnQkFTTEMsR0FUSyxFQVNBO0FBQ1RMLG1CQUFPSyxHQUFQO0FBQ0Q7QUFYVSxTQUFiO0FBYUQsT0FkTSxDQUFQO0FBZUQ7Ozs7NEZBRVlHLE87Ozs7O0FBQ1gscUJBQUtuQyxTQUFMLEdBQWlCbUMsUUFBUVgsSUFBekI7QUFDQSxxQkFBS3ZCLFVBQUwsR0FBa0JrQyxRQUFRbEMsVUFBMUI7O3VCQUMwQixLQUFLbUMsZUFBTCxDQUFxQixLQUFLbkMsVUFBMUIsRUFBc0MsRUFBdEMsQzs7O0FBQTFCLHFCQUFLQyxZOztBQUNMLHFCQUFLbUIsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXhGeUMsZUFBS2dCLEk7O2tCQUE3QjFDLGUiLCJmaWxlIjoiYWRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIC8vIGltcG9ydCBzZWFyY2hCYXIgZnJvbSAnQC9jb21wb25lbnRzL2duYi1zZWFyY2hCYXInXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5pdEFkZFdvcmtib29rIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6ZSZ6aKY5b2S57qz5pys5bCP5a2m5pWw5a2mJ1xuICAgIH1cblxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgICAvLyBzZWFyY2hCYXI6IHNlYXJjaEJhclxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICAvLyBuYW1lOiAnMTIzJyxcbiAgICAgIGdyYWRlTmFtZTogJycsXG4gICAgICB0ZXh0Ym9va0lkOiAnJyxcbiAgICAgIHdvcmtib29rTGlzdDogW10sXG4gICAgICBzZWFyY2g6IHtcbiAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAn5pCc57Si5Lmg6aKY5YaMJ1xuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICAgIHphbkZpZWxkQ2hhbmdlKGUpIHtcbiAgICAgICAgLy8gbGV0IHsgY29tcG9uZW50SWQsIGRldGFpbCB9ID0gZVxuICAgICAgICAvLyB0aGlzLiRhcHBseSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIC8qKiDmn6XnnIvnu4PkuaDlhozlpKflm74gKi9cbiAgICAgIF9wcmV2aWV3ICh1cmwpIHtcbiAgICAgICAgd2VweS5wcmV2aWV3SW1hZ2Uoe2N1cnJlbnQ6IGAke3VybH0tcHJpbWFyeUVycm9yYCwgdXJsczogW2Ake3VybH0tcHJpbWFyeUVycm9yYF19KVxuICAgICAgfSxcbiAgICAgIC8qKiDnu4PkuaDlhozlop7liqDliKDpmaQgKi9cbiAgICAgIGFzeW5jIF9lZGl0IChpbmRleCwgaWQpIHtcbiAgICAgICAgdGhpcy53b3JrYm9va0xpc3RbaW5kZXhdLnN0YXR1cyA9IGF3YWl0IHRoaXMuX3NldFdvcmtib29rKGlkKVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9LFxuICAgICAgLyoqICDov5vlhaXmiJHnmoTotYTmlpkgKi9cbiAgICAgIF9iZWdpbiAoKSB7XG4gICAgICAgIHdlcHkucmVMYXVuY2goe1xuICAgICAgICAgIHVybDogJy9wYWdlcy9teS9pbmRleCdcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiog6I635Y+W5YWo6YOo5Lmg6aKY5YaMICovXG4gICAgX2dldEFsbFdvcmtib29rIChpZCwgbmFtZSkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL3ByaW1hcnkuZ3VpbmFiZW4uY29tL3dvcmtib29rL2FsbCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgdGV4dGJvb2tJZDogaWQsXG4gICAgICAgICAgICBuYW1lOiBuYW1lXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqIOe8lui+keS5oOmimOWGjCAqL1xuICAgIF9zZXRXb3JrYm9vayAoaWQpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9wcmltYXJ5Lmd1aW5hYmVuLmNvbS93b3JrYm9vay9lZGl0JyxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB3b3JrYm9va0lkOiBpZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlcy5zdGF0dXMpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBhc3luYyBvbkxvYWQob3B0aW9ucykge1xuICAgICAgdGhpcy5ncmFkZU5hbWUgPSBvcHRpb25zLm5hbWVcbiAgICAgIHRoaXMudGV4dGJvb2tJZCA9IG9wdGlvbnMudGV4dGJvb2tJZFxuICAgICAgdGhpcy53b3JrYm9va0xpc3QgPSBhd2FpdCB0aGlzLl9nZXRBbGxXb3JrYm9vayh0aGlzLnRleHRib29rSWQsICcnKVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cbiAgfVxuIl19