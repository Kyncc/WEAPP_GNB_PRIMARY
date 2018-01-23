'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _zanNoticebar = require('./../../components/zan-noticebar.js');

var _zanNoticebar2 = _interopRequireDefault(_zanNoticebar);

var _zanSelect = require('./../../components/zan-select.js');

var _zanSelect2 = _interopRequireDefault(_zanSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyPay = function (_wepy$page) {
  _inherits(MyPay, _wepy$page);

  function MyPay() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MyPay);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MyPay.__proto__ || Object.getPrototypeOf(MyPay)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的会员'
    }, _this.data = {
      longText: '首次支付30天内可无条件申请全额退款',
      checked_color: -1,
      items: [{
        padding: 0,
        value: '1',
        name: '￥29/月'
      }, {
        padding: 0,
        value: '2',
        name: '￥149/半年'
      }, {
        padding: 0,
        value: '3',
        name: '￥199/年'
      }]
    }, _this.$repeat = {}, _this.$props = { "zanNoticebar1": { "xmlns:v-bind": "", "v-bind:text.once": "longText", "componentId": "static1" }, "zanSelect1": { "v-bind:items.once": "items", "v-bind:checkedValue.sync": "checked_color", "componentId": "base" } }, _this.$events = {}, _this.components = {
      zanNoticebar1: _zanNoticebar2.default,
      zanSelect1: _zanSelect2.default
    }, _this.methods = {}, _this.events = {
      zanSelectChange: function zanSelectChange(value, event) {
        var componentId = event.source.componentId;

        this['checked_' + componentId] = value;
        this.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MyPay, [{
    key: 'onReady',
    value: function onReady() {
      this.$invoke('zanNoticebar1', 'initZanNoticeBarScroll');
    }
  }]);

  return MyPay;
}(_wepy2.default.page);

exports.default = MyPay;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheS4xLmpzIl0sIm5hbWVzIjpbIk15UGF5IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJsb25nVGV4dCIsImNoZWNrZWRfY29sb3IiLCJpdGVtcyIsInBhZGRpbmciLCJ2YWx1ZSIsIm5hbWUiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJ6YW5Ob3RpY2ViYXIxIiwiemFuU2VsZWN0MSIsIm1ldGhvZHMiLCJldmVudHMiLCJ6YW5TZWxlY3RDaGFuZ2UiLCJldmVudCIsImNvbXBvbmVudElkIiwic291cmNlIiwiJGFwcGx5IiwiJGludm9rZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsZ0JBQVUsb0JBREw7QUFFTEMscUJBQWUsQ0FBQyxDQUZYO0FBR0xDLGFBQU8sQ0FDTDtBQUNFQyxpQkFBUyxDQURYO0FBRUVDLGVBQU8sR0FGVDtBQUdFQyxjQUFNO0FBSFIsT0FESyxFQU1MO0FBQ0VGLGlCQUFTLENBRFg7QUFFRUMsZUFBTyxHQUZUO0FBR0VDLGNBQU07QUFIUixPQU5LLEVBV0w7QUFDRUYsaUJBQVMsQ0FEWDtBQUVFQyxlQUFPLEdBRlQ7QUFHRUMsY0FBTTtBQUhSLE9BWEs7QUFIRixLLFFBc0JSQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxpQkFBZ0IsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixvQkFBbUIsVUFBdEMsRUFBaUQsZUFBYyxTQUEvRCxFQUFqQixFQUEyRixjQUFhLEVBQUMscUJBQW9CLE9BQXJCLEVBQTZCLDRCQUEyQixlQUF4RCxFQUF3RSxlQUFjLE1BQXRGLEVBQXhHLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDLDJDQURRO0FBRVJDO0FBRlEsSyxRQUtWQyxPLEdBQVUsRSxRQUVWQyxNLEdBQVM7QUFDUEMscUJBRE8sMkJBQ1NWLEtBRFQsRUFDZ0JXLEtBRGhCLEVBQ3VCO0FBQUEsWUFDdEJDLFdBRHNCLEdBQ05ELE1BQU1FLE1BREEsQ0FDdEJELFdBRHNCOztBQUU1QiwwQkFBZ0JBLFdBQWhCLElBQWlDWixLQUFqQztBQUNBLGFBQUtjLE1BQUw7QUFDRDtBQUxNLEs7Ozs7OzhCQVFDO0FBQ1IsV0FBS0MsT0FBTCxDQUFhLGVBQWIsRUFBOEIsd0JBQTlCO0FBQ0Q7Ozs7RUEvQ2dDLGVBQUtDLEk7O2tCQUFuQnhCLEsiLCJmaWxlIjoicGF5LjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHphbk5vdGljZWJhciBmcm9tICdAL2NvbXBvbmVudHMvemFuLW5vdGljZWJhcidcbiAgaW1wb3J0IHphblNlbGVjdCBmcm9tICdAL2NvbXBvbmVudHMvemFuLXNlbGVjdCdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBNeVBheSBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahOS8muWRmCdcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgbG9uZ1RleHQ6ICfpppbmrKHmlK/ku5gzMOWkqeWGheWPr+aXoOadoeS7tueUs+ivt+WFqOminemAgOasvicsXG4gICAgICBjaGVja2VkX2NvbG9yOiAtMSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgIHZhbHVlOiAnMScsXG4gICAgICAgICAgbmFtZTogJ++/pTI5L+aciCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgdmFsdWU6ICcyJyxcbiAgICAgICAgICBuYW1lOiAn77+lMTQ5L+WNiuW5tCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgdmFsdWU6ICczJyxcbiAgICAgICAgICBuYW1lOiAn77+lMTk5L+W5tCdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cblxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJ6YW5Ob3RpY2ViYXIxXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0ZXh0Lm9uY2VcIjpcImxvbmdUZXh0XCIsXCJjb21wb25lbnRJZFwiOlwic3RhdGljMVwifSxcInphblNlbGVjdDFcIjp7XCJ2LWJpbmQ6aXRlbXMub25jZVwiOlwiaXRlbXNcIixcInYtYmluZDpjaGVja2VkVmFsdWUuc3luY1wiOlwiY2hlY2tlZF9jb2xvclwiLFwiY29tcG9uZW50SWRcIjpcImJhc2VcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgemFuTm90aWNlYmFyMTogemFuTm90aWNlYmFyLFxuICAgICAgemFuU2VsZWN0MTogemFuU2VsZWN0XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHt9XG5cbiAgICBldmVudHMgPSB7XG4gICAgICB6YW5TZWxlY3RDaGFuZ2UodmFsdWUsIGV2ZW50KSB7XG4gICAgICAgIGxldCB7IGNvbXBvbmVudElkIH0gPSBldmVudC5zb3VyY2VcbiAgICAgICAgdGhpc1tgY2hlY2tlZF8ke2NvbXBvbmVudElkfWBdID0gdmFsdWVcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfVxuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICB0aGlzLiRpbnZva2UoJ3phbk5vdGljZWJhcjEnLCAnaW5pdFphbk5vdGljZUJhclNjcm9sbCcpXG4gICAgfVxuICB9XG4iXX0=