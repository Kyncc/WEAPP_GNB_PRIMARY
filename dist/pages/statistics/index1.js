'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Statistics = function (_wepy$page) {
  _inherits(Statistics, _wepy$page);

  function Statistics() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Statistics);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Statistics.__proto__ || Object.getPrototypeOf(Statistics)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '错题本'
    }, _this.components = {}, _this.data = {
      index: 0,
      array: ['美国', '中国', '巴西', '日本']
    }, _this.computed = {}, _this.methods = {
      _intoList: function _intoList(val) {
        wx.navigateTo({
          url: '/pages/statistics/list?name=' + val
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Statistics, [{
    key: 'bindPickerChange',
    value: function bindPickerChange(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value);
      this.setData({
        index: e.detail.value
      });
    }
  }]);

  return Statistics;
}(_wepy2.default.page);

exports.default = Statistics;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4MS5qcyJdLCJuYW1lcyI6WyJTdGF0aXN0aWNzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwiaW5kZXgiLCJhcnJheSIsImNvbXB1dGVkIiwibWV0aG9kcyIsIl9pbnRvTGlzdCIsInZhbCIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsImUiLCJjb25zb2xlIiwibG9nIiwiZGV0YWlsIiwidmFsdWUiLCJzZXREYXRhIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0xDLGFBQU8sQ0FERjtBQUVMQyxhQUFPLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLElBQW5CO0FBRkYsSyxRQUlQQyxRLEdBQVcsRSxRQUNYQyxPLEdBQVU7QUFDUkMsZUFEUSxxQkFDR0MsR0FESCxFQUNRO0FBQ2RDLFdBQUdDLFVBQUgsQ0FBYztBQUNaQyxnREFBb0NIO0FBRHhCLFNBQWQ7QUFHRDtBQUxPLEs7Ozs7O3FDQU9RSSxDLEVBQUc7QUFDbkJDLGNBQVFDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQ0YsRUFBRUcsTUFBRixDQUFTQyxLQUExQztBQUNBLFdBQUtDLE9BQUwsQ0FBYTtBQUNYZCxlQUFPUyxFQUFFRyxNQUFGLENBQVNDO0FBREwsT0FBYjtBQUdEOzs7O0VBdkJxQyxlQUFLRSxJOztrQkFBeEJwQixVIiwiZmlsZSI6ImluZGV4MS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRpc3RpY3MgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfplJnpopjmnKwnXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBpbmRleDogMCxcbiAgICAgIGFycmF5OiBbJ+e+juWbvScsICfkuK3lm70nLCAn5be06KW/JywgJ+aXpeacrCddXG4gICAgfVxuICAgIGNvbXB1dGVkID0ge31cbiAgICBtZXRob2RzID0ge1xuICAgICAgX2ludG9MaXN0ICh2YWwpIHtcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiBgL3BhZ2VzL3N0YXRpc3RpY3MvbGlzdD9uYW1lPSR7dmFsfWBcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgYmluZFBpY2tlckNoYW5nZSAoZSkge1xuICAgICAgY29uc29sZS5sb2coJ3BpY2tlcuWPkemAgemAieaLqeaUueWPmO+8jOaQuuW4puWAvOS4uicsIGUuZGV0YWlsLnZhbHVlKVxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgaW5kZXg6IGUuZGV0YWlsLnZhbHVlXG4gICAgICB9KVxuICAgIH1cbiAgfVxuIl19