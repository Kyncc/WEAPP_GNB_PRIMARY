'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
      key: {
        type: String,
        twoWay: true
      },
      value: {
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
    }, _this.data = {
      name: '',
      id: ''
    }, _this.methods = {
      bindPickerChange: function bindPickerChange(e) {
        this.value = e.detail.value;
        this.$emit('event', this.key);
      }
    }, _this.watch = {
      value: function value(val) {
        this.value = val;
        this.name = this.textbook[val].name;
        this.key = this.textbook[val].id;
        this.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(gnbWookbookSelect, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log(this.key);
      // this.name = this.textbook[this.value].name
      // this.key = this.textbook[this.value].id
      // this.$apply()
    }
  }]);

  return gnbWookbookSelect;
}(_wepy2.default.component);

exports.default = gnbWookbookSelect;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImduYi10ZXh0Ym9va1NlbGVjdC4xLmpzIl0sIm5hbWVzIjpbImduYldvb2tib29rU2VsZWN0IiwicHJvcHMiLCJrZXkiLCJ0eXBlIiwiU3RyaW5nIiwidHdvV2F5IiwidmFsdWUiLCJ0aXRsZSIsImRlZmF1bHQiLCJ0ZXh0Ym9vayIsIkFycmF5IiwiZGF0YSIsIm5hbWUiLCJpZCIsIm1ldGhvZHMiLCJiaW5kUGlja2VyQ2hhbmdlIiwiZSIsImRldGFpbCIsIiRlbWl0Iiwid2F0Y2giLCJ2YWwiLCIkYXBwbHkiLCJjb25zb2xlIiwibG9nIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxpQjs7Ozs7Ozs7Ozs7Ozs7NE1BQ25CQyxLLEdBQVE7QUFDTkMsV0FBSztBQUNIQyxjQUFNQyxNQURIO0FBRUhDLGdCQUFRO0FBRkwsT0FEQztBQUtOQyxhQUFPO0FBQ0xILGNBQU1DLE1BREQ7QUFFTEMsZ0JBQVE7QUFGSCxPQUxEO0FBU05FLGFBQU87QUFDTEosY0FBTUMsTUFERDtBQUVMSSxpQkFBUztBQUZKLE9BVEQ7QUFhTkMsZ0JBQVU7QUFDUk4sY0FBTU8sS0FERTtBQUVSRixpQkFBUztBQUZEO0FBYkosSyxRQWtCUkcsSSxHQUFPO0FBQ0xDLFlBQU0sRUFERDtBQUVMQyxVQUFJO0FBRkMsSyxRQUlQQyxPLEdBQVU7QUFDUkMsc0JBRFEsNEJBQ1VDLENBRFYsRUFDYTtBQUNuQixhQUFLVixLQUFMLEdBQWFVLEVBQUVDLE1BQUYsQ0FBU1gsS0FBdEI7QUFDQSxhQUFLWSxLQUFMLENBQVcsT0FBWCxFQUFvQixLQUFLaEIsR0FBekI7QUFDRDtBQUpPLEssUUFNVmlCLEssR0FBUTtBQUNOYixXQURNLGlCQUNDYyxHQURELEVBQ007QUFDVixhQUFLZCxLQUFMLEdBQWFjLEdBQWI7QUFDQSxhQUFLUixJQUFMLEdBQVksS0FBS0gsUUFBTCxDQUFjVyxHQUFkLEVBQW1CUixJQUEvQjtBQUNBLGFBQUtWLEdBQUwsR0FBVyxLQUFLTyxRQUFMLENBQWNXLEdBQWQsRUFBbUJQLEVBQTlCO0FBQ0EsYUFBS1EsTUFBTDtBQUNEO0FBTkssSzs7Ozs7NkJBUUU7QUFDUkMsY0FBUUMsR0FBUixDQUFZLEtBQUtyQixHQUFqQjtBQUNBO0FBQ0E7QUFDQTtBQUNEOzs7O0VBMUM0QyxlQUFLc0IsUzs7a0JBQS9CeEIsaUIiLCJmaWxlIjoiZ25iLXRleHRib29rU2VsZWN0LjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGduYldvb2tib29rU2VsZWN0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHtcbiAgICBrZXk6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHR3b1dheTogdHJ1ZVxuICAgIH0sXG4gICAgdmFsdWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHR3b1dheTogdHJ1ZVxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICflvZPliY3pgInmi6knXG4gICAgfSxcbiAgICB0ZXh0Ym9vazoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiBbXVxuICAgIH1cbiAgfVxuICBkYXRhID0ge1xuICAgIG5hbWU6ICcnLFxuICAgIGlkOiAnJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgYmluZFBpY2tlckNoYW5nZSAoZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICB0aGlzLiRlbWl0KCdldmVudCcsIHRoaXMua2V5KVxuICAgIH1cbiAgfVxuICB3YXRjaCA9IHtcbiAgICB2YWx1ZSAodmFsKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsXG4gICAgICB0aGlzLm5hbWUgPSB0aGlzLnRleHRib29rW3ZhbF0ubmFtZVxuICAgICAgdGhpcy5rZXkgPSB0aGlzLnRleHRib29rW3ZhbF0uaWRcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG4gIH1cbiAgb25Mb2FkICgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmtleSlcbiAgICAvLyB0aGlzLm5hbWUgPSB0aGlzLnRleHRib29rW3RoaXMudmFsdWVdLm5hbWVcbiAgICAvLyB0aGlzLmtleSA9IHRoaXMudGV4dGJvb2tbdGhpcy52YWx1ZV0uaWRcbiAgICAvLyB0aGlzLiRhcHBseSgpXG4gIH1cbn1cbiJdfQ==