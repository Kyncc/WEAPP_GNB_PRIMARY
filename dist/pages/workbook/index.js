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
    }, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Statistics, [{
    key: 'bindPickerChange',
    value: function bindPickerChange(e) {
      var self = this;
      console.log('picker发送选择改变，携带值为', self.objectArray[Number(e.detail.value)]['name']);
      this.setData({
        book: self.objectArray[Number(e.detail.value)]['name']
      });
    }
  }]);

  return Statistics;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Statistics , 'pages/workbook/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlN0YXRpc3RpY3MiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJib29rIiwib2JqZWN0QXJyYXkiLCJpZCIsIm5hbWUiLCJjb21wdXRlZCIsImUiLCJzZWxmIiwiY29uc29sZSIsImxvZyIsIk51bWJlciIsImRldGFpbCIsInZhbHVlIiwic2V0RGF0YSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFDcUJBLFU7Ozs7Ozs7Ozs7Ozs7OzhMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBQ2JDLEksR0FBTztBQUNMQyxZQUFNLEVBREQ7QUFFTEMsbUJBQWEsQ0FDWDtBQUNFQyxZQUFJLENBRE47QUFFRUMsY0FBTTtBQUZSLE9BRFcsRUFLWDtBQUNFRCxZQUFJLENBRE47QUFFRUMsY0FBTTtBQUZSLE9BTFcsRUFTWDtBQUNFRCxZQUFJLENBRE47QUFFRUMsY0FBTTtBQUZSLE9BVFcsRUFhWDtBQUNFRCxZQUFJLENBRE47QUFFRUMsY0FBTTtBQUZSLE9BYlc7QUFGUixLLFFBcUJQQyxRLEdBQVcsRTs7Ozs7cUNBQ01DLEMsRUFBRztBQUNsQixVQUFJQyxPQUFPLElBQVg7QUFDQUMsY0FBUUMsR0FBUixDQUFZLG1CQUFaLEVBQWlDRixLQUFLTCxXQUFMLENBQWlCUSxPQUFPSixFQUFFSyxNQUFGLENBQVNDLEtBQWhCLENBQWpCLEVBQXlDLE1BQXpDLENBQWpDO0FBQ0EsV0FBS0MsT0FBTCxDQUFhO0FBQ1haLGNBQU1NLEtBQUtMLFdBQUwsQ0FBaUJRLE9BQU9KLEVBQUVLLE1BQUYsQ0FBU0MsS0FBaEIsQ0FBakIsRUFBeUMsTUFBekM7QUFESyxPQUFiO0FBR0Q7Ozs7RUFqQ3FDLGVBQUtFLEk7O2tCQUF4QmxCLFUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGlzdGljcyBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mUmemimOacrCdcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHt9XG4gICAgZGF0YSA9IHtcbiAgICAgIGJvb2s6ICcnLFxuICAgICAgb2JqZWN0QXJyYXk6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAwLFxuICAgICAgICAgIG5hbWU6ICfkuInlubTnuqfkuIonXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMSxcbiAgICAgICAgICBuYW1lOiAn5Zub5bm057qn5LiKJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgbmFtZTogJ+S6lOW5tOe6p+S4iidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgIG5hbWU6ICflha3lubTnuqfkuIonXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gICAgY29tcHV0ZWQgPSB7fVxuICAgIGJpbmRQaWNrZXJDaGFuZ2UoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zb2xlLmxvZygncGlja2Vy5Y+R6YCB6YCJ5oup5pS55Y+Y77yM5pC65bim5YC85Li6Jywgc2VsZi5vYmplY3RBcnJheVtOdW1iZXIoZS5kZXRhaWwudmFsdWUpXVsnbmFtZSddKVxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgYm9vazogc2VsZi5vYmplY3RBcnJheVtOdW1iZXIoZS5kZXRhaWwudmFsdWUpXVsnbmFtZSddXG4gICAgICB9KVxuICAgIH1cbiAgfVxuIl19