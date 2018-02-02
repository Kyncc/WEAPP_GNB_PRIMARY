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
    }, _this.$repeat = {}, _this.$props = { "gnbTextbookSelect": { "xmlns:v-bind": "", "v-bind:value.sync": "grade", "v-bind:key.sync": "textbook", "xmlns:v-on": "", "v-bind:textbook.once": "textBookList" } }, _this.$events = { "gnbTextbookSelect": { "v-on:event": "textbookChange" } }, _this.components = {
      gnbTextbookSelect: _gnbTextbookSelect2.default
    }, _this.data = {
      textBookList: _wepy2.default.getStorageSync('User').textbook,
      textbook: '',
      grade: '',
      statistics: []
    }, _this.methods = {
      _intoList: function _intoList(val) {
        wx.navigateTo({
          url: '/pages/statistics/list?name=' + val
        });
      },
      textbookChange: function textbookChange(id) {
        this._getStatistics(id);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Statistics, [{
    key: '_getStatistics',
    value: function _getStatistics(id) {
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://wechat.guinaben.com/primary/workbook/statistics',
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
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.grade = _wepy2.default.getStorageSync('User').grade - 3;
                this.textbook = this.textBookList[Number(this.grade)].id;
                _context.next = 4;
                return this._getStatistics(this.textbook);

              case 4:
                this.statistics = _context.sent;

                this.$apply();

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return Statistics;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Statistics , 'pages/statistics/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlN0YXRpc3RpY3MiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZ25iVGV4dGJvb2tTZWxlY3QiLCJkYXRhIiwidGV4dEJvb2tMaXN0IiwiZ2V0U3RvcmFnZVN5bmMiLCJ0ZXh0Ym9vayIsImdyYWRlIiwic3RhdGlzdGljcyIsIm1ldGhvZHMiLCJfaW50b0xpc3QiLCJ2YWwiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ0ZXh0Ym9va0NoYW5nZSIsImlkIiwiX2dldFN0YXRpc3RpY3MiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJ0ZXh0Ym9va0lkIiwic3VjY2VzcyIsInJlcyIsImZhaWwiLCJlcnIiLCJOdW1iZXIiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMscUJBQW9CLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLE9BQXZDLEVBQStDLG1CQUFrQixVQUFqRSxFQUE0RSxjQUFhLEVBQXpGLEVBQTRGLHdCQUF1QixjQUFuSCxFQUFyQixFLFFBQ1RDLE8sR0FBVSxFQUFDLHFCQUFvQixFQUFDLGNBQWEsZ0JBQWQsRUFBckIsRSxRQUNUQyxVLEdBQWE7QUFDUkM7QUFEUSxLLFFBR1ZDLEksR0FBTztBQUNMQyxvQkFBYyxlQUFLQyxjQUFMLENBQW9CLE1BQXBCLEVBQTRCQyxRQURyQztBQUVMQSxnQkFBVSxFQUZMO0FBR0xDLGFBQU8sRUFIRjtBQUlMQyxrQkFBWTtBQUpQLEssUUFNUEMsTyxHQUFVO0FBQ1JDLGVBRFEscUJBQ0dDLEdBREgsRUFDUTtBQUNkQyxXQUFHQyxVQUFILENBQWM7QUFDWkMsZ0RBQW9DSDtBQUR4QixTQUFkO0FBR0QsT0FMTztBQU1SSSxvQkFOUSwwQkFNUUMsRUFOUixFQU1ZO0FBQ2xCLGFBQUtDLGNBQUwsQ0FBb0JELEVBQXBCO0FBQ0Q7QUFSTyxLOzs7OzttQ0FVTUEsRSxFQUFJO0FBQ2xCLGFBQU8sSUFBSUUsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Qyx1QkFBS0MsT0FBTCxDQUFhO0FBQ1hQLGVBQUsseURBRE07QUFFWFgsZ0JBQU07QUFDSm1CLHdCQUFZTjtBQURSLFdBRks7QUFLWE8saUJBTFcsbUJBS0ZDLEdBTEUsRUFLRztBQUFFTCxvQkFBUUssR0FBUjtBQUFjLFdBTG5CO0FBTVhDLGNBTlcsZ0JBTUxDLEdBTkssRUFNQTtBQUFFTixtQkFBT00sR0FBUDtBQUFhO0FBTmYsU0FBYjtBQVFELE9BVE0sQ0FBUDtBQVVEOzs7Ozs7Ozs7QUFFQyxxQkFBS25CLEtBQUwsR0FBYSxlQUFLRixjQUFMLENBQW9CLE1BQXBCLEVBQTRCRSxLQUE1QixHQUFvQyxDQUFqRDtBQUNBLHFCQUFLRCxRQUFMLEdBQWdCLEtBQUtGLFlBQUwsQ0FBa0J1QixPQUFPLEtBQUtwQixLQUFaLENBQWxCLEVBQXNDUyxFQUF0RDs7dUJBQ3dCLEtBQUtDLGNBQUwsQ0FBb0IsS0FBS1gsUUFBekIsQzs7O0FBQXhCLHFCQUFLRSxVOztBQUNMLHFCQUFLb0IsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTFDb0MsZUFBS0MsSTs7a0JBQXhCbEMsVSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgZ25iVGV4dGJvb2tTZWxlY3QgZnJvbSAnQC9jb21wb25lbnRzL2duYi10ZXh0Ym9va1NlbGVjdCdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0aXN0aWNzIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6ZSZ6aKY5pysJ1xuICAgIH1cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiZ25iVGV4dGJvb2tTZWxlY3RcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnZhbHVlLnN5bmNcIjpcImdyYWRlXCIsXCJ2LWJpbmQ6a2V5LnN5bmNcIjpcInRleHRib29rXCIsXCJ4bWxuczp2LW9uXCI6XCJcIixcInYtYmluZDp0ZXh0Ym9vay5vbmNlXCI6XCJ0ZXh0Qm9va0xpc3RcIn19O1xyXG4kZXZlbnRzID0ge1wiZ25iVGV4dGJvb2tTZWxlY3RcIjp7XCJ2LW9uOmV2ZW50XCI6XCJ0ZXh0Ym9va0NoYW5nZVwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgZ25iVGV4dGJvb2tTZWxlY3Q6IGduYlRleHRib29rU2VsZWN0XG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICB0ZXh0Qm9va0xpc3Q6IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXInKS50ZXh0Ym9vayxcbiAgICAgIHRleHRib29rOiAnJyxcbiAgICAgIGdyYWRlOiAnJyxcbiAgICAgIHN0YXRpc3RpY3M6IFtdXG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBfaW50b0xpc3QgKHZhbCkge1xuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6IGAvcGFnZXMvc3RhdGlzdGljcy9saXN0P25hbWU9JHt2YWx9YFxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIHRleHRib29rQ2hhbmdlIChpZCkge1xuICAgICAgICB0aGlzLl9nZXRTdGF0aXN0aWNzKGlkKVxuICAgICAgfVxuICAgIH1cbiAgICBfZ2V0U3RhdGlzdGljcyAoaWQpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly93ZWNoYXQuZ3VpbmFiZW4uY29tL3ByaW1hcnkvd29ya2Jvb2svc3RhdGlzdGljcycsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgdGV4dGJvb2tJZDogaWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykgeyByZXNvbHZlKHJlcykgfSxcbiAgICAgICAgICBmYWlsIChlcnIpIHsgcmVqZWN0KGVycikgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG4gICAgYXN5bmMgb25Mb2FkKCkge1xuICAgICAgdGhpcy5ncmFkZSA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXInKS5ncmFkZSAtIDNcbiAgICAgIHRoaXMudGV4dGJvb2sgPSB0aGlzLnRleHRCb29rTGlzdFtOdW1iZXIodGhpcy5ncmFkZSldLmlkXG4gICAgICB0aGlzLnN0YXRpc3RpY3MgPSBhd2FpdCB0aGlzLl9nZXRTdGF0aXN0aWNzKHRoaXMudGV4dGJvb2spXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuICB9XG4iXX0=