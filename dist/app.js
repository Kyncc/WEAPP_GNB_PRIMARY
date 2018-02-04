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
      pages: ['pages/my/index', 'pages/my/info', 'pages/my/pay', 'pages/init/grade', 'pages/workbook/add', 'pages/workbook/index', 'pages/workbook/want', 'pages/workbook/error', 'pages/workbook/correct', 'pages/workbook/chapter', 'pages/workbook/exercise', 'pages/statistics/index', 'pages/statistics/list'],
      tabBar: {
        color: '#aaa',
        selectedColor: '#3FC6C6',
        borderStyle: 'black',
        backgroundColor: '#ffffff',
        list: [{
          pagePath: 'pages/workbook/index',
          iconPath: 'common/resources/statistics.png',
          selectedIconPath: 'common/resources/statistics_select.png',
          text: '错题本'
        }, {
          pagePath: 'pages/statistics/index',
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
    _this.intercept('request', {
      config: function config(params) {
        var openId = {
          'openId': _wepy2.default.getStorageSync('openId')
        };
        _wepy2.default.showNavigationBarLoading();
        params.header = openId;
        return params;
      },
      success: function success(res) {
        console.log(res);
        var statusCode = res.statusCode.toString();
        if (statusCode === '200') {
          return res.data.data;
        } else if (statusCode === '401') {
          _wepy2.default.redirectTo({
            url: '/pages/init/grade'
          });
        }
      },
      fail: function fail(error) {
        _wepy2.default.showToast({
          title: '网络错误',
          icon: 'none'
        });
        return Promise.reject(error);
      },
      complete: function complete() {
        _wepy2.default.hideNavigationBarLoading();
      }
    });
    wx.onNetworkStatusChange(function (res) {
      if (!res.isConnected) {
        _wepy2.default.showToast({
          title: '请检查网络连接',
          icon: 'none'
        });
      }
    });
    return _this;
  }

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsInRhYkJhciIsImNvbG9yIiwic2VsZWN0ZWRDb2xvciIsImJvcmRlclN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwibGlzdCIsInBhZ2VQYXRoIiwiaWNvblBhdGgiLCJzZWxlY3RlZEljb25QYXRoIiwidGV4dCIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuZXR3b3JrVGltZW91dCIsInJlcXVlc3QiLCJkb3dubG9hZEZpbGUiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJpbnRlcmNlcHQiLCJwYXJhbXMiLCJvcGVuSWQiLCJnZXRTdG9yYWdlU3luYyIsInNob3dOYXZpZ2F0aW9uQmFyTG9hZGluZyIsImhlYWRlciIsInN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzQ29kZSIsInRvU3RyaW5nIiwiZGF0YSIsInJlZGlyZWN0VG8iLCJ1cmwiLCJmYWlsIiwiZXJyb3IiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJQcm9taXNlIiwicmVqZWN0IiwiY29tcGxldGUiLCJoaWRlTmF2aWdhdGlvbkJhckxvYWRpbmciLCJ3eCIsIm9uTmV0d29ya1N0YXR1c0NoYW5nZSIsImlzQ29ubmVjdGVkIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7OztBQXlERSxzQkFBZTtBQUFBOztBQUFBOztBQUFBLFVBdERmQSxNQXNEZSxHQXRETjtBQUNQQyxhQUFPLENBQ0wsZ0JBREssRUFFTCxlQUZLLEVBR0wsY0FISyxFQUlMLGtCQUpLLEVBS0wsb0JBTEssRUFNTCxzQkFOSyxFQU9MLHFCQVBLLEVBUUwsc0JBUkssRUFTTCx3QkFUSyxFQVVMLHdCQVZLLEVBV0wseUJBWEssRUFZTCx3QkFaSyxFQWFMLHVCQWJLLENBREE7QUFnQlBDLGNBQVE7QUFDTkMsZUFBTyxNQUREO0FBRU5DLHVCQUFlLFNBRlQ7QUFHTkMscUJBQWEsT0FIUDtBQUlOQyx5QkFBaUIsU0FKWDtBQUtOQyxjQUFNLENBQUM7QUFDTEMsb0JBQVUsc0JBREw7QUFFTEMsb0JBQVUsaUNBRkw7QUFHTEMsNEJBQWtCLHdDQUhiO0FBSUxDLGdCQUFNO0FBSkQsU0FBRCxFQUtIO0FBQ0RILG9CQUFVLHdCQURUO0FBRURDLG9CQUFVLCtCQUZUO0FBR0RDLDRCQUFrQixzQ0FIakI7QUFJREMsZ0JBQU07QUFKTCxTQUxHLEVBVUg7QUFDREgsb0JBQVUsZ0JBRFQ7QUFFREMsb0JBQVUsMkJBRlQ7QUFHREMsNEJBQWtCLGtDQUhqQjtBQUlEQyxnQkFBTTtBQUpMLFNBVkc7QUFMQSxPQWhCRDtBQXNDUEMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxzQ0FBOEIsU0FGeEI7QUFHTkMsZ0NBQXdCLFdBSGxCO0FBSU5DLGdDQUF3QjtBQUpsQixPQXRDRDtBQTRDUEMsc0JBQWdCO0FBQ2RDLGlCQUFTLElBREs7QUFFZEMsc0JBQWM7QUFGQTtBQTVDVCxLQXNETTtBQUFBLFVBSmZDLFVBSWUsR0FKRjtBQUNYQyxnQkFBVTtBQURDLEtBSUU7O0FBRWIsVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFDQSxVQUFLQyxTQUFMLENBQWUsU0FBZixFQUEwQjtBQUN4QnZCLFlBRHdCLGtCQUNqQndCLE1BRGlCLEVBQ1Q7QUFDYixZQUFJQyxTQUFTO0FBQ1gsb0JBQVUsZUFBS0MsY0FBTCxDQUFvQixRQUFwQjtBQURDLFNBQWI7QUFHQSx1QkFBS0Msd0JBQUw7QUFDQUgsZUFBT0ksTUFBUCxHQUFnQkgsTUFBaEI7QUFDQSxlQUFPRCxNQUFQO0FBQ0QsT0FSdUI7QUFTeEJLLGFBVHdCLG1CQVNoQkMsR0FUZ0IsRUFTWDtBQUNYQyxnQkFBUUMsR0FBUixDQUFZRixHQUFaO0FBQ0EsWUFBSUcsYUFBYUgsSUFBSUcsVUFBSixDQUFlQyxRQUFmLEVBQWpCO0FBQ0EsWUFBSUQsZUFBZSxLQUFuQixFQUEwQjtBQUN4QixpQkFBT0gsSUFBSUssSUFBSixDQUFTQSxJQUFoQjtBQUNELFNBRkQsTUFFTyxJQUFJRixlQUFlLEtBQW5CLEVBQTBCO0FBQy9CLHlCQUFLRyxVQUFMLENBQWdCO0FBQ2RDLGlCQUFLO0FBRFMsV0FBaEI7QUFHRDtBQUNGLE9BbkJ1QjtBQW9CeEJDLFVBcEJ3QixnQkFvQm5CQyxLQXBCbUIsRUFvQlo7QUFDVix1QkFBS0MsU0FBTCxDQUFlO0FBQ2JDLGlCQUFPLE1BRE07QUFFYkMsZ0JBQU07QUFGTyxTQUFmO0FBSUEsZUFBT0MsUUFBUUMsTUFBUixDQUFlTCxLQUFmLENBQVA7QUFDRCxPQTFCdUI7QUEyQnhCTSxjQTNCd0Isc0JBMkJiO0FBQ1QsdUJBQUtDLHdCQUFMO0FBQ0Q7QUE3QnVCLEtBQTFCO0FBK0JBQyxPQUFHQyxxQkFBSCxDQUF5QixVQUFDbEIsR0FBRCxFQUFTO0FBQ2hDLFVBQUksQ0FBQ0EsSUFBSW1CLFdBQVQsRUFBc0I7QUFDcEIsdUJBQUtULFNBQUwsQ0FBZTtBQUNiQyxpQkFBTyxTQURNO0FBRWJDLGdCQUFNO0FBRk8sU0FBZjtBQUlEO0FBQ0YsS0FQRDtBQWxDYTtBQTBDZDs7O0VBakcwQixlQUFLUSxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XG4gIGNvbmZpZyA9IHtcbiAgICBwYWdlczogW1xuICAgICAgJ3BhZ2VzL215L2luZGV4JyxcbiAgICAgICdwYWdlcy9teS9pbmZvJyxcbiAgICAgICdwYWdlcy9teS9wYXknLFxuICAgICAgJ3BhZ2VzL2luaXQvZ3JhZGUnLFxuICAgICAgJ3BhZ2VzL3dvcmtib29rL2FkZCcsXG4gICAgICAncGFnZXMvd29ya2Jvb2svaW5kZXgnLFxuICAgICAgJ3BhZ2VzL3dvcmtib29rL3dhbnQnLFxuICAgICAgJ3BhZ2VzL3dvcmtib29rL2Vycm9yJyxcbiAgICAgICdwYWdlcy93b3JrYm9vay9jb3JyZWN0JyxcbiAgICAgICdwYWdlcy93b3JrYm9vay9jaGFwdGVyJyxcbiAgICAgICdwYWdlcy93b3JrYm9vay9leGVyY2lzZScsXG4gICAgICAncGFnZXMvc3RhdGlzdGljcy9pbmRleCcsXG4gICAgICAncGFnZXMvc3RhdGlzdGljcy9saXN0J1xuICAgIF0sXG4gICAgdGFiQmFyOiB7XG4gICAgICBjb2xvcjogJyNhYWEnLFxuICAgICAgc2VsZWN0ZWRDb2xvcjogJyMzRkM2QzYnLFxuICAgICAgYm9yZGVyU3R5bGU6ICdibGFjaycsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgIGxpc3Q6IFt7XG4gICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvd29ya2Jvb2svaW5kZXgnLFxuICAgICAgICBpY29uUGF0aDogJ2NvbW1vbi9yZXNvdXJjZXMvc3RhdGlzdGljcy5wbmcnLFxuICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnY29tbW9uL3Jlc291cmNlcy9zdGF0aXN0aWNzX3NlbGVjdC5wbmcnLFxuICAgICAgICB0ZXh0OiAn6ZSZ6aKY5pysJ1xuICAgICAgfSwge1xuICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL3N0YXRpc3RpY3MvaW5kZXgnLFxuICAgICAgICBpY29uUGF0aDogJ2NvbW1vbi9yZXNvdXJjZXMvd29ya2Jvb2sucG5nJyxcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2NvbW1vbi9yZXNvdXJjZXMvd29ya2Jvb2tfc2VsZWN0LnBuZycsXG4gICAgICAgIHRleHQ6ICforrDplJnpopgnXG4gICAgICB9LCB7XG4gICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvbXkvaW5kZXgnLFxuICAgICAgICBpY29uUGF0aDogJ2NvbW1vbi9yZXNvdXJjZXMvdXNlci5wbmcnLFxuICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnY29tbW9uL3Jlc291cmNlcy91c2VyX3NlbGVjdC5wbmcnLFxuICAgICAgICB0ZXh0OiAn5oiR55qEJ1xuICAgICAgfV1cbiAgICB9LFxuICAgIHdpbmRvdzoge1xuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjRkJGQkZCJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfplJnpopjlvZLnurPmnKzlsI/lrabmlbDlraYnLFxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJ1xuICAgIH0sXG4gICAgbmV0d29ya1RpbWVvdXQ6IHtcbiAgICAgIHJlcXVlc3Q6IDgwMDAsXG4gICAgICBkb3dubG9hZEZpbGU6IDgwMDBcbiAgICB9XG4gIH1cblxuICBnbG9iYWxEYXRhID0ge1xuICAgIHVzZXJJbmZvOiBudWxsXG4gIH1cblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcbiAgICB0aGlzLmludGVyY2VwdCgncmVxdWVzdCcsIHtcbiAgICAgIGNvbmZpZyhwYXJhbXMpIHtcbiAgICAgICAgbGV0IG9wZW5JZCA9IHtcbiAgICAgICAgICAnb3BlbklkJzogd2VweS5nZXRTdG9yYWdlU3luYygnb3BlbklkJylcbiAgICAgICAgfVxuICAgICAgICB3ZXB5LnNob3dOYXZpZ2F0aW9uQmFyTG9hZGluZygpXG4gICAgICAgIHBhcmFtcy5oZWFkZXIgPSBvcGVuSWRcbiAgICAgICAgcmV0dXJuIHBhcmFtc1xuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgbGV0IHN0YXR1c0NvZGUgPSByZXMuc3RhdHVzQ29kZS50b1N0cmluZygpXG4gICAgICAgIGlmIChzdGF0dXNDb2RlID09PSAnMjAwJykge1xuICAgICAgICAgIHJldHVybiByZXMuZGF0YS5kYXRhXG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzQ29kZSA9PT0gJzQwMScpIHtcbiAgICAgICAgICB3ZXB5LnJlZGlyZWN0VG8oe1xuICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2luaXQvZ3JhZGUnXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZhaWwoZXJyb3IpIHtcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn572R57uc6ZSZ6K+vJyxcbiAgICAgICAgICBpY29uOiAnbm9uZSdcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKVxuICAgICAgfSxcbiAgICAgIGNvbXBsZXRlKCkge1xuICAgICAgICB3ZXB5LmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpXG4gICAgICB9XG4gICAgfSlcbiAgICB3eC5vbk5ldHdvcmtTdGF0dXNDaGFuZ2UoKHJlcykgPT4ge1xuICAgICAgaWYgKCFyZXMuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn6K+35qOA5p+l572R57uc6L+e5o6lJyxcbiAgICAgICAgICBpY29uOiAnbm9uZSdcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=