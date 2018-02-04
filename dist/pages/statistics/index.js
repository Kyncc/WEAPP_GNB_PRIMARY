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
    }, _this.$repeat = {}, _this.$props = { "gnbTextbookSelect": { "xmlns:v-bind": "", "v-bind:value.sync": "grade", "v-bind:key.sync": "textbook", "xmlns:v-on": "", "v-bind:textbook.once": "textBookList" } }, _this.$events = { "gnbTextbookSelect": { "v-on:event": "textbookChange" } }, _this.components = {
      gnbTextbookSelect: _gnbTextbookSelect2.default
    }, _this.data = {
      textBookList: _wepy2.default.getStorageSync('User').textbook,
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlN0YXRpc3RpY3MiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZ25iVGV4dGJvb2tTZWxlY3QiLCJkYXRhIiwidGV4dEJvb2tMaXN0IiwiZ2V0U3RvcmFnZVN5bmMiLCJ0ZXh0Ym9vayIsImdyYWRlIiwic3RhdGlzdGljcyIsIm1ldGhvZHMiLCJfaW50b0xpc3QiLCJpdGVtIiwiY29ycmVjdCIsImVycm9yIiwibmF2aWdhdGVUbyIsInVybCIsIm5hbWUiLCJjaGFwdGVySWQiLCJ0ZXh0Ym9va0NoYW5nZSIsImlkIiwiX2dldFN0YXRpc3RpY3MiLCIkYXBwbHkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJ0ZXh0Ym9va0lkIiwic3VjY2VzcyIsInJlcyIsImZhaWwiLCJlcnIiLCJOdW1iZXIiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMscUJBQW9CLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLE9BQXZDLEVBQStDLG1CQUFrQixVQUFqRSxFQUE0RSxjQUFhLEVBQXpGLEVBQTRGLHdCQUF1QixjQUFuSCxFQUFyQixFLFFBQ1RDLE8sR0FBVSxFQUFDLHFCQUFvQixFQUFDLGNBQWEsZ0JBQWQsRUFBckIsRSxRQUNUQyxVLEdBQWE7QUFDUkM7QUFEUSxLLFFBSVZDLEksR0FBTztBQUNMQyxvQkFBYyxlQUFLQyxjQUFMLENBQW9CLE1BQXBCLEVBQTRCQyxRQURyQztBQUVMQSxnQkFBVSxFQUZMO0FBR0xDLGFBQU8sRUFIRjtBQUlMQyxrQkFBWTtBQUpQLEssUUFPUEMsTyxHQUFVO0FBQ1JDLGVBRFEscUJBQ0dDLElBREgsRUFDUztBQUNmLFlBQUlBLEtBQUtDLE9BQUwsS0FBaUIsQ0FBckIsRUFBd0I7QUFDdEI7QUFDRCxTQUZELE1BRU8sSUFBSUQsS0FBS0UsS0FBTCxLQUFlLENBQW5CLEVBQXNCO0FBQzNCLHlCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLHFEQUF1Q0osS0FBS0ssSUFBNUMsWUFBdURMLEtBQUtNO0FBRDlDLFdBQWhCO0FBR0QsU0FKTSxNQUlBO0FBQ0wseUJBQUtILFVBQUwsQ0FBZ0I7QUFDZEMsbURBQXFDSixLQUFLSyxJQUExQyxZQUFxREwsS0FBS007QUFENUMsV0FBaEI7QUFHRDtBQUNGLE9BYk87QUFjRkMsb0JBZEU7QUFBQSw2RkFjY0MsRUFkZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFla0IsS0FBS0MsY0FBTCxDQUFvQkQsRUFBcEIsQ0FmbEI7O0FBQUE7QUFlTix1QkFBS1gsVUFmQzs7QUFnQk4sdUJBQUthLE1BQUw7O0FBaEJNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsSzs7Ozs7bUNBb0JNRixFLEVBQUk7QUFDbEIsYUFBTyxJQUFJRyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLHVCQUFLQyxPQUFMLENBQWE7QUFDWFYsZUFBSyxrREFETTtBQUVYWixnQkFBTTtBQUNKdUIsd0JBQVlQO0FBRFIsV0FGSztBQUtYUSxpQkFMVyxtQkFLRkMsR0FMRSxFQUtHO0FBQUVMLG9CQUFRSyxHQUFSO0FBQWMsV0FMbkI7QUFNWEMsY0FOVyxnQkFNTEMsR0FOSyxFQU1BO0FBQUVOLG1CQUFPTSxHQUFQO0FBQWE7QUFOZixTQUFiO0FBUUQsT0FUTSxDQUFQO0FBVUQ7Ozs2QkFFUTtBQUNQLFdBQUt2QixLQUFMLEdBQWEsZUFBS0YsY0FBTCxDQUFvQixNQUFwQixFQUE0QkUsS0FBNUIsR0FBb0MsQ0FBakQ7QUFDQSxXQUFLRCxRQUFMLEdBQWdCLEtBQUtGLFlBQUwsQ0FBa0IyQixPQUFPLEtBQUt4QixLQUFaLENBQWxCLEVBQXNDWSxFQUF0RDtBQUNBLFdBQUtFLE1BQUw7QUFDRDs7Ozs7Ozs7Ozt1QkFHeUIsS0FBS0QsY0FBTCxDQUFvQixLQUFLZCxRQUF6QixDOzs7QUFBeEIscUJBQUtFLFU7O0FBQ0wscUJBQUthLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUE1RG9DLGVBQUtXLEk7O2tCQUF4QnJDLFUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IGduYlRleHRib29rU2VsZWN0IGZyb20gJ0AvY29tcG9uZW50cy9nbmItdGV4dGJvb2tTZWxlY3QnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGlzdGljcyBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iusOmUmemimCdcbiAgICB9XG5cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiZ25iVGV4dGJvb2tTZWxlY3RcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnZhbHVlLnN5bmNcIjpcImdyYWRlXCIsXCJ2LWJpbmQ6a2V5LnN5bmNcIjpcInRleHRib29rXCIsXCJ4bWxuczp2LW9uXCI6XCJcIixcInYtYmluZDp0ZXh0Ym9vay5vbmNlXCI6XCJ0ZXh0Qm9va0xpc3RcIn19O1xyXG4kZXZlbnRzID0ge1wiZ25iVGV4dGJvb2tTZWxlY3RcIjp7XCJ2LW9uOmV2ZW50XCI6XCJ0ZXh0Ym9va0NoYW5nZVwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgZ25iVGV4dGJvb2tTZWxlY3Q6IGduYlRleHRib29rU2VsZWN0XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIHRleHRCb29rTGlzdDogd2VweS5nZXRTdG9yYWdlU3luYygnVXNlcicpLnRleHRib29rLFxuICAgICAgdGV4dGJvb2s6ICcnLFxuICAgICAgZ3JhZGU6ICcnLFxuICAgICAgc3RhdGlzdGljczogW11cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgX2ludG9MaXN0IChpdGVtKSB7XG4gICAgICAgIGlmIChpdGVtLmNvcnJlY3QgPT09IDApIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfSBlbHNlIGlmIChpdGVtLmVycm9yID09PSAwKSB7XG4gICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgIHVybDogYC9wYWdlcy9zdGF0aXN0aWNzL2NvcnJlY3Q/bmFtZT0ke2l0ZW0ubmFtZX0maWQ9JHtpdGVtLmNoYXB0ZXJJZH1gXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgdXJsOiBgL3BhZ2VzL3N0YXRpc3RpY3MvZXJyb3I/bmFtZT0ke2l0ZW0ubmFtZX0maWQ9JHtpdGVtLmNoYXB0ZXJJZH1gXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGFzeW5jIHRleHRib29rQ2hhbmdlIChpZCkge1xuICAgICAgICB0aGlzLnN0YXRpc3RpY3MgPSBhd2FpdCB0aGlzLl9nZXRTdGF0aXN0aWNzKGlkKVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgX2dldFN0YXRpc3RpY3MgKGlkKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vcHJpbWFyeS5ndWluYWJlbi5jb20vdGV4dGJvb2svc3RhdGlzdGljcycsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgdGV4dGJvb2tJZDogaWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykgeyByZXNvbHZlKHJlcykgfSxcbiAgICAgICAgICBmYWlsIChlcnIpIHsgcmVqZWN0KGVycikgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICB0aGlzLmdyYWRlID0gd2VweS5nZXRTdG9yYWdlU3luYygnVXNlcicpLmdyYWRlIC0gM1xuICAgICAgdGhpcy50ZXh0Ym9vayA9IHRoaXMudGV4dEJvb2tMaXN0W051bWJlcih0aGlzLmdyYWRlKV0uaWRcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG5cbiAgICBhc3luYyBvblNob3coKSB7XG4gICAgICB0aGlzLnN0YXRpc3RpY3MgPSBhd2FpdCB0aGlzLl9nZXRTdGF0aXN0aWNzKHRoaXMudGV4dGJvb2spXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuICB9XG4iXX0=