'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


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
      book: '',
      objectArray: [{
        id: 0,
        name: '三年级上'
      }, {
        id: 1,
        name: '四年级上'
      }, {
        id: 2,
        name: '五年级上'
      }, {
        id: 3,
        name: '六年级上'
      }]
    }, _this.computed = {}, _this.methods = {
      _intoList: function _intoList(val) {
        wx.navigateTo({
          url: '/pages/statistics/list?name=' + val
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Statistics;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Statistics , 'pages/statistics/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlN0YXRpc3RpY3MiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJib29rIiwib2JqZWN0QXJyYXkiLCJpZCIsIm5hbWUiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJfaW50b0xpc3QiLCJ2YWwiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0xDLFlBQU0sRUFERDtBQUVMQyxtQkFBYSxDQUNYO0FBQ0VDLFlBQUksQ0FETjtBQUVFQyxjQUFNO0FBRlIsT0FEVyxFQUtYO0FBQ0VELFlBQUksQ0FETjtBQUVFQyxjQUFNO0FBRlIsT0FMVyxFQVNYO0FBQ0VELFlBQUksQ0FETjtBQUVFQyxjQUFNO0FBRlIsT0FUVyxFQWFYO0FBQ0VELFlBQUksQ0FETjtBQUVFQyxjQUFNO0FBRlIsT0FiVztBQUZSLEssUUFxQlBDLFEsR0FBVyxFLFFBQ1hDLE8sR0FBVTtBQUNSQyxlQURRLHFCQUNHQyxHQURILEVBQ1E7QUFDZEMsV0FBR0MsVUFBSCxDQUFjO0FBQ1pDLGdEQUFvQ0g7QUFEeEIsU0FBZDtBQUdEO0FBTE8sSzs7OztFQTVCNEIsZUFBS0ksSTs7a0JBQXhCaEIsVSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRpc3RpY3MgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfplJnpopjmnKwnXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBib29rOiAnJyxcbiAgICAgIG9iamVjdEFycmF5OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMCxcbiAgICAgICAgICBuYW1lOiAn5LiJ5bm057qn5LiKJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgbmFtZTogJ+Wbm+W5tOe6p+S4iidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgIG5hbWU6ICfkupTlubTnuqfkuIonXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMyxcbiAgICAgICAgICBuYW1lOiAn5YWt5bm057qn5LiKJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICAgIGNvbXB1dGVkID0ge31cbiAgICBtZXRob2RzID0ge1xuICAgICAgX2ludG9MaXN0ICh2YWwpIHtcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiBgL3BhZ2VzL3N0YXRpc3RpY3MvbGlzdD9uYW1lPSR7dmFsfWBcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==