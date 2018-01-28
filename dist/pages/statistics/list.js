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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StatisticsList.__proto__ || Object.getPrototypeOf(StatisticsList)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.data = {}, _this.methods = {
      previewImage: function previewImage(e) {
        // wepy.previewImage({
        //   current: e.currentTarget.id, // 当前显示图片的http链接
        //   urls: this.data.files // 需要预览的图片http链接列表
        // })
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(StatisticsList, [{
    key: 'onLoad',
    value: function onLoad(options) {
      wx.setNavigationBarTitle({ title: options.name });
    }
  }, {
    key: 'onReady',
    value: function onReady() {}
  }]);

  return StatisticsList;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(StatisticsList , 'pages/statistics/list'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuanMiXSwibmFtZXMiOlsiU3RhdGlzdGljc0xpc3QiLCJjb21wb25lbnRzIiwiZGF0YSIsIm1ldGhvZHMiLCJwcmV2aWV3SW1hZ2UiLCJlIiwib3B0aW9ucyIsInd4Iiwic2V0TmF2aWdhdGlvbkJhclRpdGxlIiwidGl0bGUiLCJuYW1lIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsYzs7Ozs7Ozs7Ozs7Ozs7c01BQ25CQyxVLEdBQWEsRSxRQUliQyxJLEdBQU8sRSxRQUlQQyxPLEdBQVU7QUFDUkMsa0JBRFEsd0JBQ01DLENBRE4sRUFDUztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7QUFOTyxLOzs7OzsyQkFTSEMsTyxFQUFTO0FBQ2RDLFNBQUdDLHFCQUFILENBQXlCLEVBQUNDLE9BQU9ILFFBQVFJLElBQWhCLEVBQXpCO0FBQ0Q7Ozs4QkFFUyxDQUVUOzs7O0VBeEJ5QyxlQUFLQyxJOztrQkFBNUJYLGMiLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGlzdGljc0xpc3QgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb21wb25lbnRzID0ge1xuXG4gIH1cblxuICBkYXRhID0ge1xuXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIHByZXZpZXdJbWFnZSAoZSkge1xuICAgICAgLy8gd2VweS5wcmV2aWV3SW1hZ2Uoe1xuICAgICAgLy8gICBjdXJyZW50OiBlLmN1cnJlbnRUYXJnZXQuaWQsIC8vIOW9k+WJjeaYvuekuuWbvueJh+eahGh0dHDpk77mjqVcbiAgICAgIC8vICAgdXJsczogdGhpcy5kYXRhLmZpbGVzIC8vIOmcgOimgemihOiniOeahOWbvueJh2h0dHDpk77mjqXliJfooahcbiAgICAgIC8vIH0pXG4gICAgfVxuICB9XG5cbiAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe3RpdGxlOiBvcHRpb25zLm5hbWV9KVxuICB9XG5cbiAgb25SZWFkeSgpIHtcblxuICB9XG59XG4iXX0=