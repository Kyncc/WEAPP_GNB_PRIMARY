'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _zanField = require('./../../components/zan-field.js');

var _zanField2 = _interopRequireDefault(_zanField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 可使用得Email邮箱列表
var emailList = ['@qq.com', '@126.com', '@139.com', '@163.com', '@189.com', '@sohu.com', '@sina.com', '@gmail.com'];

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
    }, _this.$repeat = {}, _this.$props = { "zanField1": { "xmlns:v-bind": "", "v-bind:options.sync": "form_email", "componentId": "zanField1" } }, _this.$events = {}, _this.components = {
      zanField1: _zanField2.default
    }, _this.data = {
      id: '',
      emailCodes: emailList,
      emailCodeIndex: 0,
      form_email: {
        title: '',
        value: '',
        placeholder: '请输入邮箱'
      }
    }, _this.events = {
      zanFieldChange: function zanFieldChange(e) {
        var detail = e.detail;

        this.form_email.value = detail.value;
        this.$apply();
      }
    }, _this.methods = {
      bindEmailCodeChange: function bindEmailCodeChange(e) {
        this.emailCodeIndex = e.detail.value;
      },

      /** 发送Email */
      _send: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var mail;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  // 如果当前的Email和信息相同则发送，否则更新Email信息在发送
                  mail = this.form_email.value + this.emailCodes[this.emailCodeIndex];

                  if (!(mail !== _wepy2.default.getStorageSync('User').email)) {
                    _context.next = 4;
                    break;
                  }

                  _context.next = 4;
                  return this._setUserEmail(this.form_email.value + this.emailCodes[this.emailCodeIndex]);

                case 4:
                  _context.next = 6;
                  return this._sendEmail(this.id);

                case 6:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function _send() {
          return _ref2.apply(this, arguments);
        }

        return _send;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MyEmail, [{
    key: '_setUserEmail',


    /** 设置用户信息 */
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
            _wepy2.default.setStorageSync('User', res);
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

    /** 发送Email */

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
            _wepy2.default.showModal({
              title: '发送成功',
              content: '已发送至您的邮箱(若未收到，请查看垃圾邮件)',
              confirmText: '知道了',
              showCancel: false,
              success: function success(res) {
                if (res.confirm) {
                  _wepy2.default.navigateBack();
                }
              }
            });
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
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      var email = _wepy2.default.getStorageSync('User').email;
      // 获取邮箱和邮箱类型
      this.form_email.value = email.split('@')[0];
      var type = '@' + email.split('@')[1];
      for (var i = 0; i < emailList.length; i++) {
        if (type === emailList[i]) {
          this.emailCodeIndex = i;
          break;
        }
      }
      this.$apply();
    }
  }]);

  return MyEmail;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(MyEmail , 'pages/my/email'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLmpzIl0sIm5hbWVzIjpbImVtYWlsTGlzdCIsIk15RW1haWwiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiemFuRmllbGQxIiwiZGF0YSIsImlkIiwiZW1haWxDb2RlcyIsImVtYWlsQ29kZUluZGV4IiwiZm9ybV9lbWFpbCIsInRpdGxlIiwidmFsdWUiLCJwbGFjZWhvbGRlciIsImV2ZW50cyIsInphbkZpZWxkQ2hhbmdlIiwiZSIsImRldGFpbCIsIiRhcHBseSIsIm1ldGhvZHMiLCJiaW5kRW1haWxDb2RlQ2hhbmdlIiwiX3NlbmQiLCJtYWlsIiwiZ2V0U3RvcmFnZVN5bmMiLCJlbWFpbCIsIl9zZXRVc2VyRW1haWwiLCJfc2VuZEVtYWlsIiwic2hvd0xvYWRpbmciLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJzdWNjZXNzIiwicmVzIiwic2V0U3RvcmFnZVN5bmMiLCJmYWlsIiwiZXJyIiwiY29tcGxldGUiLCJoaWRlTG9hZGluZyIsImNoYXB0ZXJJZCIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJjb25maXJtVGV4dCIsInNob3dDYW5jZWwiLCJjb25maXJtIiwibmF2aWdhdGVCYWNrIiwib3B0aW9ucyIsInNwbGl0IiwidHlwZSIsImkiLCJsZW5ndGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0EsSUFBTUEsWUFBWSxDQUFDLFNBQUQsRUFBWSxVQUFaLEVBQXdCLFVBQXhCLEVBQW9DLFVBQXBDLEVBQWdELFVBQWhELEVBQTRELFdBQTVELEVBQXlFLFdBQXpFLEVBQXNGLFlBQXRGLENBQWxCOztJQUNxQkMsTzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVkMsTyxHQUFVLEUs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TDtBQUNEO0FBQ0Y7QUFUWSxhQUFmO0FBV0FsQixvQkFBUU0sSUFBSUgsR0FBWjtBQUNELFdBbEJVO0FBbUJYSyxjQW5CVyxnQkFtQkxDLEdBbkJLLEVBbUJBO0FBQ1RSLG1CQUFPUSxHQUFQO0FBQ0QsV0FyQlU7QUFzQlhDLGtCQXRCVyxzQkFzQkM7QUFDViwyQkFBS0MsV0FBTDtBQUNEO0FBeEJVLFNBQWI7QUEwQkQsT0EzQk0sQ0FBUDtBQTRCRDs7OzJCQUVNUSxPLEVBQVM7QUFDZCxXQUFLekMsRUFBTCxHQUFVeUMsUUFBUXpDLEVBQWxCO0FBQ0Q7Ozs2QkFFUTtBQUNQLFVBQUlpQixRQUFRLGVBQUtELGNBQUwsQ0FBb0IsTUFBcEIsRUFBNEJDLEtBQXhDO0FBQ0E7QUFDQSxXQUFLZCxVQUFMLENBQWdCRSxLQUFoQixHQUF3QlksTUFBTXlCLEtBQU4sQ0FBWSxHQUFaLEVBQWlCLENBQWpCLENBQXhCO0FBQ0EsVUFBSUMsYUFBVzFCLE1BQU15QixLQUFOLENBQVksR0FBWixFQUFpQixDQUFqQixDQUFmO0FBQ0EsV0FBSyxJQUFJRSxJQUFJLENBQWIsRUFBZ0JBLElBQUl0RCxVQUFVdUQsTUFBOUIsRUFBc0NELEdBQXRDLEVBQTJDO0FBQ3pDLFlBQUlELFNBQVNyRCxVQUFVc0QsQ0FBVixDQUFiLEVBQTJCO0FBQ3pCLGVBQUsxQyxjQUFMLEdBQXNCMEMsQ0FBdEI7QUFDQTtBQUNEO0FBQ0Y7QUFDRCxXQUFLakMsTUFBTDtBQUNEOzs7O0VBdkhrQyxlQUFLbUMsSTs7a0JBQXJCdkQsTyIsImZpbGUiOiJlbWFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgemFuRmllbGQgZnJvbSAnQC9jb21wb25lbnRzL3phbi1maWVsZCdcblxuICAvLyDlj6/kvb/nlKjlvpdFbWFpbOmCrueuseWIl+ihqFxuICBjb25zdCBlbWFpbExpc3QgPSBbJ0BxcS5jb20nLCAnQDEyNi5jb20nLCAnQDEzOS5jb20nLCAnQDE2My5jb20nLCAnQDE4OS5jb20nLCAnQHNvaHUuY29tJywgJ0BzaW5hLmNvbScsICdAZ21haWwuY29tJ11cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlFbWFpbCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4i+i9vSdcbiAgICB9XG5cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiemFuRmllbGQxXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpvcHRpb25zLnN5bmNcIjpcImZvcm1fZW1haWxcIixcImNvbXBvbmVudElkXCI6XCJ6YW5GaWVsZDFcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgemFuRmllbGQxOiB6YW5GaWVsZFxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBpZDogJycsXG4gICAgICBlbWFpbENvZGVzOiBlbWFpbExpc3QsXG4gICAgICBlbWFpbENvZGVJbmRleDogMCxcbiAgICAgIGZvcm1fZW1haWw6IHtcbiAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAn6K+36L6T5YWl6YKu566xJ1xuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICAgIHphbkZpZWxkQ2hhbmdlKGUpIHtcbiAgICAgICAgbGV0IHsgZGV0YWlsIH0gPSBlXG4gICAgICAgIHRoaXMuZm9ybV9lbWFpbC52YWx1ZSA9IGRldGFpbC52YWx1ZVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGJpbmRFbWFpbENvZGVDaGFuZ2UgKGUpIHtcbiAgICAgICAgdGhpcy5lbWFpbENvZGVJbmRleCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICB9LFxuICAgICAgLyoqIOWPkemAgUVtYWlsICovXG4gICAgICBhc3luYyBfc2VuZCgpIHtcbiAgICAgICAgLy8g5aaC5p6c5b2T5YmN55qERW1haWzlkozkv6Hmga/nm7jlkIzliJnlj5HpgIHvvIzlkKbliJnmm7TmlrBFbWFpbOS/oeaBr+WcqOWPkemAgVxuICAgICAgICBsZXQgbWFpbCA9IHRoaXMuZm9ybV9lbWFpbC52YWx1ZSArIHRoaXMuZW1haWxDb2Rlc1t0aGlzLmVtYWlsQ29kZUluZGV4XVxuICAgICAgICBpZiAobWFpbCAhPT0gd2VweS5nZXRTdG9yYWdlU3luYygnVXNlcicpLmVtYWlsKSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5fc2V0VXNlckVtYWlsKHRoaXMuZm9ybV9lbWFpbC52YWx1ZSArIHRoaXMuZW1haWxDb2Rlc1t0aGlzLmVtYWlsQ29kZUluZGV4XSlcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCB0aGlzLl9zZW5kRW1haWwodGhpcy5pZClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiog6K6+572u55So5oi35L+h5oGvICovXG4gICAgX3NldFVzZXJFbWFpbCAoZW1haWwpIHtcbiAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe3RpdGxlOiAn5o+Q5Lqk5LitJ30pXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vcHJpbWFyeS5ndWluYWJlbi5jb20vbWVtYmVyL2luZm9FZGl0JyxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBlbWFpbDogZW1haWxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnVXNlcicsIHJlcylcbiAgICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29tcGxldGUgKCkge1xuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvKiog5Y+R6YCBRW1haWwgKi9cbiAgICBfc2VuZEVtYWlsIChpZCkge1xuICAgICAgd2VweS5zaG93TG9hZGluZyh7dGl0bGU6ICfor7fnqI3lgJknfSlcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9wcmltYXJ5Lmd1aW5hYmVuLmNvbS93b3JrYm9vay9jaGFwdGVyL2Vycm9yRG93bmxvYWQnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGNoYXB0ZXJJZDogaWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICB0aXRsZTogJ+WPkemAgeaIkOWKnycsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICflt7Llj5HpgIHoh7PmgqjnmoTpgq7nrrEo6Iul5pyq5pS25Yiw77yM6K+35p+l55yL5Z6D5Zy+6YKu5Lu2KScsXG4gICAgICAgICAgICAgIGNvbmZpcm1UZXh0OiAn55+l6YGT5LqGJyxcbiAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXG4gICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlQmFjaygpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmVzb2x2ZShyZXMudXJsKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29tcGxldGUgKCkge1xuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBvbkxvYWQob3B0aW9ucykge1xuICAgICAgdGhpcy5pZCA9IG9wdGlvbnMuaWRcbiAgICB9XG5cbiAgICBvblNob3coKSB7XG4gICAgICBsZXQgZW1haWwgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdVc2VyJykuZW1haWxcbiAgICAgIC8vIOiOt+WPlumCrueuseWSjOmCrueuseexu+Wei1xuICAgICAgdGhpcy5mb3JtX2VtYWlsLnZhbHVlID0gZW1haWwuc3BsaXQoJ0AnKVswXVxuICAgICAgbGV0IHR5cGUgPSBgQCR7ZW1haWwuc3BsaXQoJ0AnKVsxXX1gXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVtYWlsTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodHlwZSA9PT0gZW1haWxMaXN0W2ldKSB7XG4gICAgICAgICAgdGhpcy5lbWFpbENvZGVJbmRleCA9IGlcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuICB9XG4iXX0=