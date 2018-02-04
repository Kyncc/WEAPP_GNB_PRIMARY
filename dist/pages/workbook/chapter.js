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
      chapter: [],
      id: ''
    }, _this.methods = {
      /**
       * 进入章节页
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
          url: 'https://primary.guinaben.com/workbook/chapter',
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
                this.id = options.id;
                this.$apply();

              case 3:
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
  }, {
    key: 'onShow',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this._getChapter(this.id);

              case 2:
                this.chapter = _context2.sent;

                this.$apply();

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onShow() {
        return _ref3.apply(this, arguments);
      }

      return onShow;
    }()
  }]);

  return WorkbookChapter;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(WorkbookChapter , 'pages/workbook/chapter'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXB0ZXIuanMiXSwibmFtZXMiOlsiV29ya2Jvb2tDaGFwdGVyIiwiZGF0YSIsImNoYXB0ZXIiLCJpZCIsIm1ldGhvZHMiLCJfaW50b0V4ZXJjaXNlIiwiaXRlbSIsImlzVXNlZCIsImlzQWxsQ29ycmVjdCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJuYW1lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0Iiwid29ya2Jvb2tJZCIsInN1Y2Nlc3MiLCJyZXMiLCJhIiwiZmFpbCIsImVyciIsIm9wdGlvbnMiLCJ3eCIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInRpdGxlIiwiJGFwcGx5IiwiX2dldENoYXB0ZXIiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGU7Ozs7Ozs7Ozs7Ozs7O3dNQUNuQkMsSSxHQUFPO0FBQ0xDLGVBQVMsRUFESjtBQUVMQyxVQUFJO0FBRkMsSyxRQUtQQyxPLEdBQVU7QUFDUjs7Ozs7QUFLQUMsbUJBTlEseUJBTU1DLElBTk4sRUFNWTtBQUNsQixZQUFJQSxLQUFLQyxNQUFULEVBQWlCO0FBQ2ZELGVBQUtFLFlBQUwsR0FDSSxlQUFLQyxVQUFMLENBQWdCLEVBQUNDLHFDQUFtQ0osS0FBS0gsRUFBeEMsY0FBbURHLEtBQUtLLElBQXpELEVBQWhCLENBREosR0FFSSxlQUFLRixVQUFMLENBQWdCLEVBQUNDLG1DQUFpQ0osS0FBS0gsRUFBdEMsY0FBaURHLEtBQUtLLElBQXZELEVBQWhCLENBRko7QUFHRCxTQUpELE1BSU87QUFDTCx5QkFBS0YsVUFBTCxDQUFnQixFQUFDQyxzQ0FBb0NKLEtBQUtILEVBQXpDLGNBQW9ERyxLQUFLSyxJQUExRCxFQUFoQjtBQUNEO0FBQ0Y7QUFkTyxLOzs7Ozs7O0FBaUJWO2dDQUNhUixFLEVBQUk7QUFDZixhQUFPLElBQUlTLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsdUJBQUtDLE9BQUwsQ0FBYTtBQUNYTCxlQUFLLCtDQURNO0FBRVhULGdCQUFNO0FBQ0plLHdCQUFZYjtBQURSLFdBRks7QUFLWGMsaUJBTFcsbUJBS0ZDLEdBTEUsRUFLRztBQUNaTCxvQkFBUUssSUFBSUMsQ0FBWjtBQUNELFdBUFU7QUFRWEMsY0FSVyxnQkFRTEMsR0FSSyxFQVFBO0FBQ1RQLG1CQUFPTyxHQUFQO0FBQ0Q7QUFWVSxTQUFiO0FBWUQsT0FiTSxDQUFQO0FBY0Q7Ozs7MkZBRVlDLE87Ozs7O0FBQ1hDLG1CQUFHQyxxQkFBSCxDQUF5QixFQUFDQyxPQUFPSCxRQUFRWCxJQUFoQixFQUF6QjtBQUNBLHFCQUFLUixFQUFMLEdBQVVtQixRQUFRbkIsRUFBbEI7QUFDQSxxQkFBS3VCLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBSXFCLEtBQUtDLFdBQUwsQ0FBaUIsS0FBS3hCLEVBQXRCLEM7OztBQUFyQixxQkFBS0QsTzs7QUFDTCxxQkFBS3dCLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFqRHlDLGVBQUtFLEk7O2tCQUE3QjVCLGUiLCJmaWxlIjoiY2hhcHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFdvcmtib29rQ2hhcHRlciBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgZGF0YSA9IHtcbiAgICAgIGNoYXB0ZXI6IFtdLFxuICAgICAgaWQ6ICcnXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIC8qKlxuICAgICAgICog6L+b5YWl56ug6IqC6aG1XG4gICAgICAgKiAxLiBpc1VzZWQg5Li6ZmFsc2Ug5pyq6K6w6ZSZ6L+b5YWl56ug6IqC6K6w6ZSZ6aG16Z2iXG4gICAgICAgKiAyLiBpc1VzZWQg5Li6dHJ1ZSAgaXNBbGxDb3JyZWN0IOi/m+WFpeWFqOWvuemhtemdoiDlkKbliJkg6L+b5YWl6K6w6ZSZ6aKY6aG16Z2iXG4gICAgICAgKi9cbiAgICAgIF9pbnRvRXhlcmNpc2UoaXRlbSkge1xuICAgICAgICBpZiAoaXRlbS5pc1VzZWQpIHtcbiAgICAgICAgICBpdGVtLmlzQWxsQ29ycmVjdFxuICAgICAgICAgICAgPyB3ZXB5Lm5hdmlnYXRlVG8oe3VybDogYC9wYWdlcy93b3JrYm9vay9jb3JyZWN0P2lkPSR7aXRlbS5pZH0mbmFtZT0ke2l0ZW0ubmFtZX1gfSlcbiAgICAgICAgICAgIDogd2VweS5uYXZpZ2F0ZVRvKHt1cmw6IGAvcGFnZXMvd29ya2Jvb2svZXJyb3I/aWQ9JHtpdGVtLmlkfSZuYW1lPSR7aXRlbS5uYW1lfWB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7dXJsOiBgL3BhZ2VzL3dvcmtib29rL2V4ZXJjaXNlP2lkPSR7aXRlbS5pZH0mbmFtZT0ke2l0ZW0ubmFtZX1gfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOiOt+WPlueroOiKguaVsOaNrlxuICAgIF9nZXRDaGFwdGVyIChpZCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL3ByaW1hcnkuZ3VpbmFiZW4uY29tL3dvcmtib29rL2NoYXB0ZXInLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHdvcmtib29rSWQ6IGlkXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzLmEpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBhc3luYyBvbkxvYWQob3B0aW9ucykge1xuICAgICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHt0aXRsZTogb3B0aW9ucy5uYW1lfSlcbiAgICAgIHRoaXMuaWQgPSBvcHRpb25zLmlkXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuXG4gICAgYXN5bmMgb25TaG93ICgpIHtcbiAgICAgIHRoaXMuY2hhcHRlciA9IGF3YWl0IHRoaXMuX2dldENoYXB0ZXIodGhpcy5pZClcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG4gIH1cbiJdfQ==