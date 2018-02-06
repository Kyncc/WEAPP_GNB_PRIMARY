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
      _preview: function _preview(url) {
        _wepy2.default.previewImage({ current: url + '-primaryError', urls: this.imgs });
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
              self.first = res.tempFilePaths;
            } else {
              self.last = res.tempFilePaths;
            }
            self.$apply();
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
                  if (!this.first.length && !this.last.length) {
                    _wepy2.default.showModal({
                      title: '提示',
                      content: '请上传正确的封面',
                      showCancel: false,
                      confirmText: '确定'
                    });
                  }
                  // let urls = [this.first[0], this.last[0]]
                  _context.next = 3;
                  return this._uploadFile(this.first[0]);

                case 3:
                  _context.next = 5;
                  return this._uploadFile(this.last[0]);

                case 5:
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
    value: function _uploadFile(urls) {
      _wepy2.default.showLoading({ title: '请稍候' });
      return new Promise(function (resolve, reject) {
        _wepy2.default.uploadFile({
          url: 'https://primary.guinaben.com/workbook/want',
          filePath: urls,
          name: 'file',
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhbnQuanMiXSwibmFtZXMiOlsiV29ya2Jvb2tXYW50IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInphbk5vdGljZWJhcjEiLCJkYXRhIiwiaW1ncyIsImxvbmdUZXh0IiwiZmlyc3QiLCJsYXN0IiwibWV0aG9kcyIsIl9wcmV2aWV3IiwidXJsIiwicHJldmlld0ltYWdlIiwiY3VycmVudCIsInVybHMiLCJfY2hvb3NlSW1hZ2UiLCJ0eXBlIiwic2VsZiIsImNob29zZUltYWdlIiwic2l6ZVR5cGUiLCJzb3VyY2VUeXBlIiwiY291bnQiLCJzdWNjZXNzIiwicmVzIiwidGVtcEZpbGVQYXRocyIsIiRhcHBseSIsIl91cGxvYWQiLCJsZW5ndGgiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwiY29uZmlybVRleHQiLCJfdXBsb2FkRmlsZSIsInNob3dMb2FkaW5nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ1cGxvYWRGaWxlIiwiZmlsZVBhdGgiLCJuYW1lIiwiZmFpbCIsImVyciIsImNvbXBsZXRlIiwiaGlkZUxvYWRpbmciLCIkaW52b2tlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFk7Ozs7Ozs7Ozs7Ozs7O2tNQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLGlCQUFnQixFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLG9CQUFtQixVQUF0QyxFQUFpRCxlQUFjLFNBQS9ELEVBQWpCLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDO0FBRFEsSyxRQUlWQyxJLEdBQU87QUFDTEMsWUFBTSxDQUFDLG1DQUFELEVBQXNDLG1DQUF0QyxDQUREO0FBRUxDLGdCQUFVLHdDQUZMO0FBR0xDLGFBQU8sRUFIRjtBQUlMQyxZQUFNO0FBSkQsSyxRQU9QQyxPLEdBQVU7QUFDUjtBQUNBQyxjQUZRLG9CQUVFQyxHQUZGLEVBRU87QUFDYix1QkFBS0MsWUFBTCxDQUFrQixFQUFDQyxTQUFZRixHQUFaLGtCQUFELEVBQWlDRyxNQUFNLEtBQUtULElBQTVDLEVBQWxCO0FBQ0QsT0FKTzs7QUFLUjtBQUNBVSxrQkFOUSx3QkFNTUMsSUFOTixFQU1ZO0FBQ2xCLFlBQUlDLE9BQU8sSUFBWDtBQUNBLHVCQUFLQyxXQUFMLENBQWlCO0FBQ2ZDLG9CQUFVLENBQUMsVUFBRCxFQUFhLFlBQWIsQ0FESztBQUVmQyxzQkFBWSxDQUFDLE9BQUQsRUFBVSxRQUFWLENBRkc7QUFHZkMsaUJBQU8sQ0FIUTtBQUlmQyxpQkFKZSxtQkFJTkMsR0FKTSxFQUlEO0FBQ1osZ0JBQUlQLFNBQVMsT0FBYixFQUFzQjtBQUNwQkMsbUJBQUtWLEtBQUwsR0FBYWdCLElBQUlDLGFBQWpCO0FBQ0QsYUFGRCxNQUVPO0FBQ0xQLG1CQUFLVCxJQUFMLEdBQVllLElBQUlDLGFBQWhCO0FBQ0Q7QUFDRFAsaUJBQUtRLE1BQUw7QUFDRDtBQVhjLFNBQWpCO0FBYUQsT0FyQk87O0FBc0JSO0FBQ01DLGFBdkJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXdCTixzQkFBSSxDQUFDLEtBQUtuQixLQUFMLENBQVdvQixNQUFaLElBQXNCLENBQUMsS0FBS25CLElBQUwsQ0FBVW1CLE1BQXJDLEVBQTZDO0FBQzNDLG1DQUFLQyxTQUFMLENBQWU7QUFDYkMsNkJBQU8sSUFETTtBQUViQywrQkFBUyxVQUZJO0FBR2JDLGtDQUFZLEtBSEM7QUFJYkMsbUNBQWE7QUFKQSxxQkFBZjtBQU1EO0FBQ0Q7QUFoQ007QUFBQSx5QkFpQ0EsS0FBS0MsV0FBTCxDQUFpQixLQUFLMUIsS0FBTCxDQUFXLENBQVgsQ0FBakIsQ0FqQ0E7O0FBQUE7QUFBQTtBQUFBLHlCQWtDQSxLQUFLMEIsV0FBTCxDQUFpQixLQUFLekIsSUFBTCxDQUFVLENBQVYsQ0FBakIsQ0FsQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxLOzs7Ozs7QUFxQ1Y7Z0NBQ2FNLEksRUFBTTtBQUNqQixxQkFBS29CLFdBQUwsQ0FBaUIsRUFBQ0wsT0FBTyxLQUFSLEVBQWpCO0FBQ0EsYUFBTyxJQUFJTSxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2QzQixlQUFLLDRDQURTO0FBRWQ0QixvQkFBVXpCLElBRkk7QUFHZDBCLGdCQUFNLE1BSFE7QUFJZGxCLGlCQUpjLG1CQUlMQyxHQUpLLEVBSUE7QUFDWmEsb0JBQVFiLEdBQVI7QUFDRCxXQU5hO0FBT2RrQixjQVBjLGdCQU9SQyxHQVBRLEVBT0g7QUFDVEwsbUJBQU9LLEdBQVA7QUFDRCxXQVRhO0FBVWRDLGtCQVZjLHNCQVVGO0FBQ1YsMkJBQUtDLFdBQUw7QUFDRDtBQVphLFNBQWhCO0FBY0QsT0FmTSxDQUFQO0FBZ0JEOzs7OEJBQ1U7QUFDVCxXQUFLQyxPQUFMLENBQWEsZUFBYixFQUE4Qix3QkFBOUI7QUFDRDs7OztFQTlFdUMsZUFBS0MsSTs7a0JBQTFCbEQsWSIsImZpbGUiOiJ3YW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB6YW5Ob3RpY2ViYXIgZnJvbSAnQC9jb21wb25lbnRzL3phbi1ub3RpY2ViYXInXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29ya2Jvb2tXYW50IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5LiK5Lyg5Lmg6aKY5YaMJ1xuICAgIH1cblxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJ6YW5Ob3RpY2ViYXIxXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0ZXh0Lm9uY2VcIjpcImxvbmdUZXh0XCIsXCJjb21wb25lbnRJZFwiOlwic3RhdGljMVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICB6YW5Ob3RpY2ViYXIxOiB6YW5Ob3RpY2ViYXJcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgaW1nczogWydodHRwOi8vaW1nLmd1aW5hYmVuLmNvbS93YW50Mi5wbmcnLCAnaHR0cDovL2ltZy5ndWluYWJlbi5jb20vd2FudDEuanBnJ10sXG4gICAgICBsb25nVGV4dDogJ+ivt+aMieekuuS+i+S4iuS8oOS5oOmimOWGjOWwgemdouWSjOeJiOWNsOasoe+8jOaIkeS7rOWwhuWwveW/q+S4iuaetuivpeS5oOmimOWGjO+8jOivt+azqOaEj+afpeeci+a2iOaBr+mAmuefpX4nLFxuICAgICAgZmlyc3Q6IFtdLFxuICAgICAgbGFzdDogW11cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgLyoqIOafpeeci+Wkp+WbviAqL1xuICAgICAgX3ByZXZpZXcgKHVybCkge1xuICAgICAgICB3ZXB5LnByZXZpZXdJbWFnZSh7Y3VycmVudDogYCR7dXJsfS1wcmltYXJ5RXJyb3JgLCB1cmxzOiB0aGlzLmltZ3N9KVxuICAgICAgfSxcbiAgICAgIC8vIOeCueWHu+mAieaLqeaMiemSrlxuICAgICAgX2Nob29zZUltYWdlICh0eXBlKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICB3ZXB5LmNob29zZUltYWdlKHtcbiAgICAgICAgICBzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sXG4gICAgICAgICAgc291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSxcbiAgICAgICAgICBjb3VudDogMSxcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnZmlyc3QnKSB7XG4gICAgICAgICAgICAgIHNlbGYuZmlyc3QgPSByZXMudGVtcEZpbGVQYXRoc1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2VsZi5sYXN0ID0gcmVzLnRlbXBGaWxlUGF0aHNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgLy8g5LiK5Lyg5oyJ6ZKu55qE5LqL5Lu2XG4gICAgICBhc3luYyBfdXBsb2FkICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZpcnN0Lmxlbmd0aCAmJiAhdGhpcy5sYXN0Lmxlbmd0aCkge1xuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfor7fkuIrkvKDmraPnoa7nmoTlsIHpnaInLFxuICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXG4gICAgICAgICAgICBjb25maXJtVGV4dDogJ+ehruWumidcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIC8vIGxldCB1cmxzID0gW3RoaXMuZmlyc3RbMF0sIHRoaXMubGFzdFswXV1cbiAgICAgICAgYXdhaXQgdGhpcy5fdXBsb2FkRmlsZSh0aGlzLmZpcnN0WzBdKVxuICAgICAgICBhd2FpdCB0aGlzLl91cGxvYWRGaWxlKHRoaXMubGFzdFswXSlcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqIOS4iuS8oOe7g+S5oOWGjOWwgemdoiAqL1xuICAgIF91cGxvYWRGaWxlICh1cmxzKSB7XG4gICAgICB3ZXB5LnNob3dMb2FkaW5nKHt0aXRsZTogJ+ivt+eojeWAmSd9KVxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS51cGxvYWRGaWxlKHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL3ByaW1hcnkuZ3VpbmFiZW4uY29tL3dvcmtib29rL3dhbnQnLFxuICAgICAgICAgIGZpbGVQYXRoOiB1cmxzLFxuICAgICAgICAgIG5hbWU6ICdmaWxlJyxcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29tcGxldGUgKCkge1xuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG4gICAgb25SZWFkeSAoKSB7XG4gICAgICB0aGlzLiRpbnZva2UoJ3phbk5vdGljZWJhcjEnLCAnaW5pdFphbk5vdGljZUJhclNjcm9sbCcpXG4gICAgfVxuICB9XG4iXX0=