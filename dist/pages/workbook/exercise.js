'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyComToast = require('./../../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

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
      zanNoticebar1: _zanNoticebar2.default,
      toast: _wepyComToast2.default
    }, _this.data = {
      name: '',
      longText: '点错题题号完成记错，提交作业查看我的错题',
      charpterId: '',
      exercise: []
    }, _this.methods = {
      /** 上传错题 */
      _upload: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var answerId, answer, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, nodes, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, questions;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  answerId = [];
                  answer = [];
                  _iteratorNormalCompletion = true;
                  _didIteratorError = false;
                  _iteratorError = undefined;
                  _context.prev = 5;
                  _iterator = this.exercise.nodes[Symbol.iterator]();

                case 7:
                  if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                    _context.next = 31;
                    break;
                  }

                  nodes = _step.value;
                  _iteratorNormalCompletion2 = true;
                  _didIteratorError2 = false;
                  _iteratorError2 = undefined;
                  _context.prev = 12;

                  for (_iterator2 = nodes.questions[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    questions = _step2.value;

                    answerId.push(questions.id);
                    answer.push(questions.answer);
                  }
                  _context.next = 20;
                  break;

                case 16:
                  _context.prev = 16;
                  _context.t0 = _context['catch'](12);
                  _didIteratorError2 = true;
                  _iteratorError2 = _context.t0;

                case 20:
                  _context.prev = 20;
                  _context.prev = 21;

                  if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                  }

                case 23:
                  _context.prev = 23;

                  if (!_didIteratorError2) {
                    _context.next = 26;
                    break;
                  }

                  throw _iteratorError2;

                case 26:
                  return _context.finish(23);

                case 27:
                  return _context.finish(20);

                case 28:
                  _iteratorNormalCompletion = true;
                  _context.next = 7;
                  break;

                case 31:
                  _context.next = 37;
                  break;

                case 33:
                  _context.prev = 33;
                  _context.t1 = _context['catch'](5);
                  _didIteratorError = true;
                  _iteratorError = _context.t1;

                case 37:
                  _context.prev = 37;
                  _context.prev = 38;

                  if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                  }

                case 40:
                  _context.prev = 40;

                  if (!_didIteratorError) {
                    _context.next = 43;
                    break;
                  }

                  throw _iteratorError;

                case 43:
                  return _context.finish(40);

                case 44:
                  return _context.finish(37);

                case 45:
                  _context.next = 47;
                  return this._setExerciseResult(answerId, answer, this.charpterId);

                case 47:
                  _wepy2.default.redirectTo({ url: '/pages/workbook/error?id=' + this.charpterId + '&name=' + this.name });

                case 48:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[5, 33, 37, 45], [12, 16, 20, 28], [21,, 23, 27], [38,, 40, 44]]);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4ZXJjaXNlLmpzIl0sIm5hbWVzIjpbIldvcmtib29rRXhlcmNpc2UiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJ6YW5Ob3RpY2ViYXIxIiwidG9hc3QiLCJkYXRhIiwibmFtZSIsImxvbmdUZXh0IiwiY2hhcnB0ZXJJZCIsImV4ZXJjaXNlIiwibWV0aG9kcyIsIl91cGxvYWQiLCJhbnN3ZXJJZCIsImFuc3dlciIsIm5vZGVzIiwicXVlc3Rpb25zIiwicHVzaCIsImlkIiwiX3NldEV4ZXJjaXNlUmVzdWx0IiwicmVkaXJlY3RUbyIsInVybCIsIl9jaGFuZ2UiLCJwaW5kZXgiLCJpbmRleCIsIiRhcHBseSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsImNoYXB0ZXJJZCIsInN1Y2Nlc3MiLCJyZXMiLCJmYWlsIiwiZXJyIiwiaWRzIiwiYW5zd2VycyIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJtZXRob2QiLCJjb21wbGV0ZSIsImhpZGVMb2FkaW5nIiwib3B0aW9ucyIsInd4Iiwic2V0TmF2aWdhdGlvbkJhclRpdGxlIiwiX2dldEV4ZXJjaXNlIiwiJGludm9rZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGdCOzs7Ozs7Ozs7Ozs7OzswTUFDcEJDLE8sR0FBVSxFLFFBQ1hDLE0sR0FBUyxFQUFDLGlCQUFnQixFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLG9CQUFtQixVQUF0QyxFQUFpRCxlQUFjLFNBQS9ELEVBQWpCLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDLDJDQURVO0FBRVZDO0FBRlUsSyxRQUtaQyxJLEdBQU87QUFDTEMsWUFBTSxFQUREO0FBRUxDLGdCQUFVLHNCQUZMO0FBR0xDLGtCQUFZLEVBSFA7QUFJTEMsZ0JBQVU7QUFKTCxLLFFBT1BDLE8sR0FBVTtBQUNSO0FBQ01DLGFBRkU7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0ZDLDBCQUhFLEdBR1MsRUFIVDtBQUlGQyx3QkFKRSxHQUlPLEVBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUtZLEtBQUtKLFFBQUwsQ0FBY0ssS0FMMUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFLR0EsdUJBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFNSixvQ0FBc0JBLE1BQU1DLFNBQTVCLDJIQUF1QztBQUE5QkEsNkJBQThCOztBQUNyQ0gsNkJBQVNJLElBQVQsQ0FBY0QsVUFBVUUsRUFBeEI7QUFDQUosMkJBQU9HLElBQVAsQ0FBWUQsVUFBVUYsTUFBdEI7QUFDRDtBQVRHO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHlCQVdBLEtBQUtLLGtCQUFMLENBQXdCTixRQUF4QixFQUFrQ0MsTUFBbEMsRUFBMEMsS0FBS0wsVUFBL0MsQ0FYQTs7QUFBQTtBQVlOLGlDQUFLVyxVQUFMLENBQWdCLEVBQUNDLG1DQUFpQyxLQUFLWixVQUF0QyxjQUF5RCxLQUFLRixJQUEvRCxFQUFoQjs7QUFaTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFjUjtBQUNBZSxhQWZRLG1CQWVDQyxNQWZELEVBZVNDLEtBZlQsRUFlZ0I7QUFDdEIsWUFBSVYsU0FBUyxLQUFLSixRQUFMLENBQWNLLEtBQWQsQ0FBb0JRLE1BQXBCLEVBQTRCLFdBQTVCLEVBQXlDQyxLQUF6QyxFQUFnRCxRQUFoRCxDQUFiO0FBQ0EsYUFBS2QsUUFBTCxDQUFjSyxLQUFkLENBQW9CUSxNQUFwQixFQUE0QixXQUE1QixFQUF5Q0MsS0FBekMsRUFBZ0QsUUFBaEQsSUFBNEQsQ0FBQ1YsTUFBN0Q7QUFDQSxhQUFLVyxNQUFMO0FBQ0Q7QUFuQk8sSzs7Ozs7OztBQXNCVjtpQ0FDY1AsRSxFQUFJO0FBQ2hCLGFBQU8sSUFBSVEsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Qyx1QkFBS0MsT0FBTCxDQUFhO0FBQ1hSLGVBQUssd0RBRE07QUFFWGYsZ0JBQU07QUFDSndCLHVCQUFXWjtBQURQLFdBRks7QUFLWGEsaUJBTFcsbUJBS0ZDLEdBTEUsRUFLRztBQUNaTCxvQkFBUUssR0FBUjtBQUNELFdBUFU7QUFRWEMsY0FSVyxnQkFRTEMsR0FSSyxFQVFBO0FBQ1ROLG1CQUFPTSxHQUFQO0FBQ0Q7QUFWVSxTQUFiO0FBWUQsT0FiTSxDQUFQO0FBY0Q7O0FBRUQ7Ozs7dUNBQ29CQyxHLEVBQUtDLE8sRUFBU04sUyxFQUFXO0FBQzNDLHFCQUFLTyxXQUFMLENBQWlCLEVBQUNDLE9BQU8sS0FBUixFQUFqQjtBQUNBLGFBQU8sSUFBSVosT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Qyx1QkFBS0MsT0FBTCxDQUFhO0FBQ1hSLGVBQUssMkRBRE07QUFFWGtCLGtCQUFRLE1BRkc7QUFHWGpDLGdCQUFNO0FBQ0p3Qix1QkFBV0EsU0FEUDtBQUVKaEIsb0JBQVFzQixPQUZKO0FBR0p2QixzQkFBVXNCO0FBSE4sV0FISztBQVFYSixpQkFSVyxtQkFRRkMsR0FSRSxFQVFHO0FBQ1pMLG9CQUFRSyxHQUFSO0FBQ0QsV0FWVTtBQVdYQyxjQVhXLGdCQVdMQyxHQVhLLEVBV0E7QUFDVE4sbUJBQU9NLEdBQVA7QUFDRCxXQWJVO0FBY1hNLGtCQWRXLHNCQWNDO0FBQ1YsMkJBQUtDLFdBQUw7QUFDRDtBQWhCVSxTQUFiO0FBa0JELE9BbkJNLENBQVA7QUFvQkQ7Ozs7NEZBRVlDLE87Ozs7O0FBQ1hDLG1CQUFHQyxxQkFBSCxDQUF5QixFQUFFTixPQUFPSSxRQUFRbkMsSUFBakIsRUFBekI7QUFDQSxxQkFBS0UsVUFBTCxHQUFrQmlDLFFBQVF4QixFQUExQjtBQUNBLHFCQUFLWCxJQUFMLEdBQVltQyxRQUFRbkMsSUFBcEI7O3VCQUNzQixLQUFLc0MsWUFBTCxDQUFrQkgsUUFBUXhCLEVBQTFCLEM7OztBQUF0QixxQkFBS1IsUTs7QUFDTCxxQkFBS2UsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUdRO0FBQ1IsV0FBS3FCLE9BQUwsQ0FBYSxlQUFiLEVBQThCLHdCQUE5QjtBQUNEOzs7O0VBM0YyQyxlQUFLQyxJOztrQkFBOUJoRCxnQiIsImZpbGUiOiJleGVyY2lzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBUb2FzdCBmcm9tICd3ZXB5LWNvbS10b2FzdCdcbmltcG9ydCB6YW5Ob3RpY2ViYXIgZnJvbSAnQC9jb21wb25lbnRzL3phbi1ub3RpY2ViYXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdvcmtib29rRXhlcmNpc2UgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiemFuTm90aWNlYmFyMVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dGV4dC5vbmNlXCI6XCJsb25nVGV4dFwiLFwiY29tcG9uZW50SWRcIjpcInN0YXRpYzFcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgIHphbk5vdGljZWJhcjE6IHphbk5vdGljZWJhcixcbiAgICB0b2FzdDogVG9hc3RcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgbmFtZTogJycsXG4gICAgbG9uZ1RleHQ6ICfngrnplJnpopjpopjlj7flrozmiJDorrDplJnvvIzmj5DkuqTkvZzkuJrmn6XnnIvmiJHnmoTplJnpopgnLFxuICAgIGNoYXJwdGVySWQ6ICcnLFxuICAgIGV4ZXJjaXNlOiBbXVxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICAvKiog5LiK5Lyg6ZSZ6aKYICovXG4gICAgYXN5bmMgX3VwbG9hZCAoKSB7XG4gICAgICBsZXQgYW5zd2VySWQgPSBbXVxuICAgICAgbGV0IGFuc3dlciA9IFtdXG4gICAgICBmb3IgKGxldCBub2RlcyBvZiB0aGlzLmV4ZXJjaXNlLm5vZGVzKSB7XG4gICAgICAgIGZvciAobGV0IHF1ZXN0aW9ucyBvZiBub2Rlcy5xdWVzdGlvbnMpIHtcbiAgICAgICAgICBhbnN3ZXJJZC5wdXNoKHF1ZXN0aW9ucy5pZClcbiAgICAgICAgICBhbnN3ZXIucHVzaChxdWVzdGlvbnMuYW5zd2VyKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBhd2FpdCB0aGlzLl9zZXRFeGVyY2lzZVJlc3VsdChhbnN3ZXJJZCwgYW5zd2VyLCB0aGlzLmNoYXJwdGVySWQpXG4gICAgICB3ZXB5LnJlZGlyZWN0VG8oe3VybDogYC9wYWdlcy93b3JrYm9vay9lcnJvcj9pZD0ke3RoaXMuY2hhcnB0ZXJJZH0mbmFtZT0ke3RoaXMubmFtZX1gfSlcbiAgICB9LFxuICAgIC8qKiDorrDplJnnmoTliIfmjaIgKi9cbiAgICBfY2hhbmdlIChwaW5kZXgsIGluZGV4KSB7XG4gICAgICBsZXQgYW5zd2VyID0gdGhpcy5leGVyY2lzZS5ub2Rlc1twaW5kZXhdWydxdWVzdGlvbnMnXVtpbmRleF1bJ2Fuc3dlciddXG4gICAgICB0aGlzLmV4ZXJjaXNlLm5vZGVzW3BpbmRleF1bJ3F1ZXN0aW9ucyddW2luZGV4XVsnYW5zd2VyJ10gPSAhYW5zd2VyXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuICB9XG5cbiAgLyoqIOiOt+WPlueroOiKguS5oOmimCAqL1xuICBfZ2V0RXhlcmNpc2UgKGlkKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHBzOi8vcHJpbWFyeS5ndWluYWJlbi5jb20vd29ya2Jvb2svY2hhcHRlci9leGVyY2lzZScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBjaGFwdGVySWQ6IGlkXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICB9LFxuICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvKiog6K6+572u57uD5Lmg57uT5p6cICovXG4gIF9zZXRFeGVyY2lzZVJlc3VsdCAoaWRzLCBhbnN3ZXJzLCBjaGFwdGVySWQpIHtcbiAgICB3ZXB5LnNob3dMb2FkaW5nKHt0aXRsZTogJ+aPkOS6pOS4rSd9KVxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwczovL3ByaW1hcnkuZ3VpbmFiZW4uY29tL3dvcmtib29rL2NoYXB0ZXIvc2V0RXhlcmNpc2UnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGNoYXB0ZXJJZDogY2hhcHRlcklkLFxuICAgICAgICAgIGFuc3dlcjogYW5zd2VycyxcbiAgICAgICAgICBhbnN3ZXJJZDogaWRzXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICB9LFxuICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9LFxuICAgICAgICBjb21wbGV0ZSAoKSB7XG4gICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIG9uTG9hZChvcHRpb25zKSB7XG4gICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHsgdGl0bGU6IG9wdGlvbnMubmFtZSB9KVxuICAgIHRoaXMuY2hhcnB0ZXJJZCA9IG9wdGlvbnMuaWRcbiAgICB0aGlzLm5hbWUgPSBvcHRpb25zLm5hbWVcbiAgICB0aGlzLmV4ZXJjaXNlID0gYXdhaXQgdGhpcy5fZ2V0RXhlcmNpc2Uob3B0aW9ucy5pZClcbiAgICB0aGlzLiRhcHBseSgpXG4gIH1cblxuICBvblJlYWR5KCkge1xuICAgIHRoaXMuJGludm9rZSgnemFuTm90aWNlYmFyMScsICdpbml0WmFuTm90aWNlQmFyU2Nyb2xsJylcbiAgfVxufVxuIl19