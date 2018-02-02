'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var zanSwitch = function (_wepy$component) {
  _inherits(zanSwitch, _wepy$component);

  function zanSwitch() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, zanSwitch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = zanSwitch.__proto__ || Object.getPrototypeOf(zanSwitch)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      items: Object,
      name: {
        type: String,
        default: ''
      },
      activeColor: {
        type: String,
        default: '#3FC6C6'
      },
      checkedValue: Number,
      componentId: String
    }, _this.data = {}, _this.methods = {
      handleZanSelectChange: function handleZanSelectChange(e) {
        var value = e.detail.value;
        console.info('[zan:Select:change]', value, e);
        this.$emit('zanSelectChange', value);
      }
    }, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return zanSwitch;
}(_wepy2.default.component);

exports.default = zanSwitch;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInphbi1zZWxlY3QuMS5qcyJdLCJuYW1lcyI6WyJ6YW5Td2l0Y2giLCJwcm9wcyIsIml0ZW1zIiwiT2JqZWN0IiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJkZWZhdWx0IiwiYWN0aXZlQ29sb3IiLCJjaGVja2VkVmFsdWUiLCJOdW1iZXIiLCJjb21wb25lbnRJZCIsImRhdGEiLCJtZXRob2RzIiwiaGFuZGxlWmFuU2VsZWN0Q2hhbmdlIiwiZSIsInZhbHVlIiwiZGV0YWlsIiwiY29uc29sZSIsImluZm8iLCIkZW1pdCIsImNvbXB1dGVkIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxLLEdBQVE7QUFDTkMsYUFBT0MsTUFERDtBQUVOQyxZQUFNO0FBQ0pDLGNBQU1DLE1BREY7QUFFSkMsaUJBQVM7QUFGTCxPQUZBO0FBTU5DLG1CQUFhO0FBQ1hILGNBQU1DLE1BREs7QUFFWEMsaUJBQVM7QUFGRSxPQU5QO0FBVU5FLG9CQUFjQyxNQVZSO0FBV05DLG1CQUFhTDtBQVhQLEssUUFhUk0sSSxHQUFPLEUsUUFDUEMsTyxHQUFVO0FBQ1JDLDJCQURRLGlDQUNjQyxDQURkLEVBQ2lCO0FBQ3ZCLFlBQUlDLFFBQVFELEVBQUVFLE1BQUYsQ0FBU0QsS0FBckI7QUFDQUUsZ0JBQVFDLElBQVIsQ0FBYSxxQkFBYixFQUFvQ0gsS0FBcEMsRUFBMkNELENBQTNDO0FBQ0EsYUFBS0ssS0FBTCxDQUFXLGlCQUFYLEVBQThCSixLQUE5QjtBQUNEO0FBTE8sSyxRQU9WSyxRLEdBQVcsRTs7OztFQXRCMEIsZUFBS0MsUzs7a0JBQXZCdEIsUyIsImZpbGUiOiJ6YW4tc2VsZWN0LjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHphblN3aXRjaCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSB7XG4gICAgaXRlbXM6IE9iamVjdCxcbiAgICBuYW1lOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJ1xuICAgIH0sXG4gICAgYWN0aXZlQ29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcjM0ZDNkM2J1xuICAgIH0sXG4gICAgY2hlY2tlZFZhbHVlOiBOdW1iZXIsXG4gICAgY29tcG9uZW50SWQ6IFN0cmluZ1xuICB9XG4gIGRhdGEgPSB7fVxuICBtZXRob2RzID0ge1xuICAgIGhhbmRsZVphblNlbGVjdENoYW5nZShlKSB7XG4gICAgICBsZXQgdmFsdWUgPSBlLmRldGFpbC52YWx1ZVxuICAgICAgY29uc29sZS5pbmZvKCdbemFuOlNlbGVjdDpjaGFuZ2VdJywgdmFsdWUsIGUpXG4gICAgICB0aGlzLiRlbWl0KCd6YW5TZWxlY3RDaGFuZ2UnLCB2YWx1ZSlcbiAgICB9XG4gIH1cbiAgY29tcHV0ZWQgPSB7fVxufVxuIl19