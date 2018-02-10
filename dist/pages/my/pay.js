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
            goodType: id,
            app: 'primary'
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
          package: options.packAge,
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheS5qcyJdLCJuYW1lcyI6WyJNeVBheSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJtZXRob2RzIiwiX2J1eSIsImlkIiwiX29yZGVyVmlwIiwib3B0aW9ucyIsIl9wYXkiLCJzaG93TG9hZGluZyIsInRpdGxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwidXJsIiwiZGF0YSIsImdvb2RUeXBlIiwiYXBwIiwic3VjY2VzcyIsInJlcyIsImZhaWwiLCJlcnIiLCJjb21wbGV0ZSIsImhpZGVMb2FkaW5nIiwicmVxdWVzdFBheW1lbnQiLCJ0aW1lU3RhbXAiLCJub25jZVN0ciIsInBhY2thZ2UiLCJwYWNrQWdlIiwic2lnblR5cGUiLCJwYXlTaWduIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxPLEdBQVU7QUFDRkMsVUFERTtBQUFBLDZGQUNJQyxFQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRWMsS0FBS0MsU0FBTCxDQUFlRCxFQUFmLENBRmQ7O0FBQUE7QUFFRkUseUJBRkU7O0FBR04sdUJBQUtDLElBQUwsQ0FBVUQsT0FBVjs7QUFITTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLEs7Ozs7Ozs7QUFPVjs4QkFDV0YsRSxFQUFJO0FBQ2IscUJBQUtJLFdBQUwsQ0FBaUIsRUFBQ0MsT0FBTyxLQUFSLEVBQWpCO0FBQ0EsYUFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLHVCQUFLQyxPQUFMLENBQWE7QUFDWEMsZUFBSyw4Q0FETTtBQUVYQyxnQkFBTTtBQUNKQyxzQkFBVVosRUFETjtBQUVKYSxpQkFBSztBQUZELFdBRks7QUFNWEMsaUJBTlcsbUJBTUZDLEdBTkUsRUFNRztBQUNaUixvQkFBUVEsR0FBUjtBQUNELFdBUlU7QUFTWEMsY0FUVyxnQkFTTEMsR0FUSyxFQVNBO0FBQ1RULG1CQUFPUyxHQUFQO0FBQ0QsV0FYVTtBQVlYQyxrQkFaVyxzQkFZQztBQUNWLDJCQUFLQyxXQUFMO0FBQ0Q7QUFkVSxTQUFiO0FBZ0JELE9BakJNLENBQVA7QUFrQkQ7O0FBRUQ7Ozs7eUJBQ01qQixPLEVBQVM7QUFDYixhQUFPLElBQUlJLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsdUJBQUtZLGNBQUwsQ0FBb0I7QUFDbEJDLHFCQUFXbkIsUUFBUW1CLFNBREQ7QUFFbEJDLG9CQUFVcEIsUUFBUW9CLFFBRkE7QUFHbEJDLG1CQUFTckIsUUFBUXNCLE9BSEM7QUFJbEJDLG9CQUFVLEtBSlE7QUFLbEJDLG1CQUFTeEIsUUFBUXdCLE9BTEM7QUFNbEJaLGlCQU5rQixtQkFNVEMsR0FOUyxFQU1KO0FBQ1pSLG9CQUFRUSxHQUFSO0FBQ0QsV0FSaUI7QUFTbEJDLGNBVGtCLGdCQVNaQyxHQVRZLEVBU1A7QUFDVFQsbUJBQU9TLEdBQVA7QUFDRDtBQVhpQixTQUFwQjtBQWFELE9BZE0sQ0FBUDtBQWVEOzs7O0VBcERnQyxlQUFLVSxJOztrQkFBbkJoQyxLIiwiZmlsZSI6InBheS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlQYXkgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+W8gOmAmlZJUCdcbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgYXN5bmMgX2J1eSAoaWQpIHtcbiAgICAgIGxldCBvcHRpb25zID0gYXdhaXQgdGhpcy5fb3JkZXJWaXAoaWQpXG4gICAgICB0aGlzLl9wYXkob3B0aW9ucylcbiAgICB9XG4gIH1cblxuICAvKiog6LSt5LmwVklQICovXG4gIF9vcmRlclZpcCAoaWQpIHtcbiAgICB3ZXB5LnNob3dMb2FkaW5nKHt0aXRsZTogJ+ivt+eojeWAmSd9KVxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwczovL3dlY2hhdC5ndWluYWJlbi5jb20vbWluaS1wcm9ncmFtL3BheScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBnb29kVHlwZTogaWQsXG4gICAgICAgICAgYXBwOiAncHJpbWFyeSdcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBsZXRlICgpIHtcbiAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgLyoqIOWPkei1t+aUr+S7mCAqL1xuICBfcGF5IChvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHdlcHkucmVxdWVzdFBheW1lbnQoe1xuICAgICAgICB0aW1lU3RhbXA6IG9wdGlvbnMudGltZVN0YW1wLFxuICAgICAgICBub25jZVN0cjogb3B0aW9ucy5ub25jZVN0cixcbiAgICAgICAgcGFja2FnZTogb3B0aW9ucy5wYWNrQWdlLFxuICAgICAgICBzaWduVHlwZTogJ01ENScsXG4gICAgICAgIHBheVNpZ246IG9wdGlvbnMucGF5U2lnbixcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuIl19