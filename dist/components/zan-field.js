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

var zanField = function (_wepy$component) {
  _inherits(zanField, _wepy$component);

  function zanField() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, zanField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = zanField.__proto__ || Object.getPrototypeOf(zanField)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      options: {
        type: Object,
        twoWay: true,
        default: {
          right: true,
          error: true,
          name: '',
          disabled: false,
          value: '',
          type: 'textarea',
          mode: 'wrapped',
          title: '',
          inputType: 'number',
          placeholder: ''
        }
      },
      componentId: String
    }, _this.data = {}, _this.methods = {
      clear: function clear() {
        this.options.value = '  ';
        this.$apply();
        this.options.value = '';
        this.$apply();
      },
      handleZanFieldChange: function handleZanFieldChange(event) {
        event.componentId = this.componentId;

        console.info('[zan:field:change]', event);

        return this.$emit('zanFieldChange', event);
      },
      handleZanFieldFocus: function handleZanFieldFocus(event) {
        event.componentId = this.componentId;

        console.info('[zan:field:focus]', event);

        return this.$emit('zanFieldFocus', event);
      },
      handleZanFieldBlur: function handleZanFieldBlur(event) {
        event.componentId = this.componentId;

        console.info('[zan:field:blur]', event);

        return this.$emit('zanFieldBlur', event);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return zanField;
}(_wepy2.default.component);

exports.default = zanField;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInphbi1maWVsZC5qcyJdLCJuYW1lcyI6WyJ6YW5GaWVsZCIsInByb3BzIiwib3B0aW9ucyIsInR5cGUiLCJPYmplY3QiLCJ0d29XYXkiLCJkZWZhdWx0IiwicmlnaHQiLCJlcnJvciIsIm5hbWUiLCJkaXNhYmxlZCIsInZhbHVlIiwibW9kZSIsInRpdGxlIiwiaW5wdXRUeXBlIiwicGxhY2Vob2xkZXIiLCJjb21wb25lbnRJZCIsIlN0cmluZyIsImRhdGEiLCJtZXRob2RzIiwiY2xlYXIiLCIkYXBwbHkiLCJoYW5kbGVaYW5GaWVsZENoYW5nZSIsImV2ZW50IiwiY29uc29sZSIsImluZm8iLCIkZW1pdCIsImhhbmRsZVphbkZpZWxkRm9jdXMiLCJoYW5kbGVaYW5GaWVsZEJsdXIiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLEssR0FBUTtBQUNOQyxlQUFTO0FBQ1BDLGNBQU1DLE1BREM7QUFFUEMsZ0JBQVEsSUFGRDtBQUdQQyxpQkFBUztBQUNQQyxpQkFBTyxJQURBO0FBRVBDLGlCQUFPLElBRkE7QUFHUEMsZ0JBQU0sRUFIQztBQUlQQyxvQkFBVSxLQUpIO0FBS1BDLGlCQUFPLEVBTEE7QUFNUFIsZ0JBQU0sVUFOQztBQU9QUyxnQkFBTSxTQVBDO0FBUVBDLGlCQUFPLEVBUkE7QUFTUEMscUJBQVcsUUFUSjtBQVVQQyx1QkFBYTtBQVZOO0FBSEYsT0FESDtBQWlCTkMsbUJBQWFDO0FBakJQLEssUUFtQlJDLEksR0FBTyxFLFFBQ1BDLE8sR0FBVTtBQUNSQyxXQURRLG1CQUNBO0FBQ04sYUFBS2xCLE9BQUwsQ0FBYVMsS0FBYixHQUFxQixJQUFyQjtBQUNBLGFBQUtVLE1BQUw7QUFDQSxhQUFLbkIsT0FBTCxDQUFhUyxLQUFiLEdBQXFCLEVBQXJCO0FBQ0EsYUFBS1UsTUFBTDtBQUNELE9BTk87QUFPUkMsMEJBUFEsZ0NBT2FDLEtBUGIsRUFPb0I7QUFDMUJBLGNBQU1QLFdBQU4sR0FBb0IsS0FBS0EsV0FBekI7O0FBRUFRLGdCQUFRQyxJQUFSLENBQWEsb0JBQWIsRUFBbUNGLEtBQW5DOztBQUVBLGVBQU8sS0FBS0csS0FBTCxDQUFXLGdCQUFYLEVBQTZCSCxLQUE3QixDQUFQO0FBQ0QsT0FiTztBQWVSSSx5QkFmUSwrQkFlWUosS0FmWixFQWVtQjtBQUN6QkEsY0FBTVAsV0FBTixHQUFvQixLQUFLQSxXQUF6Qjs7QUFFQVEsZ0JBQVFDLElBQVIsQ0FBYSxtQkFBYixFQUFrQ0YsS0FBbEM7O0FBRUEsZUFBTyxLQUFLRyxLQUFMLENBQVcsZUFBWCxFQUE0QkgsS0FBNUIsQ0FBUDtBQUNELE9BckJPO0FBdUJSSyx3QkF2QlEsOEJBdUJXTCxLQXZCWCxFQXVCa0I7QUFDeEJBLGNBQU1QLFdBQU4sR0FBb0IsS0FBS0EsV0FBekI7O0FBRUFRLGdCQUFRQyxJQUFSLENBQWEsa0JBQWIsRUFBaUNGLEtBQWpDOztBQUVBLGVBQU8sS0FBS0csS0FBTCxDQUFXLGNBQVgsRUFBMkJILEtBQTNCLENBQVA7QUFDRDtBQTdCTyxLOzs7O0VBckIwQixlQUFLTSxTOztrQkFBdEI3QixRIiwiZmlsZSI6Inphbi1maWVsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgemFuRmllbGQgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIHByb3BzID0ge1xuICAgIG9wdGlvbnM6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHR3b1dheTogdHJ1ZSxcbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgcmlnaHQ6IHRydWUsXG4gICAgICAgIGVycm9yOiB0cnVlLFxuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgIHR5cGU6ICd0ZXh0YXJlYScsXG4gICAgICAgIG1vZGU6ICd3cmFwcGVkJyxcbiAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICBpbnB1dFR5cGU6ICdudW1iZXInLFxuICAgICAgICBwbGFjZWhvbGRlcjogJydcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXBvbmVudElkOiBTdHJpbmdcbiAgfVxuICBkYXRhID0ge31cbiAgbWV0aG9kcyA9IHtcbiAgICBjbGVhcigpIHtcbiAgICAgIHRoaXMub3B0aW9ucy52YWx1ZSA9ICcgICdcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIHRoaXMub3B0aW9ucy52YWx1ZSA9ICcnXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfSxcbiAgICBoYW5kbGVaYW5GaWVsZENoYW5nZShldmVudCkge1xuICAgICAgZXZlbnQuY29tcG9uZW50SWQgPSB0aGlzLmNvbXBvbmVudElkXG5cbiAgICAgIGNvbnNvbGUuaW5mbygnW3phbjpmaWVsZDpjaGFuZ2VdJywgZXZlbnQpXG5cbiAgICAgIHJldHVybiB0aGlzLiRlbWl0KCd6YW5GaWVsZENoYW5nZScsIGV2ZW50KVxuICAgIH0sXG5cbiAgICBoYW5kbGVaYW5GaWVsZEZvY3VzKGV2ZW50KSB7XG4gICAgICBldmVudC5jb21wb25lbnRJZCA9IHRoaXMuY29tcG9uZW50SWRcblxuICAgICAgY29uc29sZS5pbmZvKCdbemFuOmZpZWxkOmZvY3VzXScsIGV2ZW50KVxuXG4gICAgICByZXR1cm4gdGhpcy4kZW1pdCgnemFuRmllbGRGb2N1cycsIGV2ZW50KVxuICAgIH0sXG5cbiAgICBoYW5kbGVaYW5GaWVsZEJsdXIoZXZlbnQpIHtcbiAgICAgIGV2ZW50LmNvbXBvbmVudElkID0gdGhpcy5jb21wb25lbnRJZFxuXG4gICAgICBjb25zb2xlLmluZm8oJ1t6YW46ZmllbGQ6Ymx1cl0nLCBldmVudClcblxuICAgICAgcmV0dXJuIHRoaXMuJGVtaXQoJ3phbkZpZWxkQmx1cicsIGV2ZW50KVxuICAgIH1cbiAgfVxufVxuIl19