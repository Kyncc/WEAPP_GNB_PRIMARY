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
      pages: ['pages/my/index', 'pages/my/info', 'pages/my/pay', 'pages/my/email', 'pages/init/grade', 'pages/workbook/add', 'pages/workbook/index', 'pages/workbook/want', 'pages/workbook/error', 'pages/workbook/correct', 'pages/workbook/chapter', 'pages/workbook/exercise', 'pages/statistics/index', 'pages/statistics/error', 'pages/statistics/correct'],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsInRhYkJhciIsImNvbG9yIiwic2VsZWN0ZWRDb2xvciIsImJvcmRlclN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwibGlzdCIsInBhZ2VQYXRoIiwiaWNvblBhdGgiLCJzZWxlY3RlZEljb25QYXRoIiwidGV4dCIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuZXR3b3JrVGltZW91dCIsInJlcXVlc3QiLCJkb3dubG9hZEZpbGUiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJpbnRlcmNlcHQiLCJwYXJhbXMiLCJvcGVuSWQiLCJnZXRTdG9yYWdlU3luYyIsInNob3dOYXZpZ2F0aW9uQmFyTG9hZGluZyIsImhlYWRlciIsInN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzQ29kZSIsInRvU3RyaW5nIiwiZGF0YSIsInJlZGlyZWN0VG8iLCJ1cmwiLCJmYWlsIiwiZXJyb3IiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJQcm9taXNlIiwicmVqZWN0IiwiY29tcGxldGUiLCJoaWRlTmF2aWdhdGlvbkJhckxvYWRpbmciLCJ3eCIsIm9uTmV0d29ya1N0YXR1c0NoYW5nZSIsImlzQ29ubmVjdGVkIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7OztBQTJERSxzQkFBZTtBQUFBOztBQUFBOztBQUFBLFVBeERmQSxNQXdEZSxHQXhETjtBQUNQQyxhQUFPLENBQ0wsZ0JBREssRUFFTCxlQUZLLEVBR0wsY0FISyxFQUlMLGdCQUpLLEVBS0wsa0JBTEssRUFNTCxvQkFOSyxFQU9MLHNCQVBLLEVBUUwscUJBUkssRUFTTCxzQkFUSyxFQVVMLHdCQVZLLEVBV0wsd0JBWEssRUFZTCx5QkFaSyxFQWFMLHdCQWJLLEVBY0wsd0JBZEssRUFlTCwwQkFmSyxDQURBO0FBa0JQQyxjQUFRO0FBQ05DLGVBQU8sTUFERDtBQUVOQyx1QkFBZSxTQUZUO0FBR05DLHFCQUFhLE9BSFA7QUFJTkMseUJBQWlCLFNBSlg7QUFLTkMsY0FBTSxDQUFDO0FBQ0xDLG9CQUFVLHNCQURMO0FBRUxDLG9CQUFVLGlDQUZMO0FBR0xDLDRCQUFrQix3Q0FIYjtBQUlMQyxnQkFBTTtBQUpELFNBQUQsRUFLSDtBQUNESCxvQkFBVSx3QkFEVDtBQUVEQyxvQkFBVSwrQkFGVDtBQUdEQyw0QkFBa0Isc0NBSGpCO0FBSURDLGdCQUFNO0FBSkwsU0FMRyxFQVVIO0FBQ0RILG9CQUFVLGdCQURUO0FBRURDLG9CQUFVLDJCQUZUO0FBR0RDLDRCQUFrQixrQ0FIakI7QUFJREMsZ0JBQU07QUFKTCxTQVZHO0FBTEEsT0FsQkQ7QUF3Q1BDLGNBQVE7QUFDTkMsNkJBQXFCLE9BRGY7QUFFTkMsc0NBQThCLFNBRnhCO0FBR05DLGdDQUF3QixXQUhsQjtBQUlOQyxnQ0FBd0I7QUFKbEIsT0F4Q0Q7QUE4Q1BDLHNCQUFnQjtBQUNkQyxpQkFBUyxJQURLO0FBRWRDLHNCQUFjO0FBRkE7QUE5Q1QsS0F3RE07QUFBQSxVQUpmQyxVQUllLEdBSkY7QUFDWEMsZ0JBQVU7QUFEQyxLQUlFOztBQUViLFVBQUtDLEdBQUwsQ0FBUyxZQUFUO0FBQ0EsVUFBS0MsU0FBTCxDQUFlLFNBQWYsRUFBMEI7QUFDeEJ2QixZQUR3QixrQkFDakJ3QixNQURpQixFQUNUO0FBQ2IsWUFBSUMsU0FBUztBQUNYLG9CQUFVLGVBQUtDLGNBQUwsQ0FBb0IsUUFBcEI7QUFEQyxTQUFiO0FBR0EsdUJBQUtDLHdCQUFMO0FBQ0FILGVBQU9JLE1BQVAsR0FBZ0JILE1BQWhCO0FBQ0EsZUFBT0QsTUFBUDtBQUNELE9BUnVCO0FBU3hCSyxhQVR3QixtQkFTaEJDLEdBVGdCLEVBU1g7QUFDWEMsZ0JBQVFDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBLFlBQUlHLGFBQWFILElBQUlHLFVBQUosQ0FBZUMsUUFBZixFQUFqQjtBQUNBLFlBQUlELGVBQWUsS0FBbkIsRUFBMEI7QUFDeEIsaUJBQU9ILElBQUlLLElBQUosQ0FBU0EsSUFBaEI7QUFDRCxTQUZELE1BRU8sSUFBSUYsZUFBZSxLQUFuQixFQUEwQjtBQUMvQix5QkFBS0csVUFBTCxDQUFnQjtBQUNkQyxpQkFBSztBQURTLFdBQWhCO0FBR0Q7QUFDRixPQW5CdUI7QUFvQnhCQyxVQXBCd0IsZ0JBb0JuQkMsS0FwQm1CLEVBb0JaO0FBQ1YsdUJBQUtDLFNBQUwsQ0FBZTtBQUNiQyxpQkFBTyxNQURNO0FBRWJDLGdCQUFNO0FBRk8sU0FBZjtBQUlBLGVBQU9DLFFBQVFDLE1BQVIsQ0FBZUwsS0FBZixDQUFQO0FBQ0QsT0ExQnVCO0FBMkJ4Qk0sY0EzQndCLHNCQTJCYjtBQUNULHVCQUFLQyx3QkFBTDtBQUNEO0FBN0J1QixLQUExQjtBQStCQUMsT0FBR0MscUJBQUgsQ0FBeUIsVUFBQ2xCLEdBQUQsRUFBUztBQUNoQyxVQUFJLENBQUNBLElBQUltQixXQUFULEVBQXNCO0FBQ3BCLHVCQUFLVCxTQUFMLENBQWU7QUFDYkMsaUJBQU8sU0FETTtBQUViQyxnQkFBTTtBQUZPLFNBQWY7QUFJRDtBQUNGLEtBUEQ7QUFsQ2E7QUEwQ2Q7OztFQW5HMEIsZUFBS1EsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuICBjb25maWcgPSB7XG4gICAgcGFnZXM6IFtcbiAgICAgICdwYWdlcy9teS9pbmRleCcsXG4gICAgICAncGFnZXMvbXkvaW5mbycsXG4gICAgICAncGFnZXMvbXkvcGF5JyxcbiAgICAgICdwYWdlcy9teS9lbWFpbCcsXG4gICAgICAncGFnZXMvaW5pdC9ncmFkZScsXG4gICAgICAncGFnZXMvd29ya2Jvb2svYWRkJyxcbiAgICAgICdwYWdlcy93b3JrYm9vay9pbmRleCcsXG4gICAgICAncGFnZXMvd29ya2Jvb2svd2FudCcsXG4gICAgICAncGFnZXMvd29ya2Jvb2svZXJyb3InLFxuICAgICAgJ3BhZ2VzL3dvcmtib29rL2NvcnJlY3QnLFxuICAgICAgJ3BhZ2VzL3dvcmtib29rL2NoYXB0ZXInLFxuICAgICAgJ3BhZ2VzL3dvcmtib29rL2V4ZXJjaXNlJyxcbiAgICAgICdwYWdlcy9zdGF0aXN0aWNzL2luZGV4JyxcbiAgICAgICdwYWdlcy9zdGF0aXN0aWNzL2Vycm9yJyxcbiAgICAgICdwYWdlcy9zdGF0aXN0aWNzL2NvcnJlY3QnXG4gICAgXSxcbiAgICB0YWJCYXI6IHtcbiAgICAgIGNvbG9yOiAnI2FhYScsXG4gICAgICBzZWxlY3RlZENvbG9yOiAnIzNGQzZDNicsXG4gICAgICBib3JkZXJTdHlsZTogJ2JsYWNrJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxuICAgICAgbGlzdDogW3tcbiAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy93b3JrYm9vay9pbmRleCcsXG4gICAgICAgIGljb25QYXRoOiAnY29tbW9uL3Jlc291cmNlcy9zdGF0aXN0aWNzLnBuZycsXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3N0YXRpc3RpY3Nfc2VsZWN0LnBuZycsXG4gICAgICAgIHRleHQ6ICfplJnpopjmnKwnXG4gICAgICB9LCB7XG4gICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvc3RhdGlzdGljcy9pbmRleCcsXG4gICAgICAgIGljb25QYXRoOiAnY29tbW9uL3Jlc291cmNlcy93b3JrYm9vay5wbmcnLFxuICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnY29tbW9uL3Jlc291cmNlcy93b3JrYm9va19zZWxlY3QucG5nJyxcbiAgICAgICAgdGV4dDogJ+iusOmUmemimCdcbiAgICAgIH0sIHtcbiAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9teS9pbmRleCcsXG4gICAgICAgIGljb25QYXRoOiAnY29tbW9uL3Jlc291cmNlcy91c2VyLnBuZycsXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3VzZXJfc2VsZWN0LnBuZycsXG4gICAgICAgIHRleHQ6ICfmiJHnmoQnXG4gICAgICB9XVxuICAgIH0sXG4gICAgd2luZG93OiB7XG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNGQkZCRkInLFxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mUmemimOW9kue6s+acrOWwj+WtpuaVsOWtpicsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snXG4gICAgfSxcbiAgICBuZXR3b3JrVGltZW91dDoge1xuICAgICAgcmVxdWVzdDogODAwMCxcbiAgICAgIGRvd25sb2FkRmlsZTogODAwMFxuICAgIH1cbiAgfVxuXG4gIGdsb2JhbERhdGEgPSB7XG4gICAgdXNlckluZm86IG51bGxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxuICAgIHRoaXMuaW50ZXJjZXB0KCdyZXF1ZXN0Jywge1xuICAgICAgY29uZmlnKHBhcmFtcykge1xuICAgICAgICBsZXQgb3BlbklkID0ge1xuICAgICAgICAgICdvcGVuSWQnOiB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdvcGVuSWQnKVxuICAgICAgICB9XG4gICAgICAgIHdlcHkuc2hvd05hdmlnYXRpb25CYXJMb2FkaW5nKClcbiAgICAgICAgcGFyYW1zLmhlYWRlciA9IG9wZW5JZFxuICAgICAgICByZXR1cm4gcGFyYW1zXG4gICAgICB9LFxuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICBsZXQgc3RhdHVzQ29kZSA9IHJlcy5zdGF0dXNDb2RlLnRvU3RyaW5nKClcbiAgICAgICAgaWYgKHN0YXR1c0NvZGUgPT09ICcyMDAnKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5kYXRhLmRhdGFcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0dXNDb2RlID09PSAnNDAxJykge1xuICAgICAgICAgIHdlcHkucmVkaXJlY3RUbyh7XG4gICAgICAgICAgICB1cmw6ICcvcGFnZXMvaW5pdC9ncmFkZSdcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmFpbChlcnJvcikge1xuICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICfnvZHnu5zplJnor68nLFxuICAgICAgICAgIGljb246ICdub25lJ1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpXG4gICAgICB9LFxuICAgICAgY29tcGxldGUoKSB7XG4gICAgICAgIHdlcHkuaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nKClcbiAgICAgIH1cbiAgICB9KVxuICAgIHd4Lm9uTmV0d29ya1N0YXR1c0NoYW5nZSgocmVzKSA9PiB7XG4gICAgICBpZiAoIXJlcy5pc0Nvbm5lY3RlZCkge1xuICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICfor7fmo4Dmn6XnvZHnu5zov57mjqUnLFxuICAgICAgICAgIGljb246ICdub25lJ1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==