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

var WorkbookChapter = function (_wepy$page) {
  _inherits(WorkbookChapter, _wepy$page);

  function WorkbookChapter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, WorkbookChapter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WorkbookChapter.__proto__ || Object.getPrototypeOf(WorkbookChapter)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      chapter: []
    }, _this.methods = {
      /**
       * 1. isUsed 为false 未记错进入章节记错页面
       * 2. isUsed 为true  isAllCorrect 进入全对页面 否则 进入记错题页面
       */
      _intoExercise: function _intoExercise(item) {
        if (item.isUsed) {
          item.isAllCorrect ? _wepy2.default.navigateTo({ url: '/pages/workbook/correct?id=' + item.id + '&name=' + item.name }) : _wepy2.default.navigateTo({ url: '/pages/workbook/error?id=' + item.id + '&name=' + item.name });
        } else {
          _wepy2.default.navigateTo({ url: '/pages/workbook/exercise?id=' + item.id + '&name=' + item.name });
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WorkbookChapter, [{
    key: '_getChapter',


    // 获取章节数据
    value: function _getChapter(id) {
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://wechat.guinaben.com/primary/workbook/chapter',
          data: {
            workbookId: id
          },
          success: function success(res) {
            resolve(res.a);
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
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                wx.setNavigationBarTitle({ title: options.name });
                _context.next = 3;
                return this._getChapter(options.id);

              case 3:
                this.chapter = _context.sent;

                this.$apply();

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad(_x) {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return WorkbookChapter;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(WorkbookChapter , 'pages/workbook/chapter'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXB0ZXIuanMiXSwibmFtZXMiOlsiV29ya2Jvb2tDaGFwdGVyIiwiZGF0YSIsImNoYXB0ZXIiLCJtZXRob2RzIiwiX2ludG9FeGVyY2lzZSIsIml0ZW0iLCJpc1VzZWQiLCJpc0FsbENvcnJlY3QiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiaWQiLCJuYW1lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0Iiwid29ya2Jvb2tJZCIsInN1Y2Nlc3MiLCJyZXMiLCJhIiwiZmFpbCIsImVyciIsIm9wdGlvbnMiLCJ3eCIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInRpdGxlIiwiX2dldENoYXB0ZXIiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGU7Ozs7Ozs7Ozs7Ozs7O3dNQUNuQkMsSSxHQUFPO0FBQ0xDLGVBQVM7QUFESixLLFFBSVBDLE8sR0FBVTtBQUNSOzs7O0FBSUFDLG1CQUxRLHlCQUtNQyxJQUxOLEVBS1k7QUFDbEIsWUFBSUEsS0FBS0MsTUFBVCxFQUFpQjtBQUNmRCxlQUFLRSxZQUFMLEdBQ0ksZUFBS0MsVUFBTCxDQUFnQixFQUFDQyxxQ0FBbUNKLEtBQUtLLEVBQXhDLGNBQW1ETCxLQUFLTSxJQUF6RCxFQUFoQixDQURKLEdBRUksZUFBS0gsVUFBTCxDQUFnQixFQUFDQyxtQ0FBaUNKLEtBQUtLLEVBQXRDLGNBQWlETCxLQUFLTSxJQUF2RCxFQUFoQixDQUZKO0FBR0QsU0FKRCxNQUlPO0FBQ0wseUJBQUtILFVBQUwsQ0FBZ0IsRUFBQ0Msc0NBQW9DSixLQUFLSyxFQUF6QyxjQUFvREwsS0FBS00sSUFBMUQsRUFBaEI7QUFDRDtBQUNGO0FBYk8sSzs7Ozs7OztBQWdCVjtnQ0FDYUQsRSxFQUFJO0FBQ2YsYUFBTyxJQUFJRSxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLHVCQUFLQyxPQUFMLENBQWE7QUFDWE4sZUFBSyxzREFETTtBQUVYUixnQkFBTTtBQUNKZSx3QkFBWU47QUFEUixXQUZLO0FBS1hPLGlCQUxXLG1CQUtGQyxHQUxFLEVBS0c7QUFDWkwsb0JBQVFLLElBQUlDLENBQVo7QUFDRCxXQVBVO0FBUVhDLGNBUlcsZ0JBUUxDLEdBUkssRUFRQTtBQUNUUCxtQkFBT08sR0FBUDtBQUNEO0FBVlUsU0FBYjtBQVlELE9BYk0sQ0FBUDtBQWNEOzs7OzJGQUVZQyxPOzs7OztBQUNYQyxtQkFBR0MscUJBQUgsQ0FBeUIsRUFBQ0MsT0FBT0gsUUFBUVgsSUFBaEIsRUFBekI7O3VCQUNxQixLQUFLZSxXQUFMLENBQWlCSixRQUFRWixFQUF6QixDOzs7QUFBckIscUJBQUtSLE87O0FBQ0wscUJBQUt5QixNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBMUN5QyxlQUFLQyxJOztrQkFBN0I1QixlIiwiZmlsZSI6ImNoYXB0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JrYm9va0NoYXB0ZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGRhdGEgPSB7XG4gICAgICBjaGFwdGVyOiBbXVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICAvKipcbiAgICAgICAqIDEuIGlzVXNlZCDkuLpmYWxzZSDmnKrorrDplJnov5vlhaXnq6DoioLorrDplJnpobXpnaJcbiAgICAgICAqIDIuIGlzVXNlZCDkuLp0cnVlICBpc0FsbENvcnJlY3Qg6L+b5YWl5YWo5a+56aG16Z2iIOWQpuWImSDov5vlhaXorrDplJnpopjpobXpnaJcbiAgICAgICAqL1xuICAgICAgX2ludG9FeGVyY2lzZShpdGVtKSB7XG4gICAgICAgIGlmIChpdGVtLmlzVXNlZCkge1xuICAgICAgICAgIGl0ZW0uaXNBbGxDb3JyZWN0XG4gICAgICAgICAgICA/IHdlcHkubmF2aWdhdGVUbyh7dXJsOiBgL3BhZ2VzL3dvcmtib29rL2NvcnJlY3Q/aWQ9JHtpdGVtLmlkfSZuYW1lPSR7aXRlbS5uYW1lfWB9KVxuICAgICAgICAgICAgOiB3ZXB5Lm5hdmlnYXRlVG8oe3VybDogYC9wYWdlcy93b3JrYm9vay9lcnJvcj9pZD0ke2l0ZW0uaWR9Jm5hbWU9JHtpdGVtLm5hbWV9YH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHt1cmw6IGAvcGFnZXMvd29ya2Jvb2svZXhlcmNpc2U/aWQ9JHtpdGVtLmlkfSZuYW1lPSR7aXRlbS5uYW1lfWB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g6I635Y+W56ug6IqC5pWw5o2uXG4gICAgX2dldENoYXB0ZXIgKGlkKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vd2VjaGF0Lmd1aW5hYmVuLmNvbS9wcmltYXJ5L3dvcmtib29rL2NoYXB0ZXInLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHdvcmtib29rSWQ6IGlkXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzLmEpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBhc3luYyBvbkxvYWQob3B0aW9ucykge1xuICAgICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHt0aXRsZTogb3B0aW9ucy5uYW1lfSlcbiAgICAgIHRoaXMuY2hhcHRlciA9IGF3YWl0IHRoaXMuX2dldENoYXB0ZXIob3B0aW9ucy5pZClcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG4gIH1cbiJdfQ==