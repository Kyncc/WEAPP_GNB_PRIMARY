'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _zanNoticebar = require('./../../components/zan-noticebar.js');

var _zanNoticebar2 = _interopRequireDefault(_zanNoticebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WorkbookExercise = function (_wepy$page) {
  _inherits(WorkbookExercise, _wepy$page);

  function WorkbookExercise() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, WorkbookExercise);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WorkbookExercise.__proto__ || Object.getPrototypeOf(WorkbookExercise)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "zanNoticebar1": { "xmlns:v-bind": "", "v-bind:text.once": "longText", "componentId": "static1" } }, _this.$events = {}, _this.components = {
      zanNoticebar1: _zanNoticebar2.default
    }, _this.data = {
      longText: '点错题题号完成记错，提交作业查看我的错题',
      allGoodsFilte: [{ name: '1', value: '0', checked: true }, { name: '2', value: '1', checked: false }, { name: '3', value: '2', checked: false }, { name: '4', value: '3', checked: false }, { name: '5', value: '4', checked: false }, { name: '6', value: '5', checked: true }, { name: '7', value: '6', checked: false }, { name: '8', value: '7', checked: false }, { name: '9', value: '8', checked: false }, { name: '10', value: '9', checked: false }, { name: '11', value: '10', checked: true }, { name: '12', value: '11', checked: false }, { name: '13', value: '12', checked: false }, { name: '14', value: '13', checked: false }, { name: '15', value: '14', checked: false }]
    }, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WorkbookExercise, [{
    key: 'onLoad',
    value: function onLoad(options) {
      wx.setNavigationBarTitle({ title: options.name });
    }
  }, {
    key: 'serviceValChange',
    value: function serviceValChange(e) {
      var allGoodsFilte = this.data.allGoodsFilte;
      var checkArr = e.detail.value;
      for (var i = 0; i < allGoodsFilte.length; i++) {
        if (checkArr.indexOf(i + '') !== -1) {
          allGoodsFilte[i].checked = true;
        } else {
          allGoodsFilte[i].checked = false;
        }
      }
      this.setData({
        allGoodsFilte: allGoodsFilte
      });
      console.log(allGoodsFilte);
    }
  }, {
    key: 'onReady',
    value: function onReady() {}
  }]);

  return WorkbookExercise;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(WorkbookExercise , 'pages/workbook/exercise'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4ZXJjaXNlLmpzIl0sIm5hbWVzIjpbIldvcmtib29rRXhlcmNpc2UiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJ6YW5Ob3RpY2ViYXIxIiwiZGF0YSIsImxvbmdUZXh0IiwiYWxsR29vZHNGaWx0ZSIsIm5hbWUiLCJ2YWx1ZSIsImNoZWNrZWQiLCJtZXRob2RzIiwiZXZlbnRzIiwib3B0aW9ucyIsInd4Iiwic2V0TmF2aWdhdGlvbkJhclRpdGxlIiwidGl0bGUiLCJlIiwiY2hlY2tBcnIiLCJkZXRhaWwiLCJpIiwibGVuZ3RoIiwiaW5kZXhPZiIsInNldERhdGEiLCJjb25zb2xlIiwibG9nIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxnQjs7Ozs7Ozs7Ozs7Ozs7ME1BQ3BCQyxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyxpQkFBZ0IsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixvQkFBbUIsVUFBdEMsRUFBaUQsZUFBYyxTQUEvRCxFQUFqQixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNWQztBQURVLEssUUFJWkMsSSxHQUFPO0FBQ0xDLGdCQUFVLHNCQURMO0FBRUxDLHFCQUFlLENBQ2IsRUFBRUMsTUFBTSxHQUFSLEVBQWFDLE9BQU8sR0FBcEIsRUFBeUJDLFNBQVMsSUFBbEMsRUFEYSxFQUViLEVBQUVGLE1BQU0sR0FBUixFQUFhQyxPQUFPLEdBQXBCLEVBQXlCQyxTQUFTLEtBQWxDLEVBRmEsRUFHYixFQUFFRixNQUFNLEdBQVIsRUFBYUMsT0FBTyxHQUFwQixFQUF5QkMsU0FBUyxLQUFsQyxFQUhhLEVBSWIsRUFBRUYsTUFBTSxHQUFSLEVBQWFDLE9BQU8sR0FBcEIsRUFBeUJDLFNBQVMsS0FBbEMsRUFKYSxFQUtiLEVBQUVGLE1BQU0sR0FBUixFQUFhQyxPQUFPLEdBQXBCLEVBQXlCQyxTQUFTLEtBQWxDLEVBTGEsRUFNYixFQUFFRixNQUFNLEdBQVIsRUFBYUMsT0FBTyxHQUFwQixFQUF5QkMsU0FBUyxJQUFsQyxFQU5hLEVBT2IsRUFBRUYsTUFBTSxHQUFSLEVBQWFDLE9BQU8sR0FBcEIsRUFBeUJDLFNBQVMsS0FBbEMsRUFQYSxFQVFiLEVBQUVGLE1BQU0sR0FBUixFQUFhQyxPQUFPLEdBQXBCLEVBQXlCQyxTQUFTLEtBQWxDLEVBUmEsRUFTYixFQUFFRixNQUFNLEdBQVIsRUFBYUMsT0FBTyxHQUFwQixFQUF5QkMsU0FBUyxLQUFsQyxFQVRhLEVBVWIsRUFBRUYsTUFBTSxJQUFSLEVBQWNDLE9BQU8sR0FBckIsRUFBMEJDLFNBQVMsS0FBbkMsRUFWYSxFQVdiLEVBQUVGLE1BQU0sSUFBUixFQUFjQyxPQUFPLElBQXJCLEVBQTJCQyxTQUFTLElBQXBDLEVBWGEsRUFZYixFQUFFRixNQUFNLElBQVIsRUFBY0MsT0FBTyxJQUFyQixFQUEyQkMsU0FBUyxLQUFwQyxFQVphLEVBYWIsRUFBRUYsTUFBTSxJQUFSLEVBQWNDLE9BQU8sSUFBckIsRUFBMkJDLFNBQVMsS0FBcEMsRUFiYSxFQWNiLEVBQUVGLE1BQU0sSUFBUixFQUFjQyxPQUFPLElBQXJCLEVBQTJCQyxTQUFTLEtBQXBDLEVBZGEsRUFlYixFQUFFRixNQUFNLElBQVIsRUFBY0MsT0FBTyxJQUFyQixFQUEyQkMsU0FBUyxLQUFwQyxFQWZhO0FBRlYsSyxRQXFCUEMsTyxHQUFVLEUsUUFNVkMsTSxHQUFTLEU7Ozs7OzJCQUpGQyxPLEVBQVM7QUFDZEMsU0FBR0MscUJBQUgsQ0FBeUIsRUFBRUMsT0FBT0gsUUFBUUwsSUFBakIsRUFBekI7QUFDRDs7O3FDQUlnQlMsQyxFQUFHO0FBQ2xCLFVBQUlWLGdCQUFnQixLQUFLRixJQUFMLENBQVVFLGFBQTlCO0FBQ0EsVUFBSVcsV0FBV0QsRUFBRUUsTUFBRixDQUFTVixLQUF4QjtBQUNBLFdBQUssSUFBSVcsSUFBSSxDQUFiLEVBQWdCQSxJQUFJYixjQUFjYyxNQUFsQyxFQUEwQ0QsR0FBMUMsRUFBK0M7QUFDN0MsWUFBSUYsU0FBU0ksT0FBVCxDQUFpQkYsSUFBSSxFQUFyQixNQUE2QixDQUFDLENBQWxDLEVBQXFDO0FBQ25DYix3QkFBY2EsQ0FBZCxFQUFpQlYsT0FBakIsR0FBMkIsSUFBM0I7QUFDRCxTQUZELE1BRU87QUFDTEgsd0JBQWNhLENBQWQsRUFBaUJWLE9BQWpCLEdBQTJCLEtBQTNCO0FBQ0Q7QUFDRjtBQUNELFdBQUthLE9BQUwsQ0FBYTtBQUNYaEIsdUJBQWVBO0FBREosT0FBYjtBQUdBaUIsY0FBUUMsR0FBUixDQUFZbEIsYUFBWjtBQUNEOzs7OEJBRVMsQ0FBRTs7OztFQXJEZ0MsZUFBS21CLEk7O2tCQUE5QjNCLGdCIiwiZmlsZSI6ImV4ZXJjaXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHphbk5vdGljZWJhciBmcm9tICdAL2NvbXBvbmVudHMvemFuLW5vdGljZWJhcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29ya2Jvb2tFeGVyY2lzZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJ6YW5Ob3RpY2ViYXIxXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0ZXh0Lm9uY2VcIjpcImxvbmdUZXh0XCIsXCJjb21wb25lbnRJZFwiOlwic3RhdGljMVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgemFuTm90aWNlYmFyMTogemFuTm90aWNlYmFyXG4gIH1cblxuICBkYXRhID0ge1xuICAgIGxvbmdUZXh0OiAn54K56ZSZ6aKY6aKY5Y+35a6M5oiQ6K6w6ZSZ77yM5o+Q5Lqk5L2c5Lia5p+l55yL5oiR55qE6ZSZ6aKYJyxcbiAgICBhbGxHb29kc0ZpbHRlOiBbXG4gICAgICB7IG5hbWU6ICcxJywgdmFsdWU6ICcwJywgY2hlY2tlZDogdHJ1ZSB9LFxuICAgICAgeyBuYW1lOiAnMicsIHZhbHVlOiAnMScsIGNoZWNrZWQ6IGZhbHNlIH0sXG4gICAgICB7IG5hbWU6ICczJywgdmFsdWU6ICcyJywgY2hlY2tlZDogZmFsc2UgfSxcbiAgICAgIHsgbmFtZTogJzQnLCB2YWx1ZTogJzMnLCBjaGVja2VkOiBmYWxzZSB9LFxuICAgICAgeyBuYW1lOiAnNScsIHZhbHVlOiAnNCcsIGNoZWNrZWQ6IGZhbHNlIH0sXG4gICAgICB7IG5hbWU6ICc2JywgdmFsdWU6ICc1JywgY2hlY2tlZDogdHJ1ZSB9LFxuICAgICAgeyBuYW1lOiAnNycsIHZhbHVlOiAnNicsIGNoZWNrZWQ6IGZhbHNlIH0sXG4gICAgICB7IG5hbWU6ICc4JywgdmFsdWU6ICc3JywgY2hlY2tlZDogZmFsc2UgfSxcbiAgICAgIHsgbmFtZTogJzknLCB2YWx1ZTogJzgnLCBjaGVja2VkOiBmYWxzZSB9LFxuICAgICAgeyBuYW1lOiAnMTAnLCB2YWx1ZTogJzknLCBjaGVja2VkOiBmYWxzZSB9LFxuICAgICAgeyBuYW1lOiAnMTEnLCB2YWx1ZTogJzEwJywgY2hlY2tlZDogdHJ1ZSB9LFxuICAgICAgeyBuYW1lOiAnMTInLCB2YWx1ZTogJzExJywgY2hlY2tlZDogZmFsc2UgfSxcbiAgICAgIHsgbmFtZTogJzEzJywgdmFsdWU6ICcxMicsIGNoZWNrZWQ6IGZhbHNlIH0sXG4gICAgICB7IG5hbWU6ICcxNCcsIHZhbHVlOiAnMTMnLCBjaGVja2VkOiBmYWxzZSB9LFxuICAgICAgeyBuYW1lOiAnMTUnLCB2YWx1ZTogJzE0JywgY2hlY2tlZDogZmFsc2UgfVxuICAgIF1cbiAgfVxuXG4gIG1ldGhvZHMgPSB7fVxuXG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHsgdGl0bGU6IG9wdGlvbnMubmFtZSB9KVxuICB9XG5cbiAgZXZlbnRzID0ge31cblxuICBzZXJ2aWNlVmFsQ2hhbmdlKGUpIHtcbiAgICB2YXIgYWxsR29vZHNGaWx0ZSA9IHRoaXMuZGF0YS5hbGxHb29kc0ZpbHRlXG4gICAgdmFyIGNoZWNrQXJyID0gZS5kZXRhaWwudmFsdWVcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbEdvb2RzRmlsdGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChjaGVja0Fyci5pbmRleE9mKGkgKyAnJykgIT09IC0xKSB7XG4gICAgICAgIGFsbEdvb2RzRmlsdGVbaV0uY2hlY2tlZCA9IHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsbEdvb2RzRmlsdGVbaV0uY2hlY2tlZCA9IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBhbGxHb29kc0ZpbHRlOiBhbGxHb29kc0ZpbHRlXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyhhbGxHb29kc0ZpbHRlKVxuICB9XG5cbiAgb25SZWFkeSgpIHt9XG59XG4iXX0=