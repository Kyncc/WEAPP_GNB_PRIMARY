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
    }, _this.$repeat = {}, _this.$props = { "InfiniteScroll": { "xmlns:v-on": "", "scrollDisabled.sync": "{{ scrollDisabled }}", "isNothing.sync": "{{ isNothing }}" } }, _this.$events = { "InfiniteScroll": { "v-on:loadMore": "loadMore" } }, _this.components = {
      InfiniteScroll: _gnbInfiniteScroll2.default
    }, _this.methods = {
      /** 查看大图 */
      _preview: function _preview(url) {
        _wepy2.default.previewImage({ current: url + '-primaryError', urls: this.imgs });
      },
      loadMore: function loadMore() {
        this.scrollDisabled = true;
        this._getErrorList(this.id, this.offset);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLmpzIl0sIm5hbWVzIjpbIlN0YXRpc3RpY3NFcnJvciIsImRhdGEiLCJvZmZzZXQiLCJlcnJvciIsImlkIiwic2Nyb2xsRGlzYWJsZWQiLCJpc05vdGhpbmciLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJJbmZpbml0ZVNjcm9sbCIsIm1ldGhvZHMiLCJfcHJldmlldyIsInVybCIsInByZXZpZXdJbWFnZSIsImN1cnJlbnQiLCJ1cmxzIiwiaW1ncyIsImxvYWRNb3JlIiwiX2dldEVycm9yTGlzdCIsImNvbXB1dGVkIiwiaW1nIiwicHVzaCIsImVycm9ySW1nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwiY2hhcHRlcklkIiwic3VjY2VzcyIsInJlcyIsImZhaWwiLCJlcnIiLCJvcHRpb25zIiwid3giLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJ0aXRsZSIsIm5hbWUiLCJyZXN1bHQiLCJlcnJvckxpc3QiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsZTs7Ozs7Ozs7Ozs7Ozs7d01BQ25CQyxJLEdBQU87QUFDTEMsY0FBUSxFQURIO0FBRUxDLGFBQU8sRUFGRjtBQUdMQyxVQUFJLEVBSEM7QUFJTEMsc0JBQWdCLEtBSlg7QUFLTEMsaUJBQVc7QUFMTixLLFFBT1JDLE8sR0FBVSxFLFFBQ1hDLE0sR0FBUyxFQUFDLGtCQUFpQixFQUFDLGNBQWEsRUFBZCxFQUFpQix1QkFBc0Isc0JBQXZDLEVBQThELGtCQUFpQixpQkFBL0UsRUFBbEIsRSxRQUNUQyxPLEdBQVUsRUFBQyxrQkFBaUIsRUFBQyxpQkFBZ0IsVUFBakIsRUFBbEIsRSxRQUNUQyxVLEdBQWE7QUFDVkM7QUFEVSxLLFFBR1pDLE8sR0FBVTtBQUNSO0FBQ0FDLGNBRlEsb0JBRUVDLEdBRkYsRUFFTztBQUNiLHVCQUFLQyxZQUFMLENBQWtCLEVBQUNDLFNBQVlGLEdBQVosa0JBQUQsRUFBaUNHLE1BQU0sS0FBS0MsSUFBNUMsRUFBbEI7QUFDRCxPQUpPO0FBS1JDLGNBTFEsc0JBS0c7QUFDVCxhQUFLZCxjQUFMLEdBQXNCLElBQXRCO0FBQ0EsYUFBS2UsYUFBTCxDQUFtQixLQUFLaEIsRUFBeEIsRUFBNEIsS0FBS0YsTUFBakM7QUFDRDtBQVJPLEssUUFVVm1CLFEsR0FBVztBQUNUO0FBQ0FILFVBRlMsa0JBRUQ7QUFDTixZQUFJRCxPQUFPLEVBQVg7QUFETTtBQUFBO0FBQUE7O0FBQUE7QUFFTiwrQkFBZ0IsS0FBS2QsS0FBckIsOEhBQTRCO0FBQUEsZ0JBQW5CbUIsR0FBbUI7O0FBQzFCTCxpQkFBS00sSUFBTCxDQUFhRCxJQUFJRSxRQUFKLENBQWFWLEdBQTFCO0FBQ0Q7QUFKSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUtOLGVBQU9HLElBQVA7QUFDRDtBQVJRLEs7Ozs7Ozs7QUFXWDtrQ0FDZWIsRSxFQUFJRixNLEVBQVE7QUFDekIsYUFBTyxJQUFJdUIsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Qyx1QkFBS0MsT0FBTCxDQUFhO0FBQ1hkLGVBQUssd0RBRE07QUFFWGIsZ0JBQU07QUFDSjRCLHVCQUFXekIsRUFEUDtBQUVKRixvQkFBUUE7QUFGSixXQUZLO0FBTVg0QixpQkFOVyxtQkFNRkMsR0FORSxFQU1HO0FBQ1pMLG9CQUFRSyxHQUFSO0FBQ0QsV0FSVTtBQVNYQyxjQVRXLGdCQVNMQyxHQVRLLEVBU0E7QUFDVE4sbUJBQU9NLEdBQVA7QUFDRDtBQVhVLFNBQWI7QUFhRCxPQWRNLENBQVA7QUFlRDs7OzsyRkFFWUMsTzs7Ozs7O0FBQ1hDLG1CQUFHQyxxQkFBSCxDQUF5QixFQUFDQyxPQUFPSCxRQUFRSSxJQUFoQixFQUF6Qjs7dUJBQ21CLEtBQUtsQixhQUFMLENBQW1CYyxRQUFROUIsRUFBM0IsRUFBK0IsS0FBS0YsTUFBcEMsQzs7O0FBQWZxQyxzQjs7QUFDSixxQkFBS25DLEVBQUwsR0FBVThCLFFBQVE5QixFQUFsQjtBQUNBLHFCQUFLRCxLQUFMLEdBQWFvQyxPQUFPQyxTQUFwQjtBQUNBLHFCQUFLdEMsTUFBTCxHQUFjcUMsT0FBT3JDLE1BQXJCO0FBQ0EscUJBQUt1QyxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBNUR5QyxlQUFLQyxJOztrQkFBN0IxQyxlIiwiZmlsZSI6ImVycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IEluZmluaXRlU2Nyb2xsIGZyb20gJ0AvY29tcG9uZW50cy9nbmItaW5maW5pdGVTY3JvbGwnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRpc3RpY3NFcnJvciBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGRhdGEgPSB7XG4gICAgb2Zmc2V0OiAnJyxcbiAgICBlcnJvcjogW10sXG4gICAgaWQ6ICcnLFxuICAgIHNjcm9sbERpc2FibGVkOiBmYWxzZSxcbiAgICBpc05vdGhpbmc6IGZhbHNlXG4gIH1cbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIkluZmluaXRlU2Nyb2xsXCI6e1wieG1sbnM6di1vblwiOlwiXCIsXCJzY3JvbGxEaXNhYmxlZC5zeW5jXCI6XCJ7eyBzY3JvbGxEaXNhYmxlZCB9fVwiLFwiaXNOb3RoaW5nLnN5bmNcIjpcInt7IGlzTm90aGluZyB9fVwifX07XHJcbiRldmVudHMgPSB7XCJJbmZpbml0ZVNjcm9sbFwiOntcInYtb246bG9hZE1vcmVcIjpcImxvYWRNb3JlXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgSW5maW5pdGVTY3JvbGw6IEluZmluaXRlU2Nyb2xsXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICAvKiog5p+l55yL5aSn5Zu+ICovXG4gICAgX3ByZXZpZXcgKHVybCkge1xuICAgICAgd2VweS5wcmV2aWV3SW1hZ2Uoe2N1cnJlbnQ6IGAke3VybH0tcHJpbWFyeUVycm9yYCwgdXJsczogdGhpcy5pbWdzfSlcbiAgICB9LFxuICAgIGxvYWRNb3JlKCkge1xuICAgICAgdGhpcy5zY3JvbGxEaXNhYmxlZCA9IHRydWVcbiAgICAgIHRoaXMuX2dldEVycm9yTGlzdCh0aGlzLmlkLCB0aGlzLm9mZnNldClcbiAgICB9XG4gIH1cbiAgY29tcHV0ZWQgPSB7XG4gICAgLyoqIOWbvueJh+mbhiAqL1xuICAgIGltZ3MgKCkge1xuICAgICAgbGV0IHVybHMgPSBbXVxuICAgICAgZm9yIChsZXQgaW1nIG9mIHRoaXMuZXJyb3IpIHtcbiAgICAgICAgdXJscy5wdXNoKGAke2ltZy5lcnJvckltZy51cmx9LXByaW1hcnlFcnJvcmApXG4gICAgICB9XG4gICAgICByZXR1cm4gdXJsc1xuICAgIH1cbiAgfVxuXG4gIC8qKiDojrflj5bplJnpopjmlbDmja4gKi9cbiAgX2dldEVycm9yTGlzdCAoaWQsIG9mZnNldCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwczovL3ByaW1hcnkuZ3VpbmFiZW4uY29tL3RleHRib29rL3N0YXRpc3RpY3MvZXJyb3InLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgY2hhcHRlcklkOiBpZCxcbiAgICAgICAgICBvZmZzZXQ6IG9mZnNldFxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe3RpdGxlOiBvcHRpb25zLm5hbWV9KVxuICAgIGxldCByZXN1bHQgPSBhd2FpdCB0aGlzLl9nZXRFcnJvckxpc3Qob3B0aW9ucy5pZCwgdGhpcy5vZmZzZXQpXG4gICAgdGhpcy5pZCA9IG9wdGlvbnMuaWRcbiAgICB0aGlzLmVycm9yID0gcmVzdWx0LmVycm9yTGlzdFxuICAgIHRoaXMub2Zmc2V0ID0gcmVzdWx0Lm9mZnNldFxuICAgIHRoaXMuJGFwcGx5KClcbiAgfVxufVxuIl19