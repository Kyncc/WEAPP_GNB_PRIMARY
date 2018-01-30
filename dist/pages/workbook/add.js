'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WorkbookAdd = function (_wepy$page) {
  _inherits(WorkbookAdd, _wepy$page);

  function WorkbookAdd() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, WorkbookAdd);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WorkbookAdd.__proto__ || Object.getPrototypeOf(WorkbookAdd)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      inputShowed: false,
      inputVal: ''
    }, _this.methods = {
      showInput: function showInput() {
        this.inputShowed = true;
      },
      hideInput: function hideInput() {
        this.inputVal = '';
        this.inputShowed = false;
      },
      clearInput: function clearInput() {
        this.inputVal = '';
      },
      inputTyping: function inputTyping(e) {
        this.inputVal = e.detail.value;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return WorkbookAdd;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(WorkbookAdd , 'pages/workbook/add'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC5qcyJdLCJuYW1lcyI6WyJXb3JrYm9va0FkZCIsImRhdGEiLCJpbnB1dFNob3dlZCIsImlucHV0VmFsIiwibWV0aG9kcyIsInNob3dJbnB1dCIsImhpZGVJbnB1dCIsImNsZWFySW5wdXQiLCJpbnB1dFR5cGluZyIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxXOzs7Ozs7Ozs7Ozs7OztnTUFDbkJDLEksR0FBTztBQUNMQyxtQkFBYSxLQURSO0FBRUxDLGdCQUFVO0FBRkwsSyxRQUtQQyxPLEdBQVU7QUFDUkMsZUFEUSx1QkFDSztBQUNYLGFBQUtILFdBQUwsR0FBbUIsSUFBbkI7QUFDRCxPQUhPO0FBSVJJLGVBSlEsdUJBSUs7QUFDWCxhQUFLSCxRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsYUFBS0QsV0FBTCxHQUFtQixLQUFuQjtBQUNELE9BUE87QUFRUkssZ0JBUlEsd0JBUU07QUFDWixhQUFLSixRQUFMLEdBQWdCLEVBQWhCO0FBQ0QsT0FWTztBQVdSSyxpQkFYUSx1QkFXS0MsQ0FYTCxFQVdRO0FBQ2QsYUFBS04sUUFBTCxHQUFnQk0sRUFBRUMsTUFBRixDQUFTQyxLQUF6QjtBQUNEO0FBYk8sSzs7OztFQU42QixlQUFLQyxJOztrQkFBekJaLFciLCJmaWxlIjoiYWRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JrYm9va0FkZCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGRhdGEgPSB7XG4gICAgaW5wdXRTaG93ZWQ6IGZhbHNlLFxuICAgIGlucHV0VmFsOiAnJ1xuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBzaG93SW5wdXQgKCkge1xuICAgICAgdGhpcy5pbnB1dFNob3dlZCA9IHRydWVcbiAgICB9LFxuICAgIGhpZGVJbnB1dCAoKSB7XG4gICAgICB0aGlzLmlucHV0VmFsID0gJydcbiAgICAgIHRoaXMuaW5wdXRTaG93ZWQgPSBmYWxzZVxuICAgIH0sXG4gICAgY2xlYXJJbnB1dCAoKSB7XG4gICAgICB0aGlzLmlucHV0VmFsID0gJydcbiAgICB9LFxuICAgIGlucHV0VHlwaW5nIChlKSB7XG4gICAgICB0aGlzLmlucHV0VmFsID0gZS5kZXRhaWwudmFsdWVcbiAgICB9XG4gIH1cbn1cbiJdfQ==