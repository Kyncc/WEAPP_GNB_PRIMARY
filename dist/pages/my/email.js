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

var MyEmail = function (_wepy$page) {
  _inherits(MyEmail, _wepy$page);

  function MyEmail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MyEmail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MyEmail.__proto__ || Object.getPrototypeOf(MyEmail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '下载'
    }, _this.data = {
      email: '',
      emailType: '@qq.com',
      id: '',
      emailCodes: ['@qq.com', '@163.com', '@gmail.com'],
      emailCodeIndex: 0
    }, _this.methods = {
      bindEmailCodeChange: function bindEmailCodeChange(e) {
        this.emailCodeIndex = e.detail.value;
        this.emailType = this.emailCodes[this.emailCodeIndex];
      },
      bindEmailInput: function bindEmailInput(e) {
        this.email = e.detail.value;
        console.log(e.detail.value);
        console.log(this.email);
        this.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MyEmail, [{
    key: '_setUserEmail',


    /** 获取用户信息 */
    value: function _setUserEmail(email) {
      _wepy2.default.showLoading({ title: '提交中' });
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://primary.guinaben.com/member/infoEdit',
          method: 'POST',
          data: {
            email: email
          },
          success: function success(res) {
            _wepy2.default.setStorageSync('email', email);
            resolve(res);
          },
          fail: function fail(err) {
            reject(err);
          },
          complete: function complete() {
            _wepy2.default.hideLoading();
          }
        });
      });
    }

    /** 获取错题数据 */

  }, {
    key: '_sendEmail',
    value: function _sendEmail(id) {
      _wepy2.default.showLoading({ title: '请稍候' });
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://primary.guinaben.com/workbook/chapter/errorDownload',
          data: {
            chapterId: id
          },
          success: function success(res) {
            resolve(res.url);
          },
          fail: function fail(err) {
            reject(err);
          },
          complete: function complete() {
            _wepy2.default.hideLoading();
          }
        });
      });
    }
  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      this.id = options.id;
      this.email = _wepy2.default.getStorageSync('User').email;
      this.$apply();
    }
  }]);

  return MyEmail;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(MyEmail , 'pages/my/email'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLmpzIl0sIm5hbWVzIjpbIk15RW1haWwiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImVtYWlsIiwiZW1haWxUeXBlIiwiaWQiLCJlbWFpbENvZGVzIiwiZW1haWxDb2RlSW5kZXgiLCJtZXRob2RzIiwiYmluZEVtYWlsQ29kZUNoYW5nZSIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsImJpbmRFbWFpbElucHV0IiwiY29uc29sZSIsImxvZyIsIiRhcHBseSIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJzdWNjZXNzIiwicmVzIiwic2V0U3RvcmFnZVN5bmMiLCJmYWlsIiwiZXJyIiwiY29tcGxldGUiLCJoaWRlTG9hZGluZyIsImNoYXB0ZXJJZCIsIm9wdGlvbnMiLCJnZXRTdG9yYWdlU3luYyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLE87Ozs7Ozs7Ozs7Ozs7O3dMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxhQUFPLEVBREY7QUFFTEMsaUJBQVcsU0FGTjtBQUdMQyxVQUFJLEVBSEM7QUFJTEMsa0JBQVksQ0FBQyxTQUFELEVBQVksVUFBWixFQUF3QixZQUF4QixDQUpQO0FBS0xDLHNCQUFnQjtBQUxYLEssUUFRUEMsTyxHQUFVO0FBQ1JDLHlCQURRLCtCQUNhQyxDQURiLEVBQ2dCO0FBQ3RCLGFBQUtILGNBQUwsR0FBc0JHLEVBQUVDLE1BQUYsQ0FBU0MsS0FBL0I7QUFDQSxhQUFLUixTQUFMLEdBQWlCLEtBQUtFLFVBQUwsQ0FBZ0IsS0FBS0MsY0FBckIsQ0FBakI7QUFDRCxPQUpPO0FBS1JNLG9CQUxRLDBCQUtRSCxDQUxSLEVBS1c7QUFDakIsYUFBS1AsS0FBTCxHQUFhTyxFQUFFQyxNQUFGLENBQVNDLEtBQXRCO0FBQ0FFLGdCQUFRQyxHQUFSLENBQVlMLEVBQUVDLE1BQUYsQ0FBU0MsS0FBckI7QUFDQUUsZ0JBQVFDLEdBQVIsQ0FBWSxLQUFLWixLQUFqQjtBQUNBLGFBQUthLE1BQUw7QUFDRDtBQVZPLEs7Ozs7Ozs7QUFhVjtrQ0FDZWIsSyxFQUFPO0FBQ3BCLHFCQUFLYyxXQUFMLENBQWlCLEVBQUNDLE9BQU8sS0FBUixFQUFqQjtBQUNBLGFBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Qyx1QkFBS0MsT0FBTCxDQUFhO0FBQ1hDLGVBQUssOENBRE07QUFFWEMsa0JBQVEsTUFGRztBQUdYdEIsZ0JBQU07QUFDSkMsbUJBQU9BO0FBREgsV0FISztBQU1Yc0IsaUJBTlcsbUJBTUZDLEdBTkUsRUFNRztBQUNaLDJCQUFLQyxjQUFMLENBQW9CLE9BQXBCLEVBQTZCeEIsS0FBN0I7QUFDQWlCLG9CQUFRTSxHQUFSO0FBQ0QsV0FUVTtBQVVYRSxjQVZXLGdCQVVMQyxHQVZLLEVBVUE7QUFDVFIsbUJBQU9RLEdBQVA7QUFDRCxXQVpVO0FBYVhDLGtCQWJXLHNCQWFDO0FBQ1YsMkJBQUtDLFdBQUw7QUFDRDtBQWZVLFNBQWI7QUFpQkQsT0FsQk0sQ0FBUDtBQW1CRDs7QUFFRDs7OzsrQkFDWTFCLEUsRUFBSTtBQUNkLHFCQUFLWSxXQUFMLENBQWlCLEVBQUNDLE9BQU8sS0FBUixFQUFqQjtBQUNBLGFBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Qyx1QkFBS0MsT0FBTCxDQUFhO0FBQ1hDLGVBQUssNkRBRE07QUFFWHJCLGdCQUFNO0FBQ0o4Qix1QkFBVzNCO0FBRFAsV0FGSztBQUtYb0IsaUJBTFcsbUJBS0ZDLEdBTEUsRUFLRztBQUNaTixvQkFBUU0sSUFBSUgsR0FBWjtBQUNELFdBUFU7QUFRWEssY0FSVyxnQkFRTEMsR0FSSyxFQVFBO0FBQ1RSLG1CQUFPUSxHQUFQO0FBQ0QsV0FWVTtBQVdYQyxrQkFYVyxzQkFXQztBQUNWLDJCQUFLQyxXQUFMO0FBQ0Q7QUFiVSxTQUFiO0FBZUQsT0FoQk0sQ0FBUDtBQWlCRDs7OzJCQUVNRSxPLEVBQVM7QUFDZCxXQUFLNUIsRUFBTCxHQUFVNEIsUUFBUTVCLEVBQWxCO0FBQ0EsV0FBS0YsS0FBTCxHQUFhLGVBQUsrQixjQUFMLENBQW9CLE1BQXBCLEVBQTRCL0IsS0FBekM7QUFDQSxXQUFLYSxNQUFMO0FBQ0Q7Ozs7RUE1RWtDLGVBQUttQixJOztrQkFBckJwQyxPIiwiZmlsZSI6ImVtYWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlFbWFpbCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4i+i9vSdcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgZW1haWw6ICcnLFxuICAgICAgZW1haWxUeXBlOiAnQHFxLmNvbScsXG4gICAgICBpZDogJycsXG4gICAgICBlbWFpbENvZGVzOiBbJ0BxcS5jb20nLCAnQDE2My5jb20nLCAnQGdtYWlsLmNvbSddLFxuICAgICAgZW1haWxDb2RlSW5kZXg6IDBcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgYmluZEVtYWlsQ29kZUNoYW5nZSAoZSkge1xuICAgICAgICB0aGlzLmVtYWlsQ29kZUluZGV4ID0gZS5kZXRhaWwudmFsdWVcbiAgICAgICAgdGhpcy5lbWFpbFR5cGUgPSB0aGlzLmVtYWlsQ29kZXNbdGhpcy5lbWFpbENvZGVJbmRleF1cbiAgICAgIH0sXG4gICAgICBiaW5kRW1haWxJbnB1dCAoZSkge1xuICAgICAgICB0aGlzLmVtYWlsID0gZS5kZXRhaWwudmFsdWVcbiAgICAgICAgY29uc29sZS5sb2coZS5kZXRhaWwudmFsdWUpXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZW1haWwpXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiog6I635Y+W55So5oi35L+h5oGvICovXG4gICAgX3NldFVzZXJFbWFpbCAoZW1haWwpIHtcbiAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe3RpdGxlOiAn5o+Q5Lqk5LitJ30pXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vcHJpbWFyeS5ndWluYWJlbi5jb20vbWVtYmVyL2luZm9FZGl0JyxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBlbWFpbDogZW1haWxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnZW1haWwnLCBlbWFpbClcbiAgICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29tcGxldGUgKCkge1xuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvKiog6I635Y+W6ZSZ6aKY5pWw5o2uICovXG4gICAgX3NlbmRFbWFpbCAoaWQpIHtcbiAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe3RpdGxlOiAn6K+356iN5YCZJ30pXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vcHJpbWFyeS5ndWluYWJlbi5jb20vd29ya2Jvb2svY2hhcHRlci9lcnJvckRvd25sb2FkJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBjaGFwdGVySWQ6IGlkXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzLnVybClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbXBsZXRlICgpIHtcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMuaWQgPSBvcHRpb25zLmlkXG4gICAgICB0aGlzLmVtYWlsID0gd2VweS5nZXRTdG9yYWdlU3luYygnVXNlcicpLmVtYWlsXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuICB9XG4iXX0=