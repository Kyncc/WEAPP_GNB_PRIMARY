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
    }, _this.$repeat = {}, _this.$props = { "zanField1": { "xmlns:v-bind": "", "v-bind:options.once": "form_email", "componentId": "zanField1" } }, _this.$events = {}, _this.components = {
      zanField1: _zanField2.default
    }, _this.data = {
      id: '',
      emailCodes: ['@qq.com', '@163.com', '@gmail.com'],
      emailCodeIndex: 0,
      form_email: {
        title: '',
        value: '',
        placeholder: 'QQ/163/Gmail/企业邮箱等'
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
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(this.form_email.value !== _wepy2.default.getStorageSync('User').email)) {
                    _context.next = 3;
                    break;
                  }

                  _context.next = 3;
                  return this._setUserEmail(this.form_email.value + this.emailCodes[this.emailCodeIndex]);

                case 3:
                  _context.next = 5;
                  return this._sendEmail(this.id);

                case 5:
                  _wepy2.default.navigateBack();

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
      this.form_email.value = _wepy2.default.getStorageSync('User').email;
      this.$apply();
    }
  }]);

  return MyEmail;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(MyEmail , 'pages/my/email'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLmpzIl0sIm5hbWVzIjpbIk15RW1haWwiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiemFuRmllbGQxIiwiZGF0YSIsImlkIiwiZW1haWxDb2RlcyIsImVtYWlsQ29kZUluZGV4IiwiZm9ybV9lbWFpbCIsInRpdGxlIiwidmFsdWUiLCJwbGFjZWhvbGRlciIsImV2ZW50cyIsInphbkZpZWxkQ2hhbmdlIiwiZSIsImRldGFpbCIsIiRhcHBseSIsIm1ldGhvZHMiLCJiaW5kRW1haWxDb2RlQ2hhbmdlIiwiX3NlbmQiLCJnZXRTdG9yYWdlU3luYyIsImVtYWlsIiwiX3NldFVzZXJFbWFpbCIsIl9zZW5kRW1haWwiLCJuYXZpZ2F0ZUJhY2siLCJzaG93TG9hZGluZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJyZXMiLCJzZXRTdG9yYWdlU3luYyIsImZhaWwiLCJlcnIiLCJjb21wbGV0ZSIsImhpZGVMb2FkaW5nIiwiY2hhcHRlcklkIiwib3B0aW9ucyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxhQUFZLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsdUJBQXNCLFlBQXpDLEVBQXNELGVBQWMsV0FBcEUsRUFBYixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQztBQURRLEssUUFJVkMsSSxHQUFPO0FBQ0xDLFVBQUksRUFEQztBQUVMQyxrQkFBWSxDQUFDLFNBQUQsRUFBWSxVQUFaLEVBQXdCLFlBQXhCLENBRlA7QUFHTEMsc0JBQWdCLENBSFg7QUFJTEMs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aW1wb3J0IHphbkZpZWxkIGZyb20gJ0AvY29tcG9uZW50cy96YW4tZmllbGQnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlFbWFpbCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4i+i9vSdcbiAgICB9XG5cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiemFuRmllbGQxXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpvcHRpb25zLm9uY2VcIjpcImZvcm1fZW1haWxcIixcImNvbXBvbmVudElkXCI6XCJ6YW5GaWVsZDFcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgemFuRmllbGQxOiB6YW5GaWVsZFxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBpZDogJycsXG4gICAgICBlbWFpbENvZGVzOiBbJ0BxcS5jb20nLCAnQDE2My5jb20nLCAnQGdtYWlsLmNvbSddLFxuICAgICAgZW1haWxDb2RlSW5kZXg6IDAsXG4gICAgICBmb3JtX2VtYWlsOiB7XG4gICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICBwbGFjZWhvbGRlcjogJ1FRLzE2My9HbWFpbC/kvIHkuJrpgq7nrrHnrYknXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgICAgemFuRmllbGRDaGFuZ2UoZSkge1xuICAgICAgICBsZXQgeyBkZXRhaWwgfSA9IGVcbiAgICAgICAgdGhpcy5mb3JtX2VtYWlsLnZhbHVlID0gZGV0YWlsLnZhbHVlXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgYmluZEVtYWlsQ29kZUNoYW5nZSAoZSkge1xuICAgICAgICB0aGlzLmVtYWlsQ29kZUluZGV4ID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIH0sXG4gICAgICAvKiog5Y+R6YCBRW1haWwgKi9cbiAgICAgIGFzeW5jIF9zZW5kKCkge1xuICAgICAgICAvLyDlpoLmnpzlvZPliY3nmoRFbWFpbOWSjOS/oeaBr+ebuOWQjOWImeWPkemAge+8jOWQpuWImeabtOaWsEVtYWls5L+h5oGv5Zyo5Y+R6YCBXG4gICAgICAgIGlmICh0aGlzLmZvcm1fZW1haWwudmFsdWUgIT09IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXInKS5lbWFpbCkge1xuICAgICAgICAgIGF3YWl0IHRoaXMuX3NldFVzZXJFbWFpbCh0aGlzLmZvcm1fZW1haWwudmFsdWUgKyB0aGlzLmVtYWlsQ29kZXNbdGhpcy5lbWFpbENvZGVJbmRleF0pXG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgdGhpcy5fc2VuZEVtYWlsKHRoaXMuaWQpXG4gICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiog6K6+572u55So5oi35L+h5oGvICovXG4gICAgX3NldFVzZXJFbWFpbCAoZW1haWwpIHtcbiAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe3RpdGxlOiAn5o+Q5Lqk5LitJ30pXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vcHJpbWFyeS5ndWluYWJlbi5jb20vbWVtYmVyL2luZm9FZGl0JyxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBlbWFpbDogZW1haWxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnZW1haWwnLCBlbWFpbClcbiAgICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29tcGxldGUgKCkge1xuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvKiog5Y+R6YCBRW1haWwgKi9cbiAgICBfc2VuZEVtYWlsIChpZCkge1xuICAgICAgd2VweS5zaG93TG9hZGluZyh7dGl0bGU6ICfor7fnqI3lgJknfSlcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9wcmltYXJ5Lmd1aW5hYmVuLmNvbS93b3JrYm9vay9jaGFwdGVyL2Vycm9yRG93bmxvYWQnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGNoYXB0ZXJJZDogaWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXMudXJsKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29tcGxldGUgKCkge1xuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBvbkxvYWQob3B0aW9ucykge1xuICAgICAgdGhpcy5pZCA9IG9wdGlvbnMuaWRcbiAgICAgIHRoaXMuZm9ybV9lbWFpbC52YWx1ZSA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXInKS5lbWFpbFxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cbiAgfVxuIl19