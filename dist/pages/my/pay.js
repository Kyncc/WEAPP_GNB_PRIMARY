'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyPay = function (_wepy$page) {
  _inherits(MyPay, _wepy$page);

  function MyPay() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MyPay);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MyPay.__proto__ || Object.getPrototypeOf(MyPay)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '开通VIP'
    }, _this.methods = {
      _buy: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
          var options;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this._orderVip(id);

                case 2:
                  options = _context.sent;

                  this._pay(options);

                case 4:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function _buy(_x) {
          return _ref2.apply(this, arguments);
        }

        return _buy;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MyPay, [{
    key: '_orderVip',


    /** 购买VIP */
    value: function _orderVip(id) {
      _wepy2.default.showLoading({ title: '请稍候' });
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://wechat.guinaben.com/mini-program/pay',
          data: {
            goodType: id
          },
          success: function success(res) {
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

    /** 发起支付 */

  }, {
    key: '_pay',
    value: function _pay(options) {
      return new Promise(function (resolve, reject) {
        _wepy2.default.requestPayment({
          timeStamp: options.timeStamp,
          nonceStr: options.nonceStr,
          package: options.prepay_id,
          signType: 'MD5',
          paySign: options.paySign,
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

  return MyPay;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(MyPay , 'pages/my/pay'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheS5qcyJdLCJuYW1lcyI6WyJNeVBheSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJtZXRob2RzIiwiX2J1eSIsImlkIiwiX29yZGVyVmlwIiwib3B0aW9ucyIsIl9wYXkiLCJzaG93TG9hZGluZyIsInRpdGxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwidXJsIiwiZGF0YSIsImdvb2RUeXBlIiwic3VjY2VzcyIsInJlcyIsImZhaWwiLCJlcnIiLCJjb21wbGV0ZSIsImhpZGVMb2FkaW5nIiwicmVxdWVzdFBheW1lbnQiLCJ0aW1lU3RhbXAiLCJub25jZVN0ciIsInBhY2thZ2UiLCJwcmVwYXlfaWQiLCJzaWduVHlwZSIsInBheVNpZ24iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLE8sR0FBVTtBQUNGQyxVQURFO0FBQUEsNkZBQ0lDLEVBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFFYyxLQUFLQyxTQUFMLENBQWVELEVBQWYsQ0FGZDs7QUFBQTtBQUVGRSx5QkFGRTs7QUFHTix1QkFBS0MsSUFBTCxDQUFVRCxPQUFWOztBQUhNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsSzs7Ozs7OztBQU9WOzhCQUNXRixFLEVBQUk7QUFDYixxQkFBS0ksV0FBTCxDQUFpQixFQUFDQyxPQUFPLEtBQVIsRUFBakI7QUFDQSxhQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsdUJBQUtDLE9BQUwsQ0FBYTtBQUNYQyxlQUFLLDhDQURNO0FBRVhDLGdCQUFNO0FBQ0pDLHNCQUFVWjtBQUROLFdBRks7QUFLWGEsaUJBTFcsbUJBS0ZDLEdBTEUsRUFLRztBQUNaUCxvQkFBUU8sR0FBUjtBQUNELFdBUFU7QUFRWEMsY0FSVyxnQkFRTEMsR0FSSyxFQVFBO0FBQ1RSLG1CQUFPUSxHQUFQO0FBQ0QsV0FWVTtBQVdYQyxrQkFYVyxzQkFXQztBQUNWLDJCQUFLQyxXQUFMO0FBQ0Q7QUFiVSxTQUFiO0FBZUQsT0FoQk0sQ0FBUDtBQWlCRDs7QUFFRDs7Ozt5QkFDTWhCLE8sRUFBUztBQUNiLGFBQU8sSUFBSUksT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Qyx1QkFBS1csY0FBTCxDQUFvQjtBQUNsQkMscUJBQVdsQixRQUFRa0IsU0FERDtBQUVsQkMsb0JBQVVuQixRQUFRbUIsUUFGQTtBQUdsQkMsbUJBQVNwQixRQUFRcUIsU0FIQztBQUlsQkMsb0JBQVUsS0FKUTtBQUtsQkMsbUJBQVN2QixRQUFRdUIsT0FMQztBQU1sQlosaUJBTmtCLG1CQU1UQyxHQU5TLEVBTUo7QUFDWlAsb0JBQVFPLEdBQVI7QUFDRCxXQVJpQjtBQVNsQkMsY0FUa0IsZ0JBU1pDLEdBVFksRUFTUDtBQUNUUixtQkFBT1EsR0FBUDtBQUNEO0FBWGlCLFNBQXBCO0FBYUQsT0FkTSxDQUFQO0FBZUQ7Ozs7RUFuRGdDLGVBQUtVLEk7O2tCQUFuQi9CLEsiLCJmaWxlIjoicGF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeVBheSBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5byA6YCaVklQJ1xuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBhc3luYyBfYnV5IChpZCkge1xuICAgICAgbGV0IG9wdGlvbnMgPSBhd2FpdCB0aGlzLl9vcmRlclZpcChpZClcbiAgICAgIHRoaXMuX3BheShvcHRpb25zKVxuICAgIH1cbiAgfVxuXG4gIC8qKiDotK3kubBWSVAgKi9cbiAgX29yZGVyVmlwIChpZCkge1xuICAgIHdlcHkuc2hvd0xvYWRpbmcoe3RpdGxlOiAn6K+356iN5YCZJ30pXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHBzOi8vd2VjaGF0Lmd1aW5hYmVuLmNvbS9taW5pLXByb2dyYW0vcGF5JyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGdvb2RUeXBlOiBpZFxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfSxcbiAgICAgICAgY29tcGxldGUgKCkge1xuICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvKiog5Y+R6LW35pSv5LuYICovXG4gIF9wYXkgKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd2VweS5yZXF1ZXN0UGF5bWVudCh7XG4gICAgICAgIHRpbWVTdGFtcDogb3B0aW9ucy50aW1lU3RhbXAsXG4gICAgICAgIG5vbmNlU3RyOiBvcHRpb25zLm5vbmNlU3RyLFxuICAgICAgICBwYWNrYWdlOiBvcHRpb25zLnByZXBheV9pZCxcbiAgICAgICAgc2lnblR5cGU6ICdNRDUnLFxuICAgICAgICBwYXlTaWduOiBvcHRpb25zLnBheVNpZ24sXG4gICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICB9LFxuICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==