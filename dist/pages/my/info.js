'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _zanField = require('./../../components/zan-field.js');

var _zanField2 = _interopRequireDefault(_zanField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyInfo = function (_wepy$page) {
  _inherits(MyInfo, _wepy$page);

  function MyInfo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MyInfo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MyInfo.__proto__ || Object.getPrototypeOf(MyInfo)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '个人资料'
    }, _this.data = {
      base_school: {
        title: '学校',
        placeholder: '请输入学校名称'
      }
    }, _this.$repeat = {}, _this.$props = { "zanField1": { "xmlns:v-bind": "", "v-bind:options.once": "base_school", "v-bind:value.once": "school", "componentId": "zanField1", "class": "tr" } }, _this.$events = {}, _this.components = {
      zanField1: _zanField2.default
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return MyInfo;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(MyInfo , 'pages/my/info'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8uanMiXSwibmFtZXMiOlsiTXlJbmZvIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJiYXNlX3NjaG9vbCIsInRpdGxlIiwicGxhY2Vob2xkZXIiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJ6YW5GaWVsZDEiLCJtZXRob2RzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLG1CQUFhO0FBQ1hDLGVBQU8sSUFESTtBQUVYQyxxQkFBYTtBQUZGO0FBRFIsSyxRQU9SQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxhQUFZLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsdUJBQXNCLGFBQXpDLEVBQXVELHFCQUFvQixRQUEzRSxFQUFvRixlQUFjLFdBQWxHLEVBQThHLFNBQVEsSUFBdEgsRUFBYixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQztBQURRLEssUUFJVkMsTyxHQUFVLEU7Ozs7RUFuQndCLGVBQUtDLEk7O2tCQUFwQmIsTSIsImZpbGUiOiJpbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB6YW5GaWVsZCBmcm9tICdAL2NvbXBvbmVudHMvemFuLWZpZWxkJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE15SW5mbyBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4quS6uui1hOaWmSdcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgYmFzZV9zY2hvb2w6IHtcbiAgICAgICAgdGl0bGU6ICflrabmoKEnLFxuICAgICAgICBwbGFjZWhvbGRlcjogJ+ivt+i+k+WFpeWtpuagoeWQjeensCdcbiAgICAgIH1cbiAgICB9XG5cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiemFuRmllbGQxXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpvcHRpb25zLm9uY2VcIjpcImJhc2Vfc2Nob29sXCIsXCJ2LWJpbmQ6dmFsdWUub25jZVwiOlwic2Nob29sXCIsXCJjb21wb25lbnRJZFwiOlwiemFuRmllbGQxXCIsXCJjbGFzc1wiOlwidHJcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgemFuRmllbGQxOiB6YW5GaWVsZFxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7fVxuICB9XG4iXX0=