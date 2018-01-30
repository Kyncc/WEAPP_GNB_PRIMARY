'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _gnbTextbookSelect = require('./../../components/gnb-textbookSelect.js');

var _gnbTextbookSelect2 = _interopRequireDefault(_gnbTextbookSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    }, _this.$repeat = {}, _this.$props = { "gnbTextbookSelect": { "xmlns:v-bind": "", "v-bind:value.sync": "current" } }, _this.$events = {}, _this.components = {
      gnbTextbookSelect: _gnbTextbookSelect2.default
    }, _this.data = {
      current: 3
    }, _this.computed = {}, _this.methods = {
      _intoList: function _intoList(val) {
        wx.navigateTo({
          url: '/pages/statistics/list?name=' + val
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Statistics;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Statistics , 'pages/statistics/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlN0YXRpc3RpY3MiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZ25iVGV4dGJvb2tTZWxlY3QiLCJkYXRhIiwiY3VycmVudCIsImNvbXB1dGVkIiwibWV0aG9kcyIsIl9pbnRvTGlzdCIsInZhbCIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFU7Ozs7Ozs7Ozs7Ozs7OzhMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1ZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLHFCQUFvQixFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHFCQUFvQixTQUF2QyxFQUFyQixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQztBQURRLEssUUFHVkMsSSxHQUFPO0FBQ0xDLGVBQVM7QUFESixLLFFBR1BDLFEsR0FBVyxFLFFBQ1hDLE8sR0FBVTtBQUNSQyxlQURRLHFCQUNHQyxHQURILEVBQ1E7QUFDZEMsV0FBR0MsVUFBSCxDQUFjO0FBQ1pDLGdEQUFvQ0g7QUFEeEIsU0FBZDtBQUdEO0FBTE8sSzs7OztFQWQ0QixlQUFLSSxJOztrQkFBeEJqQixVIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBnbmJUZXh0Ym9va1NlbGVjdCBmcm9tICdAL2NvbXBvbmVudHMvZ25iLXRleHRib29rU2VsZWN0J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRpc3RpY3MgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfplJnpopjmnKwnXG4gICAgfVxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJnbmJUZXh0Ym9va1NlbGVjdFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dmFsdWUuc3luY1wiOlwiY3VycmVudFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBnbmJUZXh0Ym9va1NlbGVjdDogZ25iVGV4dGJvb2tTZWxlY3RcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIGN1cnJlbnQ6IDNcbiAgICB9XG4gICAgY29tcHV0ZWQgPSB7fVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBfaW50b0xpc3QgKHZhbCkge1xuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6IGAvcGFnZXMvc3RhdGlzdGljcy9saXN0P25hbWU9JHt2YWx9YFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19