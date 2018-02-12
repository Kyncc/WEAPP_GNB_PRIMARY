'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _gnbInfiniteScroll = require('./../../components/gnb-infiniteScroll.js');

var _gnbInfiniteScroll2 = _interopRequireDefault(_gnbInfiniteScroll);

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
      error: [],
      id: '',
      scrollDisabled: false,
      isNothing: false
    }, _this.components = {
      InfiniteScroll: _gnbInfiniteScroll2.default
    }, _this.methods = {
      /** 查看大图 */
      _preview: function _preview(url) {
        _wepy2.default.previewImage({ current: url + '-primaryError', urls: this.imgs });
      },
      _download: function _download() {
        // 先判断是否会员
        _wepy2.default.navigateTo({
          url: '/pages/my/email?id=' + this.id + '&type=statistics'
        });
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

                this.id = options.id;
                this.error = result.errorList;
                this.offset = result.offset;
                this.$apply();

              case 8:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLmpzIl0sIm5hbWVzIjpbIlN0YXRpc3RpY3NFcnJvciIsImRhdGEiLCJvZmZzZXQiLCJlcnJvciIsImlkIiwic2Nyb2xsRGlzYWJsZWQiLCJpc05vdGhpbmciLCJjb21wb25lbnRzIiwiSW5maW5pdGVTY3JvbGwiLCJtZXRob2RzIiwiX3ByZXZpZXciLCJ1cmwiLCJwcmV2aWV3SW1hZ2UiLCJjdXJyZW50IiwidXJscyIsImltZ3MiLCJfZG93bmxvYWQiLCJuYXZpZ2F0ZVRvIiwiY29tcHV0ZWQiLCJpbWciLCJwdXNoIiwiZXJyb3JJbWciLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJjaGFwdGVySWQiLCJzdWNjZXNzIiwicmVzIiwiZmFpbCIsImVyciIsIm9wdGlvbnMiLCJ3eCIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInRpdGxlIiwibmFtZSIsIl9nZXRFcnJvckxpc3QiLCJyZXN1bHQiLCJlcnJvckxpc3QiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsZTs7Ozs7Ozs7Ozs7Ozs7d01BQ25CQyxJLEdBQU87QUFDTEMsY0FBUSxFQURIO0FBRUxDLGFBQU8sRUFGRjtBQUdMQyxVQUFJLEVBSEM7QUFJTEMsc0JBQWdCLEtBSlg7QUFLTEMsaUJBQVc7QUFMTixLLFFBUVBDLFUsR0FBYTtBQUNYQztBQURXLEssUUFJYkMsTyxHQUFVO0FBQ1I7QUFDQUMsY0FGUSxvQkFFRUMsR0FGRixFQUVPO0FBQ2IsdUJBQUtDLFlBQUwsQ0FBa0IsRUFBQ0MsU0FBWUYsR0FBWixrQkFBRCxFQUFpQ0csTUFBTSxLQUFLQyxJQUE1QyxFQUFsQjtBQUNELE9BSk87QUFLUkMsZUFMUSx1QkFLSztBQUNYO0FBQ0EsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZE4sdUNBQTJCLEtBQUtQLEVBQWhDO0FBRGMsU0FBaEI7QUFHRDtBQVZPLEssUUFhVmMsUSxHQUFXO0FBQ1Q7QUFDQUgsVUFGUyxrQkFFRDtBQUNOLFlBQUlELE9BQU8sRUFBWDtBQURNO0FBQUE7QUFBQTs7QUFBQTtBQUVOLCtCQUFnQixLQUFLWCxLQUFyQiw4SEFBNEI7QUFBQSxnQkFBbkJnQixHQUFtQjs7QUFDMUJMLGlCQUFLTSxJQUFMLENBQWFELElBQUlFLFFBQUosQ0FBYVYsR0FBMUI7QUFDRDtBQUpLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBS04sZUFBT0csSUFBUDtBQUNEO0FBUlEsSzs7Ozs7OztBQVdYO2tDQUNlVixFLEVBQUlGLE0sRUFBUTtBQUN6QixhQUFPLElBQUlvQixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLHVCQUFLQyxPQUFMLENBQWE7QUFDWGQsZUFBSyx3REFETTtBQUVYVixnQkFBTTtBQUNKeUIsdUJBQVd0QixFQURQO0FBRUpGLG9CQUFRQTtBQUZKLFdBRks7QUFNWHlCLGlCQU5XLG1CQU1GQyxHQU5FLEVBTUc7QUFDWkwsb0JBQVFLLEdBQVI7QUFDRCxXQVJVO0FBU1hDLGNBVFcsZ0JBU0xDLEdBVEssRUFTQTtBQUNUTixtQkFBT00sR0FBUDtBQUNEO0FBWFUsU0FBYjtBQWFELE9BZE0sQ0FBUDtBQWVEOzs7OzJGQUVZQyxPOzs7Ozs7QUFDWEMsbUJBQUdDLHFCQUFILENBQXlCLEVBQUNDLE9BQU9ILFFBQVFJLElBQWhCLEVBQXpCOzt1QkFDbUIsS0FBS0MsYUFBTCxDQUFtQkwsUUFBUTNCLEVBQTNCLEVBQStCLEtBQUtGLE1BQXBDLEM7OztBQUFmbUMsc0I7O0FBQ0oscUJBQUtqQyxFQUFMLEdBQVUyQixRQUFRM0IsRUFBbEI7QUFDQSxxQkFBS0QsS0FBTCxHQUFha0MsT0FBT0MsU0FBcEI7QUFDQSxxQkFBS3BDLE1BQUwsR0FBY21DLE9BQU9uQyxNQUFyQjtBQUNBLHFCQUFLcUMsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTlEeUMsZUFBS0MsSTs7a0JBQTdCeEMsZSIsImZpbGUiOiJlcnJvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBJbmZpbml0ZVNjcm9sbCBmcm9tICdAL2NvbXBvbmVudHMvZ25iLWluZmluaXRlU2Nyb2xsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0aXN0aWNzRXJyb3IgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBkYXRhID0ge1xuICAgIG9mZnNldDogJycsXG4gICAgZXJyb3I6IFtdLFxuICAgIGlkOiAnJyxcbiAgICBzY3JvbGxEaXNhYmxlZDogZmFsc2UsXG4gICAgaXNOb3RoaW5nOiBmYWxzZVxuICB9XG5cbiAgY29tcG9uZW50cyA9IHtcbiAgICBJbmZpbml0ZVNjcm9sbDogSW5maW5pdGVTY3JvbGxcbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgLyoqIOafpeeci+Wkp+WbviAqL1xuICAgIF9wcmV2aWV3ICh1cmwpIHtcbiAgICAgIHdlcHkucHJldmlld0ltYWdlKHtjdXJyZW50OiBgJHt1cmx9LXByaW1hcnlFcnJvcmAsIHVybHM6IHRoaXMuaW1nc30pXG4gICAgfSxcbiAgICBfZG93bmxvYWQgKCkge1xuICAgICAgLy8g5YWI5Yik5pat5piv5ZCm5Lya5ZGYXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvcGFnZXMvbXkvZW1haWw/aWQ9JHt0aGlzLmlkfSZ0eXBlPXN0YXRpc3RpY3NgXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGNvbXB1dGVkID0ge1xuICAgIC8qKiDlm77niYfpm4YgKi9cbiAgICBpbWdzICgpIHtcbiAgICAgIGxldCB1cmxzID0gW11cbiAgICAgIGZvciAobGV0IGltZyBvZiB0aGlzLmVycm9yKSB7XG4gICAgICAgIHVybHMucHVzaChgJHtpbWcuZXJyb3JJbWcudXJsfS1wcmltYXJ5RXJyb3JgKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHVybHNcbiAgICB9XG4gIH1cblxuICAvKiog6I635Y+W6ZSZ6aKY5pWw5o2uICovXG4gIF9nZXRFcnJvckxpc3QgKGlkLCBvZmZzZXQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9wcmltYXJ5Lmd1aW5hYmVuLmNvbS90ZXh0Ym9vay9zdGF0aXN0aWNzL2Vycm9yJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGNoYXB0ZXJJZDogaWQsXG4gICAgICAgICAgb2Zmc2V0OiBvZmZzZXRcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIG9uTG9hZChvcHRpb25zKSB7XG4gICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHt0aXRsZTogb3B0aW9ucy5uYW1lfSlcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgdGhpcy5fZ2V0RXJyb3JMaXN0KG9wdGlvbnMuaWQsIHRoaXMub2Zmc2V0KVxuICAgIHRoaXMuaWQgPSBvcHRpb25zLmlkXG4gICAgdGhpcy5lcnJvciA9IHJlc3VsdC5lcnJvckxpc3RcbiAgICB0aGlzLm9mZnNldCA9IHJlc3VsdC5vZmZzZXRcbiAgICB0aGlzLiRhcHBseSgpXG4gIH1cbn1cbiJdfQ==