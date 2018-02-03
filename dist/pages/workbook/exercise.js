'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _zanNoticebar = require('./../../components/zan-noticebar.js');

var _zanNoticebar2 = _interopRequireDefault(_zanNoticebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WorkbookExercise = function (_wepy$page) {
  _inherits(WorkbookExercise, _wepy$page);

  function WorkbookExercise() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, WorkbookExercise);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WorkbookExercise.__proto__ || Object.getPrototypeOf(WorkbookExercise)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "zanNoticebar1": { "xmlns:v-bind": "", "v-bind:text.once": "longText", "componentId": "static1" } }, _this.$events = {}, _this.components = {
      zanNoticebar1: _zanNoticebar2.default
    }, _this.data = {
      longText: '点错题题号完成记错，提交作业查看我的错题',
      exercise: []
    }, _this.methods = {
      _upload: function _upload() {
        console.log(2);
      },

      /** 记错的切换 */
      _change: function _change(pindex, index) {
        var answer = this.exercise.nodes[pindex]['questions'][index]['answer'];
        this.exercise.nodes[pindex]['questions'][index]['answer'] = !answer;
        this.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WorkbookExercise, [{
    key: '_getExercise',


    // 获取章节习题
    value: function _getExercise(id) {
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://wechat.guinaben.com/primary/workbook/chapter/exercise',
          data: {
            chapterId: id
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
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                wx.setNavigationBarTitle({ title: options.name });
                _context.next = 3;
                return this._getExercise(options.id);

              case 3:
                this.exercise = _context.sent;

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
  }, {
    key: 'onReady',
    value: function onReady() {
      this.$invoke('zanNoticebar1', 'initZanNoticeBarScroll');
    }
  }]);

  return WorkbookExercise;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(WorkbookExercise , 'pages/workbook/exercise'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4ZXJjaXNlLmpzIl0sIm5hbWVzIjpbIldvcmtib29rRXhlcmNpc2UiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJ6YW5Ob3RpY2ViYXIxIiwiZGF0YSIsImxvbmdUZXh0IiwiZXhlcmNpc2UiLCJtZXRob2RzIiwiX3VwbG9hZCIsImNvbnNvbGUiLCJsb2ciLCJfY2hhbmdlIiwicGluZGV4IiwiaW5kZXgiLCJhbnN3ZXIiLCJub2RlcyIsIiRhcHBseSIsImlkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwidXJsIiwiY2hhcHRlcklkIiwic3VjY2VzcyIsInJlcyIsImZhaWwiLCJlcnIiLCJvcHRpb25zIiwid3giLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJ0aXRsZSIsIm5hbWUiLCJfZ2V0RXhlcmNpc2UiLCIkaW52b2tlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGdCOzs7Ozs7Ozs7Ozs7OzswTUFDcEJDLE8sR0FBVSxFLFFBQ1hDLE0sR0FBUyxFQUFDLGlCQUFnQixFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLG9CQUFtQixVQUF0QyxFQUFpRCxlQUFjLFNBQS9ELEVBQWpCLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDO0FBRFUsSyxRQUlaQyxJLEdBQU87QUFDTEMsZ0JBQVUsc0JBREw7QUFFTEMsZ0JBQVU7QUFGTCxLLFFBS1BDLE8sR0FBVTtBQUNSQyxhQURRLHFCQUNHO0FBQ1RDLGdCQUFRQyxHQUFSLENBQVksQ0FBWjtBQUNELE9BSE87O0FBSVI7QUFDQUMsYUFMUSxtQkFLQ0MsTUFMRCxFQUtTQyxLQUxULEVBS2dCO0FBQ3RCLFlBQUlDLFNBQVMsS0FBS1IsUUFBTCxDQUFjUyxLQUFkLENBQW9CSCxNQUFwQixFQUE0QixXQUE1QixFQUF5Q0MsS0FBekMsRUFBZ0QsUUFBaEQsQ0FBYjtBQUNBLGFBQUtQLFFBQUwsQ0FBY1MsS0FBZCxDQUFvQkgsTUFBcEIsRUFBNEIsV0FBNUIsRUFBeUNDLEtBQXpDLEVBQWdELFFBQWhELElBQTRELENBQUNDLE1BQTdEO0FBQ0EsYUFBS0UsTUFBTDtBQUNEO0FBVE8sSzs7Ozs7OztBQVlWO2lDQUNjQyxFLEVBQUk7QUFDaEIsYUFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLHVCQUFLQyxPQUFMLENBQWE7QUFDWEMsZUFBSywrREFETTtBQUVYbEIsZ0JBQU07QUFDSm1CLHVCQUFXTjtBQURQLFdBRks7QUFLWE8saUJBTFcsbUJBS0ZDLEdBTEUsRUFLRztBQUNaTixvQkFBUU0sR0FBUjtBQUNELFdBUFU7QUFRWEMsY0FSVyxnQkFRTEMsR0FSSyxFQVFBO0FBQ1RQLG1CQUFPTyxHQUFQO0FBQ0Q7QUFWVSxTQUFiO0FBWUQsT0FiTSxDQUFQO0FBY0Q7Ozs7MkZBRVlDLE87Ozs7O0FBQ1hDLG1CQUFHQyxxQkFBSCxDQUF5QixFQUFFQyxPQUFPSCxRQUFRSSxJQUFqQixFQUF6Qjs7dUJBQ3NCLEtBQUtDLFlBQUwsQ0FBa0JMLFFBQVFYLEVBQTFCLEM7OztBQUF0QixxQkFBS1gsUTs7QUFDTCxxQkFBS1UsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUdRO0FBQ1IsV0FBS2tCLE9BQUwsQ0FBYSxlQUFiLEVBQThCLHdCQUE5QjtBQUNEOzs7O0VBbkQyQyxlQUFLQyxJOztrQkFBOUJyQyxnQiIsImZpbGUiOiJleGVyY2lzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCB6YW5Ob3RpY2ViYXIgZnJvbSAnQC9jb21wb25lbnRzL3phbi1ub3RpY2ViYXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdvcmtib29rRXhlcmNpc2UgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiemFuTm90aWNlYmFyMVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dGV4dC5vbmNlXCI6XCJsb25nVGV4dFwiLFwiY29tcG9uZW50SWRcIjpcInN0YXRpYzFcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgIHphbk5vdGljZWJhcjE6IHphbk5vdGljZWJhclxuICB9XG5cbiAgZGF0YSA9IHtcbiAgICBsb25nVGV4dDogJ+eCuemUmemimOmimOWPt+WujOaIkOiusOmUme+8jOaPkOS6pOS9nOS4muafpeeci+aIkeeahOmUmemimCcsXG4gICAgZXhlcmNpc2U6IFtdXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIF91cGxvYWQgKCkge1xuICAgICAgY29uc29sZS5sb2coMilcbiAgICB9LFxuICAgIC8qKiDorrDplJnnmoTliIfmjaIgKi9cbiAgICBfY2hhbmdlIChwaW5kZXgsIGluZGV4KSB7XG4gICAgICBsZXQgYW5zd2VyID0gdGhpcy5leGVyY2lzZS5ub2Rlc1twaW5kZXhdWydxdWVzdGlvbnMnXVtpbmRleF1bJ2Fuc3dlciddXG4gICAgICB0aGlzLmV4ZXJjaXNlLm5vZGVzW3BpbmRleF1bJ3F1ZXN0aW9ucyddW2luZGV4XVsnYW5zd2VyJ10gPSAhYW5zd2VyXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuICB9XG5cbiAgLy8g6I635Y+W56ug6IqC5Lmg6aKYXG4gIF9nZXRFeGVyY2lzZSAoaWQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly93ZWNoYXQuZ3VpbmFiZW4uY29tL3ByaW1hcnkvd29ya2Jvb2svY2hhcHRlci9leGVyY2lzZScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBjaGFwdGVySWQ6IGlkXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICB9LFxuICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBvbkxvYWQob3B0aW9ucykge1xuICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7IHRpdGxlOiBvcHRpb25zLm5hbWUgfSlcbiAgICB0aGlzLmV4ZXJjaXNlID0gYXdhaXQgdGhpcy5fZ2V0RXhlcmNpc2Uob3B0aW9ucy5pZClcbiAgICB0aGlzLiRhcHBseSgpXG4gIH1cblxuICBvblJlYWR5KCkge1xuICAgIHRoaXMuJGludm9rZSgnemFuTm90aWNlYmFyMScsICdpbml0WmFuTm90aWNlQmFyU2Nyb2xsJylcbiAgfVxufVxuIl19