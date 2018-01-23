'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/my/index', 'pages/my/info', 'pages/my/pay', 'pages/workbook/index', 'pages/statistics/index'],
      tabBar: {
        color: '#aaa',
        selectedColor: '#3FC6C6',
        borderStyle: 'black',
        backgroundColor: '#ffffff',
        list: [{
          pagePath: 'pages/statistics/index',
          iconPath: 'common/resources/statistics.png',
          selectedIconPath: 'common/resources/statistics_select.png',
          text: '错题本'
        }, {
          pagePath: 'pages/workbook/index',
          iconPath: 'common/resources/workbook.png',
          selectedIconPath: 'common/resources/workbook_select.png',
          text: '记错题'
        }, {
          pagePath: 'pages/my/index',
          iconPath: 'common/resources/user.png',
          selectedIconPath: 'common/resources/user_select.png',
          text: '我的'
        }]
      },
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#FBFBFB',
        navigationBarTitleText: '错题归纳本小学数学',
        navigationBarTextStyle: 'black'
      },
      networkTimeout: {
        request: 8000,
        downloadFile: 8000
      }
    };
    _this.globalData = {
      userInfo: null
    };

    _this.use('requestfix');
    return _this;
  }

  // getUserInfo(cb) {
  //   const that = this
  //   if (this.globalData.userInfo) {
  //     return this.globalData.userInfo
  //   }
  //   wepy.getUserInfo({
  //     success (res) {
  //       that.globalData.userInfo = res.userInfo
  //       cb && cb(res.userInfo)
  //     }
  //   })
  // }


  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsInRhYkJhciIsImNvbG9yIiwic2VsZWN0ZWRDb2xvciIsImJvcmRlclN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwibGlzdCIsInBhZ2VQYXRoIiwiaWNvblBhdGgiLCJzZWxlY3RlZEljb25QYXRoIiwidGV4dCIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuZXR3b3JrVGltZW91dCIsInJlcXVlc3QiLCJkb3dubG9hZEZpbGUiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7O0FBaURFLHNCQUFlO0FBQUE7O0FBQUE7O0FBQUEsVUE5Q2ZBLE1BOENlLEdBOUNOO0FBQ1BDLGFBQU8sQ0FDTCxnQkFESyxFQUVMLGVBRkssRUFHTCxjQUhLLEVBSUwsc0JBSkssRUFLTCx3QkFMSyxDQURBO0FBUVBDLGNBQVE7QUFDTkMsZUFBTyxNQUREO0FBRU5DLHVCQUFlLFNBRlQ7QUFHTkMscUJBQWEsT0FIUDtBQUlOQyx5QkFBaUIsU0FKWDtBQUtOQyxjQUFNLENBQUM7QUFDTEMsb0JBQVUsd0JBREw7QUFFTEMsb0JBQVUsaUNBRkw7QUFHTEMsNEJBQWtCLHdDQUhiO0FBSUxDLGdCQUFNO0FBSkQsU0FBRCxFQUtIO0FBQ0RILG9CQUFVLHNCQURUO0FBRURDLG9CQUFVLCtCQUZUO0FBR0RDLDRCQUFrQixzQ0FIakI7QUFJREMsZ0JBQU07QUFKTCxTQUxHLEVBVUg7QUFDREgsb0JBQVUsZ0JBRFQ7QUFFREMsb0JBQVUsMkJBRlQ7QUFHREMsNEJBQWtCLGtDQUhqQjtBQUlEQyxnQkFBTTtBQUpMLFNBVkc7QUFMQSxPQVJEO0FBOEJQQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmO0FBRU5DLHNDQUE4QixTQUZ4QjtBQUdOQyxnQ0FBd0IsV0FIbEI7QUFJTkMsZ0NBQXdCO0FBSmxCLE9BOUJEO0FBb0NQQyxzQkFBZ0I7QUFDZEMsaUJBQVMsSUFESztBQUVkQyxzQkFBYztBQUZBO0FBcENULEtBOENNO0FBQUEsVUFKZkMsVUFJZSxHQUpGO0FBQ1hDLGdCQUFVO0FBREMsS0FJRTs7QUFFYixVQUFLQyxHQUFMLENBQVMsWUFBVDtBQUZhO0FBR2Q7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0VBL0QyQixlQUFLQyxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XG4gIGNvbmZpZyA9IHtcbiAgICBwYWdlczogW1xuICAgICAgJ3BhZ2VzL215L2luZGV4JyxcbiAgICAgICdwYWdlcy9teS9pbmZvJyxcbiAgICAgICdwYWdlcy9teS9wYXknLFxuICAgICAgJ3BhZ2VzL3dvcmtib29rL2luZGV4JyxcbiAgICAgICdwYWdlcy9zdGF0aXN0aWNzL2luZGV4J1xuICAgIF0sXG4gICAgdGFiQmFyOiB7XG4gICAgICBjb2xvcjogJyNhYWEnLFxuICAgICAgc2VsZWN0ZWRDb2xvcjogJyMzRkM2QzYnLFxuICAgICAgYm9yZGVyU3R5bGU6ICdibGFjaycsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgIGxpc3Q6IFt7XG4gICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvc3RhdGlzdGljcy9pbmRleCcsXG4gICAgICAgIGljb25QYXRoOiAnY29tbW9uL3Jlc291cmNlcy9zdGF0aXN0aWNzLnBuZycsXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3N0YXRpc3RpY3Nfc2VsZWN0LnBuZycsXG4gICAgICAgIHRleHQ6ICfplJnpopjmnKwnXG4gICAgICB9LCB7XG4gICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvd29ya2Jvb2svaW5kZXgnLFxuICAgICAgICBpY29uUGF0aDogJ2NvbW1vbi9yZXNvdXJjZXMvd29ya2Jvb2sucG5nJyxcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2NvbW1vbi9yZXNvdXJjZXMvd29ya2Jvb2tfc2VsZWN0LnBuZycsXG4gICAgICAgIHRleHQ6ICforrDplJnpopgnXG4gICAgICB9LCB7XG4gICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvbXkvaW5kZXgnLFxuICAgICAgICBpY29uUGF0aDogJ2NvbW1vbi9yZXNvdXJjZXMvdXNlci5wbmcnLFxuICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnY29tbW9uL3Jlc291cmNlcy91c2VyX3NlbGVjdC5wbmcnLFxuICAgICAgICB0ZXh0OiAn5oiR55qEJ1xuICAgICAgfV1cbiAgICB9LFxuICAgIHdpbmRvdzoge1xuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjRkJGQkZCJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfplJnpopjlvZLnurPmnKzlsI/lrabmlbDlraYnLFxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJ1xuICAgIH0sXG4gICAgbmV0d29ya1RpbWVvdXQ6IHtcbiAgICAgIHJlcXVlc3Q6IDgwMDAsXG4gICAgICBkb3dubG9hZEZpbGU6IDgwMDBcbiAgICB9XG4gIH1cblxuICBnbG9iYWxEYXRhID0ge1xuICAgIHVzZXJJbmZvOiBudWxsXG4gIH1cblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcbiAgfVxuXG4gIC8vIGdldFVzZXJJbmZvKGNiKSB7XG4gIC8vICAgY29uc3QgdGhhdCA9IHRoaXNcbiAgLy8gICBpZiAodGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XG4gIC8vICAgICByZXR1cm4gdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvXG4gIC8vICAgfVxuICAvLyAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAvLyAgICAgc3VjY2VzcyAocmVzKSB7XG4gIC8vICAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xuICAvLyAgICAgICBjYiAmJiBjYihyZXMudXNlckluZm8pXG4gIC8vICAgICB9XG4gIC8vICAgfSlcbiAgLy8gfVxufVxuIl19