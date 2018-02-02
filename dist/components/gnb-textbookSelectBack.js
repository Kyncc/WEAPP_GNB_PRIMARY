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

var gnbWookbookSelect1 = function (_wepy$component) {
  _inherits(gnbWookbookSelect1, _wepy$component);

  function gnbWookbookSelect1() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, gnbWookbookSelect1);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = gnbWookbookSelect1.__proto__ || Object.getPrototypeOf(gnbWookbookSelect1)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
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
        this.id = this.textbook[e.detail.value].id;
        this.name = this.textbook[e.detail.value].name;
        this.$emit('event', this.id);
      }
    }, _this.watch = {
      value: function value(val) {
        for (var i = 0; i < this.textbook.length; i++) {
          if (val === this.textbook[i].id) {
            this.name = this.textbook[i].name;
            this.value = i;
          }
        }
        this.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return gnbWookbookSelect1;
}(_wepy2.default.component);

exports.default = gnbWookbookSelect1;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImduYi10ZXh0Ym9va1NlbGVjdEJhY2suanMiXSwibmFtZXMiOlsiZ25iV29va2Jvb2tTZWxlY3QxIiwicHJvcHMiLCJ2YWx1ZSIsInR5cGUiLCJTdHJpbmciLCJ0d29XYXkiLCJ0aXRsZSIsImRlZmF1bHQiLCJ0ZXh0Ym9vayIsIkFycmF5IiwiZGF0YSIsIm5hbWUiLCJpZCIsIm1ldGhvZHMiLCJiaW5kUGlja2VyQ2hhbmdlIiwiZSIsImRldGFpbCIsIiRlbWl0Iiwid2F0Y2giLCJ2YWwiLCJpIiwibGVuZ3RoIiwiJGFwcGx5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsa0I7Ozs7Ozs7Ozs7Ozs7OzhNQUNuQkMsSyxHQUFRO0FBQ05DLGFBQU87QUFDTEMsY0FBTUMsTUFERDtBQUVMQyxnQkFBUTtBQUZILE9BREQ7QUFLTkMsYUFBTztBQUNMSCxjQUFNQyxNQUREO0FBRUxHLGlCQUFTO0FBRkosT0FMRDtBQVNOQyxnQkFBVTtBQUNSTCxjQUFNTSxLQURFO0FBRVJGLGlCQUFTO0FBRkQ7QUFUSixLLFFBY1JHLEksR0FBTztBQUNMQyxZQUFNLEVBREQ7QUFFTEMsVUFBSTtBQUZDLEssUUFJUEMsTyxHQUFVO0FBQ1JDLHNCQURRLDRCQUNVQyxDQURWLEVBQ2E7QUFDbkIsYUFBS2IsS0FBTCxHQUFhYSxFQUFFQyxNQUFGLENBQVNkLEtBQXRCO0FBQ0EsYUFBS1UsRUFBTCxHQUFVLEtBQUtKLFFBQUwsQ0FBY08sRUFBRUMsTUFBRixDQUFTZCxLQUF2QixFQUE4QlUsRUFBeEM7QUFDQSxhQUFLRCxJQUFMLEdBQVksS0FBS0gsUUFBTCxDQUFjTyxFQUFFQyxNQUFGLENBQVNkLEtBQXZCLEVBQThCUyxJQUExQztBQUNBLGFBQUtNLEtBQUwsQ0FBVyxPQUFYLEVBQW9CLEtBQUtMLEVBQXpCO0FBQ0Q7QUFOTyxLLFFBUVZNLEssR0FBUTtBQUNOaEIsV0FETSxpQkFDQ2lCLEdBREQsRUFDTTtBQUNWLGFBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUtaLFFBQUwsQ0FBY2EsTUFBbEMsRUFBMENELEdBQTFDLEVBQStDO0FBQzdDLGNBQUlELFFBQVEsS0FBS1gsUUFBTCxDQUFjWSxDQUFkLEVBQWlCUixFQUE3QixFQUFpQztBQUMvQixpQkFBS0QsSUFBTCxHQUFZLEtBQUtILFFBQUwsQ0FBY1ksQ0FBZCxFQUFpQlQsSUFBN0I7QUFDQSxpQkFBS1QsS0FBTCxHQUFha0IsQ0FBYjtBQUNEO0FBQ0Y7QUFDRCxhQUFLRSxNQUFMO0FBQ0Q7QUFUSyxLOzs7O0VBM0JzQyxlQUFLQyxTOztrQkFBaEN2QixrQiIsImZpbGUiOiJnbmItdGV4dGJvb2tTZWxlY3RCYWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBnbmJXb29rYm9va1NlbGVjdDEgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIHByb3BzID0ge1xuICAgIHZhbHVlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB0d29XYXk6IHRydWVcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAn5b2T5YmN6YCJ5oupJ1xuICAgIH0sXG4gICAgdGV4dGJvb2s6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgZGVmYXVsdDogW11cbiAgICB9XG4gIH1cbiAgZGF0YSA9IHtcbiAgICBuYW1lOiAnJyxcbiAgICBpZDogJydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGJpbmRQaWNrZXJDaGFuZ2UgKGUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBlLmRldGFpbC52YWx1ZVxuICAgICAgdGhpcy5pZCA9IHRoaXMudGV4dGJvb2tbZS5kZXRhaWwudmFsdWVdLmlkXG4gICAgICB0aGlzLm5hbWUgPSB0aGlzLnRleHRib29rW2UuZGV0YWlsLnZhbHVlXS5uYW1lXG4gICAgICB0aGlzLiRlbWl0KCdldmVudCcsIHRoaXMuaWQpXG4gICAgfVxuICB9XG4gIHdhdGNoID0ge1xuICAgIHZhbHVlICh2YWwpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50ZXh0Ym9vay5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodmFsID09PSB0aGlzLnRleHRib29rW2ldLmlkKSB7XG4gICAgICAgICAgdGhpcy5uYW1lID0gdGhpcy50ZXh0Ym9va1tpXS5uYW1lXG4gICAgICAgICAgdGhpcy52YWx1ZSA9IGlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cbiAgfVxufVxuIl19