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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbnVpLWZsZXguanMiXSwibmFtZXMiOlsibWludWlGbGV4IiwicHJvcHMiLCJkaXIiLCJ0eXBlIiwiU3RyaW5nIiwidmFsdWUiLCJtYWluIiwiY3Jvc3MiLCJ3cmFwIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxLLEdBQVE7QUFDTjtBQUNBQyxXQUFLO0FBQ0hDLGNBQU1DLE1BREg7QUFFSEMsZUFBTztBQUZKLE9BRkM7QUFNTjtBQUNBQyxZQUFNO0FBQ0pILGNBQU1DLE1BREY7QUFFSkMsZUFBTztBQUZILE9BUEE7QUFXTjtBQUNBRSxhQUFPO0FBQ0xKLGNBQU1DLE1BREQ7QUFFTEMsZUFBTztBQUZGLE9BWkQ7QUFnQk47QUFDQUcsWUFBTTtBQUNKTCxjQUFNQyxNQURGO0FBRUpDLGVBQU87QUFGSDtBQWpCQSxLOzs7O0VBRDZCLGVBQUtJLFM7O2tCQUF2QlQsUyIsImZpbGUiOiJtaW51aS1mbGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgbWludWlGbGV4IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIHByb3BzID0ge1xuICAgICAgLy8g5Li76L205pa55ZCRXG4gICAgICBkaXI6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogJ2xlZnQnXG4gICAgICB9LFxuICAgICAgLy8g5Li76L205a+56b2Q5pa55byPXG4gICAgICBtYWluOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICdsZWZ0J1xuICAgICAgfSxcbiAgICAgIC8vIOS6pOWPiei9tOWvuem9kOaWueW8j1xuICAgICAgY3Jvc3M6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogJ3N0cmV0Y2gnXG4gICAgICB9LFxuICAgICAgLy8g5o2i6KGM6K6+572uXG4gICAgICB3cmFwOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICdub3dyYXAnXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=