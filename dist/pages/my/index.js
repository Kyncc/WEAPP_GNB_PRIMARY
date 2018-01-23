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

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的'
    }, _this.data = {
      userInfo: {
        nickName: '加载中...'
      }
    }, _this.components = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      // let self = this
      // this.$parent.getUserInfo((userInfo) => {
      //   if (userInfo) {
      //     self.userInfo = userInfo
      //   }
      // })
      _wepy2.default.getUserInfo({
        success: function success(res) {
          console.log(res);
        }
      });
      _wepy2.default.login({
        success: function success(res) {
          console.log(res);
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/my/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ1c2VySW5mbyIsIm5pY2tOYW1lIiwiY29tcG9uZW50cyIsIm1ldGhvZHMiLCJnZXRVc2VySW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwibG9naW4iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsZ0JBQVU7QUFDUkMsa0JBQVU7QUFERjtBQURMLEssUUFNUEMsVSxHQUFhLEUsUUFHYkMsTyxHQUFVLEU7Ozs7OzZCQUVEO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQUtDLFdBQUwsQ0FBaUI7QUFDZkMsZUFEZSxtQkFDTkMsR0FETSxFQUNEO0FBQ1pDLGtCQUFRQyxHQUFSLENBQVlGLEdBQVo7QUFDRDtBQUhjLE9BQWpCO0FBS0EscUJBQUtHLEtBQUwsQ0FBVztBQUNUSixlQURTLG1CQUNBQyxHQURBLEVBQ0s7QUFDWkMsa0JBQVFDLEdBQVIsQ0FBWUYsR0FBWjtBQUNEO0FBSFEsT0FBWDtBQUtEOzs7O0VBakNnQyxlQUFLSSxJOztrQkFBbkJkLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahCdcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgdXNlckluZm86IHtcbiAgICAgICAgbmlja05hbWU6ICfliqDovb3kuK0uLi4nXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50cyA9IHtcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge31cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgIC8vIGxldCBzZWxmID0gdGhpc1xuICAgICAgLy8gdGhpcy4kcGFyZW50LmdldFVzZXJJbmZvKCh1c2VySW5mbykgPT4ge1xuICAgICAgLy8gICBpZiAodXNlckluZm8pIHtcbiAgICAgIC8vICAgICBzZWxmLnVzZXJJbmZvID0gdXNlckluZm9cbiAgICAgIC8vICAgfVxuICAgICAgLy8gfSlcbiAgICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICB3ZXB5LmxvZ2luKHtcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuIl19