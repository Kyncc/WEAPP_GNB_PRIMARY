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
      navigationBarTitleText: '错题本'
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
          return '';
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlN0YXRpc3RpY3MiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZ25iVGV4dGJvb2tTZWxlY3QiLCJkYXRhIiwidGV4dEJvb2tMaXN0IiwidGV4dGJvb2siLCJncmFkZSIsInN0YXRpc3RpY3MiLCJtZXRob2RzIiwiX2ludG9MaXN0IiwiaXRlbSIsImNvcnJlY3QiLCJlcnJvciIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJuYW1lIiwiY2hhcHRlcklkIiwidGV4dGJvb2tDaGFuZ2UiLCJpZCIsIl9nZXRTdGF0aXN0aWNzIiwiJGFwcGx5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwidGV4dGJvb2tJZCIsInN1Y2Nlc3MiLCJyZXMiLCJmYWlsIiwiZXJyIiwiZ2V0U3RvcmFnZVN5bmMiLCJOdW1iZXIiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMscUJBQW9CLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLE9BQXZDLEVBQStDLG1CQUFrQixVQUFqRSxFQUE0RSxjQUFhLEVBQXpGLEVBQTRGLHdCQUF1QixjQUFuSCxFQUFyQixFLFFBQ1RDLE8sR0FBVSxFQUFDLHFCQUFvQixFQUFDLGNBQWEsZ0JBQWQsRUFBckIsRSxRQUNUQyxVLEdBQWE7QUFDUkM7QUFEUSxLLFFBSVZDLEksR0FBTztBQUNMQyxvQkFBYyxFQURUO0FBRUxDLGdCQUFVLEVBRkw7QUFHTEMsYUFBTyxFQUhGO0FBSUxDLGtCQUFZO0FBSlAsSyxRQU9QQyxPLEdBQVU7QUFDUkMsZUFEUSxxQkFDR0MsSUFESCxFQUNTO0FBQ2YsWUFBSUEsS0FBS0MsT0FBTCxLQUFpQixDQUFyQixFQUF3QjtBQUN0QixpQkFBTyxFQUFQO0FBQ0QsU0FGRCxNQUVPLElBQUlELEtBQUtFLEtBQUwsS0FBZSxDQUFuQixFQUFzQjtBQUMzQix5QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxxREFBdUNKLEtBQUtLLElBQTVDLFlBQXVETCxLQUFLTTtBQUQ5QyxXQUFoQjtBQUdELFNBSk0sTUFJQTtBQUNMLHlCQUFLSCxVQUFMLENBQWdCO0FBQ2RDLG1EQUFxQ0osS0FBS0ssSUFBMUMsWUFBcURMLEtBQUtNO0FBRDVDLFdBQWhCO0FBR0Q7QUFDRixPQWJPO0FBY0ZDLG9CQWRFO0FBQUEsNkZBY2NDLEVBZGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBZWtCLEtBQUtDLGNBQUwsQ0FBb0JELEVBQXBCLENBZmxCOztBQUFBO0FBZU4sdUJBQUtYLFVBZkM7O0FBZ0JOLHVCQUFLYSxNQUFMOztBQWhCTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLEs7Ozs7O21DQW9CTUYsRSxFQUFJO0FBQ2xCLGFBQU8sSUFBSUcsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Qyx1QkFBS0MsT0FBTCxDQUFhO0FBQ1hWLGVBQUssa0RBRE07QUFFWFgsZ0JBQU07QUFDSnNCLHdCQUFZUDtBQURSLFdBRks7QUFLWFEsaUJBTFcsbUJBS0ZDLEdBTEUsRUFLRztBQUFFTCxvQkFBUUssR0FBUjtBQUFjLFdBTG5CO0FBTVhDLGNBTlcsZ0JBTUxDLEdBTkssRUFNQTtBQUFFTixtQkFBT00sR0FBUDtBQUFhO0FBTmYsU0FBYjtBQVFELE9BVE0sQ0FBUDtBQVVEOzs7NkJBRVE7QUFDUCxXQUFLdkIsS0FBTCxHQUFhLGVBQUt3QixjQUFMLENBQW9CLE1BQXBCLEVBQTRCeEIsS0FBNUIsR0FBb0MsQ0FBakQ7QUFDQSxXQUFLRixZQUFMLEdBQW9CLGVBQUswQixjQUFMLENBQW9CLE1BQXBCLEVBQTRCekIsUUFBaEQ7QUFDQSxXQUFLQSxRQUFMLEdBQWdCLEtBQUtELFlBQUwsQ0FBa0IyQixPQUFPLEtBQUt6QixLQUFaLENBQWxCLEVBQXNDWSxFQUF0RDtBQUNBLFdBQUtFLE1BQUw7QUFDRDs7Ozs7Ozs7Ozt1QkFHeUIsS0FBS0QsY0FBTCxDQUFvQixLQUFLZCxRQUF6QixDOzs7QUFBeEIscUJBQUtFLFU7O0FBQ0wscUJBQUthLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUE3RG9DLGVBQUtZLEk7O2tCQUF4QnJDLFUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IGduYlRleHRib29rU2VsZWN0IGZyb20gJ0AvY29tcG9uZW50cy9nbmItdGV4dGJvb2tTZWxlY3QnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGlzdGljcyBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mUmemimOacrCdcbiAgICB9XG5cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiZ25iVGV4dGJvb2tTZWxlY3RcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnZhbHVlLnN5bmNcIjpcImdyYWRlXCIsXCJ2LWJpbmQ6a2V5LnN5bmNcIjpcInRleHRib29rXCIsXCJ4bWxuczp2LW9uXCI6XCJcIixcInYtYmluZDp0ZXh0Ym9vay5zeW5jXCI6XCJ0ZXh0Qm9va0xpc3RcIn19O1xyXG4kZXZlbnRzID0ge1wiZ25iVGV4dGJvb2tTZWxlY3RcIjp7XCJ2LW9uOmV2ZW50XCI6XCJ0ZXh0Ym9va0NoYW5nZVwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgZ25iVGV4dGJvb2tTZWxlY3Q6IGduYlRleHRib29rU2VsZWN0XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIHRleHRCb29rTGlzdDogW10sXG4gICAgICB0ZXh0Ym9vazogJycsXG4gICAgICBncmFkZTogJycsXG4gICAgICBzdGF0aXN0aWNzOiBbXVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBfaW50b0xpc3QgKGl0ZW0pIHtcbiAgICAgICAgaWYgKGl0ZW0uY29ycmVjdCA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uZXJyb3IgPT09IDApIHtcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgdXJsOiBgL3BhZ2VzL3N0YXRpc3RpY3MvY29ycmVjdD9uYW1lPSR7aXRlbS5uYW1lfSZpZD0ke2l0ZW0uY2hhcHRlcklkfWBcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICB1cmw6IGAvcGFnZXMvc3RhdGlzdGljcy9lcnJvcj9uYW1lPSR7aXRlbS5uYW1lfSZpZD0ke2l0ZW0uY2hhcHRlcklkfWBcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYXN5bmMgdGV4dGJvb2tDaGFuZ2UgKGlkKSB7XG4gICAgICAgIHRoaXMuc3RhdGlzdGljcyA9IGF3YWl0IHRoaXMuX2dldFN0YXRpc3RpY3MoaWQpXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfZ2V0U3RhdGlzdGljcyAoaWQpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9wcmltYXJ5Lmd1aW5hYmVuLmNvbS90ZXh0Ym9vay9zdGF0aXN0aWNzJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB0ZXh0Ym9va0lkOiBpZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7IHJlc29sdmUocmVzKSB9LFxuICAgICAgICAgIGZhaWwgKGVycikgeyByZWplY3QoZXJyKSB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgIHRoaXMuZ3JhZGUgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdVc2VyJykuZ3JhZGUgLSAzXG4gICAgICB0aGlzLnRleHRCb29rTGlzdCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXInKS50ZXh0Ym9va1xuICAgICAgdGhpcy50ZXh0Ym9vayA9IHRoaXMudGV4dEJvb2tMaXN0W051bWJlcih0aGlzLmdyYWRlKV0uaWRcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG5cbiAgICBhc3luYyBvblNob3coKSB7XG4gICAgICB0aGlzLnN0YXRpc3RpY3MgPSBhd2FpdCB0aGlzLl9nZXRTdGF0aXN0aWNzKHRoaXMudGV4dGJvb2spXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuICB9XG4iXX0=