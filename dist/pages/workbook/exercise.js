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
    }, _this.methods = {
      _upload: function _upload() {
        console.log(2);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
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
      var checkArr = e.detail.name;
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
    value: function onReady() {
      this.$invoke('zanNoticebar1', 'initZanNoticeBarScroll');
    }
  }]);

  return WorkbookExercise;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(WorkbookExercise , 'pages/workbook/exercise'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4ZXJjaXNlLmpzIl0sIm5hbWVzIjpbIldvcmtib29rRXhlcmNpc2UiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJ6YW5Ob3RpY2ViYXIxIiwiZGF0YSIsImxvbmdUZXh0IiwiYWxsR29vZHNGaWx0ZSIsIm5hbWUiLCJ2YWx1ZSIsImNoZWNrZWQiLCJtZXRob2RzIiwiX3VwbG9hZCIsImNvbnNvbGUiLCJsb2ciLCJvcHRpb25zIiwid3giLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJ0aXRsZSIsImUiLCJjaGVja0FyciIsImRldGFpbCIsImkiLCJsZW5ndGgiLCJpbmRleE9mIiwic2V0RGF0YSIsIiRpbnZva2UiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLGdCOzs7Ozs7Ozs7Ozs7OzswTUFDcEJDLE8sR0FBVSxFLFFBQ1hDLE0sR0FBUyxFQUFDLGlCQUFnQixFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLG9CQUFtQixVQUF0QyxFQUFpRCxlQUFjLFNBQS9ELEVBQWpCLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDO0FBRFUsSyxRQUlaQyxJLEdBQU87QUFDTEMsZ0JBQVUsc0JBREw7QUFFTEMscUJBQWUsQ0FDYixFQUFFQyxNQUFNLEdBQVIsRUFBYUMsT0FBTyxHQUFwQixFQUF5QkMsU0FBUyxJQUFsQyxFQURhLEVBRWIsRUFBRUYsTUFBTSxHQUFSLEVBQWFDLE9BQU8sR0FBcEIsRUFBeUJDLFNBQVMsS0FBbEMsRUFGYSxFQUdiLEVBQUVGLE1BQU0sR0FBUixFQUFhQyxPQUFPLEdBQXBCLEVBQXlCQyxTQUFTLEtBQWxDLEVBSGEsRUFJYixFQUFFRixNQUFNLEdBQVIsRUFBYUMsT0FBTyxHQUFwQixFQUF5QkMsU0FBUyxLQUFsQyxFQUphLEVBS2IsRUFBRUYsTUFBTSxHQUFSLEVBQWFDLE9BQU8sR0FBcEIsRUFBeUJDLFNBQVMsS0FBbEMsRUFMYSxFQU1iLEVBQUVGLE1BQU0sR0FBUixFQUFhQyxPQUFPLEdBQXBCLEVBQXlCQyxTQUFTLElBQWxDLEVBTmEsRUFPYixFQUFFRixNQUFNLEdBQVIsRUFBYUMsT0FBTyxHQUFwQixFQUF5QkMsU0FBUyxLQUFsQyxFQVBhLEVBUWIsRUFBRUYsTUFBTSxHQUFSLEVBQWFDLE9BQU8sR0FBcEIsRUFBeUJDLFNBQVMsS0FBbEMsRUFSYSxFQVNiLEVBQUVGLE1BQU0sR0FBUixFQUFhQyxPQUFPLEdBQXBCLEVBQXlCQyxTQUFTLEtBQWxDLEVBVGEsRUFVYixFQUFFRixNQUFNLElBQVIsRUFBY0MsT0FBTyxHQUFyQixFQUEwQkMsU0FBUyxLQUFuQyxFQVZhLEVBV2IsRUFBRUYsTUFBTSxJQUFSLEVBQWNDLE9BQU8sSUFBckIsRUFBMkJDLFNBQVMsSUFBcEMsRUFYYSxFQVliLEVBQUVGLE1BQU0sSUFBUixFQUFjQyxPQUFPLElBQXJCLEVBQTJCQyxTQUFTLEtBQXBDLEVBWmEsRUFhYixFQUFFRixNQUFNLElBQVIsRUFBY0MsT0FBTyxJQUFyQixFQUEyQkMsU0FBUyxLQUFwQyxFQWJhLEVBY2IsRUFBRUYsTUFBTSxJQUFSLEVBQWNDLE9BQU8sSUFBckIsRUFBMkJDLFNBQVMsS0FBcEMsRUFkYSxFQWViLEVBQUVGLE1BQU0sSUFBUixFQUFjQyxPQUFPLElBQXJCLEVBQTJCQyxTQUFTLEtBQXBDLEVBZmE7QUFGVixLLFFBcUJQQyxPLEdBQVU7QUFDUkMsYUFEUSxxQkFDRztBQUNUQyxnQkFBUUMsR0FBUixDQUFZLENBQVo7QUFDRDtBQUhPLEs7Ozs7OzJCQUtIQyxPLEVBQVM7QUFDZEMsU0FBR0MscUJBQUgsQ0FBeUIsRUFBRUMsT0FBT0gsUUFBUVAsSUFBakIsRUFBekI7QUFDRDs7O3FDQUVnQlcsQyxFQUFHO0FBQ2xCLFVBQUlaLGdCQUFnQixLQUFLRixJQUFMLENBQVVFLGFBQTlCO0FBQ0EsVUFBSWEsV0FBV0QsRUFBRUUsTUFBRixDQUFTYixJQUF4QjtBQUNBLFdBQUssSUFBSWMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJZixjQUFjZ0IsTUFBbEMsRUFBMENELEdBQTFDLEVBQStDO0FBQzdDLFlBQUlGLFNBQVNJLE9BQVQsQ0FBaUJGLElBQUksRUFBckIsTUFBNkIsQ0FBQyxDQUFsQyxFQUFxQztBQUNuQ2Ysd0JBQWNlLENBQWQsRUFBaUJaLE9BQWpCLEdBQTJCLElBQTNCO0FBQ0QsU0FGRCxNQUVPO0FBQ0xILHdCQUFjZSxDQUFkLEVBQWlCWixPQUFqQixHQUEyQixLQUEzQjtBQUNEO0FBQ0Y7QUFDRCxXQUFLZSxPQUFMLENBQWE7QUFDWGxCLHVCQUFlQTtBQURKLE9BQWI7QUFHQU0sY0FBUUMsR0FBUixDQUFZUCxhQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLFdBQUttQixPQUFMLENBQWEsZUFBYixFQUE4Qix3QkFBOUI7QUFDRDs7OztFQXhEMkMsZUFBS0MsSTs7a0JBQTlCNUIsZ0IiLCJmaWxlIjoiZXhlcmNpc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgemFuTm90aWNlYmFyIGZyb20gJ0AvY29tcG9uZW50cy96YW4tbm90aWNlYmFyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JrYm9va0V4ZXJjaXNlIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInphbk5vdGljZWJhcjFcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRleHQub25jZVwiOlwibG9uZ1RleHRcIixcImNvbXBvbmVudElkXCI6XCJzdGF0aWMxXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICB6YW5Ob3RpY2ViYXIxOiB6YW5Ob3RpY2ViYXJcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgbG9uZ1RleHQ6ICfngrnplJnpopjpopjlj7flrozmiJDorrDplJnvvIzmj5DkuqTkvZzkuJrmn6XnnIvmiJHnmoTplJnpopgnLFxuICAgIGFsbEdvb2RzRmlsdGU6IFtcbiAgICAgIHsgbmFtZTogJzEnLCB2YWx1ZTogJzAnLCBjaGVja2VkOiB0cnVlIH0sXG4gICAgICB7IG5hbWU6ICcyJywgdmFsdWU6ICcxJywgY2hlY2tlZDogZmFsc2UgfSxcbiAgICAgIHsgbmFtZTogJzMnLCB2YWx1ZTogJzInLCBjaGVja2VkOiBmYWxzZSB9LFxuICAgICAgeyBuYW1lOiAnNCcsIHZhbHVlOiAnMycsIGNoZWNrZWQ6IGZhbHNlIH0sXG4gICAgICB7IG5hbWU6ICc1JywgdmFsdWU6ICc0JywgY2hlY2tlZDogZmFsc2UgfSxcbiAgICAgIHsgbmFtZTogJzYnLCB2YWx1ZTogJzUnLCBjaGVja2VkOiB0cnVlIH0sXG4gICAgICB7IG5hbWU6ICc3JywgdmFsdWU6ICc2JywgY2hlY2tlZDogZmFsc2UgfSxcbiAgICAgIHsgbmFtZTogJzgnLCB2YWx1ZTogJzcnLCBjaGVja2VkOiBmYWxzZSB9LFxuICAgICAgeyBuYW1lOiAnOScsIHZhbHVlOiAnOCcsIGNoZWNrZWQ6IGZhbHNlIH0sXG4gICAgICB7IG5hbWU6ICcxMCcsIHZhbHVlOiAnOScsIGNoZWNrZWQ6IGZhbHNlIH0sXG4gICAgICB7IG5hbWU6ICcxMScsIHZhbHVlOiAnMTAnLCBjaGVja2VkOiB0cnVlIH0sXG4gICAgICB7IG5hbWU6ICcxMicsIHZhbHVlOiAnMTEnLCBjaGVja2VkOiBmYWxzZSB9LFxuICAgICAgeyBuYW1lOiAnMTMnLCB2YWx1ZTogJzEyJywgY2hlY2tlZDogZmFsc2UgfSxcbiAgICAgIHsgbmFtZTogJzE0JywgdmFsdWU6ICcxMycsIGNoZWNrZWQ6IGZhbHNlIH0sXG4gICAgICB7IG5hbWU6ICcxNScsIHZhbHVlOiAnMTQnLCBjaGVja2VkOiBmYWxzZSB9XG4gICAgXVxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBfdXBsb2FkICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKDIpXG4gICAgfVxuICB9XG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHsgdGl0bGU6IG9wdGlvbnMubmFtZSB9KVxuICB9XG5cbiAgc2VydmljZVZhbENoYW5nZShlKSB7XG4gICAgdmFyIGFsbEdvb2RzRmlsdGUgPSB0aGlzLmRhdGEuYWxsR29vZHNGaWx0ZVxuICAgIHZhciBjaGVja0FyciA9IGUuZGV0YWlsLm5hbWVcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbEdvb2RzRmlsdGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChjaGVja0Fyci5pbmRleE9mKGkgKyAnJykgIT09IC0xKSB7XG4gICAgICAgIGFsbEdvb2RzRmlsdGVbaV0uY2hlY2tlZCA9IHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsbEdvb2RzRmlsdGVbaV0uY2hlY2tlZCA9IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBhbGxHb29kc0ZpbHRlOiBhbGxHb29kc0ZpbHRlXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyhhbGxHb29kc0ZpbHRlKVxuICB9XG5cbiAgb25SZWFkeSgpIHtcbiAgICB0aGlzLiRpbnZva2UoJ3phbk5vdGljZWJhcjEnLCAnaW5pdFphbk5vdGljZUJhclNjcm9sbCcpXG4gIH1cbn1cbiJdfQ==