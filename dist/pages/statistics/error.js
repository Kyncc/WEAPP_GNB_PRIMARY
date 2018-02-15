'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _zanLoadmore = require('./../../components/zan-loadmore.js');

var _zanLoadmore2 = _interopRequireDefault(_zanLoadmore);

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
      scrollHeight: 500,
      loading: true,
      nomore: false
    }, _this.$repeat = {}, _this.$props = { "zanLoadmore1": { "xmlns:v-bind": "", "v-bind:loading.sync": "loading", "v-bind:nomore.sync": "nomore" } }, _this.$events = {}, _this.components = {
      zanLoadmore1: _zanLoadmore2.default
    }, _this.methods = {
      /** 加载更多 */
      _loadMore: function _loadMore() {
        var _this2 = this;

        // 无更多数据或者正在加载则返回
        if (this.loading || this.nomore) return;
        this.loading = true;
        this._getErrorList(this.id, this.offset).then(function (res) {
          _this2.loading = false;
          _this2.error = _this2.error.concat(res.errorList);
          _this2.offset = res.offset;
          if (_this2.offset.length === 0) {
            _this2.nomore = true;
          }
          _this2.$apply();
        }).catch(function () {
          _this2.nomore = true;
          _this2.loading = false;
          _this2.$apply();
        });
      },

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
                this.scrollHeight = this.$parent.globalData.system.windowHeight - 30;
                wx.setNavigationBarTitle({ title: options.name });
                // 开始加载数据
                _context.prev = 2;

                this.id = options.id;
                _context.next = 6;
                return this._getErrorList(options.id, this.offset);

              case 6:
                result = _context.sent;

                this.loading = false;
                this.error = result.errorList;
                this.offset = result.offset;
                if (this.offset.length === 0) {
                  this.nomore = true;
                }
                this.$apply();
                _context.next = 19;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context['catch'](2);

                this.loading = false;
                this.nomore = true;
                this.$apply();

              case 19:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 14]]);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLmpzIl0sIm5hbWVzIjpbIlN0YXRpc3RpY3NFcnJvciIsImRhdGEiLCJvZmZzZXQiLCJlcnJvciIsImlkIiwic2Nyb2xsSGVpZ2h0IiwibG9hZGluZyIsIm5vbW9yZSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInphbkxvYWRtb3JlMSIsIm1ldGhvZHMiLCJfbG9hZE1vcmUiLCJfZ2V0RXJyb3JMaXN0IiwidGhlbiIsInJlcyIsImNvbmNhdCIsImVycm9yTGlzdCIsImxlbmd0aCIsIiRhcHBseSIsImNhdGNoIiwiX3ByZXZpZXciLCJ1cmwiLCJwcmV2aWV3SW1hZ2UiLCJjdXJyZW50IiwidXJscyIsImltZ3MiLCJfZG93bmxvYWQiLCJuYXZpZ2F0ZVRvIiwiY29tcHV0ZWQiLCJpbWciLCJwdXNoIiwiZXJyb3JJbWciLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJjaGFwdGVySWQiLCJzdWNjZXNzIiwiZmFpbCIsImVyciIsIm9wdGlvbnMiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsInN5c3RlbSIsIndpbmRvd0hlaWdodCIsInd4Iiwic2V0TmF2aWdhdGlvbkJhclRpdGxlIiwidGl0bGUiLCJuYW1lIiwicmVzdWx0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGU7Ozs7Ozs7Ozs7Ozs7O3dNQUNuQkMsSSxHQUFPO0FBQ0xDLGNBQVEsRUFESDtBQUVMQyxhQUFPLEVBRkY7QUFHTEMsVUFBSSxFQUhDO0FBSUxDLG9CQUFjLEdBSlQ7QUFLTEMsZUFBUyxJQUxKO0FBTUxDLGNBQVE7QUFOSCxLLFFBU1JDLE8sR0FBVSxFLFFBQ1hDLE0sR0FBUyxFQUFDLGdCQUFlLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsdUJBQXNCLFNBQXpDLEVBQW1ELHNCQUFxQixRQUF4RSxFQUFoQixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FB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SSxLQUFLQSxNQUFMLENBQVlrQixNQUFaLEtBQXVCLENBQTNCLEVBQThCO0FBQzVCLHVCQUFLYixNQUFMLEdBQWMsSUFBZDtBQUNEO0FBQ0QscUJBQUtjLE1BQUw7Ozs7Ozs7O0FBRUEscUJBQUtmLE9BQUwsR0FBZSxLQUFmO0FBQ0EscUJBQUtDLE1BQUwsR0FBYyxJQUFkO0FBQ0EscUJBQUtjLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFoR3VDLGVBQUtnQyxJOztrQkFBN0JyRCxlIiwiZmlsZSI6ImVycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHphbkxvYWRNb3JlIGZyb20gJ0AvY29tcG9uZW50cy96YW4tbG9hZG1vcmUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRpc3RpY3NFcnJvciBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGRhdGEgPSB7XG4gICAgb2Zmc2V0OiAnJyxcbiAgICBlcnJvcjogW10sXG4gICAgaWQ6ICcnLFxuICAgIHNjcm9sbEhlaWdodDogNTAwLFxuICAgIGxvYWRpbmc6IHRydWUsXG4gICAgbm9tb3JlOiBmYWxzZVxuICB9XG5cbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInphbkxvYWRtb3JlMVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bG9hZGluZy5zeW5jXCI6XCJsb2FkaW5nXCIsXCJ2LWJpbmQ6bm9tb3JlLnN5bmNcIjpcIm5vbW9yZVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgemFuTG9hZG1vcmUxOiB6YW5Mb2FkTW9yZVxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICAvKiog5Yqg6L295pu05aSaICovXG4gICAgX2xvYWRNb3JlICgpIHtcbiAgICAgIC8vIOaXoOabtOWkmuaVsOaNruaIluiAheato+WcqOWKoOi9veWImei/lOWbnlxuICAgICAgaWYgKHRoaXMubG9hZGluZyB8fCB0aGlzLm5vbW9yZSkgcmV0dXJuXG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXG4gICAgICB0aGlzLl9nZXRFcnJvckxpc3QodGhpcy5pZCwgdGhpcy5vZmZzZXQpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICB0aGlzLmVycm9yID0gdGhpcy5lcnJvci5jb25jYXQocmVzLmVycm9yTGlzdClcbiAgICAgICAgdGhpcy5vZmZzZXQgPSByZXMub2Zmc2V0XG4gICAgICAgIGlmICh0aGlzLm9mZnNldC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLm5vbW9yZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgIHRoaXMubm9tb3JlID0gdHJ1ZVxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9KVxuICAgIH0sXG4gICAgLyoqIOafpeeci+Wkp+WbviAqL1xuICAgIF9wcmV2aWV3ICh1cmwpIHtcbiAgICAgIHdlcHkucHJldmlld0ltYWdlKHtjdXJyZW50OiBgJHt1cmx9LXByaW1hcnlFcnJvcmAsIHVybHM6IHRoaXMuaW1nc30pXG4gICAgfSxcbiAgICBfZG93bmxvYWQgKCkge1xuICAgICAgLy8g5YWI5Yik5pat5piv5ZCm5Lya5ZGYXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvcGFnZXMvbXkvZW1haWw/aWQ9JHt0aGlzLmlkfSZ0eXBlPXN0YXRpc3RpY3NgXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGNvbXB1dGVkID0ge1xuICAgIC8qKiDlm77niYfpm4YgKi9cbiAgICBpbWdzICgpIHtcbiAgICAgIGxldCB1cmxzID0gW11cbiAgICAgIGZvciAobGV0IGltZyBvZiB0aGlzLmVycm9yKSB7XG4gICAgICAgIHVybHMucHVzaChgJHtpbWcuZXJyb3JJbWcudXJsfS1wcmltYXJ5RXJyb3JgKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHVybHNcbiAgICB9XG4gIH1cblxuICAvKiog6I635Y+W6ZSZ6aKY5pWw5o2uICovXG4gIF9nZXRFcnJvckxpc3QgKGlkLCBvZmZzZXQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9wcmltYXJ5Lmd1aW5hYmVuLmNvbS90ZXh0Ym9vay9zdGF0aXN0aWNzL2Vycm9yJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGNoYXB0ZXJJZDogaWQsXG4gICAgICAgICAgb2Zmc2V0OiBvZmZzZXRcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIG9uTG9hZChvcHRpb25zKSB7XG4gICAgdGhpcy5zY3JvbGxIZWlnaHQgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5zeXN0ZW0ud2luZG93SGVpZ2h0IC0gMzBcbiAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe3RpdGxlOiBvcHRpb25zLm5hbWV9KVxuICAgIC8vIOW8gOWni+WKoOi9veaVsOaNrlxuICAgIHRyeSB7XG4gICAgICB0aGlzLmlkID0gb3B0aW9ucy5pZFxuICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX2dldEVycm9yTGlzdChvcHRpb25zLmlkLCB0aGlzLm9mZnNldClcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgICB0aGlzLmVycm9yID0gcmVzdWx0LmVycm9yTGlzdFxuICAgICAgdGhpcy5vZmZzZXQgPSByZXN1bHQub2Zmc2V0XG4gICAgICBpZiAodGhpcy5vZmZzZXQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMubm9tb3JlID0gdHJ1ZVxuICAgICAgfVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgIHRoaXMubm9tb3JlID0gdHJ1ZVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cbiAgfVxufVxuIl19