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

var minuiFlex = function (_wepy$component) {
  _inherits(minuiFlex, _wepy$component);

  function minuiFlex() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, minuiFlex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = minuiFlex.__proto__ || Object.getPrototypeOf(minuiFlex)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      // 主轴方向
      dir: {
        type: String,
        value: 'left'
      },
      // 主轴对齐方式
      main: {
        type: String,
        value: 'left'
      },
      // 交叉轴对齐方式
      cross: {
        type: String,
        value: 'stretch'
      },
      // 换行设置
      wrap: {
        type: String,
        value: 'nowrap'
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return minuiFlex;
}(_wepy2.default.component);

exports.default = minuiFlex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInd4Yy1mbGV4LmpzIl0sIm5hbWVzIjpbIm1pbnVpRmxleCIsInByb3BzIiwiZGlyIiwidHlwZSIsIlN0cmluZyIsInZhbHVlIiwibWFpbiIsImNyb3NzIiwid3JhcCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsSyxHQUFRO0FBQ047QUFDQUMsV0FBSztBQUNIQyxjQUFNQyxNQURIO0FBRUhDLGVBQU87QUFGSixPQUZDO0FBTU47QUFDQUMsWUFBTTtBQUNKSCxjQUFNQyxNQURGO0FBRUpDLGVBQU87QUFGSCxPQVBBO0FBV047QUFDQUUsYUFBTztBQUNMSixjQUFNQyxNQUREO0FBRUxDLGVBQU87QUFGRixPQVpEO0FBZ0JOO0FBQ0FHLFlBQU07QUFDSkwsY0FBTUMsTUFERjtBQUVKQyxlQUFPO0FBRkg7QUFqQkEsSzs7OztFQUQ2QixlQUFLSSxTOztrQkFBdkJULFMiLCJmaWxlIjoid3hjLWZsZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBtaW51aUZsZXggZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgcHJvcHMgPSB7XG4gICAgICAvLyDkuLvovbTmlrnlkJFcbiAgICAgIGRpcjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiAnbGVmdCdcbiAgICAgIH0sXG4gICAgICAvLyDkuLvovbTlr7npvZDmlrnlvI9cbiAgICAgIG1haW46IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogJ2xlZnQnXG4gICAgICB9LFxuICAgICAgLy8g5Lqk5Y+J6L205a+56b2Q5pa55byPXG4gICAgICBjcm9zczoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiAnc3RyZXRjaCdcbiAgICAgIH0sXG4gICAgICAvLyDmjaLooYzorr7nva5cbiAgICAgIHdyYXA6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogJ25vd3JhcCdcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==