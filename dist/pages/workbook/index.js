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
      navigationBarTitleText: '错题归纳本小学数学'
    }, _this.components = {}, _this.data = {
      index: 0,
      objectArray: [{
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
        console.log('picker发送选择改变，携带值为', this.objectArray[Number(e.detail.value)]);
        this.index = e.detail.value;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Statistics, [{
    key: 'onReady',
    value: function onReady() {}
  }]);

  return Statistics;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Statistics , 'pages/workbook/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlN0YXRpc3RpY3MiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJpbmRleCIsIm9iamVjdEFycmF5IiwiaWQiLCJuYW1lIiwibWV0aG9kcyIsImJpbmRQaWNrZXJDaGFuZ2UiLCJlIiwiY29uc29sZSIsImxvZyIsIk51bWJlciIsImRldGFpbCIsInZhbHVlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsVSxHQUFhLEUsUUFHYkMsSSxHQUFPO0FBQ0xDLGFBQU8sQ0FERjtBQUVMQyxtQkFBYSxDQUNYO0FBQ0VDLFlBQUksQ0FETjtBQUVFQyxjQUFNO0FBRlIsT0FEVyxFQUtYO0FBQ0VELFlBQUksQ0FETjtBQUVFQyxjQUFNO0FBRlIsT0FMVyxFQVNYO0FBQ0VELFlBQUksQ0FETjtBQUVFQyxjQUFNO0FBRlIsT0FUVyxFQWFYO0FBQ0VELFlBQUksQ0FETjtBQUVFQyxjQUFNO0FBRlIsT0FiVztBQUZSLEssUUFzQlBDLE8sR0FBVTtBQUNSQyxzQkFEUSw0QkFDVUMsQ0FEVixFQUNhO0FBQ25CQyxnQkFBUUMsR0FBUixDQUFZLG1CQUFaLEVBQWlDLEtBQUtQLFdBQUwsQ0FBaUJRLE9BQU9ILEVBQUVJLE1BQUYsQ0FBU0MsS0FBaEIsQ0FBakIsQ0FBakM7QUFDQSxhQUFLWCxLQUFMLEdBQWFNLEVBQUVJLE1BQUYsQ0FBU0MsS0FBdEI7QUFDRDtBQUpPLEs7Ozs7OzhCQU9BLENBRVQ7Ozs7RUF2Q3FDLGVBQUtDLEk7O2tCQUF4QmpCLFUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRpc3RpY3MgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mUmemimOW9kue6s+acrOWwj+WtpuaVsOWtpidcbiAgfVxuXG4gIGNvbXBvbmVudHMgPSB7XG4gIH1cblxuICBkYXRhID0ge1xuICAgIGluZGV4OiAwLFxuICAgIG9iamVjdEFycmF5OiBbXG4gICAgICB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICBuYW1lOiAn5LiJ5bm057qn5LiKJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDQsXG4gICAgICAgIG5hbWU6ICflm5vlubTnuqfkuIonXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogNSxcbiAgICAgICAgbmFtZTogJ+S6lOW5tOe6p+S4iidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA2LFxuICAgICAgICBuYW1lOiAn5YWt5bm057qn5LiKJ1xuICAgICAgfVxuICAgIF1cbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgYmluZFBpY2tlckNoYW5nZSAoZSkge1xuICAgICAgY29uc29sZS5sb2coJ3BpY2tlcuWPkemAgemAieaLqeaUueWPmO+8jOaQuuW4puWAvOS4uicsIHRoaXMub2JqZWN0QXJyYXlbTnVtYmVyKGUuZGV0YWlsLnZhbHVlKV0pXG4gICAgICB0aGlzLmluZGV4ID0gZS5kZXRhaWwudmFsdWVcbiAgICB9XG4gIH1cblxuICBvblJlYWR5KCkge1xuXG4gIH1cbn1cbiJdfQ==