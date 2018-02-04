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

var StatisticsError = function (_wepy$page) {
  _inherits(StatisticsError, _wepy$page);

  function StatisticsError() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, StatisticsError);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StatisticsError.__proto__ || Object.getPrototypeOf(StatisticsError)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      offset: '',
      error: []
    }, _this.methods = {
      /** 查看大图 */
      _preview: function _preview(url) {
        _wepy2.default.previewImage({ current: url + '-primaryError', urls: this.imgs });
      }
    }, _this.computed = {
      /** 图片集 */
      imgs: function imgs() {
        var urls = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.error[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var img = _step.value;

            urls.push(img.errorImg.url + '-primaryError');
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return urls;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(StatisticsError, [{
    key: '_getErrorList',


    /** 获取错题数据 */
    value: function _getErrorList(id, offset) {
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://primary.guinaben.com/textbook/statistics/error',
          data: {
            chapterId: id,
            offset: offset
          },
          success: function success(res) {
            resolve(res);
          },
          fail: function fail(err) {
            reject(err);
          }
        });
      });
    }
  }, {
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
        var result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                wx.setNavigationBarTitle({ title: options.name });
                _context.next = 3;
                return this._getErrorList(options.id, this.offset);

              case 3:
                result = _context.sent;

                this.error = result.errorList;
                this.offset = result.offset;
                this.$apply();

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad(_x) {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return StatisticsError;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(StatisticsError , 'pages/statistics/error'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLmpzIl0sIm5hbWVzIjpbIlN0YXRpc3RpY3NFcnJvciIsImRhdGEiLCJvZmZzZXQiLCJlcnJvciIsIm1ldGhvZHMiLCJfcHJldmlldyIsInVybCIsInByZXZpZXdJbWFnZSIsImN1cnJlbnQiLCJ1cmxzIiwiaW1ncyIsImNvbXB1dGVkIiwiaW1nIiwicHVzaCIsImVycm9ySW1nIiwiaWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJjaGFwdGVySWQiLCJzdWNjZXNzIiwicmVzIiwiZmFpbCIsImVyciIsIm9wdGlvbnMiLCJ3eCIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInRpdGxlIiwibmFtZSIsIl9nZXRFcnJvckxpc3QiLCJyZXN1bHQiLCJlcnJvckxpc3QiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGU7Ozs7Ozs7Ozs7Ozs7O3dNQUNuQkMsSSxHQUFPO0FBQ0xDLGNBQVEsRUFESDtBQUVMQyxhQUFPO0FBRkYsSyxRQUtQQyxPLEdBQVU7QUFDUjtBQUNBQyxjQUZRLG9CQUVFQyxHQUZGLEVBRU87QUFDYix1QkFBS0MsWUFBTCxDQUFrQixFQUFDQyxTQUFZRixHQUFaLGtCQUFELEVBQWlDRyxNQUFNLEtBQUtDLElBQTVDLEVBQWxCO0FBQ0Q7QUFKTyxLLFFBT1ZDLFEsR0FBVztBQUNUO0FBQ0FELFVBRlMsa0JBRUQ7QUFDTixZQUFJRCxPQUFPLEVBQVg7QUFETTtBQUFBO0FBQUE7O0FBQUE7QUFFTiwrQkFBZ0IsS0FBS04sS0FBckIsOEhBQTRCO0FBQUEsZ0JBQW5CUyxHQUFtQjs7QUFDMUJILGlCQUFLSSxJQUFMLENBQWFELElBQUlFLFFBQUosQ0FBYVIsR0FBMUI7QUFDRDtBQUpLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBS04sZUFBT0csSUFBUDtBQUNEO0FBUlEsSzs7Ozs7OztBQVdYO2tDQUNlTSxFLEVBQUliLE0sRUFBUTtBQUN6QixhQUFPLElBQUljLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsdUJBQUtDLE9BQUwsQ0FBYTtBQUNYYixlQUFLLHdEQURNO0FBRVhMLGdCQUFNO0FBQ0ptQix1QkFBV0wsRUFEUDtBQUVKYixvQkFBUUE7QUFGSixXQUZLO0FBTVhtQixpQkFOVyxtQkFNRkMsR0FORSxFQU1HO0FBQ1pMLG9CQUFRSyxHQUFSO0FBQ0QsV0FSVTtBQVNYQyxjQVRXLGdCQVNMQyxHQVRLLEVBU0E7QUFDVE4sbUJBQU9NLEdBQVA7QUFDRDtBQVhVLFNBQWI7QUFhRCxPQWRNLENBQVA7QUFlRDs7OzsyRkFFWUMsTzs7Ozs7O0FBQ1hDLG1CQUFHQyxxQkFBSCxDQUF5QixFQUFDQyxPQUFPSCxRQUFRSSxJQUFoQixFQUF6Qjs7dUJBQ21CLEtBQUtDLGFBQUwsQ0FBbUJMLFFBQVFWLEVBQTNCLEVBQStCLEtBQUtiLE1BQXBDLEM7OztBQUFmNkIsc0I7O0FBQ0oscUJBQUs1QixLQUFMLEdBQWE0QixPQUFPQyxTQUFwQjtBQUNBLHFCQUFLOUIsTUFBTCxHQUFjNkIsT0FBTzdCLE1BQXJCO0FBQ0EscUJBQUsrQixNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaER5QyxlQUFLQyxJOztrQkFBN0JsQyxlIiwiZmlsZSI6ImVycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0aXN0aWNzRXJyb3IgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBkYXRhID0ge1xuICAgIG9mZnNldDogJycsXG4gICAgZXJyb3I6IFtdXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIC8qKiDmn6XnnIvlpKflm74gKi9cbiAgICBfcHJldmlldyAodXJsKSB7XG4gICAgICB3ZXB5LnByZXZpZXdJbWFnZSh7Y3VycmVudDogYCR7dXJsfS1wcmltYXJ5RXJyb3JgLCB1cmxzOiB0aGlzLmltZ3N9KVxuICAgIH1cbiAgfVxuXG4gIGNvbXB1dGVkID0ge1xuICAgIC8qKiDlm77niYfpm4YgKi9cbiAgICBpbWdzICgpIHtcbiAgICAgIGxldCB1cmxzID0gW11cbiAgICAgIGZvciAobGV0IGltZyBvZiB0aGlzLmVycm9yKSB7XG4gICAgICAgIHVybHMucHVzaChgJHtpbWcuZXJyb3JJbWcudXJsfS1wcmltYXJ5RXJyb3JgKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHVybHNcbiAgICB9XG4gIH1cblxuICAvKiog6I635Y+W6ZSZ6aKY5pWw5o2uICovXG4gIF9nZXRFcnJvckxpc3QgKGlkLCBvZmZzZXQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9wcmltYXJ5Lmd1aW5hYmVuLmNvbS90ZXh0Ym9vay9zdGF0aXN0aWNzL2Vycm9yJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGNoYXB0ZXJJZDogaWQsXG4gICAgICAgICAgb2Zmc2V0OiBvZmZzZXRcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIG9uTG9hZChvcHRpb25zKSB7XG4gICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHt0aXRsZTogb3B0aW9ucy5uYW1lfSlcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgdGhpcy5fZ2V0RXJyb3JMaXN0KG9wdGlvbnMuaWQsIHRoaXMub2Zmc2V0KVxuICAgIHRoaXMuZXJyb3IgPSByZXN1bHQuZXJyb3JMaXN0XG4gICAgdGhpcy5vZmZzZXQgPSByZXN1bHQub2Zmc2V0XG4gICAgdGhpcy4kYXBwbHkoKVxuICB9XG59XG4iXX0=