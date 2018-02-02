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

var gnbWookbookSelect = function (_wepy$component) {
  _inherits(gnbWookbookSelect, _wepy$component);

  function gnbWookbookSelect() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, gnbWookbookSelect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = gnbWookbookSelect.__proto__ || Object.getPrototypeOf(gnbWookbookSelect)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      value: {
        type: String,
        twoWay: true
      },
      key: {
        type: String,
        twoWay: true
      },
      title: {
        type: String,
        default: '当前选择'
      },
      textbook: {
        type: Array,
        default: []
      }
    }, _this.methods = {
      bindPickerChange: function bindPickerChange(e) {
        this.value = e.detail.value;
        this.key = this.textbook[e.detail.value].id;
        this.$emit('event', this.key);
        this.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return gnbWookbookSelect;
}(_wepy2.default.component);

exports.default = gnbWookbookSelect;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImduYi10ZXh0Ym9va1NlbGVjdC5qcyJdLCJuYW1lcyI6WyJnbmJXb29rYm9va1NlbGVjdCIsInByb3BzIiwidmFsdWUiLCJ0eXBlIiwiU3RyaW5nIiwidHdvV2F5Iiwia2V5IiwidGl0bGUiLCJkZWZhdWx0IiwidGV4dGJvb2siLCJBcnJheSIsIm1ldGhvZHMiLCJiaW5kUGlja2VyQ2hhbmdlIiwiZSIsImRldGFpbCIsImlkIiwiJGVtaXQiLCIkYXBwbHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxpQjs7Ozs7Ozs7Ozs7Ozs7NE1BQ25CQyxLLEdBQVE7QUFDTkMsYUFBTztBQUNMQyxjQUFNQyxNQUREO0FBRUxDLGdCQUFRO0FBRkgsT0FERDtBQUtOQyxXQUFLO0FBQ0hILGNBQU1DLE1BREg7QUFFSEMsZ0JBQVE7QUFGTCxPQUxDO0FBU05FLGFBQU87QUFDTEosY0FBTUMsTUFERDtBQUVMSSxpQkFBUztBQUZKLE9BVEQ7QUFhTkMsZ0JBQVU7QUFDUk4sY0FBTU8sS0FERTtBQUVSRixpQkFBUztBQUZEO0FBYkosSyxRQWtCUkcsTyxHQUFVO0FBQ1JDLHNCQURRLDRCQUNVQyxDQURWLEVBQ2E7QUFDbkIsYUFBS1gsS0FBTCxHQUFhVyxFQUFFQyxNQUFGLENBQVNaLEtBQXRCO0FBQ0EsYUFBS0ksR0FBTCxHQUFXLEtBQUtHLFFBQUwsQ0FBY0ksRUFBRUMsTUFBRixDQUFTWixLQUF2QixFQUE4QmEsRUFBekM7QUFDQSxhQUFLQyxLQUFMLENBQVcsT0FBWCxFQUFvQixLQUFLVixHQUF6QjtBQUNBLGFBQUtXLE1BQUw7QUFDRDtBQU5PLEs7Ozs7RUFuQm1DLGVBQUtDLFM7O2tCQUEvQmxCLGlCIiwiZmlsZSI6ImduYi10ZXh0Ym9va1NlbGVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZ25iV29va2Jvb2tTZWxlY3QgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIHByb3BzID0ge1xuICAgIHZhbHVlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB0d29XYXk6IHRydWVcbiAgICB9LFxuICAgIGtleToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdHdvV2F5OiB0cnVlXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ+W9k+WJjemAieaLqSdcbiAgICB9LFxuICAgIHRleHRib29rOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIGRlZmF1bHQ6IFtdXG4gICAgfVxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgYmluZFBpY2tlckNoYW5nZSAoZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICB0aGlzLmtleSA9IHRoaXMudGV4dGJvb2tbZS5kZXRhaWwudmFsdWVdLmlkXG4gICAgICB0aGlzLiRlbWl0KCdldmVudCcsIHRoaXMua2V5KVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cbiAgfVxufVxuIl19