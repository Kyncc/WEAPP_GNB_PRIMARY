'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


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
    }, _this.$repeat = {}, _this.$props = { "zanNoticebar1": { "xmlns:v-bind": "", "v-bind:text.once": "longText", "componentId": "static1" }, "zanSelect1": { "v-bind:items.once": "items", "v-bind:checkedValue.sync": "checked_color", "componentId": "color" } }, _this.$events = {}, _this.components = {
      zanNoticebar1: _zanNoticebar2.default,
      zanSelect1: _zanSelect2.default
    }, _this.data = {
      longText: '首次支付30天内可无条件申请全额退款',
      items: [{
        padding: 0,
        value: '￥29/月',
        name: '选项一'
      }, {
        padding: 0,
        value: '￥149/半年',
        name: '选项二'
      }, {
        padding: 0,
        value: '￥199/年',
        name: '选项二'
      }],
      checked_color: -1,
      activeColor: '#4b0'
    }, _this.events = {
      zanSelectChange: function zanSelectChange(value, event) {
        var componentId = event.source.componentId;

        this['checked_' + componentId] = value;
        this.$apply();
      }
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MyPay, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return MyPay;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(MyPay , 'pages/my/pay'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheS5qcyJdLCJuYW1lcyI6WyJNeVBheSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJ6YW5Ob3RpY2ViYXIxIiwiemFuU2VsZWN0MSIsImRhdGEiLCJsb25nVGV4dCIsIml0ZW1zIiwicGFkZGluZyIsInZhbHVlIiwibmFtZSIsImNoZWNrZWRfY29sb3IiLCJhY3RpdmVDb2xvciIsImV2ZW50cyIsInphblNlbGVjdENoYW5nZSIsImV2ZW50IiwiY29tcG9uZW50SWQiLCJzb3VyY2UiLCIkYXBwbHkiLCJtZXRob2RzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1ZDLE8sR0FBVSxFLFFBQ1hDLE0sR0FBUyxFQUFDLGlCQUFnQixFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLG9CQUFtQixVQUF0QyxFQUFpRCxlQUFjLFNBQS9ELEVBQWpCLEVBQTJGLGNBQWEsRUFBQyxxQkFBb0IsT0FBckIsRUFBNkIsNEJBQTJCLGVBQXhELEVBQXdFLGVBQWMsT0FBdEYsRUFBeEcsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDVkMsMkNBRFU7QUFFVkM7QUFGVSxLLFFBSVpDLEksR0FBTztBQUNMQyxnQkFBVSxvQkFETDtBQUVMQyxhQUFPLENBQ0w7QUFDRUMsaUJBQVMsQ0FEWDtBQUVFQyxlQUFPLE9BRlQ7QUFHRUMsY0FBTTtBQUhSLE9BREssRUFNTDtBQUNFRixpQkFBUyxDQURYO0FBRUVDLGVBQU8sU0FGVDtBQUdFQyxjQUFNO0FBSFIsT0FOSyxFQVdMO0FBQ0VGLGlCQUFTLENBRFg7QUFFRUMsZUFBTyxRQUZUO0FBR0VDLGNBQU07QUFIUixPQVhLLENBRkY7QUFtQkxDLHFCQUFlLENBQUMsQ0FuQlg7QUFvQkxDLG1CQUFhO0FBcEJSLEssUUFzQlBDLE0sR0FBUztBQUNQQyxxQkFETywyQkFDU0wsS0FEVCxFQUNnQk0sS0FEaEIsRUFDdUI7QUFBQSxZQUN0QkMsV0FEc0IsR0FDTkQsTUFBTUUsTUFEQSxDQUN0QkQsV0FEc0I7O0FBRTVCLDBCQUFnQkEsV0FBaEIsSUFBaUNQLEtBQWpDO0FBQ0EsYUFBS1MsTUFBTDtBQUNEO0FBTE0sSyxRQU9UQyxPLEdBQVUsRTs7Ozs7NkJBRUQsQ0FBRTs7OztFQTFDc0IsZUFBS0MsSTs7a0JBQW5CeEIsSyIsImZpbGUiOiJwYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgemFuTm90aWNlYmFyIGZyb20gJ0AvY29tcG9uZW50cy96YW4tbm90aWNlYmFyJ1xuaW1wb3J0IHphblNlbGVjdCBmcm9tICdAL2NvbXBvbmVudHMvemFuLXNlbGVjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlQYXkgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahOS8muWRmCdcbiAgfVxuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiemFuTm90aWNlYmFyMVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dGV4dC5vbmNlXCI6XCJsb25nVGV4dFwiLFwiY29tcG9uZW50SWRcIjpcInN0YXRpYzFcIn0sXCJ6YW5TZWxlY3QxXCI6e1widi1iaW5kOml0ZW1zLm9uY2VcIjpcIml0ZW1zXCIsXCJ2LWJpbmQ6Y2hlY2tlZFZhbHVlLnN5bmNcIjpcImNoZWNrZWRfY29sb3JcIixcImNvbXBvbmVudElkXCI6XCJjb2xvclwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgemFuTm90aWNlYmFyMTogemFuTm90aWNlYmFyLFxuICAgIHphblNlbGVjdDE6IHphblNlbGVjdFxuICB9XG4gIGRhdGEgPSB7XG4gICAgbG9uZ1RleHQ6ICfpppbmrKHmlK/ku5gzMOWkqeWGheWPr+aXoOadoeS7tueUs+ivt+WFqOminemAgOasvicsXG4gICAgaXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgdmFsdWU6ICfvv6UyOS/mnIgnLFxuICAgICAgICBuYW1lOiAn6YCJ6aG55LiAJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgdmFsdWU6ICfvv6UxNDkv5Y2K5bm0JyxcbiAgICAgICAgbmFtZTogJ+mAiemhueS6jCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIHZhbHVlOiAn77+lMTk5L+W5tCcsXG4gICAgICAgIG5hbWU6ICfpgInpobnkuownXG4gICAgICB9XG4gICAgXSxcbiAgICBjaGVja2VkX2NvbG9yOiAtMSxcbiAgICBhY3RpdmVDb2xvcjogJyM0YjAnXG4gIH1cbiAgZXZlbnRzID0ge1xuICAgIHphblNlbGVjdENoYW5nZSh2YWx1ZSwgZXZlbnQpIHtcbiAgICAgIGxldCB7IGNvbXBvbmVudElkIH0gPSBldmVudC5zb3VyY2VcbiAgICAgIHRoaXNbYGNoZWNrZWRfJHtjb21wb25lbnRJZH1gXSA9IHZhbHVlXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuICB9XG4gIG1ldGhvZHMgPSB7XG4gIH1cbiAgb25Mb2FkKCkge31cbn1cbiJdfQ==