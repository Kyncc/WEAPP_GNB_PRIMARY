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

var zanSearch = function (_wepy$component) {
  _inherits(zanSearch, _wepy$component);

  function zanSearch() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, zanSearch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = zanSearch.__proto__ || Object.getPrototypeOf(zanSearch)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      options: {
        type: Object,
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

  return zanSearch;
}(_wepy2.default.component);

exports.default = zanSearch;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImduYi1zZWFyY2hCYXIuanMiXSwibmFtZXMiOlsiemFuU2VhcmNoIiwicHJvcHMiLCJvcHRpb25zIiwidHlwZSIsIk9iamVjdCIsImRlZmF1bHQiLCJyaWdodCIsImVycm9yIiwibmFtZSIsImRpc2FibGVkIiwidmFsdWUiLCJtb2RlIiwidGl0bGUiLCJpbnB1dFR5cGUiLCJwbGFjZWhvbGRlciIsImNvbXBvbmVudElkIiwiU3RyaW5nIiwiZGF0YSIsIm1ldGhvZHMiLCJjbGVhciIsIiRhcHBseSIsImhhbmRsZVphbkZpZWxkQ2hhbmdlIiwiZXZlbnQiLCJjb25zb2xlIiwiaW5mbyIsIiRlbWl0IiwiaGFuZGxlWmFuRmllbGRGb2N1cyIsImhhbmRsZVphbkZpZWxkQmx1ciIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsSyxHQUFRO0FBQ05DLGVBQVM7QUFDUEMsY0FBTUMsTUFEQztBQUVQQyxpQkFBUztBQUNQQyxpQkFBTyxJQURBO0FBRVBDLGlCQUFPLElBRkE7QUFHUEMsZ0JBQU0sRUFIQztBQUlQQyxvQkFBVSxLQUpIO0FBS1BDLGlCQUFPLEVBTEE7QUFNUFAsZ0JBQU0sVUFOQztBQU9QUSxnQkFBTSxTQVBDO0FBUVBDLGlCQUFPLEVBUkE7QUFTUEMscUJBQVcsUUFUSjtBQVVQQyx1QkFBYTtBQVZOO0FBRkYsT0FESDtBQWdCTkMsbUJBQWFDO0FBaEJQLEssUUFrQlJDLEksR0FBTyxFLFFBQ1BDLE8sR0FBVTtBQUNSQyxXQURRLG1CQUNBO0FBQ04sYUFBS2pCLE9BQUwsQ0FBYVEsS0FBYixHQUFxQixJQUFyQjtBQUNBLGFBQUtVLE1BQUw7QUFDQSxhQUFLbEIsT0FBTCxDQUFhUSxLQUFiLEdBQXFCLEVBQXJCO0FBQ0EsYUFBS1UsTUFBTDtBQUNELE9BTk87QUFPUkMsMEJBUFEsZ0NBT2FDLEtBUGIsRUFPb0I7QUFDMUJBLGNBQU1QLFdBQU4sR0FBb0IsS0FBS0EsV0FBekI7O0FBRUFRLGdCQUFRQyxJQUFSLENBQWEsb0JBQWIsRUFBbUNGLEtBQW5DOztBQUVBLGVBQU8sS0FBS0csS0FBTCxDQUFXLGdCQUFYLEVBQTZCSCxLQUE3QixDQUFQO0FBQ0QsT0FiTztBQWVSSSx5QkFmUSwrQkFlWUosS0FmWixFQWVtQjtBQUN6QkEsY0FBTVAsV0FBTixHQUFvQixLQUFLQSxXQUF6Qjs7QUFFQVEsZ0JBQVFDLElBQVIsQ0FBYSxtQkFBYixFQUFrQ0YsS0FBbEM7O0FBRUEsZUFBTyxLQUFLRyxLQUFMLENBQVcsZUFBWCxFQUE0QkgsS0FBNUIsQ0FBUDtBQUNELE9BckJPO0FBdUJSSyx3QkF2QlEsOEJBdUJXTCxLQXZCWCxFQXVCa0I7QUFDeEJBLGNBQU1QLFdBQU4sR0FBb0IsS0FBS0EsV0FBekI7O0FBRUFRLGdCQUFRQyxJQUFSLENBQWEsa0JBQWIsRUFBaUNGLEtBQWpDOztBQUVBLGVBQU8sS0FBS0csS0FBTCxDQUFXLGNBQVgsRUFBMkJILEtBQTNCLENBQVA7QUFDRDtBQTdCTyxLOzs7O0VBcEIyQixlQUFLTSxTOztrQkFBdkI1QixTIiwiZmlsZSI6ImduYi1zZWFyY2hCYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHphblNlYXJjaCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSB7XG4gICAgb3B0aW9uczoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICByaWdodDogdHJ1ZSxcbiAgICAgICAgZXJyb3I6IHRydWUsXG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgdHlwZTogJ3RleHRhcmVhJyxcbiAgICAgICAgbW9kZTogJ3dyYXBwZWQnLFxuICAgICAgICB0aXRsZTogJycsXG4gICAgICAgIGlucHV0VHlwZTogJ251bWJlcicsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnJ1xuICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50SWQ6IFN0cmluZ1xuICB9XG4gIGRhdGEgPSB7fVxuICBtZXRob2RzID0ge1xuICAgIGNsZWFyKCkge1xuICAgICAgdGhpcy5vcHRpb25zLnZhbHVlID0gJyAgJ1xuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgdGhpcy5vcHRpb25zLnZhbHVlID0gJydcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9LFxuICAgIGhhbmRsZVphbkZpZWxkQ2hhbmdlKGV2ZW50KSB7XG4gICAgICBldmVudC5jb21wb25lbnRJZCA9IHRoaXMuY29tcG9uZW50SWRcblxuICAgICAgY29uc29sZS5pbmZvKCdbemFuOmZpZWxkOmNoYW5nZV0nLCBldmVudClcblxuICAgICAgcmV0dXJuIHRoaXMuJGVtaXQoJ3phbkZpZWxkQ2hhbmdlJywgZXZlbnQpXG4gICAgfSxcblxuICAgIGhhbmRsZVphbkZpZWxkRm9jdXMoZXZlbnQpIHtcbiAgICAgIGV2ZW50LmNvbXBvbmVudElkID0gdGhpcy5jb21wb25lbnRJZFxuXG4gICAgICBjb25zb2xlLmluZm8oJ1t6YW46ZmllbGQ6Zm9jdXNdJywgZXZlbnQpXG5cbiAgICAgIHJldHVybiB0aGlzLiRlbWl0KCd6YW5GaWVsZEZvY3VzJywgZXZlbnQpXG4gICAgfSxcblxuICAgIGhhbmRsZVphbkZpZWxkQmx1cihldmVudCkge1xuICAgICAgZXZlbnQuY29tcG9uZW50SWQgPSB0aGlzLmNvbXBvbmVudElkXG5cbiAgICAgIGNvbnNvbGUuaW5mbygnW3phbjpmaWVsZDpibHVyXScsIGV2ZW50KVxuXG4gICAgICByZXR1cm4gdGhpcy4kZW1pdCgnemFuRmllbGRCbHVyJywgZXZlbnQpXG4gICAgfVxuICB9XG59XG4iXX0=