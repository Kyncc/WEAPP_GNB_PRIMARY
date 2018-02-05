'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _utli = require('./../common/libs/js/utli.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InfiniteScroll = function (_wepy$component) {
  _inherits(InfiniteScroll, _wepy$component);

  function InfiniteScroll() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, InfiniteScroll);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InfiniteScroll.__proto__ || Object.getPrototypeOf(InfiniteScroll)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      height: {
        type: String,
        default: '100vh'
      },
      scrollDisabled: {
        // 若为真，则无限滚动不会被触发
        type: Boolean,
        default: false
      },
      scrollDistance: {
        // 触发加载方法的滚动距离阈值（像素）
        type: Number,
        default: 20
      },
      // 是否正在处于下拉刷新中
      isOnPullDownRefresh: {
        type: Boolean,
        default: false
      },
      isNothing: {
        // 数据加载是否完了
        type: Boolean,
        default: false
      }
    }, _this.methods = {
      scrolltoupper: (0, _utli.Throttle)(function () {
        if (_this.scrollDisabled || _this.isOnPullDownRefresh) return;
        _this.$emit('loadMore');
      }, 200)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return InfiniteScroll;
}(_wepy2.default.component);

exports.default = InfiniteScroll;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImduYi1pbmZpbml0ZVNjcm9sbC5qcyJdLCJuYW1lcyI6WyJJbmZpbml0ZVNjcm9sbCIsInByb3BzIiwiaGVpZ2h0IiwidHlwZSIsIlN0cmluZyIsImRlZmF1bHQiLCJzY3JvbGxEaXNhYmxlZCIsIkJvb2xlYW4iLCJzY3JvbGxEaXN0YW5jZSIsIk51bWJlciIsImlzT25QdWxsRG93blJlZnJlc2giLCJpc05vdGhpbmciLCJtZXRob2RzIiwic2Nyb2xsdG91cHBlciIsIiRlbWl0IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsYzs7Ozs7Ozs7Ozs7Ozs7c01BQ25CQyxLLEdBQVE7QUFDTkMsY0FBUTtBQUNOQyxjQUFNQyxNQURBO0FBRU5DLGlCQUFTO0FBRkgsT0FERjtBQUtOQyxzQkFBZ0I7QUFDZDtBQUNBSCxjQUFNSSxPQUZRO0FBR2RGLGlCQUFTO0FBSEssT0FMVjtBQVVORyxzQkFBZ0I7QUFDZDtBQUNBTCxjQUFNTSxNQUZRO0FBR2RKLGlCQUFTO0FBSEssT0FWVjtBQWVOO0FBQ0FLLDJCQUFxQjtBQUNuQlAsY0FBTUksT0FEYTtBQUVuQkYsaUJBQVM7QUFGVSxPQWhCZjtBQW9CTk0saUJBQVc7QUFDVDtBQUNBUixjQUFNSSxPQUZHO0FBR1RGLGlCQUFTO0FBSEE7QUFwQkwsSyxRQTBCUk8sTyxHQUFVO0FBQ1JDLHFCQUFlLG9CQUFTLFlBQU07QUFDNUIsWUFBSSxNQUFLUCxjQUFMLElBQXVCLE1BQUtJLG1CQUFoQyxFQUFxRDtBQUNyRCxjQUFLSSxLQUFMLENBQVcsVUFBWDtBQUNELE9BSGMsRUFHWixHQUhZO0FBRFAsSzs7OztFQTNCZ0MsZUFBS0MsUzs7a0JBQTVCZixjIiwiZmlsZSI6ImduYi1pbmZpbml0ZVNjcm9sbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCB7IFRocm90dGxlIH0gZnJvbSAnQC9jb21tb24vbGlicy9qcy91dGxpJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmZpbml0ZVNjcm9sbCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSB7XG4gICAgaGVpZ2h0OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnMTAwdmgnXG4gICAgfSxcbiAgICBzY3JvbGxEaXNhYmxlZDoge1xuICAgICAgLy8g6Iul5Li655yf77yM5YiZ5peg6ZmQ5rua5Yqo5LiN5Lya6KKr6Kem5Y+RXG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIHNjcm9sbERpc3RhbmNlOiB7XG4gICAgICAvLyDop6blj5HliqDovb3mlrnms5XnmoTmu5rliqjot53nprvpmIjlgLzvvIjlg4/ntKDvvIlcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDIwXG4gICAgfSxcbiAgICAvLyDmmK/lkKbmraPlnKjlpITkuo7kuIvmi4nliLfmlrDkuK1cbiAgICBpc09uUHVsbERvd25SZWZyZXNoOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIGlzTm90aGluZzoge1xuICAgICAgLy8g5pWw5o2u5Yqg6L295piv5ZCm5a6M5LqGXG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9XG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBzY3JvbGx0b3VwcGVyOiBUaHJvdHRsZSgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5zY3JvbGxEaXNhYmxlZCB8fCB0aGlzLmlzT25QdWxsRG93blJlZnJlc2gpIHJldHVyblxuICAgICAgdGhpcy4kZW1pdCgnbG9hZE1vcmUnKVxuICAgIH0sIDIwMClcbiAgfVxufVxuIl19