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
      _download: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this._getDownloadUrl(this.id);

                case 2:
                  this.downloadUrl = _context.sent;

                  _wepy2.default.showLoading({ title: '下载中' });
                  _wepy2.default.downloadFile({
                    url: this.downloadUrl,
                    success: function success(res) {
                      var filePath = res.tempFilePath;
                      _wepy2.default.openDocument({
                        filePath: filePath,
                        fileType: 'doc',
                        success: function success(res) {
                          console.log('打开文档成功');
                        },
                        complete: function complete() {
                          _wepy2.default.hideLoading();
                        }
                      });
                    }
                  });

                case 5:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function _download() {
          return _ref2.apply(this, arguments);
        }

        return _download;
      }()
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

    /** 获取错题数据 */

  }, {
    key: '_getDownloadUrl',
    value: function _getDownloadUrl(id) {
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
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(options) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                wx.setNavigationBarTitle({ title: options.name });
                this.id = options.id;
                _context2.next = 4;
                return this._getChapter(this.id);

              case 4:
                this.error = _context2.sent;

                this.$apply();

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onLoad(_x) {
        return _ref3.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return WorkbookError;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(WorkbookError , 'pages/workbook/error'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLmpzIl0sIm5hbWVzIjpbIldvcmtib29rRXJyb3IiLCJkYXRhIiwiZXJyb3IiLCJkb3dubG9hZFVybCIsImlkIiwibWV0aG9kcyIsIl9wcmV2aWV3IiwidXJsIiwicHJldmlld0ltYWdlIiwiY3VycmVudCIsInVybHMiLCJpbWdzIiwiX2Rvd25sb2FkIiwiX2dldERvd25sb2FkVXJsIiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsImRvd25sb2FkRmlsZSIsInN1Y2Nlc3MiLCJyZXMiLCJmaWxlUGF0aCIsInRlbXBGaWxlUGF0aCIsIm9wZW5Eb2N1bWVudCIsImZpbGVUeXBlIiwiY29uc29sZSIsImxvZyIsImNvbXBsZXRlIiwiaGlkZUxvYWRpbmciLCJjb21wdXRlZCIsImltZyIsInB1c2giLCJlcnJvckltZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsImNoYXB0ZXJJZCIsImZhaWwiLCJlcnIiLCJvcHRpb25zIiwid3giLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJuYW1lIiwiX2dldENoYXB0ZXIiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGE7Ozs7Ozs7Ozs7Ozs7O29NQUNuQkMsSSxHQUFPO0FBQ0xDLGFBQU8sRUFERjtBQUVMQyxtQkFBYSxFQUZSO0FBR0xDLFVBQUk7QUFIQyxLLFFBTVBDLE8sR0FBVTtBQUNSO0FBQ0FDLGNBRlEsb0JBRUVDLEdBRkYsRUFFTztBQUNiLHVCQUFLQyxZQUFMLENBQWtCLEVBQUNDLFNBQVlGLEdBQVosa0JBQUQsRUFBaUNHLE1BQU0sS0FBS0MsSUFBNUMsRUFBbEI7QUFDRCxPQUpPO0FBS0ZDLGVBTEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFNbUIsS0FBS0MsZUFBTCxDQUFxQixLQUFLVCxFQUExQixDQU5uQjs7QUFBQTtBQU1OLHVCQUFLRCxXQU5DOztBQU9OLGlDQUFLVyxXQUFMLENBQWlCLEVBQUNDLE9BQU8sS0FBUixFQUFqQjtBQUNBLGlDQUFLQyxZQUFMLENBQWtCO0FBQ2hCVCx5QkFBSyxLQUFLSixXQURNO0FBRWhCYyw2QkFBUyxpQkFBVUMsR0FBVixFQUFlO0FBQ3RCLDBCQUFJQyxXQUFXRCxJQUFJRSxZQUFuQjtBQUNBLHFDQUFLQyxZQUFMLENBQWtCO0FBQ2hCRixrQ0FBVUEsUUFETTtBQUVoQkcsa0NBQVUsS0FGTTtBQUdoQkwsaUNBQVMsaUJBQVVDLEdBQVYsRUFBZTtBQUN0Qkssa0NBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0QseUJBTGU7QUFNaEJDLGtDQUFVLG9CQUFZO0FBQ3BCLHlDQUFLQyxXQUFMO0FBQ0Q7QUFSZSx1QkFBbEI7QUFVRDtBQWRlLG1CQUFsQjs7QUFSTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLEssUUEyQlZDLFEsR0FBVztBQUNUO0FBQ0FoQixVQUZTLGtCQUVEO0FBQ04sWUFBSUQsT0FBTyxFQUFYO0FBRE07QUFBQTtBQUFBOztBQUFBO0FBRU4sK0JBQWdCLEtBQUtSLEtBQXJCLDhIQUE0QjtBQUFBLGdCQUFuQjBCLEdBQW1COztBQUMxQmxCLGlCQUFLbUIsSUFBTCxDQUFhRCxJQUFJRSxRQUFKLENBQWF2QixHQUExQjtBQUNEO0FBSks7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFLTixlQUFPRyxJQUFQO0FBQ0Q7QUFSUSxLOzs7Ozs7O0FBV1g7Z0NBQ2FOLEUsRUFBSTtBQUNmLGFBQU8sSUFBSTJCLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsdUJBQUtDLE9BQUwsQ0FBYTtBQUNYM0IsZUFBSyxxREFETTtBQUVYTixnQkFBTTtBQUNKa0MsdUJBQVcvQjtBQURQLFdBRks7QUFLWGEsaUJBTFcsbUJBS0ZDLEdBTEUsRUFLRztBQUNaYyxvQkFBUWQsR0FBUjtBQUNELFdBUFU7QUFRWGtCLGNBUlcsZ0JBUUxDLEdBUkssRUFRQTtBQUNUSixtQkFBT0ksR0FBUDtBQUNEO0FBVlUsU0FBYjtBQVlELE9BYk0sQ0FBUDtBQWNEOztBQUVEOzs7O29DQUNpQmpDLEUsRUFBSTtBQUNuQixxQkFBS1UsV0FBTCxDQUFpQixFQUFDQyxPQUFPLEtBQVIsRUFBakI7QUFDQSxhQUFPLElBQUlnQixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLHVCQUFLQyxPQUFMLENBQWE7QUFDWDNCLGVBQUssNkRBRE07QUFFWE4sZ0JBQU07QUFDSmtDLHVCQUFXL0I7QUFEUCxXQUZLO0FBS1hhLGlCQUxXLG1CQUtGQyxHQUxFLEVBS0c7QUFDWmMsb0JBQVFkLElBQUlYLEdBQVo7QUFDRCxXQVBVO0FBUVg2QixjQVJXLGdCQVFMQyxHQVJLLEVBUUE7QUFDVEosbUJBQU9JLEdBQVA7QUFDRCxXQVZVO0FBV1haLGtCQVhXLHNCQVdDO0FBQ1YsMkJBQUtDLFdBQUw7QUFDRDtBQWJVLFNBQWI7QUFlRCxPQWhCTSxDQUFQO0FBaUJEOzs7OzRGQUVZWSxPOzs7OztBQUNYQyxtQkFBR0MscUJBQUgsQ0FBeUIsRUFBQ3pCLE9BQU91QixRQUFRRyxJQUFoQixFQUF6QjtBQUNBLHFCQUFLckMsRUFBTCxHQUFVa0MsUUFBUWxDLEVBQWxCOzt1QkFDbUIsS0FBS3NDLFdBQUwsQ0FBaUIsS0FBS3RDLEVBQXRCLEM7OztBQUFuQixxQkFBS0YsSzs7QUFDTCxxQkFBS3lDLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF6RnVDLGVBQUtDLEk7O2tCQUEzQjVDLGEiLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JrYm9va0Vycm9yIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBkYXRhID0ge1xuICAgICAgZXJyb3I6IFtdLFxuICAgICAgZG93bmxvYWRVcmw6ICcnLFxuICAgICAgaWQ6ICcnXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIC8qKiDmn6XnnIvlpKflm74gKi9cbiAgICAgIF9wcmV2aWV3ICh1cmwpIHtcbiAgICAgICAgd2VweS5wcmV2aWV3SW1hZ2Uoe2N1cnJlbnQ6IGAke3VybH0tcHJpbWFyeUVycm9yYCwgdXJsczogdGhpcy5pbWdzfSlcbiAgICAgIH0sXG4gICAgICBhc3luYyBfZG93bmxvYWQgKCkge1xuICAgICAgICB0aGlzLmRvd25sb2FkVXJsID0gYXdhaXQgdGhpcy5fZ2V0RG93bmxvYWRVcmwodGhpcy5pZClcbiAgICAgICAgd2VweS5zaG93TG9hZGluZyh7dGl0bGU6ICfkuIvovb3kuK0nfSlcbiAgICAgICAgd2VweS5kb3dubG9hZEZpbGUoe1xuICAgICAgICAgIHVybDogdGhpcy5kb3dubG9hZFVybCxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICB2YXIgZmlsZVBhdGggPSByZXMudGVtcEZpbGVQYXRoXG4gICAgICAgICAgICB3ZXB5Lm9wZW5Eb2N1bWVudCh7XG4gICAgICAgICAgICAgIGZpbGVQYXRoOiBmaWxlUGF0aCxcbiAgICAgICAgICAgICAgZmlsZVR5cGU6ICdkb2MnLFxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aJk+W8gOaWh+aho+aIkOWKnycpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgLyoqIOWbvueJh+mbhiAqL1xuICAgICAgaW1ncyAoKSB7XG4gICAgICAgIGxldCB1cmxzID0gW11cbiAgICAgICAgZm9yIChsZXQgaW1nIG9mIHRoaXMuZXJyb3IpIHtcbiAgICAgICAgICB1cmxzLnB1c2goYCR7aW1nLmVycm9ySW1nLnVybH0tcHJpbWFyeUVycm9yYClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdXJsc1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDojrflj5bplJnpopjmlbDmja4gKi9cbiAgICBfZ2V0Q2hhcHRlciAoaWQpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9wcmltYXJ5Lmd1aW5hYmVuLmNvbS93b3JrYm9vay9jaGFwdGVyL2Vycm9yJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBjaGFwdGVySWQ6IGlkXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqIOiOt+WPlumUmemimOaVsOaNriAqL1xuICAgIF9nZXREb3dubG9hZFVybCAoaWQpIHtcbiAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe3RpdGxlOiAn6K+356iN5YCZJ30pXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vcHJpbWFyeS5ndWluYWJlbi5jb20vd29ya2Jvb2svY2hhcHRlci9lcnJvckRvd25sb2FkJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBjaGFwdGVySWQ6IGlkXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzLnVybClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbXBsZXRlICgpIHtcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgYXN5bmMgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7dGl0bGU6IG9wdGlvbnMubmFtZX0pXG4gICAgICB0aGlzLmlkID0gb3B0aW9ucy5pZFxuICAgICAgdGhpcy5lcnJvciA9IGF3YWl0IHRoaXMuX2dldENoYXB0ZXIodGhpcy5pZClcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG4gIH1cbiJdfQ==