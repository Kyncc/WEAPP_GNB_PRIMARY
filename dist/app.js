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
      pages: ['pages/my/index', 'pages/my/info', 'pages/my/pay', 'pages/workbook/add', 'pages/workbook/index', 'pages/workbook/want', 'pages/workbook/error', 'pages/workbook/chapter', 'pages/workbook/exercise', 'pages/statistics/index', 'pages/statistics/list'],
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
    // this.use('promisify')
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
        var statusCode = res.statusCode.toString();
        if (statusCode === '200') {
          return res.data.data;
        } else if (statusCode === '401') {
          // this._redirectToRegister()
        }
      },
      fail: function fail(error) {
        _wepy2.default.showToast({
          title: '网络错误',
          image: 'http://img.guinaben.com/xcx_error.png'
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
          title: '网络错误',
          image: 'http://img.guinaben.com/xcx_error.png'
        });
      }
    });
    return _this;
  }

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsInRhYkJhciIsImNvbG9yIiwic2VsZWN0ZWRDb2xvciIsImJvcmRlclN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwibGlzdCIsInBhZ2VQYXRoIiwiaWNvblBhdGgiLCJzZWxlY3RlZEljb25QYXRoIiwidGV4dCIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuZXR3b3JrVGltZW91dCIsInJlcXVlc3QiLCJkb3dubG9hZEZpbGUiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJpbnRlcmNlcHQiLCJwYXJhbXMiLCJvcGVuSWQiLCJnZXRTdG9yYWdlU3luYyIsInNob3dOYXZpZ2F0aW9uQmFyTG9hZGluZyIsImhlYWRlciIsInN1Y2Nlc3MiLCJyZXMiLCJzdGF0dXNDb2RlIiwidG9TdHJpbmciLCJkYXRhIiwiZmFpbCIsImVycm9yIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpbWFnZSIsIlByb21pc2UiLCJyZWplY3QiLCJjb21wbGV0ZSIsImhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZyIsInd4Iiwib25OZXR3b3JrU3RhdHVzQ2hhbmdlIiwiaXNDb25uZWN0ZWQiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7O0FBdURFLHNCQUFlO0FBQUE7O0FBQUE7O0FBQUEsVUFwRGZBLE1Bb0RlLEdBcEROO0FBQ1BDLGFBQU8sQ0FDTCxnQkFESyxFQUVMLGVBRkssRUFHTCxjQUhLLEVBSUwsb0JBSkssRUFLTCxzQkFMSyxFQU1MLHFCQU5LLEVBT0wsc0JBUEssRUFRTCx3QkFSSyxFQVNMLHlCQVRLLEVBVUwsd0JBVkssRUFXTCx1QkFYSyxDQURBO0FBY1BDLGNBQVE7QUFDTkMsZUFBTyxNQUREO0FBRU5DLHVCQUFlLFNBRlQ7QUFHTkMscUJBQWEsT0FIUDtBQUlOQyx5QkFBaUIsU0FKWDtBQUtOQyxjQUFNLENBQUM7QUFDTEMsb0JBQVUsc0JBREw7QUFFTEMsb0JBQVUsaUNBRkw7QUFHTEMsNEJBQWtCLHdDQUhiO0FBSUxDLGdCQUFNO0FBSkQsU0FBRCxFQUtIO0FBQ0RILG9CQUFVLHdCQURUO0FBRURDLG9CQUFVLCtCQUZUO0FBR0RDLDRCQUFrQixzQ0FIakI7QUFJREMsZ0JBQU07QUFKTCxTQUxHLEVBVUg7QUFDREgsb0JBQVUsZ0JBRFQ7QUFFREMsb0JBQVUsMkJBRlQ7QUFHREMsNEJBQWtCLGtDQUhqQjtBQUlEQyxnQkFBTTtBQUpMLFNBVkc7QUFMQSxPQWREO0FBb0NQQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmO0FBRU5DLHNDQUE4QixTQUZ4QjtBQUdOQyxnQ0FBd0IsV0FIbEI7QUFJTkMsZ0NBQXdCO0FBSmxCLE9BcENEO0FBMENQQyxzQkFBZ0I7QUFDZEMsaUJBQVMsSUFESztBQUVkQyxzQkFBYztBQUZBO0FBMUNULEtBb0RNO0FBQUEsVUFKZkMsVUFJZSxHQUpGO0FBQ1hDLGdCQUFVO0FBREMsS0FJRTs7QUFFYixVQUFLQyxHQUFMLENBQVMsWUFBVDtBQUNBO0FBQ0EsVUFBS0MsU0FBTCxDQUFlLFNBQWYsRUFBMEI7QUFDeEJ2QixZQUR3QixrQkFDakJ3QixNQURpQixFQUNUO0FBQ2IsWUFBSUMsU0FBUztBQUNYLG9CQUFVLGVBQUtDLGNBQUwsQ0FBb0IsUUFBcEI7QUFEQyxTQUFiO0FBR0EsdUJBQUtDLHdCQUFMO0FBQ0FILGVBQU9JLE1BQVAsR0FBZ0JILE1BQWhCO0FBQ0EsZUFBT0QsTUFBUDtBQUNELE9BUnVCO0FBU3hCSyxhQVR3QixtQkFTaEJDLEdBVGdCLEVBU1g7QUFDWCxZQUFJQyxhQUFhRCxJQUFJQyxVQUFKLENBQWVDLFFBQWYsRUFBakI7QUFDQSxZQUFJRCxlQUFlLEtBQW5CLEVBQTBCO0FBQ3hCLGlCQUFPRCxJQUFJRyxJQUFKLENBQVNBLElBQWhCO0FBQ0QsU0FGRCxNQUVPLElBQUlGLGVBQWUsS0FBbkIsRUFBMEI7QUFDL0I7QUFDRDtBQUNGLE9BaEJ1QjtBQWlCeEJHLFVBakJ3QixnQkFpQm5CQyxLQWpCbUIsRUFpQlo7QUFDVix1QkFBS0MsU0FBTCxDQUFlO0FBQ2JDLGlCQUFPLE1BRE07QUFFYkMsaUJBQU87QUFGTSxTQUFmO0FBSUEsZUFBT0MsUUFBUUMsTUFBUixDQUFlTCxLQUFmLENBQVA7QUFDRCxPQXZCdUI7QUF3QnhCTSxjQXhCd0Isc0JBd0JiO0FBQ1QsdUJBQUtDLHdCQUFMO0FBQ0Q7QUExQnVCLEtBQTFCO0FBNEJBQyxPQUFHQyxxQkFBSCxDQUF5QixVQUFDZCxHQUFELEVBQVM7QUFDaEMsVUFBSSxDQUFDQSxJQUFJZSxXQUFULEVBQXNCO0FBQ3BCLHVCQUFLVCxTQUFMLENBQWU7QUFDYkMsaUJBQU8sTUFETTtBQUViQyxpQkFBTztBQUZNLFNBQWY7QUFJRDtBQUNGLEtBUEQ7QUFoQ2E7QUF3Q2Q7OztFQTdGMEIsZUFBS1EsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuICBjb25maWcgPSB7XG4gICAgcGFnZXM6IFtcbiAgICAgICdwYWdlcy9teS9pbmRleCcsXG4gICAgICAncGFnZXMvbXkvaW5mbycsXG4gICAgICAncGFnZXMvbXkvcGF5JyxcbiAgICAgICdwYWdlcy93b3JrYm9vay9hZGQnLFxuICAgICAgJ3BhZ2VzL3dvcmtib29rL2luZGV4JyxcbiAgICAgICdwYWdlcy93b3JrYm9vay93YW50JyxcbiAgICAgICdwYWdlcy93b3JrYm9vay9lcnJvcicsXG4gICAgICAncGFnZXMvd29ya2Jvb2svY2hhcHRlcicsXG4gICAgICAncGFnZXMvd29ya2Jvb2svZXhlcmNpc2UnLFxuICAgICAgJ3BhZ2VzL3N0YXRpc3RpY3MvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL3N0YXRpc3RpY3MvbGlzdCdcbiAgICBdLFxuICAgIHRhYkJhcjoge1xuICAgICAgY29sb3I6ICcjYWFhJyxcbiAgICAgIHNlbGVjdGVkQ29sb3I6ICcjM0ZDNkM2JyxcbiAgICAgIGJvcmRlclN0eWxlOiAnYmxhY2snLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXG4gICAgICBsaXN0OiBbe1xuICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL3dvcmtib29rL2luZGV4JyxcbiAgICAgICAgaWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3N0YXRpc3RpY3MucG5nJyxcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2NvbW1vbi9yZXNvdXJjZXMvc3RhdGlzdGljc19zZWxlY3QucG5nJyxcbiAgICAgICAgdGV4dDogJ+mUmemimOacrCdcbiAgICAgIH0sIHtcbiAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9zdGF0aXN0aWNzL2luZGV4JyxcbiAgICAgICAgaWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3dvcmtib29rLnBuZycsXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3dvcmtib29rX3NlbGVjdC5wbmcnLFxuICAgICAgICB0ZXh0OiAn6K6w6ZSZ6aKYJ1xuICAgICAgfSwge1xuICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL215L2luZGV4JyxcbiAgICAgICAgaWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3VzZXIucG5nJyxcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2NvbW1vbi9yZXNvdXJjZXMvdXNlcl9zZWxlY3QucG5nJyxcbiAgICAgICAgdGV4dDogJ+aIkeeahCdcbiAgICAgIH1dXG4gICAgfSxcbiAgICB3aW5kb3c6IHtcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI0ZCRkJGQicsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6ZSZ6aKY5b2S57qz5pys5bCP5a2m5pWw5a2mJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaydcbiAgICB9LFxuICAgIG5ldHdvcmtUaW1lb3V0OiB7XG4gICAgICByZXF1ZXN0OiA4MDAwLFxuICAgICAgZG93bmxvYWRGaWxlOiA4MDAwXG4gICAgfVxuICB9XG5cbiAgZ2xvYmFsRGF0YSA9IHtcbiAgICB1c2VySW5mbzogbnVsbFxuICB9XG5cbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXG4gICAgLy8gdGhpcy51c2UoJ3Byb21pc2lmeScpXG4gICAgdGhpcy5pbnRlcmNlcHQoJ3JlcXVlc3QnLCB7XG4gICAgICBjb25maWcocGFyYW1zKSB7XG4gICAgICAgIGxldCBvcGVuSWQgPSB7XG4gICAgICAgICAgJ29wZW5JZCc6IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ29wZW5JZCcpXG4gICAgICAgIH1cbiAgICAgICAgd2VweS5zaG93TmF2aWdhdGlvbkJhckxvYWRpbmcoKVxuICAgICAgICBwYXJhbXMuaGVhZGVyID0gb3BlbklkXG4gICAgICAgIHJldHVybiBwYXJhbXNcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBsZXQgc3RhdHVzQ29kZSA9IHJlcy5zdGF0dXNDb2RlLnRvU3RyaW5nKClcbiAgICAgICAgaWYgKHN0YXR1c0NvZGUgPT09ICcyMDAnKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5kYXRhLmRhdGFcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0dXNDb2RlID09PSAnNDAxJykge1xuICAgICAgICAgIC8vIHRoaXMuX3JlZGlyZWN0VG9SZWdpc3RlcigpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWlsKGVycm9yKSB7XG4gICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICB0aXRsZTogJ+e9kee7nOmUmeivrycsXG4gICAgICAgICAgaW1hZ2U6ICdodHRwOi8vaW1nLmd1aW5hYmVuLmNvbS94Y3hfZXJyb3IucG5nJ1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpXG4gICAgICB9LFxuICAgICAgY29tcGxldGUoKSB7XG4gICAgICAgIHdlcHkuaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nKClcbiAgICAgIH1cbiAgICB9KVxuICAgIHd4Lm9uTmV0d29ya1N0YXR1c0NoYW5nZSgocmVzKSA9PiB7XG4gICAgICBpZiAoIXJlcy5pc0Nvbm5lY3RlZCkge1xuICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICfnvZHnu5zplJnor68nLFxuICAgICAgICAgIGltYWdlOiAnaHR0cDovL2ltZy5ndWluYWJlbi5jb20veGN4X2Vycm9yLnBuZydcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=