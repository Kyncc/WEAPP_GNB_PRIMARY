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
      _upload: function _upload() {
        if (this.first.length === 0 || this.last.length === 0) {
          _wepy2.default.showModal({
            title: '提示',
            content: '请上传正确的封面',
            showCancel: false,
            confirmText: '确定'
          });
        } else {
          // this._setWant(this.first[0], this.last[0])
        }
      }
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
            console.log(res.data);
            resolve(res.data.url);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhbnQuanMiXSwibmFtZXMiOlsiV29ya2Jvb2tXYW50IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInphbk5vdGljZWJhcjEiLCJkYXRhIiwiaW1ncyIsImxvbmdUZXh0IiwiZmlyc3QiLCJsYXN0IiwibWV0aG9kcyIsIl9wcmV2aWV3IiwidHlwZSIsInByZXZpZXdJbWFnZSIsImN1cnJlbnQiLCJ1cmxzIiwiX2Nob29zZUltYWdlIiwic2VsZiIsImNob29zZUltYWdlIiwic2l6ZVR5cGUiLCJzb3VyY2VUeXBlIiwiY291bnQiLCJzdWNjZXNzIiwicmVzIiwiX3VwbG9hZEZpbGUiLCJ0ZW1wRmlsZVBhdGhzIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCIkYXBwbHkiLCJfdXBsb2FkIiwibGVuZ3RoIiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsImNvbmZpcm1UZXh0IiwiZmlsZSIsInNob3dMb2FkaW5nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ1cGxvYWRGaWxlIiwidXJsIiwiZmlsZVBhdGgiLCJuYW1lIiwiaGVhZGVyIiwiZ2V0U3RvcmFnZVN5bmMiLCJmb3JtRGF0YSIsImZhaWwiLCJlcnIiLCJjb21wbGV0ZSIsImhpZGVMb2FkaW5nIiwicmVxdWVzdCIsIm1ldGhvZCIsIiRpbnZva2UiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFk7Ozs7Ozs7Ozs7Ozs7O2tNQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLGlCQUFnQixFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLG9CQUFtQixVQUF0QyxFQUFpRCxlQUFjLFNBQS9ELEVBQWpCLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxH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ViwyQkFBS0MsV0FBTDtBQUNEO0FBckJhLFNBQWhCO0FBdUJELE9BeEJNLENBQVA7QUF5QkQ7O0FBRUQ7Ozs7NkJBQ1U1QyxLLEVBQU9DLEksRUFBTTtBQUNyQixhQUFPLElBQUk4QixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLHVCQUFLWSxPQUFMLENBQWE7QUFDWFYsZUFBSyw0Q0FETTtBQUVYVyxrQkFBUSxNQUZHO0FBR1hqRCxnQkFBTTtBQUNKRyxtQkFBT0EsS0FESDtBQUVKQyxrQkFBTUE7QUFGRixXQUhLO0FBT1hhLGlCQVBXLG1CQU9GQyxHQVBFLEVBT0c7QUFDWmlCLG9CQUFRakIsR0FBUjtBQUNELFdBVFU7QUFVWDBCLGNBVlcsZ0JBVUxDLEdBVkssRUFVQTtBQUNUVCxtQkFBT1MsR0FBUDtBQUNEO0FBWlUsU0FBYjtBQWNELE9BZk0sQ0FBUDtBQWdCRDs7OzhCQUVVO0FBQ1QsV0FBS0ssT0FBTCxDQUFhLGVBQWIsRUFBOEIsd0JBQTlCO0FBQ0Q7Ozs7RUF2SHVDLGVBQUtDLEk7O2tCQUExQjNELFkiLCJmaWxlIjoid2FudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgemFuTm90aWNlYmFyIGZyb20gJ0AvY29tcG9uZW50cy96YW4tbm90aWNlYmFyJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFdvcmtib29rV2FudCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4iuS8oOS5oOmimOWGjCdcbiAgICB9XG5cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiemFuTm90aWNlYmFyMVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dGV4dC5vbmNlXCI6XCJsb25nVGV4dFwiLFwiY29tcG9uZW50SWRcIjpcInN0YXRpYzFcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgemFuTm90aWNlYmFyMTogemFuTm90aWNlYmFyXG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGltZ3M6IFsnaHR0cDovL2ltZy5ndWluYWJlbi5jb20vd2FudDIucG5nJywgJ2h0dHA6Ly9pbWcuZ3VpbmFiZW4uY29tL3dhbnQxLmpwZyddLFxuICAgICAgbG9uZ1RleHQ6ICfor7fmjInnpLrkvovkuIrkvKDkuaDpopjlhozlsIHpnaLlkozniYjljbDmrKHvvIzmiJHku6zlsIblsL3lv6vkuIrmnrbor6XkuaDpopjlhozvvIzor7fms6jmhI/mn6XnnIvmtojmga/pgJrnn6V+JyxcbiAgICAgIGZpcnN0OiBbXSxcbiAgICAgIGxhc3Q6IFtdXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIC8qKiDmn6XnnIvlpKflm74gKi9cbiAgICAgIF9wcmV2aWV3ICh0eXBlKSB7XG4gICAgICAgIGlmICh0eXBlID09PSAnZmlyc3QnKSB7XG4gICAgICAgICAgd2VweS5wcmV2aWV3SW1hZ2Uoe2N1cnJlbnQ6IGBodHRwOi8vaW1nLmd1aW5hYmVuLmNvbS93YW50Mi5wbmdgLCB1cmxzOiB0aGlzLmltZ3N9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdlcHkucHJldmlld0ltYWdlKHtjdXJyZW50OiBgaHR0cDovL2ltZy5ndWluYWJlbi5jb20vd2FudDEuanBnYCwgdXJsczogdGhpcy5pbWdzfSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIOeCueWHu+mAieaLqeaMiemSrlxuICAgICAgX2Nob29zZUltYWdlICh0eXBlKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICB3ZXB5LmNob29zZUltYWdlKHtcbiAgICAgICAgICBzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sXG4gICAgICAgICAgc291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSxcbiAgICAgICAgICBjb3VudDogMSxcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnZmlyc3QnKSB7XG4gICAgICAgICAgICAgIHNlbGYuX3VwbG9hZEZpbGUocmVzLnRlbXBGaWxlUGF0aHNbMF0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgICAgICBzZWxmLmZpcnN0WzBdID0gcmVzXG4gICAgICAgICAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2VsZi5fdXBsb2FkRmlsZShyZXMudGVtcEZpbGVQYXRoc1swXSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgICAgIHNlbGYubGFzdFswXSA9IHJlc1xuICAgICAgICAgICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgLy8g5LiK5Lyg5oyJ6ZKu55qE5LqL5Lu2XG4gICAgICBfdXBsb2FkICgpIHtcbiAgICAgICAgaWYgKHRoaXMuZmlyc3QubGVuZ3RoID09PSAwIHx8IHRoaXMubGFzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICBjb250ZW50OiAn6K+35LiK5Lyg5q2j56Gu55qE5bCB6Z2iJyxcbiAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxuICAgICAgICAgICAgY29uZmlybVRleHQ6ICfnoa7lrponXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyB0aGlzLl9zZXRXYW50KHRoaXMuZmlyc3RbMF0sIHRoaXMubGFzdFswXSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDkuIrkvKDnu4PkuaDlhozlsIHpnaIgKi9cbiAgICBfdXBsb2FkRmlsZSAoZmlsZSkge1xuICAgICAgd2VweS5zaG93TG9hZGluZyh7dGl0bGU6ICfor7fnqI3lgJknfSlcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkudXBsb2FkRmlsZSh7XG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9wcmltYXJ5Lmd1aW5hYmVuLmNvbS91cGxvYWQvaW1nJyxcbiAgICAgICAgICBmaWxlUGF0aDogZmlsZSxcbiAgICAgICAgICBuYW1lOiAnZmlsZScsXG4gICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnLFxuICAgICAgICAgICAgJ29wZW5JZCc6IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ29wZW5JZCcpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmb3JtRGF0YToge1xuICAgICAgICAgICAgJ3R5cGUnOiAnd2FudHdvcmtib29rJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcbiAgICAgICAgICAgIHJlc29sdmUocmVzLmRhdGEudXJsKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29tcGxldGUgKCkge1xuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvKiog6I635Y+W56ug6IqC5pWw5o2uICovXG4gICAgX3NldFdhbnQgKGZpcnN0LCBsYXN0KSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vcHJpbWFyeS5ndWluYWJlbi5jb20vd29ya2Jvb2svd2FudCcsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZmlyc3Q6IGZpcnN0LFxuICAgICAgICAgICAgbGFzdDogbGFzdFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIG9uUmVhZHkgKCkge1xuICAgICAgdGhpcy4kaW52b2tlKCd6YW5Ob3RpY2ViYXIxJywgJ2luaXRaYW5Ob3RpY2VCYXJTY3JvbGwnKVxuICAgIH1cbiAgfVxuIl19