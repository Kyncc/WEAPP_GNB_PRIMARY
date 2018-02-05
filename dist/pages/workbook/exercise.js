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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4ZXJjaXNlLmpzIl0sIm5hbWVzIjpbIldvcmtib29rRXhlcmNpc2UiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJ6YW5Ob3RpY2ViYXIxIiwidG9hc3QiLCJkYXRhIiwibG9uZ1RleHQiLCJjaGFycHRlcklkIiwiZXhlcmNpc2UiLCJtZXRob2RzIiwiX3VwbG9hZCIsImFuc3dlcklkIiwiYW5zd2VyIiwibm9kZXMiLCJxdWVzdGlvbnMiLCJwdXNoIiwiaWQiLCJfc2V0RXhlcmNpc2VSZXN1bHQiLCJfY2hhbmdlIiwicGluZGV4IiwiaW5kZXgiLCIkYXBwbHkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJ1cmwiLCJjaGFwdGVySWQiLCJzdWNjZXNzIiwicmVzIiwiZmFpbCIsImVyciIsImlkcyIsImFuc3dlcnMiLCJzaG93TG9hZGluZyIsInRpdGxlIiwibWV0aG9kIiwibmF2aWdhdGVCYWNrIiwiY29tcGxldGUiLCJoaWRlTG9hZGluZyIsIm9wdGlvbnMiLCJ3eCIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsIm5hbWUiLCJfZ2V0RXhlcmNpc2UiLCIkaW52b2tlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsZ0I7Ozs7Ozs7Ozs7Ozs7OzBNQUNwQkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsaUJBQWdCLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsb0JBQW1CLFVBQXRDLEVBQWlELGVBQWMsU0FBL0QsRUFBakIsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDVkMsMkNBRFU7QUFFVkM7QUFGVSxLLFFBS1pDLEksR0FBTztBQUNMQyxnQkFBVSxzQkFETDtBQUVMQyxrQkFBWSxFQUZQO0FBR0xDLGdCQUFVO0FBSEwsSyxRQU1QQyxPLEdBQVU7QUFDUjtBQUNBQyxhQUZRLHFCQUVHO0FBQ1QsWUFB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QUE5QmhELGdCIiwiZmlsZSI6ImV4ZXJjaXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IFRvYXN0IGZyb20gJ3dlcHktY29tLXRvYXN0J1xuaW1wb3J0IHphbk5vdGljZWJhciBmcm9tICdAL2NvbXBvbmVudHMvemFuLW5vdGljZWJhcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29ya2Jvb2tFeGVyY2lzZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJ6YW5Ob3RpY2ViYXIxXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0ZXh0Lm9uY2VcIjpcImxvbmdUZXh0XCIsXCJjb21wb25lbnRJZFwiOlwic3RhdGljMVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgemFuTm90aWNlYmFyMTogemFuTm90aWNlYmFyLFxuICAgIHRvYXN0OiBUb2FzdFxuICB9XG5cbiAgZGF0YSA9IHtcbiAgICBsb25nVGV4dDogJ+eCuemUmemimOmimOWPt+WujOaIkOiusOmUme+8jOaPkOS6pOS9nOS4muafpeeci+aIkeeahOmUmemimCcsXG4gICAgY2hhcnB0ZXJJZDogJycsXG4gICAgZXhlcmNpc2U6IFtdXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIC8qKiDkuIrkvKDplJnpopggKi9cbiAgICBfdXBsb2FkICgpIHtcbiAgICAgIGxldCBhbnN3ZXJJZCA9IFtdXG4gICAgICBsZXQgYW5zd2VyID0gW11cbiAgICAgIGZvciAobGV0IG5vZGVzIG9mIHRoaXMuZXhlcmNpc2Uubm9kZXMpIHtcbiAgICAgICAgZm9yIChsZXQgcXVlc3Rpb25zIG9mIG5vZGVzLnF1ZXN0aW9ucykge1xuICAgICAgICAgIGFuc3dlcklkLnB1c2gocXVlc3Rpb25zLmlkKVxuICAgICAgICAgIGFuc3dlci5wdXNoKHF1ZXN0aW9ucy5hbnN3ZXIpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuX3NldEV4ZXJjaXNlUmVzdWx0KGFuc3dlcklkLCBhbnN3ZXIsIHRoaXMuY2hhcnB0ZXJJZClcbiAgICB9LFxuICAgIC8qKiDorrDplJnnmoTliIfmjaIgKi9cbiAgICBfY2hhbmdlIChwaW5kZXgsIGluZGV4KSB7XG4gICAgICBsZXQgYW5zd2VyID0gdGhpcy5leGVyY2lzZS5ub2Rlc1twaW5kZXhdWydxdWVzdGlvbnMnXVtpbmRleF1bJ2Fuc3dlciddXG4gICAgICB0aGlzLmV4ZXJjaXNlLm5vZGVzW3BpbmRleF1bJ3F1ZXN0aW9ucyddW2luZGV4XVsnYW5zd2VyJ10gPSAhYW5zd2VyXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuICB9XG5cbiAgLyoqIOiOt+WPlueroOiKguS5oOmimCAqL1xuICBfZ2V0RXhlcmNpc2UgKGlkKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHBzOi8vcHJpbWFyeS5ndWluYWJlbi5jb20vd29ya2Jvb2svY2hhcHRlci9leGVyY2lzZScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBjaGFwdGVySWQ6IGlkXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICB9LFxuICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvKiog6K6+572u57uD5Lmg57uT5p6cICovXG4gIF9zZXRFeGVyY2lzZVJlc3VsdCAoaWRzLCBhbnN3ZXJzLCBjaGFwdGVySWQpIHtcbiAgICB3ZXB5LnNob3dMb2FkaW5nKHt0aXRsZTogJ+aPkOS6pOS4rSd9KVxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwczovL3ByaW1hcnkuZ3VpbmFiZW4uY29tL3dvcmtib29rL2NoYXB0ZXIvc2V0RXhlcmNpc2UnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGNoYXB0ZXJJZDogY2hhcHRlcklkLFxuICAgICAgICAgIGFuc3dlcjogYW5zd2VycyxcbiAgICAgICAgICBhbnN3ZXJJZDogaWRzXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKClcbiAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfSxcbiAgICAgICAgY29tcGxldGUgKCkge1xuICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBvbkxvYWQob3B0aW9ucykge1xuICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7IHRpdGxlOiBvcHRpb25zLm5hbWUgfSlcbiAgICB0aGlzLmNoYXJwdGVySWQgPSBvcHRpb25zLmlkXG4gICAgdGhpcy5leGVyY2lzZSA9IGF3YWl0IHRoaXMuX2dldEV4ZXJjaXNlKG9wdGlvbnMuaWQpXG4gICAgdGhpcy4kYXBwbHkoKVxuICB9XG5cbiAgb25SZWFkeSgpIHtcbiAgICB0aGlzLiRpbnZva2UoJ3phbk5vdGljZWJhcjEnLCAnaW5pdFphbk5vdGljZUJhclNjcm9sbCcpXG4gIH1cbn1cbiJdfQ==