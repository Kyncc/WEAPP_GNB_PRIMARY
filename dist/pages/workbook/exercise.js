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
      name: '',
      longText: '点错题题号完成记错，提交作业查看我的错题',
      charpterId: '',
      exercise: []
    }, _this.methods = {
      /** 上传错题 */
      _upload: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var answerId, answer, allCorrect, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, nodes, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, questions;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  answerId = []; // 题目ID数组

                  answer = []; // 题目答案数组

                  allCorrect = true; // 全部为真的判断

                  _iteratorNormalCompletion = true;
                  _didIteratorError = false;
                  _iteratorError = undefined;
                  _context.prev = 6;
                  _iterator = this.exercise.nodes[Symbol.iterator]();

                case 8:
                  if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                    _context.next = 32;
                    break;
                  }

                  nodes = _step.value;
                  _iteratorNormalCompletion2 = true;
                  _didIteratorError2 = false;
                  _iteratorError2 = undefined;
                  _context.prev = 13;

                  for (_iterator2 = nodes.questions[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    questions = _step2.value;

                    answerId.push(questions.id);
                    answer.push(questions.answer);
                    if (!questions.answer) allCorrect = false;
                  }
                  _context.next = 21;
                  break;

                case 17:
                  _context.prev = 17;
                  _context.t0 = _context['catch'](13);
                  _didIteratorError2 = true;
                  _iteratorError2 = _context.t0;

                case 21:
                  _context.prev = 21;
                  _context.prev = 22;

                  if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                  }

                case 24:
                  _context.prev = 24;

                  if (!_didIteratorError2) {
                    _context.next = 27;
                    break;
                  }

                  throw _iteratorError2;

                case 27:
                  return _context.finish(24);

                case 28:
                  return _context.finish(21);

                case 29:
                  _iteratorNormalCompletion = true;
                  _context.next = 8;
                  break;

                case 32:
                  _context.next = 38;
                  break;

                case 34:
                  _context.prev = 34;
                  _context.t1 = _context['catch'](6);
                  _didIteratorError = true;
                  _iteratorError = _context.t1;

                case 38:
                  _context.prev = 38;
                  _context.prev = 39;

                  if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                  }

                case 41:
                  _context.prev = 41;

                  if (!_didIteratorError) {
                    _context.next = 44;
                    break;
                  }

                  throw _iteratorError;

                case 44:
                  return _context.finish(41);

                case 45:
                  return _context.finish(38);

                case 46:
                  _context.next = 48;
                  return this._setExerciseResult(answerId, answer, this.charpterId);

                case 48:
                  if (allCorrect) {
                    _wepy2.default.redirectTo({ url: '/pages/workbook/correct?id=' + this.charpterId + '&name=' + this.name });
                  } else {
                    _wepy2.default.redirectTo({ url: '/pages/workbook/error?id=' + this.charpterId + '&name=' + this.name });
                  }

                case 49:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[6, 34, 38, 46], [13, 17, 21, 29], [22,, 24, 28], [39,, 41, 45]]);
        }));

        function _upload() {
          return _ref2.apply(this, arguments);
        }

        return _upload;
      }(),

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


    /** 获取章节习题 */
    value: function _getExercise(id) {
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://primary.guinaben.com/workbook/chapter/exercise',
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

    /** 设置练习结果 */

  }, {
    key: '_setExerciseResult',
    value: function _setExerciseResult(ids, answers, chapterId) {
      _wepy2.default.showLoading({ title: '提交中' });
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://primary.guinaben.com/workbook/chapter/setExercise',
          method: 'POST',
          data: {
            chapterId: chapterId,
            answer: answers,
            answerId: ids
          },
          success: function success(res) {
            resolve(res);
          },
          fail: function fail(err) {
            reject(err);
          },
          complete: function complete() {
            _wepy2.default.hideLoading();
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
                wx.setNavigationBarTitle({ title: options.name });
                this.charpterId = options.id;
                this.name = options.name;
                _context2.next = 5;
                return this._getExercise(options.id);

              case 5:
                this.exercise = _context2.sent;

                this.$apply();

              case 7:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onLoad(_x) {
        return _ref3.apply(this, arguments);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4ZXJjaXNlLmpzIl0sIm5hbWVzIjpbIldvcmtib29rRXhlcmNpc2UiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJ6YW5Ob3RpY2ViYXIxIiwiZGF0YSIsIm5hbWUiLCJsb25nVGV4dCIsImNoYXJwdGVySWQiLCJleGVyY2lzZSIsIm1ldGhvZHMiLCJfdXBsb2FkIiwiYW5zd2VySWQiLCJhbnN3ZXIiLCJhbGxDb3JyZWN0Iiwibm9kZXMiLCJxdWVzdGlvbnMiLCJwdXNoIiwiaWQiLCJfc2V0RXhlcmNpc2VSZXN1bHQiLCJyZWRpcmVjdFRvIiwidXJsIiwiX2NoYW5nZSIsInBpbmRleCIsImluZGV4IiwiJGFwcGx5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwiY2hhcHRlcklkIiwic3VjY2VzcyIsInJlcyIsImZhaWwiLCJlcnIiLCJpZHMiLCJhbnN3ZXJzIiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsIm1ldGhvZCIsImNvbXBsZXRlIiwiaGlkZUxvYWRpbmciLCJvcHRpb25zIiwid3giLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJfZ2V0RXhlcmNpc2UiLCIkaW52b2tlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGdCOzs7Ozs7Ozs7Ozs7OzswTUFDcEJDLE8sR0FBVSxFLFFBQ1hDLE0sR0FBUyxFQUFDLGlCQUFnQixFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLG9CQUFtQixVQUF0QyxFQUFpRCxlQUFjLFNBQS9ELEVBQWpCLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDO0FBRFUsSyxRQUlaQyxJLEdBQU87QUFDTEMsWUFBTSxFQUREO0FBRUxDLGdCQUFVLHNCQUZMO0FBR0xDLGtCQUFZLEVBSFA7QUFJTEMsZ0JBQVU7QUFKTCxLLFFBT1BDLE8sR0FBVTtBQUNSO0FBQ01DLGFBRkU7QUFBQTtBQUFBOztBQUFB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QVdBLFNBRFA7QUFFSmpCLG9CQUFRdUIsT0FGSjtBQUdKeEIsc0JBQVV1QjtBQUhOLFdBSEs7QUFRWEosaUJBUlcsbUJBUUZDLEdBUkUsRUFRRztBQUNaTCxvQkFBUUssR0FBUjtBQUNELFdBVlU7QUFXWEMsY0FYVyxnQkFXTEMsR0FYSyxFQVdBO0FBQ1ROLG1CQUFPTSxHQUFQO0FBQ0QsV0FiVTtBQWNYTSxrQkFkVyxzQkFjQztBQUNWLDJCQUFLQyxXQUFMO0FBQ0Q7QUFoQlUsU0FBYjtBQWtCRCxPQW5CTSxDQUFQO0FBb0JEOzs7OzRGQUVZQyxPOzs7OztBQUNYQyxtQkFBR0MscUJBQUgsQ0FBeUIsRUFBRU4sT0FBT0ksUUFBUXBDLElBQWpCLEVBQXpCO0FBQ0EscUJBQUtFLFVBQUwsR0FBa0JrQyxRQUFReEIsRUFBMUI7QUFDQSxxQkFBS1osSUFBTCxHQUFZb0MsUUFBUXBDLElBQXBCOzt1QkFDc0IsS0FBS3VDLFlBQUwsQ0FBa0JILFFBQVF4QixFQUExQixDOzs7QUFBdEIscUJBQUtULFE7O0FBQ0wscUJBQUtnQixNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBR1E7QUFDUixXQUFLcUIsT0FBTCxDQUFhLGVBQWIsRUFBOEIsd0JBQTlCO0FBQ0Q7Ozs7RUFoRzJDLGVBQUtDLEk7O2tCQUE5QmhELGdCIiwiZmlsZSI6ImV4ZXJjaXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHphbk5vdGljZWJhciBmcm9tICdAL2NvbXBvbmVudHMvemFuLW5vdGljZWJhcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29ya2Jvb2tFeGVyY2lzZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJ6YW5Ob3RpY2ViYXIxXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0ZXh0Lm9uY2VcIjpcImxvbmdUZXh0XCIsXCJjb21wb25lbnRJZFwiOlwic3RhdGljMVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgemFuTm90aWNlYmFyMTogemFuTm90aWNlYmFyXG4gIH1cblxuICBkYXRhID0ge1xuICAgIG5hbWU6ICcnLFxuICAgIGxvbmdUZXh0OiAn54K56ZSZ6aKY6aKY5Y+35a6M5oiQ6K6w6ZSZ77yM5o+Q5Lqk5L2c5Lia5p+l55yL5oiR55qE6ZSZ6aKYJyxcbiAgICBjaGFycHRlcklkOiAnJyxcbiAgICBleGVyY2lzZTogW11cbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgLyoqIOS4iuS8oOmUmemimCAqL1xuICAgIGFzeW5jIF91cGxvYWQgKCkge1xuICAgICAgbGV0IGFuc3dlcklkID0gW10gLy8g6aKY55uuSUTmlbDnu4RcbiAgICAgIGxldCBhbnN3ZXIgPSBbXSAvLyDpopjnm67nrZTmoYjmlbDnu4RcbiAgICAgIGxldCBhbGxDb3JyZWN0ID0gdHJ1ZSAvLyDlhajpg6jkuLrnnJ/nmoTliKTmlq1cbiAgICAgIGZvciAobGV0IG5vZGVzIG9mIHRoaXMuZXhlcmNpc2Uubm9kZXMpIHtcbiAgICAgICAgZm9yIChsZXQgcXVlc3Rpb25zIG9mIG5vZGVzLnF1ZXN0aW9ucykge1xuICAgICAgICAgIGFuc3dlcklkLnB1c2gocXVlc3Rpb25zLmlkKVxuICAgICAgICAgIGFuc3dlci5wdXNoKHF1ZXN0aW9ucy5hbnN3ZXIpXG4gICAgICAgICAgaWYgKCFxdWVzdGlvbnMuYW5zd2VyKSBhbGxDb3JyZWN0ID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYXdhaXQgdGhpcy5fc2V0RXhlcmNpc2VSZXN1bHQoYW5zd2VySWQsIGFuc3dlciwgdGhpcy5jaGFycHRlcklkKVxuICAgICAgaWYgKGFsbENvcnJlY3QpIHtcbiAgICAgICAgd2VweS5yZWRpcmVjdFRvKHt1cmw6IGAvcGFnZXMvd29ya2Jvb2svY29ycmVjdD9pZD0ke3RoaXMuY2hhcnB0ZXJJZH0mbmFtZT0ke3RoaXMubmFtZX1gfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdlcHkucmVkaXJlY3RUbyh7dXJsOiBgL3BhZ2VzL3dvcmtib29rL2Vycm9yP2lkPSR7dGhpcy5jaGFycHRlcklkfSZuYW1lPSR7dGhpcy5uYW1lfWB9KVxuICAgICAgfVxuICAgIH0sXG4gICAgLyoqIOiusOmUmeeahOWIh+aNoiAqL1xuICAgIF9jaGFuZ2UgKHBpbmRleCwgaW5kZXgpIHtcbiAgICAgIGxldCBhbnN3ZXIgPSB0aGlzLmV4ZXJjaXNlLm5vZGVzW3BpbmRleF1bJ3F1ZXN0aW9ucyddW2luZGV4XVsnYW5zd2VyJ11cbiAgICAgIHRoaXMuZXhlcmNpc2Uubm9kZXNbcGluZGV4XVsncXVlc3Rpb25zJ11baW5kZXhdWydhbnN3ZXInXSA9ICFhbnN3ZXJcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG4gIH1cblxuICAvKiog6I635Y+W56ug6IqC5Lmg6aKYICovXG4gIF9nZXRFeGVyY2lzZSAoaWQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9wcmltYXJ5Lmd1aW5hYmVuLmNvbS93b3JrYm9vay9jaGFwdGVyL2V4ZXJjaXNlJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGNoYXB0ZXJJZDogaWRcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8qKiDorr7nva7nu4PkuaDnu5PmnpwgKi9cbiAgX3NldEV4ZXJjaXNlUmVzdWx0IChpZHMsIGFuc3dlcnMsIGNoYXB0ZXJJZCkge1xuICAgIHdlcHkuc2hvd0xvYWRpbmcoe3RpdGxlOiAn5o+Q5Lqk5LitJ30pXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHBzOi8vcHJpbWFyeS5ndWluYWJlbi5jb20vd29ya2Jvb2svY2hhcHRlci9zZXRFeGVyY2lzZScsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgY2hhcHRlcklkOiBjaGFwdGVySWQsXG4gICAgICAgICAgYW5zd2VyOiBhbnN3ZXJzLFxuICAgICAgICAgIGFuc3dlcklkOiBpZHNcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBsZXRlICgpIHtcbiAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoeyB0aXRsZTogb3B0aW9ucy5uYW1lIH0pXG4gICAgdGhpcy5jaGFycHRlcklkID0gb3B0aW9ucy5pZFxuICAgIHRoaXMubmFtZSA9IG9wdGlvbnMubmFtZVxuICAgIHRoaXMuZXhlcmNpc2UgPSBhd2FpdCB0aGlzLl9nZXRFeGVyY2lzZShvcHRpb25zLmlkKVxuICAgIHRoaXMuJGFwcGx5KClcbiAgfVxuXG4gIG9uUmVhZHkoKSB7XG4gICAgdGhpcy4kaW52b2tlKCd6YW5Ob3RpY2ViYXIxJywgJ2luaXRaYW5Ob3RpY2VCYXJTY3JvbGwnKVxuICB9XG59XG4iXX0=