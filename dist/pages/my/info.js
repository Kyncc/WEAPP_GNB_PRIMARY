'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
      },
      userInfo: {
        name: '',
        sex: '',
        school: '',
        grade: ''
      }
    }, _this.$repeat = {}, _this.$props = { "zanField1": { "xmlns:v-bind": "", "v-bind:options.once": "base_school", "v-bind:value.once": "school", "componentId": "zanField1", "class": "tr" } }, _this.$events = {}, _this.components = {
      zanField1: _zanField2.default
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MyInfo, [{
    key: 'onLoad',
    value: function onLoad() {
      this.userInfo.name = _wepy2.default.getStorageSync('User').name;
      this.userInfo.headImg = _wepy2.default.getStorageSync('User').headImg;
    }
  }]);

  return MyInfo;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(MyInfo , 'pages/my/info'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8uanMiXSwibmFtZXMiOlsiTXlJbmZvIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJiYXNlX3NjaG9vbCIsInRpdGxlIiwicGxhY2Vob2xkZXIiLCJ1c2VySW5mbyIsIm5hbWUiLCJzZXgiLCJzY2hvb2wiLCJncmFkZSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInphbkZpZWxkMSIsIm1ldGhvZHMiLCJnZXRTdG9yYWdlU3luYyIsImhlYWRJbWciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxtQkFBYTtBQUNYQyxlQUFPLElBREk7QUFFWEMscUJBQWE7QUFGRixPQURSO0FBS0xDLGdCQUFVO0FBQ1JDLGNBQU0sRUFERTtBQUVSQyxhQUFLLEVBRkc7QUFHUkMsZ0JBQVEsRUFIQTtBQUlSQyxlQUFPO0FBSkM7QUFMTCxLLFFBYVJDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLGFBQVksRUFBQyxnQkFBZSxFQUFoQixFQUFtQix1QkFBc0IsYUFBekMsRUFBdUQscUJBQW9CLFFBQTNFLEVBQW9GLGVBQWMsV0FBbEcsRUFBOEcsU0FBUSxJQUF0SCxFQUFiLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDO0FBRFEsSyxRQUlWQyxPLEdBQVUsRTs7Ozs7NkJBRUQ7QUFDUCxXQUFLVixRQUFMLENBQWNDLElBQWQsR0FBcUIsZUFBS1UsY0FBTCxDQUFvQixNQUFwQixFQUE0QlYsSUFBakQ7QUFDQSxXQUFLRCxRQUFMLENBQWNZLE9BQWQsR0FBd0IsZUFBS0QsY0FBTCxDQUFvQixNQUFwQixFQUE0QkMsT0FBcEQ7QUFDRDs7OztFQTlCaUMsZUFBS0MsSTs7a0JBQXBCcEIsTSIsImZpbGUiOiJpbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB6YW5GaWVsZCBmcm9tICdAL2NvbXBvbmVudHMvemFuLWZpZWxkJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE15SW5mbyBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4quS6uui1hOaWmSdcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgYmFzZV9zY2hvb2w6IHtcbiAgICAgICAgdGl0bGU6ICflrabmoKEnLFxuICAgICAgICBwbGFjZWhvbGRlcjogJ+ivt+i+k+WFpeWtpuagoeWQjeensCdcbiAgICAgIH0sXG4gICAgICB1c2VySW5mbzoge1xuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgc2V4OiAnJyxcbiAgICAgICAgc2Nob29sOiAnJyxcbiAgICAgICAgZ3JhZGU6ICcnXG4gICAgICB9XG4gICAgfVxuXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInphbkZpZWxkMVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6b3B0aW9ucy5vbmNlXCI6XCJiYXNlX3NjaG9vbFwiLFwidi1iaW5kOnZhbHVlLm9uY2VcIjpcInNjaG9vbFwiLFwiY29tcG9uZW50SWRcIjpcInphbkZpZWxkMVwiLFwiY2xhc3NcIjpcInRyXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIHphbkZpZWxkMTogemFuRmllbGRcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge31cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgIHRoaXMudXNlckluZm8ubmFtZSA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXInKS5uYW1lXG4gICAgICB0aGlzLnVzZXJJbmZvLmhlYWRJbWcgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdVc2VyJykuaGVhZEltZ1xuICAgIH1cbiAgfVxuIl19