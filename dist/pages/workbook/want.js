'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _zanNoticebar = require('./../../components/zan-noticebar.js');

var _zanNoticebar2 = _interopRequireDefault(_zanNoticebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WorkbookWant = function (_wepy$page) {
  _inherits(WorkbookWant, _wepy$page);

  function WorkbookWant() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, WorkbookWant);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WorkbookWant.__proto__ || Object.getPrototypeOf(WorkbookWant)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '上传习题册'
    }, _this.$repeat = {}, _this.$props = { "zanNoticebar1": { "xmlns:v-bind": "", "v-bind:text.once": "longText", "componentId": "static1" } }, _this.$events = {}, _this.components = {
      zanNoticebar1: _zanNoticebar2.default
    }, _this.data = {
      imgs: ['http://img.guinaben.com/want2.png', 'http://img.guinaben.com/want1.jpg'],
      longText: '请按示例上传习题册封面和版印次，我们将尽快上架该习题册，请注意查看消息通知~',
      first: [],
      last: []
    }, _this.methods = {
      /** 查看大图 */
      _preview: function _preview(type) {
        if (type === 'first') {
          _wepy2.default.previewImage({ current: 'http://img.guinaben.com/want2.png', urls: this.imgs });
        } else {
          _wepy2.default.previewImage({ current: 'http://img.guinaben.com/want1.jpg', urls: this.imgs });
        }
      },

      // 点击选择按钮
      _chooseImage: function _chooseImage(type) {
        var self = this;
        _wepy2.default.chooseImage({
          sizeType: ['original', 'compressed'],
          sourceType: ['album', 'camera'],
          count: 1,
          success: function success(res) {
            if (type === 'first') {
              self._uploadFile(res.tempFilePaths[0]).then(function (res) {
                console.log(res);
                self.first[0] = res;
                self.$apply();
              });
            } else {
              self._uploadFile(res.tempFilePaths[0]).then(function (res) {
                console.log(res);
                self.last[0] = res;
                self.$apply();
              });
            }
          }
        });
      },

      // 上传按钮的事件
      _upload: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(this.first.length === 0 || this.last.length === 0)) {
                    _context.next = 4;
                    break;
                  }

                  _wepy2.default.showModal({
                    title: '提示',
                    content: '请上传正确的封面',
                    showCancel: false,
                    confirmText: '确定'
                  });
                  _context.next = 7;
                  break;

                case 4:
                  _context.next = 6;
                  return this._setWant(this.first[0], this.last[0]);

                case 6:
                  _wepy2.default.navigateBack();

                case 7:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function _upload() {
          return _ref2.apply(this, arguments);
        }

        return _upload;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WorkbookWant, [{
    key: '_uploadFile',


    /** 上传练习册封面 */
    value: function _uploadFile(file) {
      _wepy2.default.showLoading({ title: '请稍候' });
      return new Promise(function (resolve, reject) {
        _wepy2.default.uploadFile({
          url: 'https://primary.guinaben.com/upload/img',
          filePath: file,
          name: 'file',
          header: {
            'Content-Type': 'multipart/form-data',
            'openId': _wepy2.default.getStorageSync('openId')
          },
          formData: {
            'type': 'wantworkbook'
          },
          success: function success(res) {
            resolve(JSON.parse(res.data).data.url);
          },
          fail: function fail(err) {
            console.log(err);
            reject(err);
          },
          complete: function complete() {
            _wepy2.default.hideLoading();
          }
        });
      });
    }

    /** 获取章节数据 */

  }, {
    key: '_setWant',
    value: function _setWant(first, last) {
      _wepy2.default.showLoading({ title: '请稍候' });
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://primary.guinaben.com/workbook/want',
          method: 'POST',
          data: {
            first: first,
            last: last
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
  }, {
    key: 'onReady',
    value: function onReady() {
      this.$invoke('zanNoticebar1', 'initZanNoticeBarScroll');
    }
  }]);

  return WorkbookWant;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(WorkbookWant , 'pages/workbook/want'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhbnQuanMiXSwibmFtZXMiOlsiV29ya2Jvb2tXYW50IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInphbk5vdGljZWJhcjEiLCJkYXRhIiwiaW1ncyIsImxvbmdUZXh0IiwiZmlyc3QiLCJsYXN0IiwibWV0aG9kcyIsIl9wcmV2aWV3IiwidHlwZSIsInByZXZpZXdJbWFnZSIsImN1cnJlbnQiLCJ1cmxzIiwiX2Nob29zZUltYWdlIiwic2VsZiIsImNob29zZUltYWdlIiwic2l6ZVR5cGUiLCJzb3VyY2VUeXBlIiwiY291bnQiLCJzdWNjZXNzIiwicmVzIiwiX3VwbG9hZEZpbGUiLCJ0ZW1wRmlsZVBhdGhzIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCIkYXBwbHkiLCJfdXBsb2FkIiwibGVuZ3RoIiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsImNvbmZpcm1UZXh0IiwiX3NldFdhbnQiLCJuYXZpZ2F0ZUJhY2siLCJmaWxlIiwic2hvd0xvYWRpbmciLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInVwbG9hZEZpbGUiLCJ1cmwiLCJmaWxlUGF0aCIsIm5hbWUiLCJoZWFkZXIiLCJnZXRTdG9yYWdlU3luYyIsImZvcm1EYXRhIiwiSlNPTiIsInBhcnNlIiwiZmFpbCIsImVyciIsImNvbXBsZXRlIiwiaGlkZUxvYWRpbmciLCJyZXF1ZXN0IiwibWV0aG9kIiwiJGludm9rZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxZOzs7Ozs7Ozs7Ozs7OztrTUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxpQkFBZ0IsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixvQkFBbUIsVUFBdEMsRUFBaUQs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QUNSLG9CQUFRO0FBREEsV0FSSTtBQVdkNUIsaUJBWGMsbUJBV0xDLEdBWEssRUFXQTtBQUNabUIsb0JBQVFTLEtBQUtDLEtBQUwsQ0FBVzdCLElBQUlsQixJQUFmLEVBQXFCQSxJQUFyQixDQUEwQndDLEdBQWxDO0FBQ0QsV0FiYTtBQWNkUSxjQWRjLGdCQWNSQyxHQWRRLEVBY0g7QUFDVDNCLG9CQUFRQyxHQUFSLENBQVkwQixHQUFaO0FBQ0FYLG1CQUFPVyxHQUFQO0FBQ0QsV0FqQmE7QUFrQmRDLGtCQWxCYyxzQkFrQkY7QUFDViwyQkFBS0MsV0FBTDtBQUNEO0FBcEJhLFNBQWhCO0FBc0JELE9BdkJNLENBQVA7QUF3QkQ7O0FBRUQ7Ozs7NkJBQ1VoRCxLLEVBQU9DLEksRUFBTTtBQUNyQixxQkFBSytCLFdBQUwsQ0FBaUIsRUFBQ1AsT0FBTyxLQUFSLEVBQWpCO0FBQ0EsYUFBTyxJQUFJUSxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLHVCQUFLYyxPQUFMLENBQWE7QUFDWFosZUFBSyw0Q0FETTtBQUVYYSxrQkFBUSxNQUZHO0FBR1hyRCxnQkFBTTtBQUNKRyxtQkFBT0EsS0FESDtBQUVKQyxrQkFBTUE7QUFGRixXQUhLO0FBT1hhLGlCQVBXLG1CQU9GQyxHQVBFLEVBT0c7QUFDWm1CLG9CQUFRbkIsR0FBUjtBQUNELFdBVFU7QUFVWDhCLGNBVlcsZ0JBVUxDLEdBVkssRUFVQTtBQUNUWCxtQkFBT1csR0FBUDtBQUNELFdBWlU7QUFhWEMsa0JBYlcsc0JBYUM7QUFDViwyQkFBS0MsV0FBTDtBQUNEO0FBZlUsU0FBYjtBQWlCRCxPQWxCTSxDQUFQO0FBbUJEOzs7OEJBRVU7QUFDVCxXQUFLRyxPQUFMLENBQWEsZUFBYixFQUE4Qix3QkFBOUI7QUFDRDs7OztFQTNIdUMsZUFBS0MsSTs7a0JBQTFCL0QsWSIsImZpbGUiOiJ3YW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB6YW5Ob3RpY2ViYXIgZnJvbSAnQC9jb21wb25lbnRzL3phbi1ub3RpY2ViYXInXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29ya2Jvb2tXYW50IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5LiK5Lyg5Lmg6aKY5YaMJ1xuICAgIH1cblxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJ6YW5Ob3RpY2ViYXIxXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0ZXh0Lm9uY2VcIjpcImxvbmdUZXh0XCIsXCJjb21wb25lbnRJZFwiOlwic3RhdGljMVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICB6YW5Ob3RpY2ViYXIxOiB6YW5Ob3RpY2ViYXJcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgaW1nczogWydodHRwOi8vaW1nLmd1aW5hYmVuLmNvbS93YW50Mi5wbmcnLCAnaHR0cDovL2ltZy5ndWluYWJlbi5jb20vd2FudDEuanBnJ10sXG4gICAgICBsb25nVGV4dDogJ+ivt+aMieekuuS+i+S4iuS8oOS5oOmimOWGjOWwgemdouWSjOeJiOWNsOasoe+8jOaIkeS7rOWwhuWwveW/q+S4iuaetuivpeS5oOmimOWGjO+8jOivt+azqOaEj+afpeeci+a2iOaBr+mAmuefpX4nLFxuICAgICAgZmlyc3Q6IFtdLFxuICAgICAgbGFzdDogW11cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgLyoqIOafpeeci+Wkp+WbviAqL1xuICAgICAgX3ByZXZpZXcgKHR5cGUpIHtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdmaXJzdCcpIHtcbiAgICAgICAgICB3ZXB5LnByZXZpZXdJbWFnZSh7Y3VycmVudDogYGh0dHA6Ly9pbWcuZ3VpbmFiZW4uY29tL3dhbnQyLnBuZ2AsIHVybHM6IHRoaXMuaW1nc30pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2VweS5wcmV2aWV3SW1hZ2Uoe2N1cnJlbnQ6IGBodHRwOi8vaW1nLmd1aW5hYmVuLmNvbS93YW50MS5qcGdgLCB1cmxzOiB0aGlzLmltZ3N9KVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8g54K55Ye76YCJ5oup5oyJ6ZKuXG4gICAgICBfY2hvb3NlSW1hZ2UgKHR5cGUpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIHdlcHkuY2hvb3NlSW1hZ2Uoe1xuICAgICAgICAgIHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSxcbiAgICAgICAgICBzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLFxuICAgICAgICAgIGNvdW50OiAxLFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdmaXJzdCcpIHtcbiAgICAgICAgICAgICAgc2VsZi5fdXBsb2FkRmlsZShyZXMudGVtcEZpbGVQYXRoc1swXSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgICAgIHNlbGYuZmlyc3RbMF0gPSByZXNcbiAgICAgICAgICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZWxmLl91cGxvYWRGaWxlKHJlcy50ZW1wRmlsZVBhdGhzWzBdKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICAgICAgc2VsZi5sYXN0WzBdID0gcmVzXG4gICAgICAgICAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICAvLyDkuIrkvKDmjInpkq7nmoTkuovku7ZcbiAgICAgIGFzeW5jIF91cGxvYWQgKCkge1xuICAgICAgICBpZiAodGhpcy5maXJzdC5sZW5ndGggPT09IDAgfHwgdGhpcy5sYXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfor7fkuIrkvKDmraPnoa7nmoTlsIHpnaInLFxuICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXG4gICAgICAgICAgICBjb25maXJtVGV4dDogJ+ehruWumidcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGF3YWl0IHRoaXMuX3NldFdhbnQodGhpcy5maXJzdFswXSwgdGhpcy5sYXN0WzBdKVxuICAgICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDkuIrkvKDnu4PkuaDlhozlsIHpnaIgKi9cbiAgICBfdXBsb2FkRmlsZSAoZmlsZSkge1xuICAgICAgd2VweS5zaG93TG9hZGluZyh7dGl0bGU6ICfor7fnqI3lgJknfSlcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkudXBsb2FkRmlsZSh7XG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9wcmltYXJ5Lmd1aW5hYmVuLmNvbS91cGxvYWQvaW1nJyxcbiAgICAgICAgICBmaWxlUGF0aDogZmlsZSxcbiAgICAgICAgICBuYW1lOiAnZmlsZScsXG4gICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnLFxuICAgICAgICAgICAgJ29wZW5JZCc6IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ29wZW5JZCcpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmb3JtRGF0YToge1xuICAgICAgICAgICAgJ3R5cGUnOiAnd2FudHdvcmtib29rJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UocmVzLmRhdGEpLmRhdGEudXJsKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29tcGxldGUgKCkge1xuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvKiog6I635Y+W56ug6IqC5pWw5o2uICovXG4gICAgX3NldFdhbnQgKGZpcnN0LCBsYXN0KSB7XG4gICAgICB3ZXB5LnNob3dMb2FkaW5nKHt0aXRsZTogJ+ivt+eojeWAmSd9KVxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL3ByaW1hcnkuZ3VpbmFiZW4uY29tL3dvcmtib29rL3dhbnQnLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGZpcnN0OiBmaXJzdCxcbiAgICAgICAgICAgIGxhc3Q6IGxhc3RcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb21wbGV0ZSAoKSB7XG4gICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIG9uUmVhZHkgKCkge1xuICAgICAgdGhpcy4kaW52b2tlKCd6YW5Ob3RpY2ViYXIxJywgJ2luaXRaYW5Ob3RpY2VCYXJTY3JvbGwnKVxuICAgIH1cbiAgfVxuIl19