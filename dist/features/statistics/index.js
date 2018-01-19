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
      bindPickerChange: function bindPickerChange(e) {
        var self = this;
        console.log('picker发送选择改变，携带值为', self.objectArray[Number(e.detail.value)]['name']);
        this.setData({
          book: self.objectArray[Number(e.detail.value)]['name']
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // constructor () {
  //   super()
  // }


  _createClass(Statistics, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Statistics;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Statistics , 'features/statistics/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlN0YXRpc3RpY3MiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJib29rIiwib2JqZWN0QXJyYXkiLCJpZCIsIm5hbWUiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJiaW5kUGlja2VyQ2hhbmdlIiwiZSIsInNlbGYiLCJjb25zb2xlIiwibG9nIiwiTnVtYmVyIiwiZGV0YWlsIiwidmFsdWUiLCJzZXREYXRhIiwiZXZlbnRzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUNxQkEsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFDYkMsSSxHQUFPO0FBQ0xDLFlBQU0sRUFERDtBQUVMQyxtQkFBYSxDQUNYO0FBQ0VDLFlBQUksQ0FETjtBQUVFQyxjQUFNO0FBRlIsT0FEVyxFQUtYO0FBQ0VELFlBQUksQ0FETjtBQUVFQyxjQUFNO0FBRlIsT0FMVyxFQVNYO0FBQ0VELFlBQUksQ0FETjtBQUVFQyxjQUFNO0FBRlIsT0FUVyxFQWFYO0FBQ0VELFlBQUksQ0FETjtBQUVFQyxjQUFNO0FBRlIsT0FiVztBQUZSLEssUUFxQlBDLFEsR0FBVyxFLFFBSVhDLE8sR0FBVTtBQUNSQyxzQkFEUSw0QkFDU0MsQ0FEVCxFQUNZO0FBQ2xCLFlBQUlDLE9BQU8sSUFBWDtBQUNBQyxnQkFBUUMsR0FBUixDQUFZLG1CQUFaLEVBQWlDRixLQUFLUCxXQUFMLENBQWlCVSxPQUFPSixFQUFFSyxNQUFGLENBQVNDLEtBQWhCLENBQWpCLEVBQXlDLE1BQXpDLENBQWpDO0FBQ0EsYUFBS0MsT0FBTCxDQUFhO0FBQ1hkLGdCQUFNUSxLQUFLUCxXQUFMLENBQWlCVSxPQUFPSixFQUFFSyxNQUFGLENBQVNDLEtBQWhCLENBQWpCLEVBQXlDLE1BQXpDO0FBREssU0FBYjtBQUdEO0FBUE8sSyxRQVNWRSxNLEdBQVMsRTs7QUFaVDtBQUNBO0FBQ0E7Ozs7OzZCQVdTLENBQUU7Ozs7RUF4QzJCLGVBQUtDLEk7O2tCQUF4QnJCLFUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGlzdGljcyBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mUmemimOacrCdcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHt9XG4gICAgZGF0YSA9IHtcbiAgICAgIGJvb2s6ICcnLFxuICAgICAgb2JqZWN0QXJyYXk6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAwLFxuICAgICAgICAgIG5hbWU6ICfkuInlubTnuqfkuIonXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMSxcbiAgICAgICAgICBuYW1lOiAn5Zub5bm057qn5LiKJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgbmFtZTogJ+S6lOW5tOe6p+S4iidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgIG5hbWU6ICflha3lubTnuqfkuIonXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gICAgY29tcHV0ZWQgPSB7fVxuICAgIC8vIGNvbnN0cnVjdG9yICgpIHtcbiAgICAvLyAgIHN1cGVyKClcbiAgICAvLyB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGJpbmRQaWNrZXJDaGFuZ2UoZSkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgY29uc29sZS5sb2coJ3BpY2tlcuWPkemAgemAieaLqeaUueWPmO+8jOaQuuW4puWAvOS4uicsIHNlbGYub2JqZWN0QXJyYXlbTnVtYmVyKGUuZGV0YWlsLnZhbHVlKV1bJ25hbWUnXSlcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBib29rOiBzZWxmLm9iamVjdEFycmF5W051bWJlcihlLmRldGFpbC52YWx1ZSldWyduYW1lJ11cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgZXZlbnRzID0ge31cbiAgICBvbkxvYWQoKSB7fVxuICB9XG4iXX0=