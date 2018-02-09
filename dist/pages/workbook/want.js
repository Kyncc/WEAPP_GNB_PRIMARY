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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhbnQuanMiXSwibmFtZXMiOlsiV29ya2Jvb2tXYW50IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInphbk5vdGljZWJhcjEiLCJkYXRhIiwiaW1ncyIsImxvbmdUZXh0IiwiZmlyc3QiLCJsYXN0IiwibWV0aG9kcyIsIl9wcmV2aWV3IiwidHlwZSIsInByZXZpZXdJbWFnZSIsImN1cnJlbnQiLCJ1cmxzIiwiX2Nob29zZUltYWdlIiwic2VsZiIsImNob29zZUltYWdlIiwic2l6ZVR5cGUiLCJzb3VyY2VUeXBlIiwiY291bnQiLCJzdWNjZXNzIiwicmVzIiwiX3VwbG9hZEZpbGUiLCJ0ZW1wRmlsZVBhdGhzIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCIkYXBwbHkiLCJfdXBsb2FkIiwibGVuZ3RoIiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsImNvbmZpcm1UZXh0IiwiX3NldFdhbnQiLCJmaWxlIiwic2hvd0xvYWRpbmciLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInVwbG9hZEZpbGUiLCJ1cmwiLCJmaWxlUGF0aCIsIm5hbWUiLCJoZWFkZXIiLCJnZXRTdG9yYWdlU3luYyIsImZvcm1EYXRhIiwiSlNPTiIsInBhcnNlIiwiZmFpbCIsImVyciIsImNvbXBsZXRlIiwiaGlkZUxvYWRpbmciLCJyZXF1ZXN0IiwibWV0aG9kIiwiJGludm9rZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsWTs7Ozs7Ozs7Ozs7Ozs7a01BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsaUJBQWdCLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsb0JBQW1CLFVBQXRDLEVBQWlELGVBQWMsU0FBL0QsRUFBakIs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UkMsR0FkUSxFQWNIO0FBQ1QxQixvQkFBUUMsR0FBUixDQUFZeUIsR0FBWjtBQUNBWCxtQkFBT1csR0FBUDtBQUNELFdBakJhO0FBa0JkQyxrQkFsQmMsc0JBa0JGO0FBQ1YsMkJBQUtDLFdBQUw7QUFDRDtBQXBCYSxTQUFoQjtBQXNCRCxPQXZCTSxDQUFQO0FBd0JEOztBQUVEOzs7OzZCQUNVL0MsSyxFQUFPQyxJLEVBQU07QUFDckIsYUFBTyxJQUFJK0IsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Qyx1QkFBS2MsT0FBTCxDQUFhO0FBQ1haLGVBQUssNENBRE07QUFFWGEsa0JBQVEsTUFGRztBQUdYcEQsZ0JBQU07QUFDSkcsbUJBQU9BLEtBREg7QUFFSkMsa0JBQU1BO0FBRkYsV0FISztBQU9YYSxpQkFQVyxtQkFPRkMsR0FQRSxFQU9HO0FBQ1prQixvQkFBUWxCLEdBQVI7QUFDRCxXQVRVO0FBVVg2QixjQVZXLGdCQVVMQyxHQVZLLEVBVUE7QUFDVFgsbUJBQU9XLEdBQVA7QUFDRDtBQVpVLFNBQWI7QUFjRCxPQWZNLENBQVA7QUFnQkQ7Ozs4QkFFVTtBQUNULFdBQUtLLE9BQUwsQ0FBYSxlQUFiLEVBQThCLHdCQUE5QjtBQUNEOzs7O0VBdEh1QyxlQUFLQyxJOztrQkFBMUI5RCxZIiwiZmlsZSI6IndhbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHphbk5vdGljZWJhciBmcm9tICdAL2NvbXBvbmVudHMvemFuLW5vdGljZWJhcidcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JrYm9va1dhbnQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkuIrkvKDkuaDpopjlhownXG4gICAgfVxuXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInphbk5vdGljZWJhcjFcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRleHQub25jZVwiOlwibG9uZ1RleHRcIixcImNvbXBvbmVudElkXCI6XCJzdGF0aWMxXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIHphbk5vdGljZWJhcjE6IHphbk5vdGljZWJhclxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBpbWdzOiBbJ2h0dHA6Ly9pbWcuZ3VpbmFiZW4uY29tL3dhbnQyLnBuZycsICdodHRwOi8vaW1nLmd1aW5hYmVuLmNvbS93YW50MS5qcGcnXSxcbiAgICAgIGxvbmdUZXh0OiAn6K+35oyJ56S65L6L5LiK5Lyg5Lmg6aKY5YaM5bCB6Z2i5ZKM54mI5Y2w5qyh77yM5oiR5Lus5bCG5bC95b+r5LiK5p626K+l5Lmg6aKY5YaM77yM6K+35rOo5oSP5p+l55yL5raI5oGv6YCa55+lficsXG4gICAgICBmaXJzdDogW10sXG4gICAgICBsYXN0OiBbXVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICAvKiog5p+l55yL5aSn5Zu+ICovXG4gICAgICBfcHJldmlldyAodHlwZSkge1xuICAgICAgICBpZiAodHlwZSA9PT0gJ2ZpcnN0Jykge1xuICAgICAgICAgIHdlcHkucHJldmlld0ltYWdlKHtjdXJyZW50OiBgaHR0cDovL2ltZy5ndWluYWJlbi5jb20vd2FudDIucG5nYCwgdXJsczogdGhpcy5pbWdzfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3ZXB5LnByZXZpZXdJbWFnZSh7Y3VycmVudDogYGh0dHA6Ly9pbWcuZ3VpbmFiZW4uY29tL3dhbnQxLmpwZ2AsIHVybHM6IHRoaXMuaW1nc30pXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyDngrnlh7vpgInmi6nmjInpkq5cbiAgICAgIF9jaG9vc2VJbWFnZSAodHlwZSkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgd2VweS5jaG9vc2VJbWFnZSh7XG4gICAgICAgICAgc2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLFxuICAgICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sXG4gICAgICAgICAgY291bnQ6IDEsXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2ZpcnN0Jykge1xuICAgICAgICAgICAgICBzZWxmLl91cGxvYWRGaWxlKHJlcy50ZW1wRmlsZVBhdGhzWzBdKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICAgICAgc2VsZi5maXJzdFswXSA9IHJlc1xuICAgICAgICAgICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNlbGYuX3VwbG9hZEZpbGUocmVzLnRlbXBGaWxlUGF0aHNbMF0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgICAgICBzZWxmLmxhc3RbMF0gPSByZXNcbiAgICAgICAgICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIC8vIOS4iuS8oOaMiemSrueahOS6i+S7tlxuICAgICAgX3VwbG9hZCAoKSB7XG4gICAgICAgIGlmICh0aGlzLmZpcnN0Lmxlbmd0aCA9PT0gMCB8fCB0aGlzLmxhc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgY29udGVudDogJ+ivt+S4iuS8oOato+ehrueahOWwgemdoicsXG4gICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbmZpcm1UZXh0OiAn56Gu5a6aJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fc2V0V2FudCh0aGlzLmZpcnN0WzBdLCB0aGlzLmxhc3RbMF0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiog5LiK5Lyg57uD5Lmg5YaM5bCB6Z2iICovXG4gICAgX3VwbG9hZEZpbGUgKGZpbGUpIHtcbiAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe3RpdGxlOiAn6K+356iN5YCZJ30pXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnVwbG9hZEZpbGUoe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vcHJpbWFyeS5ndWluYWJlbi5jb20vdXBsb2FkL2ltZycsXG4gICAgICAgICAgZmlsZVBhdGg6IGZpbGUsXG4gICAgICAgICAgbmFtZTogJ2ZpbGUnLFxuICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcbiAgICAgICAgICAgICdvcGVuSWQnOiB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdvcGVuSWQnKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZm9ybURhdGE6IHtcbiAgICAgICAgICAgICd0eXBlJzogJ3dhbnR3b3JrYm9vaydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHJlcy5kYXRhKS5kYXRhLnVybClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbXBsZXRlICgpIHtcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqIOiOt+WPlueroOiKguaVsOaNriAqL1xuICAgIF9zZXRXYW50IChmaXJzdCwgbGFzdCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL3ByaW1hcnkuZ3VpbmFiZW4uY29tL3dvcmtib29rL3dhbnQnLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGZpcnN0OiBmaXJzdCxcbiAgICAgICAgICAgIGxhc3Q6IGxhc3RcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBvblJlYWR5ICgpIHtcbiAgICAgIHRoaXMuJGludm9rZSgnemFuTm90aWNlYmFyMScsICdpbml0WmFuTm90aWNlQmFyU2Nyb2xsJylcbiAgICB9XG4gIH1cbiJdfQ==