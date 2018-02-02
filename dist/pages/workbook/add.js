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

var WorkbookAdd = function (_wepy$page) {
  _inherits(WorkbookAdd, _wepy$page);

  function WorkbookAdd() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, WorkbookAdd);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WorkbookAdd.__proto__ || Object.getPrototypeOf(WorkbookAdd)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      workbookList: [],
      inputShowed: false,
      inputVal: ''

      // 获取我的练习册
    }, _this.methods = {
      showInput: function showInput() {
        this.inputShowed = true;
      },
      hideInput: function hideInput() {
        this.inputVal = '';
        this.inputShowed = false;
      },
      clearInput: function clearInput() {
        this.inputVal = '';
      },
      inputTyping: function inputTyping(e) {
        this.inputVal = e.detail.value;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WorkbookAdd, [{
    key: '_getMyWorkbook',
    value: function _getMyWorkbook() {
      var self = this;
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://wechat.guinaben.com/primary/workbook/all',
          data: {
            name: self.name,
            textbookId: self.textbookId
          },
          success: function success(res) {
            resolve(res);
          },
          fail: function fail(err) {
            reject(err);
          }
        });
      });
    }
  }]);

  return WorkbookAdd;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(WorkbookAdd , 'pages/workbook/add'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC5qcyJdLCJuYW1lcyI6WyJXb3JrYm9va0FkZCIsImRhdGEiLCJ3b3JrYm9va0xpc3QiLCJpbnB1dFNob3dlZCIsImlucHV0VmFsIiwibWV0aG9kcyIsInNob3dJbnB1dCIsImhpZGVJbnB1dCIsImNsZWFySW5wdXQiLCJpbnB1dFR5cGluZyIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsInNlbGYiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJ1cmwiLCJuYW1lIiwidGV4dGJvb2tJZCIsInN1Y2Nlc3MiLCJyZXMiLCJmYWlsIiwiZXJyIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsVzs7Ozs7Ozs7Ozs7Ozs7Z01BQ25CQyxJLEdBQU87QUFDTEMsb0JBQWMsRUFEVDtBQUVMQyxtQkFBYSxLQUZSO0FBR0xDLGdCQUFVOztBQUdaO0FBTk8sSyxRQTBCUEMsTyxHQUFVO0FBQ1JDLGVBRFEsdUJBQ0s7QUFDWCxhQUFLSCxXQUFMLEdBQW1CLElBQW5CO0FBQ0QsT0FITztBQUlSSSxlQUpRLHVCQUlLO0FBQ1gsYUFBS0gsUUFBTCxHQUFnQixFQUFoQjtBQUNBLGFBQUtELFdBQUwsR0FBbUIsS0FBbkI7QUFDRCxPQVBPO0FBUVJLLGdCQVJRLHdCQVFNO0FBQ1osYUFBS0osUUFBTCxHQUFnQixFQUFoQjtBQUNELE9BVk87QUFXUkssaUJBWFEsdUJBV0tDLENBWEwsRUFXUTtBQUNkLGFBQUtOLFFBQUwsR0FBZ0JNLEVBQUVDLE1BQUYsQ0FBU0MsS0FBekI7QUFDRDtBQWJPLEs7Ozs7O3FDQW5CUTtBQUNoQixVQUFJQyxPQUFPLElBQVg7QUFDQSxhQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsdUJBQUtDLE9BQUwsQ0FBYTtBQUNYQyxlQUFLLGtEQURNO0FBRVhqQixnQkFBTTtBQUNKa0Isa0JBQU1OLEtBQUtNLElBRFA7QUFFSkMsd0JBQVlQLEtBQUtPO0FBRmIsV0FGSztBQU1YQyxpQkFOVyxtQkFNRkMsR0FORSxFQU1HO0FBQ1pQLG9CQUFRTyxHQUFSO0FBQ0QsV0FSVTtBQVNYQyxjQVRXLGdCQVNMQyxHQVRLLEVBU0E7QUFDVFIsbUJBQU9RLEdBQVA7QUFDRDtBQVhVLFNBQWI7QUFhRCxPQWRNLENBQVA7QUFlRDs7OztFQXpCc0MsZUFBS0MsSTs7a0JBQXpCekIsVyIsImZpbGUiOiJhZGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdvcmtib29rQWRkIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgZGF0YSA9IHtcbiAgICB3b3JrYm9va0xpc3Q6IFtdLFxuICAgIGlucHV0U2hvd2VkOiBmYWxzZSxcbiAgICBpbnB1dFZhbDogJydcbiAgfVxuXG4gIC8vIOiOt+WPluaIkeeahOe7g+S5oOWGjFxuICBfZ2V0TXlXb3JrYm9vayAoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHBzOi8vd2VjaGF0Lmd1aW5hYmVuLmNvbS9wcmltYXJ5L3dvcmtib29rL2FsbCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBuYW1lOiBzZWxmLm5hbWUsXG4gICAgICAgICAgdGV4dGJvb2tJZDogc2VsZi50ZXh0Ym9va0lkXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICB9LFxuICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIHNob3dJbnB1dCAoKSB7XG4gICAgICB0aGlzLmlucHV0U2hvd2VkID0gdHJ1ZVxuICAgIH0sXG4gICAgaGlkZUlucHV0ICgpIHtcbiAgICAgIHRoaXMuaW5wdXRWYWwgPSAnJ1xuICAgICAgdGhpcy5pbnB1dFNob3dlZCA9IGZhbHNlXG4gICAgfSxcbiAgICBjbGVhcklucHV0ICgpIHtcbiAgICAgIHRoaXMuaW5wdXRWYWwgPSAnJ1xuICAgIH0sXG4gICAgaW5wdXRUeXBpbmcgKGUpIHtcbiAgICAgIHRoaXMuaW5wdXRWYWwgPSBlLmRldGFpbC52YWx1ZVxuICAgIH1cbiAgfVxufVxuIl19