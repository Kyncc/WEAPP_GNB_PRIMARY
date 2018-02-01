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

var gnbSearchBar = function (_wepy$component) {
  _inherits(gnbSearchBar, _wepy$component);

  function gnbSearchBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, gnbSearchBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = gnbSearchBar.__proto__ || Object.getPrototypeOf(gnbSearchBar)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      value: {
        type: Number,
        twoWay: true
      }
    }, _this.data = {
      name: '',
      textbookArray: [{
        id: 3,
        name: '三年级上'
      }, {
        id: 4,
        name: '四年级上'
      }, {
        id: 5,
        name: '五年级上'
      }, {
        id: 6,
        name: '六年级上'
      }]
    }, _this.methods = {
      bindPickerChange: function bindPickerChange(e) {
        this.value = e.detail.value;
        this.$emit('event', Number(this.value) + 3);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return gnbSearchBar;
}(_wepy2.default.component);

exports.default = gnbSearchBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImduYi1zZWFyY2hCYXIuanMiXSwibmFtZXMiOlsiZ25iU2VhcmNoQmFyIiwicHJvcHMiLCJ2YWx1ZSIsInR5cGUiLCJOdW1iZXIiLCJ0d29XYXkiLCJkYXRhIiwibmFtZSIsInRleHRib29rQXJyYXkiLCJpZCIsIm1ldGhvZHMiLCJiaW5kUGlja2VyQ2hhbmdlIiwiZSIsImRldGFpbCIsIiRlbWl0IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsWTs7Ozs7Ozs7Ozs7Ozs7a01BQ25CQyxLLEdBQVE7QUFDTkMsYUFBTztBQUNMQyxjQUFNQyxNQUREO0FBRUxDLGdCQUFRO0FBRkg7QUFERCxLLFFBT1JDLEksR0FBTztBQUNMQyxZQUFNLEVBREQ7QUFFTEMscUJBQWUsQ0FDYjtBQUNFQyxZQUFJLENBRE47QUFFRUYsY0FBTTtBQUZSLE9BRGEsRUFLYjtBQUNFRSxZQUFJLENBRE47QUFFRUYsY0FBTTtBQUZSLE9BTGEsRUFTYjtBQUNFRSxZQUFJLENBRE47QUFFRUYsY0FBTTtBQUZSLE9BVGEsRUFhYjtBQUNFRSxZQUFJLENBRE47QUFFRUYsY0FBTTtBQUZSLE9BYmE7QUFGVixLLFFBcUJQRyxPLEdBQVU7QUFDUkMsc0JBRFEsNEJBQ1VDLENBRFYsRUFDYTtBQUNuQixhQUFLVixLQUFMLEdBQWFVLEVBQUVDLE1BQUYsQ0FBU1gsS0FBdEI7QUFDQSxhQUFLWSxLQUFMLENBQVcsT0FBWCxFQUFvQlYsT0FBTyxLQUFLRixLQUFaLElBQXFCLENBQXpDO0FBQ0Q7QUFKTyxLOzs7O0VBN0I4QixlQUFLYSxTOztrQkFBMUJmLFkiLCJmaWxlIjoiZ25iLXNlYXJjaEJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZ25iU2VhcmNoQmFyIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHtcbiAgICB2YWx1ZToge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgdHdvV2F5OiB0cnVlXG4gICAgfVxuICB9XG5cbiAgZGF0YSA9IHtcbiAgICBuYW1lOiAnJyxcbiAgICB0ZXh0Ym9va0FycmF5OiBbXG4gICAgICB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICBuYW1lOiAn5LiJ5bm057qn5LiKJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDQsXG4gICAgICAgIG5hbWU6ICflm5vlubTnuqfkuIonXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogNSxcbiAgICAgICAgbmFtZTogJ+S6lOW5tOe6p+S4iidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA2LFxuICAgICAgICBuYW1lOiAn5YWt5bm057qn5LiKJ1xuICAgICAgfVxuICAgIF1cbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGJpbmRQaWNrZXJDaGFuZ2UgKGUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBlLmRldGFpbC52YWx1ZVxuICAgICAgdGhpcy4kZW1pdCgnZXZlbnQnLCBOdW1iZXIodGhpcy52YWx1ZSkgKyAzKVxuICAgIH1cbiAgfVxufVxuIl19