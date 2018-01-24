'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StatisticsList = function (_wepy$page) {
  _inherits(StatisticsList, _wepy$page);

  function StatisticsList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, StatisticsList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StatisticsList.__proto__ || Object.getPrototypeOf(StatisticsList)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'test'
    }, _this.components = {}, _this.data = {}, _this.methods = {
      previewImage: function previewImage(e) {
        // wepy.previewImage({
        //   current: e.currentTarget.id, // 当前显示图片的http链接
        //   urls: this.data.files // 需要预览的图片http链接列表
        // })
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(StatisticsList, [{
    key: 'onReady',
    value: function onReady() {}
  }]);

  return StatisticsList;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(StatisticsList , 'pages/statistics/list'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuanMiXSwibmFtZXMiOlsiU3RhdGlzdGljc0xpc3QiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJtZXRob2RzIiwicHJldmlld0ltYWdlIiwiZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLGM7Ozs7Ozs7Ozs7Ozs7O3NNQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLFUsR0FBYSxFLFFBSWJDLEksR0FBTyxFLFFBSVBDLE8sR0FBVTtBQUNSQyxrQkFEUSx3QkFDTUMsQ0FETixFQUNTO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDRDtBQU5PLEs7Ozs7OzhCQVNBLENBRVQ7Ozs7RUF4QnlDLGVBQUtDLEk7O2tCQUE1QlIsYyIsImZpbGUiOiJsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0aXN0aWNzTGlzdCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAndGVzdCdcbiAgfVxuXG4gIGNvbXBvbmVudHMgPSB7XG5cbiAgfVxuXG4gIGRhdGEgPSB7XG5cbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgcHJldmlld0ltYWdlIChlKSB7XG4gICAgICAvLyB3ZXB5LnByZXZpZXdJbWFnZSh7XG4gICAgICAvLyAgIGN1cnJlbnQ6IGUuY3VycmVudFRhcmdldC5pZCwgLy8g5b2T5YmN5pi+56S65Zu+54mH55qEaHR0cOmTvuaOpVxuICAgICAgLy8gICB1cmxzOiB0aGlzLmRhdGEuZmlsZXMgLy8g6ZyA6KaB6aKE6KeI55qE5Zu+54mHaHR0cOmTvuaOpeWIl+ihqFxuICAgICAgLy8gfSlcbiAgICB9XG4gIH1cblxuICBvblJlYWR5KCkge1xuXG4gIH1cbn1cbiJdfQ==