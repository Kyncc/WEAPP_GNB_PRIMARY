'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _gnbTextbookSelect = require('./../../components/gnb-textbookSelect.js');

var _gnbTextbookSelect2 = _interopRequireDefault(_gnbTextbookSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Statistics = function (_wepy$page) {
  _inherits(Statistics, _wepy$page);

  function Statistics() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Statistics);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Statistics.__proto__ || Object.getPrototypeOf(Statistics)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '记错题'
    }, _this.$repeat = {}, _this.$props = { "gnbTextbookSelect": { "xmlns:v-bind": "", "v-bind:value.sync": "grade", "v-bind:key.sync": "textbook", "xmlns:v-on": "", "v-bind:textbook.sync": "textBookList" } }, _this.$events = { "gnbTextbookSelect": { "v-on:event": "textbookChange" } }, _this.components = {
      gnbTextbookSelect: _gnbTextbookSelect2.default
    }, _this.data = {
      textBookList: [],
      textbook: '',
      grade: '',
      statistics: []
    }, _this.methods = {
      _intoList: function _intoList(item) {
        if (item.correct === 0) {
          return;
        } else if (item.error === 0) {
          _wepy2.default.navigateTo({
            url: '/pages/statistics/correct?name=' + item.name + '&id=' + item.chapterId
          });
        } else {
          _wepy2.default.navigateTo({
            url: '/pages/statistics/error?name=' + item.name + '&id=' + item.chapterId
          });
        }
      },
      textbookChange: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this._getStatistics(id);

                case 2:
                  this.statistics = _context.sent;

                  this.$apply();

                case 4:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function textbookChange(_x) {
          return _ref2.apply(this, arguments);
        }

        return textbookChange;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Statistics, [{
    key: '_getStatistics',
    value: function _getStatistics(id) {
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://primary.guinaben.com/textbook/statistics',
          data: {
            textbookId: id
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
    value: function onLoad() {
      this.grade = _wepy2.default.getStorageSync('User').grade - 3;
      this.textBookList = _wepy2.default.getStorageSync('User').textbook;
      this.textbook = this.textBookList[Number(this.grade)].id;
      this.$apply();
    }
  }, {
    key: 'onShow',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this._getStatistics(this.textbook);

              case 2:
                this.statistics = _context2.sent;

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

  return Statistics;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Statistics , 'pages/statistics/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlN0YXRpc3RpY3MiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZ25iVGV4dGJvb2tTZWxlY3QiLCJkYXRhIiwidGV4dEJvb2tMaXN0IiwidGV4dGJvb2siLCJncmFkZSIsInN0YXRpc3RpY3MiLCJtZXRob2RzIiwiX2ludG9MaXN0IiwiaXRlbSIsImNvcnJlY3QiLCJlcnJvciIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJuYW1lIiwiY2hhcHRlcklkIiwidGV4dGJvb2tDaGFuZ2UiLCJpZCIsIl9nZXRTdGF0aXN0aWNzIiwiJGFwcGx5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwidGV4dGJvb2tJZCIsInN1Y2Nlc3MiLCJyZXMiLCJmYWlsIiwiZXJyIiwiZ2V0U3RvcmFnZVN5bmMiLCJOdW1iZXIiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMscUJBQW9CLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLE9BQXZDLEVBQStDLG1CQUFrQixVQUFqRSxFQUE0RSxjQUFhLEVBQXpGLEVBQTRGLHdCQUF1QixjQUFuSCxFQUFyQixFLFFBQ1RDLE8sR0FBVSxFQUFDLHFCQUFvQixFQUFDLGNBQWEsZ0JBQWQsRUFBckIsRSxRQUNUQyxVLEdBQWE7QUFDUkM7QUFEUSxLLFFBSVZDLEksR0FBTztBQUNMQyxvQkFBYyxFQURUO0FBRUxDLGdCQUFVLEVBRkw7QUFHTEMsYUFBTyxFQUhGO0FBSUxDLGtCQUFZO0FBSlAsSyxRQU9QQyxPLEdBQVU7QUFDUkMsZUFEUSxxQkFDR0MsSUFESCxFQUNTO0FBQ2YsWUFBSUEsS0FBS0MsT0FBTCxLQUFpQixDQUFyQixFQUF3QjtBQUN0QjtBQUNELFNBRkQsTUFFTyxJQUFJRCxLQUFLRSxLQUFMLEtBQWUsQ0FBbkIsRUFBc0I7QUFDM0IseUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMscURBQXVDSixLQUFLSyxJQUE1QyxZQUF1REwsS0FBS007QUFEOUMsV0FBaEI7QUFHRCxTQUpNLE1BSUE7QUFDTCx5QkFBS0gsVUFBTCxDQUFnQjtBQUNkQyxtREFBcUNKLEtBQUtLLElBQTFDLFlBQXFETCxLQUFLTTtBQUQ1QyxXQUFoQjtBQUdEO0FBQ0YsT0FiTztBQWNGQyxvQkFkRTtBQUFBLDZGQWNjQyxFQWRkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQWVrQixLQUFLQyxjQUFMLENBQW9CRCxFQUFwQixDQWZsQjs7QUFBQTtBQWVOLHVCQUFLWCxVQWZDOztBQWdCTix1QkFBS2EsTUFBTDs7QUFoQk07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxLOzs7OzttQ0FvQk1GLEUsRUFBSTtBQUNsQixhQUFPLElBQUlHLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsdUJBQUtDLE9BQUwsQ0FBYTtBQUNYVixlQUFLLGtEQURNO0FBRVhYLGdCQUFNO0FBQ0pzQix3QkFBWVA7QUFEUixXQUZLO0FBS1hRLGlCQUxXLG1CQUtGQyxHQUxFLEVBS0c7QUFBRUwsb0JBQVFLLEdBQVI7QUFBYyxXQUxuQjtBQU1YQyxjQU5XLGdCQU1MQyxHQU5LLEVBTUE7QUFBRU4sbUJBQU9NLEdBQVA7QUFBYTtBQU5mLFNBQWI7QUFRRCxPQVRNLENBQVA7QUFVRDs7OzZCQUVRO0FBQ1AsV0FBS3ZCLEtBQUwsR0FBYSxlQUFLd0IsY0FBTCxDQUFvQixNQUFwQixFQUE0QnhCLEtBQTVCLEdBQW9DLENBQWpEO0FBQ0EsV0FBS0YsWUFBTCxHQUFvQixlQUFLMEIsY0FBTCxDQUFvQixNQUFwQixFQUE0QnpCLFFBQWhEO0FBQ0EsV0FBS0EsUUFBTCxHQUFnQixLQUFLRCxZQUFMLENBQWtCMkIsT0FBTyxLQUFLekIsS0FBWixDQUFsQixFQUFzQ1ksRUFBdEQ7QUFDQSxXQUFLRSxNQUFMO0FBQ0Q7Ozs7Ozs7Ozs7dUJBR3lCLEtBQUtELGNBQUwsQ0FBb0IsS0FBS2QsUUFBekIsQzs7O0FBQXhCLHFCQUFLRSxVOztBQUNMLHFCQUFLYSxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBN0RvQyxlQUFLWSxJOztrQkFBeEJyQyxVIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBnbmJUZXh0Ym9va1NlbGVjdCBmcm9tICdAL2NvbXBvbmVudHMvZ25iLXRleHRib29rU2VsZWN0J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRpc3RpY3MgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICforrDplJnpopgnXG4gICAgfVxuXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImduYlRleHRib29rU2VsZWN0XCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp2YWx1ZS5zeW5jXCI6XCJncmFkZVwiLFwidi1iaW5kOmtleS5zeW5jXCI6XCJ0ZXh0Ym9va1wiLFwieG1sbnM6di1vblwiOlwiXCIsXCJ2LWJpbmQ6dGV4dGJvb2suc3luY1wiOlwidGV4dEJvb2tMaXN0XCJ9fTtcclxuJGV2ZW50cyA9IHtcImduYlRleHRib29rU2VsZWN0XCI6e1widi1vbjpldmVudFwiOlwidGV4dGJvb2tDaGFuZ2VcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIGduYlRleHRib29rU2VsZWN0OiBnbmJUZXh0Ym9va1NlbGVjdFxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICB0ZXh0Qm9va0xpc3Q6IFtdLFxuICAgICAgdGV4dGJvb2s6ICcnLFxuICAgICAgZ3JhZGU6ICcnLFxuICAgICAgc3RhdGlzdGljczogW11cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgX2ludG9MaXN0IChpdGVtKSB7XG4gICAgICAgIGlmIChpdGVtLmNvcnJlY3QgPT09IDApIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfSBlbHNlIGlmIChpdGVtLmVycm9yID09PSAwKSB7XG4gICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgIHVybDogYC9wYWdlcy9zdGF0aXN0aWNzL2NvcnJlY3Q/bmFtZT0ke2l0ZW0ubmFtZX0maWQ9JHtpdGVtLmNoYXB0ZXJJZH1gXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgdXJsOiBgL3BhZ2VzL3N0YXRpc3RpY3MvZXJyb3I/bmFtZT0ke2l0ZW0ubmFtZX0maWQ9JHtpdGVtLmNoYXB0ZXJJZH1gXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGFzeW5jIHRleHRib29rQ2hhbmdlIChpZCkge1xuICAgICAgICB0aGlzLnN0YXRpc3RpY3MgPSBhd2FpdCB0aGlzLl9nZXRTdGF0aXN0aWNzKGlkKVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgX2dldFN0YXRpc3RpY3MgKGlkKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vcHJpbWFyeS5ndWluYWJlbi5jb20vdGV4dGJvb2svc3RhdGlzdGljcycsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgdGV4dGJvb2tJZDogaWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykgeyByZXNvbHZlKHJlcykgfSxcbiAgICAgICAgICBmYWlsIChlcnIpIHsgcmVqZWN0KGVycikgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICB0aGlzLmdyYWRlID0gd2VweS5nZXRTdG9yYWdlU3luYygnVXNlcicpLmdyYWRlIC0gM1xuICAgICAgdGhpcy50ZXh0Qm9va0xpc3QgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdVc2VyJykudGV4dGJvb2tcbiAgICAgIHRoaXMudGV4dGJvb2sgPSB0aGlzLnRleHRCb29rTGlzdFtOdW1iZXIodGhpcy5ncmFkZSldLmlkXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuXG4gICAgYXN5bmMgb25TaG93KCkge1xuICAgICAgdGhpcy5zdGF0aXN0aWNzID0gYXdhaXQgdGhpcy5fZ2V0U3RhdGlzdGljcyh0aGlzLnRleHRib29rKVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cbiAgfVxuIl19