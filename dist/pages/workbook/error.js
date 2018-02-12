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

var WorkbookError = function (_wepy$page) {
  _inherits(WorkbookError, _wepy$page);

  function WorkbookError() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, WorkbookError);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WorkbookError.__proto__ || Object.getPrototypeOf(WorkbookError)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      error: [],
      downloadUrl: '',
      id: ''
    }, _this.methods = {
      /** 查看大图 */
      _preview: function _preview(url) {
        _wepy2.default.previewImage({ current: url + '-primaryError', urls: this.imgs });
      },
      _download: function _download() {
        // 先判断是否会员
        _wepy2.default.navigateTo({
          url: '/pages/my/email?id=' + this.id + '&type=workbook'
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

  _createClass(WorkbookError, [{
    key: '_getChapter',


    /** 获取错题数据 */
    value: function _getChapter(id) {
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://primary.guinaben.com/workbook/chapter/error',
          data: {
            chapterId: id
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
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                wx.setNavigationBarTitle({ title: options.name });
                this.id = options.id;
                _context.next = 4;
                return this._getChapter(this.id);

              case 4:
                this.error = _context.sent;

                this.$apply();

              case 6:
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

  return WorkbookError;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(WorkbookError , 'pages/workbook/error'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLmpzIl0sIm5hbWVzIjpbIldvcmtib29rRXJyb3IiLCJkYXRhIiwiZXJyb3IiLCJkb3dubG9hZFVybCIsImlkIiwibWV0aG9kcyIsIl9wcmV2aWV3IiwidXJsIiwicHJldmlld0ltYWdlIiwiY3VycmVudCIsInVybHMiLCJpbWdzIiwiX2Rvd25sb2FkIiwibmF2aWdhdGVUbyIsImNvbXB1dGVkIiwiaW1nIiwicHVzaCIsImVycm9ySW1nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwiY2hhcHRlcklkIiwic3VjY2VzcyIsInJlcyIsImZhaWwiLCJlcnIiLCJvcHRpb25zIiwid3giLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJ0aXRsZSIsIm5hbWUiLCJfZ2V0Q2hhcHRlciIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsYTs7Ozs7Ozs7Ozs7Ozs7b01BQ25CQyxJLEdBQU87QUFDTEMsYUFBTyxFQURGO0FBRUxDLG1CQUFhLEVBRlI7QUFHTEMsVUFBSTtBQUhDLEssUUFNUEMsTyxHQUFVO0FBQ1I7QUFDQUMsY0FGUSxvQkFFRUMsR0FGRixFQUVPO0FBQ2IsdUJBQUtDLFlBQUwsQ0FBa0IsRUFBQ0MsU0FBWUYsR0FBWixrQkFBRCxFQUFpQ0csTUFBTSxLQUFLQyxJQUE1QyxFQUFsQjtBQUNELE9BSk87QUFLUkMsZUFMUSx1QkFLSztBQUNYO0FBQ0EsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZE4sdUNBQTJCLEtBQUtILEVBQWhDO0FBRGMsU0FBaEI7QUFHRDtBQVZPLEssUUFhVlUsUSxHQUFXO0FBQ1Q7QUFDQUgsVUFGUyxrQkFFRDtBQUNOLFlBQUlELE9BQU8sRUFBWDtBQURNO0FBQUE7QUFBQTs7QUFBQTtBQUVOLCtCQUFnQixLQUFLUixLQUFyQiw4SEFBNEI7QUFBQSxnQkFBbkJhLEdBQW1COztBQUMxQkwsaUJBQUtNLElBQUwsQ0FBYUQsSUFBSUUsUUFBSixDQUFhVixHQUExQjtBQUNEO0FBSks7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFLTixlQUFPRyxJQUFQO0FBQ0Q7QUFSUSxLOzs7Ozs7O0FBV1g7Z0NBQ2FOLEUsRUFBSTtBQUNmLGFBQU8sSUFBSWMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Qyx1QkFBS0MsT0FBTCxDQUFhO0FBQ1hkLGVBQUsscURBRE07QUFFWE4sZ0JBQU07QUFDSnFCLHVCQUFXbEI7QUFEUCxXQUZLO0FBS1htQixpQkFMVyxtQkFLRkMsR0FMRSxFQUtHO0FBQ1pMLG9CQUFRSyxHQUFSO0FBQ0QsV0FQVTtBQVFYQyxjQVJXLGdCQVFMQyxHQVJLLEVBUUE7QUFDVE4sbUJBQU9NLEdBQVA7QUFDRDtBQVZVLFNBQWI7QUFZRCxPQWJNLENBQVA7QUFjRDs7OzsyRkFFWUMsTzs7Ozs7QUFDWEMsbUJBQUdDLHFCQUFILENBQXlCLEVBQUNDLE9BQU9ILFFBQVFJLElBQWhCLEVBQXpCO0FBQ0EscUJBQUszQixFQUFMLEdBQVV1QixRQUFRdkIsRUFBbEI7O3VCQUNtQixLQUFLNEIsV0FBTCxDQUFpQixLQUFLNUIsRUFBdEIsQzs7O0FBQW5CLHFCQUFLRixLOztBQUNMLHFCQUFLK0IsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXJEdUMsZUFBS0MsSTs7a0JBQTNCbEMsYSIsImZpbGUiOiJlcnJvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFdvcmtib29rRXJyb3IgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGRhdGEgPSB7XG4gICAgICBlcnJvcjogW10sXG4gICAgICBkb3dubG9hZFVybDogJycsXG4gICAgICBpZDogJydcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgLyoqIOafpeeci+Wkp+WbviAqL1xuICAgICAgX3ByZXZpZXcgKHVybCkge1xuICAgICAgICB3ZXB5LnByZXZpZXdJbWFnZSh7Y3VycmVudDogYCR7dXJsfS1wcmltYXJ5RXJyb3JgLCB1cmxzOiB0aGlzLmltZ3N9KVxuICAgICAgfSxcbiAgICAgIF9kb3dubG9hZCAoKSB7XG4gICAgICAgIC8vIOWFiOWIpOaWreaYr+WQpuS8muWRmFxuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogYC9wYWdlcy9teS9lbWFpbD9pZD0ke3RoaXMuaWR9JnR5cGU9d29ya2Jvb2tgXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICAvKiog5Zu+54mH6ZuGICovXG4gICAgICBpbWdzICgpIHtcbiAgICAgICAgbGV0IHVybHMgPSBbXVxuICAgICAgICBmb3IgKGxldCBpbWcgb2YgdGhpcy5lcnJvcikge1xuICAgICAgICAgIHVybHMucHVzaChgJHtpbWcuZXJyb3JJbWcudXJsfS1wcmltYXJ5RXJyb3JgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1cmxzXG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOiOt+WPlumUmemimOaVsOaNriAqL1xuICAgIF9nZXRDaGFwdGVyIChpZCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL3ByaW1hcnkuZ3VpbmFiZW4uY29tL3dvcmtib29rL2NoYXB0ZXIvZXJyb3InLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGNoYXB0ZXJJZDogaWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBhc3luYyBvbkxvYWQob3B0aW9ucykge1xuICAgICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHt0aXRsZTogb3B0aW9ucy5uYW1lfSlcbiAgICAgIHRoaXMuaWQgPSBvcHRpb25zLmlkXG4gICAgICB0aGlzLmVycm9yID0gYXdhaXQgdGhpcy5fZ2V0Q2hhcHRlcih0aGlzLmlkKVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cbiAgfVxuIl19