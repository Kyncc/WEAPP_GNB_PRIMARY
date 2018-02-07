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
                self.first[0] = res;
              });
            } else {
              self._uploadFile(res.tempFilePaths[0]).then(function (res) {
                self.last[0] = res;
              });
            }
            self.$apply();
          }
        });
      },

      // 上传按钮的事件
      _upload: function _upload() {
        if (!this.first.length && !this.last.length) {
          _wepy2.default.showModal({
            title: '提示',
            content: '请上传正确的封面',
            showCancel: false,
            confirmText: '确定'
          });
        } else {
          this._setWant(this.first[0], this.last[0]);
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
            'openId': _wepy2.default.getStorageSync('openId')
          },
          formData: {
            'type': 'wantworkbook'
          },
          success: function success(res) {
            console.log(res.data);
            resolve(res.url);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhbnQuanMiXSwibmFtZXMiOlsiV29ya2Jvb2tXYW50IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInphbk5vdGljZWJhcjEiLCJkYXRhIiwiaW1ncyIsImxvbmdUZXh0IiwiZmlyc3QiLCJsYXN0IiwibWV0aG9kcyIsIl9wcmV2aWV3IiwidHlwZSIsInByZXZpZXdJbWFnZSIsImN1cnJlbnQiLCJ1cmxzIiwiX2Nob29zZUltYWdlIiwic2VsZiIsImNob29zZUltYWdlIiwic2l6ZVR5cGUiLCJzb3VyY2VUeXBlIiwiY291bnQiLCJzdWNjZXNzIiwicmVzIiwiX3VwbG9hZEZpbGUiLCJ0ZW1wRmlsZVBhdGhzIiwidGhlbiIsIiRhcHBseSIsIl91cGxvYWQiLCJsZW5ndGgiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwiY29uZmlybVRleHQiLCJfc2V0V2FudCIsImZpbGUiLCJzaG93TG9hZGluZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidXBsb2FkRmlsZSIsInVybCIsImZpbGVQYXRoIiwibmFtZSIsImhlYWRlciIsImdldFN0b3JhZ2VTeW5jIiwiZm9ybURhdGEiLCJjb25zb2xlIiwibG9nIiwiZmFpbCIsImVyciIsImNvbXBsZXRlIiwiaGlkZUxvYWRpbmciLCJyZXF1ZXN0IiwibWV0aG9kIiwiJGludm9rZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsWTs7Ozs7Ozs7Ozs7Ozs7a01BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsaUJBQWdCLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsb0JBQW1CLFVBQXRDLEVBQWlELGVBQWMsU0FBL0QsRUFBakIsRSxRQUNUQyxPLEdBQVUs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c0JELE9BdkJNLENBQVA7QUF3QkQ7O0FBRUQ7Ozs7NkJBQ1U3QyxLLEVBQU9DLEksRUFBTTtBQUNyQixhQUFPLElBQUk2QixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLHVCQUFLYyxPQUFMLENBQWE7QUFDWFosZUFBSyw0Q0FETTtBQUVYYSxrQkFBUSxNQUZHO0FBR1hsRCxnQkFBTTtBQUNKRyxtQkFBT0EsS0FESDtBQUVKQyxrQkFBTUE7QUFGRixXQUhLO0FBT1hhLGlCQVBXLG1CQU9GQyxHQVBFLEVBT0c7QUFDWmdCLG9CQUFRaEIsR0FBUjtBQUNELFdBVFU7QUFVWDJCLGNBVlcsZ0JBVUxDLEdBVkssRUFVQTtBQUNUWCxtQkFBT1csR0FBUDtBQUNEO0FBWlUsU0FBYjtBQWNELE9BZk0sQ0FBUDtBQWdCRDs7OzhCQUVVO0FBQ1QsV0FBS0ssT0FBTCxDQUFhLGVBQWIsRUFBOEIsd0JBQTlCO0FBQ0Q7Ozs7RUFuSHVDLGVBQUtDLEk7O2tCQUExQjVELFkiLCJmaWxlIjoid2FudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgemFuTm90aWNlYmFyIGZyb20gJ0AvY29tcG9uZW50cy96YW4tbm90aWNlYmFyJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFdvcmtib29rV2FudCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4iuS8oOS5oOmimOWGjCdcbiAgICB9XG5cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiemFuTm90aWNlYmFyMVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dGV4dC5vbmNlXCI6XCJsb25nVGV4dFwiLFwiY29tcG9uZW50SWRcIjpcInN0YXRpYzFcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgemFuTm90aWNlYmFyMTogemFuTm90aWNlYmFyXG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGltZ3M6IFsnaHR0cDovL2ltZy5ndWluYWJlbi5jb20vd2FudDIucG5nJywgJ2h0dHA6Ly9pbWcuZ3VpbmFiZW4uY29tL3dhbnQxLmpwZyddLFxuICAgICAgbG9uZ1RleHQ6ICfor7fmjInnpLrkvovkuIrkvKDkuaDpopjlhozlsIHpnaLlkozniYjljbDmrKHvvIzmiJHku6zlsIblsL3lv6vkuIrmnrbor6XkuaDpopjlhozvvIzor7fms6jmhI/mn6XnnIvmtojmga/pgJrnn6V+JyxcbiAgICAgIGZpcnN0OiBbXSxcbiAgICAgIGxhc3Q6IFtdXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIC8qKiDmn6XnnIvlpKflm74gKi9cbiAgICAgIF9wcmV2aWV3ICh0eXBlKSB7XG4gICAgICAgIGlmICh0eXBlID09PSAnZmlyc3QnKSB7XG4gICAgICAgICAgd2VweS5wcmV2aWV3SW1hZ2Uoe2N1cnJlbnQ6IGBodHRwOi8vaW1nLmd1aW5hYmVuLmNvbS93YW50Mi5wbmdgLCB1cmxzOiB0aGlzLmltZ3N9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdlcHkucHJldmlld0ltYWdlKHtjdXJyZW50OiBgaHR0cDovL2ltZy5ndWluYWJlbi5jb20vd2FudDEuanBnYCwgdXJsczogdGhpcy5pbWdzfSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIOeCueWHu+mAieaLqeaMiemSrlxuICAgICAgX2Nob29zZUltYWdlICh0eXBlKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICB3ZXB5LmNob29zZUltYWdlKHtcbiAgICAgICAgICBzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sXG4gICAgICAgICAgc291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSxcbiAgICAgICAgICBjb3VudDogMSxcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnZmlyc3QnKSB7XG4gICAgICAgICAgICAgIHNlbGYuX3VwbG9hZEZpbGUocmVzLnRlbXBGaWxlUGF0aHNbMF0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYuZmlyc3RbMF0gPSByZXNcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNlbGYuX3VwbG9hZEZpbGUocmVzLnRlbXBGaWxlUGF0aHNbMF0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYubGFzdFswXSA9IHJlc1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICAvLyDkuIrkvKDmjInpkq7nmoTkuovku7ZcbiAgICAgIF91cGxvYWQgKCkge1xuICAgICAgICBpZiAoIXRoaXMuZmlyc3QubGVuZ3RoICYmICF0aGlzLmxhc3QubGVuZ3RoKSB7XG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgY29udGVudDogJ+ivt+S4iuS8oOato+ehrueahOWwgemdoicsXG4gICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbmZpcm1UZXh0OiAn56Gu5a6aJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fc2V0V2FudCh0aGlzLmZpcnN0WzBdLCB0aGlzLmxhc3RbMF0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiog5LiK5Lyg57uD5Lmg5YaM5bCB6Z2iICovXG4gICAgX3VwbG9hZEZpbGUgKGZpbGUpIHtcbiAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe3RpdGxlOiAn6K+356iN5YCZJ30pXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnVwbG9hZEZpbGUoe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vcHJpbWFyeS5ndWluYWJlbi5jb20vdXBsb2FkL2ltZycsXG4gICAgICAgICAgZmlsZVBhdGg6IGZpbGUsXG4gICAgICAgICAgbmFtZTogJ2ZpbGUnLFxuICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgJ29wZW5JZCc6IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ29wZW5JZCcpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmb3JtRGF0YToge1xuICAgICAgICAgICAgJ3R5cGUnOiAnd2FudHdvcmtib29rJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcbiAgICAgICAgICAgIHJlc29sdmUocmVzLnVybClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbXBsZXRlICgpIHtcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqIOiOt+WPlueroOiKguaVsOaNriAqL1xuICAgIF9zZXRXYW50IChmaXJzdCwgbGFzdCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL3ByaW1hcnkuZ3VpbmFiZW4uY29tL3dvcmtib29rL3dhbnQnLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGZpcnN0OiBmaXJzdCxcbiAgICAgICAgICAgIGxhc3Q6IGxhc3RcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBvblJlYWR5ICgpIHtcbiAgICAgIHRoaXMuJGludm9rZSgnemFuTm90aWNlYmFyMScsICdpbml0WmFuTm90aWNlQmFyU2Nyb2xsJylcbiAgICB9XG4gIH1cbiJdfQ==