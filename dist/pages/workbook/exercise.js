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
      longText: '点错题题号完成记错，提交作业查看我的错题',
      charpterId: '',
      exercise: []
    }, _this.methods = {
      /** 上传错题 */
      _upload: function _upload() {
        var answerId = [];
        var answer = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.exercise.nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var nodes = _step.value;
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = nodes.questions[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var questions = _step2.value;

                answerId.push(questions.id);
                answer.push(questions.answer);
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        this._setExerciseResult(answerId, answer, this.charpterId);
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

    // 获取章节习题

  }, {
    key: '_setExerciseResult',
    value: function _setExerciseResult(ids, answers, chapterId) {
      _wepy2.default.showLoading();
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
            _wepy2.default.navigateBack();
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
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                wx.setNavigationBarTitle({ title: options.name });
                this.charpterId = options.id;
                _context.next = 4;
                return this._getExercise(options.id);

              case 4:
                this.exercise = _context.sent;

                this.$apply();

              case 6:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4ZXJjaXNlLmpzIl0sIm5hbWVzIjpbIldvcmtib29rRXhlcmNpc2UiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJ6YW5Ob3RpY2ViYXIxIiwidG9hc3QiLCJkYXRhIiwibG9uZ1RleHQiLCJjaGFycHRlcklkIiwiZXhlcmNpc2UiLCJtZXRob2RzIiwiX3VwbG9hZCIsImFuc3dlcklkIiwiYW5zd2VyIiwibm9kZXMiLCJxdWVzdGlvbnMiLCJwdXNoIiwiaWQiLCJfc2V0RXhlcmNpc2VSZXN1bHQiLCJfY2hhbmdlIiwicGluZGV4IiwiaW5kZXgiLCIkYXBwbHkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJ1cmwiLCJjaGFwdGVySWQiLCJzdWNjZXNzIiwicmVzIiwiZmFpbCIsImVyciIsImlkcyIsImFuc3dlcnMiLCJzaG93TG9hZGluZyIsIm1ldGhvZCIsIm5hdmlnYXRlQmFjayIsImNvbXBsZXRlIiwiaGlkZUxvYWRpbmciLCJvcHRpb25zIiwid3giLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJ0aXRsZSIsIm5hbWUiLCJfZ2V0RXhlcmNpc2UiLCIkaW52b2tlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsZ0I7Ozs7Ozs7Ozs7Ozs7OzBNQUNwQkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsaUJBQWdCLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsb0JBQW1CLFVBQXRDLEVBQWlELGVBQWMsU0FBL0QsRUFBakIsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDVkMsMkNBRFU7QUFFVkM7QUFGVSxLLFFBS1pDLEksR0FBTztBQUNMQyxnQkFBVSxzQkFETDtBQUVMQyxrQkFBWSxFQUZQO0FBR0xDLGdCQUFVO0FBSEwsSyxRQU1QQyxPLEdBQVU7QUFDUjtBQUNBQyxhQUZRLHFCQUVHO0FBQ1QsWUFB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anMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgVG9hc3QgZnJvbSAnd2VweS1jb20tdG9hc3QnXG5pbXBvcnQgemFuTm90aWNlYmFyIGZyb20gJ0AvY29tcG9uZW50cy96YW4tbm90aWNlYmFyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JrYm9va0V4ZXJjaXNlIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInphbk5vdGljZWJhcjFcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRleHQub25jZVwiOlwibG9uZ1RleHRcIixcImNvbXBvbmVudElkXCI6XCJzdGF0aWMxXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICB6YW5Ob3RpY2ViYXIxOiB6YW5Ob3RpY2ViYXIsXG4gICAgdG9hc3Q6IFRvYXN0XG4gIH1cblxuICBkYXRhID0ge1xuICAgIGxvbmdUZXh0OiAn54K56ZSZ6aKY6aKY5Y+35a6M5oiQ6K6w6ZSZ77yM5o+Q5Lqk5L2c5Lia5p+l55yL5oiR55qE6ZSZ6aKYJyxcbiAgICBjaGFycHRlcklkOiAnJyxcbiAgICBleGVyY2lzZTogW11cbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgLyoqIOS4iuS8oOmUmemimCAqL1xuICAgIF91cGxvYWQgKCkge1xuICAgICAgbGV0IGFuc3dlcklkID0gW11cbiAgICAgIGxldCBhbnN3ZXIgPSBbXVxuICAgICAgZm9yIChsZXQgbm9kZXMgb2YgdGhpcy5leGVyY2lzZS5ub2Rlcykge1xuICAgICAgICBmb3IgKGxldCBxdWVzdGlvbnMgb2Ygbm9kZXMucXVlc3Rpb25zKSB7XG4gICAgICAgICAgYW5zd2VySWQucHVzaChxdWVzdGlvbnMuaWQpXG4gICAgICAgICAgYW5zd2VyLnB1c2gocXVlc3Rpb25zLmFuc3dlcilcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5fc2V0RXhlcmNpc2VSZXN1bHQoYW5zd2VySWQsIGFuc3dlciwgdGhpcy5jaGFycHRlcklkKVxuICAgIH0sXG4gICAgLyoqIOiusOmUmeeahOWIh+aNoiAqL1xuICAgIF9jaGFuZ2UgKHBpbmRleCwgaW5kZXgpIHtcbiAgICAgIGxldCBhbnN3ZXIgPSB0aGlzLmV4ZXJjaXNlLm5vZGVzW3BpbmRleF1bJ3F1ZXN0aW9ucyddW2luZGV4XVsnYW5zd2VyJ11cbiAgICAgIHRoaXMuZXhlcmNpc2Uubm9kZXNbcGluZGV4XVsncXVlc3Rpb25zJ11baW5kZXhdWydhbnN3ZXInXSA9ICFhbnN3ZXJcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG4gIH1cblxuICAvLyDojrflj5bnq6DoioLkuaDpophcbiAgX2dldEV4ZXJjaXNlIChpZCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwczovL3ByaW1hcnkuZ3VpbmFiZW4uY29tL3dvcmtib29rL2NoYXB0ZXIvZXhlcmNpc2UnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgY2hhcHRlcklkOiBpZFxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgLy8g6I635Y+W56ug6IqC5Lmg6aKYXG4gIF9zZXRFeGVyY2lzZVJlc3VsdCAoaWRzLCBhbnN3ZXJzLCBjaGFwdGVySWQpIHtcbiAgICB3ZXB5LnNob3dMb2FkaW5nKClcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9wcmltYXJ5Lmd1aW5hYmVuLmNvbS93b3JrYm9vay9jaGFwdGVyL3NldEV4ZXJjaXNlJyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBjaGFwdGVySWQ6IGNoYXB0ZXJJZCxcbiAgICAgICAgICBhbnN3ZXI6IGFuc3dlcnMsXG4gICAgICAgICAgYW5zd2VySWQ6IGlkc1xuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlQmFjaygpXG4gICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBsZXRlICgpIHtcbiAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoeyB0aXRsZTogb3B0aW9ucy5uYW1lIH0pXG4gICAgdGhpcy5jaGFycHRlcklkID0gb3B0aW9ucy5pZFxuICAgIHRoaXMuZXhlcmNpc2UgPSBhd2FpdCB0aGlzLl9nZXRFeGVyY2lzZShvcHRpb25zLmlkKVxuICAgIHRoaXMuJGFwcGx5KClcbiAgfVxuXG4gIG9uUmVhZHkoKSB7XG4gICAgdGhpcy4kaW52b2tlKCd6YW5Ob3RpY2ViYXIxJywgJ2luaXRaYW5Ob3RpY2VCYXJTY3JvbGwnKVxuICB9XG59XG4iXX0=