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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInphbi1maWVsZC5qcyJdLCJuYW1lcyI6WyJ6YW5GaWVsZCIsInByb3BzIiwib3B0aW9ucyIsInR5cGUiLCJPYmplY3QiLCJkZWZhdWx0IiwicmlnaHQiLCJlcnJvciIsIm5hbWUiLCJkaXNhYmxlZCIsInZhbHVlIiwibW9kZSIsInRpdGxlIiwiaW5wdXRUeXBlIiwicGxhY2Vob2xkZXIiLCJjb21wb25lbnRJZCIsIlN0cmluZyIsImRhdGEiLCJtZXRob2RzIiwiY2xlYXIiLCIkYXBwbHkiLCJoYW5kbGVaYW5GaWVsZENoYW5nZSIsImV2ZW50IiwiY29uc29sZSIsImluZm8iLCIkZW1pdCIsImhhbmRsZVphbkZpZWxkRm9jdXMiLCJoYW5kbGVaYW5GaWVsZEJsdXIiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLEssR0FBUTtBQUNOQyxlQUFTO0FBQ1BDLGNBQU1DLE1BREM7QUFFUEMsaUJBQVM7QUFDUEMsaUJBQU8sSUFEQTtBQUVQQyxpQkFBTyxJQUZBO0FBR1BDLGdCQUFNLEVBSEM7QUFJUEMsb0JBQVUsS0FKSDtBQUtQQyxpQkFBTyxFQUxBO0FBTVBQLGdCQUFNLFVBTkM7QUFPUFEsZ0JBQU0sU0FQQztBQVFQQyxpQkFBTyxFQVJBO0FBU1BDLHFCQUFXLFFBVEo7QUFVUEMsdUJBQWE7QUFWTjtBQUZGLE9BREg7QUFnQk5DLG1CQUFhQztBQWhCUCxLLFFBa0JSQyxJLEdBQU8sRSxRQUNQQyxPLEdBQVU7QUFDUkMsV0FEUSxtQkFDQTtBQUNOLGFBQUtqQixPQUFMLENBQWFRLEtBQWIsR0FBcUIsSUFBckI7QUFDQSxhQUFLVSxNQUFMO0FBQ0EsYUFBS2xCLE9BQUwsQ0FBYVEsS0FBYixHQUFxQixFQUFyQjtBQUNBLGFBQUtVLE1BQUw7QUFDRCxPQU5PO0FBT1JDLDBCQVBRLGdDQU9hQyxLQVBiLEVBT29CO0FBQzFCQSxjQUFNUCxXQUFOLEdBQW9CLEtBQUtBLFdBQXpCOztBQUVBUSxnQkFBUUMsSUFBUixDQUFhLG9CQUFiLEVBQW1DRixLQUFuQzs7QUFFQSxlQUFPLEtBQUtHLEtBQUwsQ0FBVyxnQkFBWCxFQUE2QkgsS0FBN0IsQ0FBUDtBQUNELE9BYk87QUFlUkkseUJBZlEsK0JBZVlKLEtBZlosRUFlbUI7QUFDekJBLGNBQU1QLFdBQU4sR0FBb0IsS0FBS0EsV0FBekI7O0FBRUFRLGdCQUFRQyxJQUFSLENBQWEsbUJBQWIsRUFBa0NGLEtBQWxDOztBQUVBLGVBQU8sS0FBS0csS0FBTCxDQUFXLGVBQVgsRUFBNEJILEtBQTVCLENBQVA7QUFDRCxPQXJCTztBQXVCUkssd0JBdkJRLDhCQXVCV0wsS0F2QlgsRUF1QmtCO0FBQ3hCQSxjQUFNUCxXQUFOLEdBQW9CLEtBQUtBLFdBQXpCOztBQUVBUSxnQkFBUUMsSUFBUixDQUFhLGtCQUFiLEVBQWlDRixLQUFqQzs7QUFFQSxlQUFPLEtBQUtHLEtBQUwsQ0FBVyxjQUFYLEVBQTJCSCxLQUEzQixDQUFQO0FBQ0Q7QUE3Qk8sSzs7OztFQXBCMEIsZUFBS00sUzs7a0JBQXRCNUIsUSIsImZpbGUiOiJ6YW4tZmllbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHphbkZpZWxkIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHtcbiAgICBvcHRpb25zOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHJpZ2h0OiB0cnVlLFxuICAgICAgICBlcnJvcjogdHJ1ZSxcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICB0eXBlOiAndGV4dGFyZWEnLFxuICAgICAgICBtb2RlOiAnd3JhcHBlZCcsXG4gICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgaW5wdXRUeXBlOiAnbnVtYmVyJyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICcnXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wb25lbnRJZDogU3RyaW5nXG4gIH1cbiAgZGF0YSA9IHt9XG4gIG1ldGhvZHMgPSB7XG4gICAgY2xlYXIoKSB7XG4gICAgICB0aGlzLm9wdGlvbnMudmFsdWUgPSAnICAnXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB0aGlzLm9wdGlvbnMudmFsdWUgPSAnJ1xuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0sXG4gICAgaGFuZGxlWmFuRmllbGRDaGFuZ2UoZXZlbnQpIHtcbiAgICAgIGV2ZW50LmNvbXBvbmVudElkID0gdGhpcy5jb21wb25lbnRJZFxuXG4gICAgICBjb25zb2xlLmluZm8oJ1t6YW46ZmllbGQ6Y2hhbmdlXScsIGV2ZW50KVxuXG4gICAgICByZXR1cm4gdGhpcy4kZW1pdCgnemFuRmllbGRDaGFuZ2UnLCBldmVudClcbiAgICB9LFxuXG4gICAgaGFuZGxlWmFuRmllbGRGb2N1cyhldmVudCkge1xuICAgICAgZXZlbnQuY29tcG9uZW50SWQgPSB0aGlzLmNvbXBvbmVudElkXG5cbiAgICAgIGNvbnNvbGUuaW5mbygnW3phbjpmaWVsZDpmb2N1c10nLCBldmVudClcblxuICAgICAgcmV0dXJuIHRoaXMuJGVtaXQoJ3phbkZpZWxkRm9jdXMnLCBldmVudClcbiAgICB9LFxuXG4gICAgaGFuZGxlWmFuRmllbGRCbHVyKGV2ZW50KSB7XG4gICAgICBldmVudC5jb21wb25lbnRJZCA9IHRoaXMuY29tcG9uZW50SWRcblxuICAgICAgY29uc29sZS5pbmZvKCdbemFuOmZpZWxkOmJsdXJdJywgZXZlbnQpXG5cbiAgICAgIHJldHVybiB0aGlzLiRlbWl0KCd6YW5GaWVsZEJsdXInLCBldmVudClcbiAgICB9XG4gIH1cbn1cbiJdfQ==