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
          url: '/pages/my/email?id=' + this.id
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLmpzIl0sIm5hbWVzIjpbIldvcmtib29rRXJyb3IiLCJkYXRhIiwiZXJyb3IiLCJkb3dubG9hZFVybCIsImlkIiwibWV0aG9kcyIsIl9wcmV2aWV3IiwidXJsIiwicHJldmlld0ltYWdlIiwiY3VycmVudCIsInVybHMiLCJpbWdzIiwiX2Rvd25sb2FkIiwibmF2aWdhdGVUbyIsImNvbXB1dGVkIiwiaW1nIiwicHVzaCIsImVycm9ySW1nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwiY2hhcHRlcklkIiwic3VjY2VzcyIsInJlcyIsImZhaWwiLCJlcnIiLCJvcHRpb25zIiwid3giLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJ0aXRsZSIsIm5hbWUiLCJfZ2V0Q2hhcHRlciIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsYTs7Ozs7Ozs7Ozs7Ozs7b01BQ25CQyxJLEdBQU87QUFDTEMsYUFBTyxFQURGO0FBRUxDLG1CQUFhLEVBRlI7QUFHTEMsVUFBSTtBQUhDLEssUUFNUEMsTyxHQUFVO0FBQ1I7QUFDQUMsY0FGUSxvQkFFRUMsR0FGRixFQUVPO0FBQ2IsdUJBQUtDLFlBQUwsQ0FBa0IsRUFBQ0MsU0FBWUYsR0FBWixrQkFBRCxFQUFpQ0csTUFBTSxLQUFLQyxJQUE1QyxFQUFsQjtBQUNELE9BSk87QUFLUkMsZUFMUSx1QkFLSztBQUNYO0FBQ0EsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZE4sdUNBQTJCLEtBQUtIO0FBRGxCLFNBQWhCO0FBR0Q7QUFWTyxLLFFBYVZVLFEsR0FBVztBQUNUO0FBQ0FILFVBRlMsa0JBRUQ7QUFDTixZQUFJRCxPQUFPLEVBQVg7QUFETTtBQUFBO0FBQUE7O0FBQUE7QUFFTiwrQkFBZ0IsS0FBS1IsS0FBckIsOEhBQTRCO0FBQUEsZ0JBQW5CYSxHQUFtQjs7QUFDMUJMLGlCQUFLTSxJQUFMLENBQWFELElBQUlFLFFBQUosQ0FBYVYsR0FBMUI7QUFDRDtBQUpLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBS04sZUFBT0csSUFBUDtBQUNEO0FBUlEsSzs7Ozs7OztBQVdYO2dDQUNhTixFLEVBQUk7QUFDZixhQUFPLElBQUljLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsdUJBQUtDLE9BQUwsQ0FBYTtBQUNYZCxlQUFLLHFEQURNO0FBRVhOLGdCQUFNO0FBQ0pxQix1QkFBV2xCO0FBRFAsV0FGSztBQUtYbUIsaUJBTFcsbUJBS0ZDLEdBTEUsRUFLRztBQUNaTCxvQkFBUUssR0FBUjtBQUNELFdBUFU7QUFRWEMsY0FSVyxnQkFRTEMsR0FSSyxFQVFBO0FBQ1ROLG1CQUFPTSxHQUFQO0FBQ0Q7QUFWVSxTQUFiO0FBWUQsT0FiTSxDQUFQO0FBY0Q7Ozs7MkZBRVlDLE87Ozs7O0FBQ1hDLG1CQUFHQyxxQkFBSCxDQUF5QixFQUFDQyxPQUFPSCxRQUFRSSxJQUFoQixFQUF6QjtBQUNBLHFCQUFLM0IsRUFBTCxHQUFVdUIsUUFBUXZCLEVBQWxCOzt1QkFDbUIsS0FBSzRCLFdBQUwsQ0FBaUIsS0FBSzVCLEVBQXRCLEM7OztBQUFuQixxQkFBS0YsSzs7QUFDTCxxQkFBSytCLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFyRHVDLGVBQUtDLEk7O2tCQUEzQmxDLGEiLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JrYm9va0Vycm9yIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBkYXRhID0ge1xuICAgICAgZXJyb3I6IFtdLFxuICAgICAgZG93bmxvYWRVcmw6ICcnLFxuICAgICAgaWQ6ICcnXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIC8qKiDmn6XnnIvlpKflm74gKi9cbiAgICAgIF9wcmV2aWV3ICh1cmwpIHtcbiAgICAgICAgd2VweS5wcmV2aWV3SW1hZ2Uoe2N1cnJlbnQ6IGAke3VybH0tcHJpbWFyeUVycm9yYCwgdXJsczogdGhpcy5pbWdzfSlcbiAgICAgIH0sXG4gICAgICBfZG93bmxvYWQgKCkge1xuICAgICAgICAvLyDlhYjliKTmlq3mmK/lkKbkvJrlkZhcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6IGAvcGFnZXMvbXkvZW1haWw/aWQ9JHt0aGlzLmlkfWBcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIC8qKiDlm77niYfpm4YgKi9cbiAgICAgIGltZ3MgKCkge1xuICAgICAgICBsZXQgdXJscyA9IFtdXG4gICAgICAgIGZvciAobGV0IGltZyBvZiB0aGlzLmVycm9yKSB7XG4gICAgICAgICAgdXJscy5wdXNoKGAke2ltZy5lcnJvckltZy51cmx9LXByaW1hcnlFcnJvcmApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVybHNcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiog6I635Y+W6ZSZ6aKY5pWw5o2uICovXG4gICAgX2dldENoYXB0ZXIgKGlkKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vcHJpbWFyeS5ndWluYWJlbi5jb20vd29ya2Jvb2svY2hhcHRlci9lcnJvcicsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgY2hhcHRlcklkOiBpZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIGFzeW5jIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe3RpdGxlOiBvcHRpb25zLm5hbWV9KVxuICAgICAgdGhpcy5pZCA9IG9wdGlvbnMuaWRcbiAgICAgIHRoaXMuZXJyb3IgPSBhd2FpdCB0aGlzLl9nZXRDaGFwdGVyKHRoaXMuaWQpXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuICB9XG4iXX0=