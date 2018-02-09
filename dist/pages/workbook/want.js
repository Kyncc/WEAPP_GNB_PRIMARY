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
      imgs: ['http://img.guinaben.com/workbookPic/1108-cover-725711.jpg', 'http://img.guinaben.com/want1.jpg'],
      longText: '请按示例上传习题册封面和版印次，我们将尽快上架该习题册，请注意查看消息通知~',
      first: [],
      last: []
    }, _this.methods = {
      /** 查看大图 */
      _preview: function _preview(type) {
        if (type === 'first') {
          _wepy2.default.previewImage({ current: 'http://img.guinaben.com/workbookPic/1108-cover-725711.jpg', urls: this.imgs });
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
                  _context.next = 8;
                  break;

                case 4:
                  _context.next = 6;
                  return this._setWant(this.first[0], this.last[0]);

                case 6:
                  _wepy2.default.showToast({
                    title: '上传成功',
                    icon: 'success',
                    duration: 2000
                  });
                  setTimeout(function () {
                    _wepy2.default.navigateBack();
                  }, 2000);

                case 8:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhbnQuanMiXSwibmFtZXMiOlsiV29ya2Jvb2tXYW50IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInphbk5vdGljZWJhcjEiLCJkYXRhIiwiaW1ncyIsImxvbmdUZXh0IiwiZmlyc3QiLCJsYXN0IiwibWV0aG9kcyIsIl9wcmV2aWV3IiwidHlwZSIsInByZXZpZXdJbWFnZSIsImN1cnJlbnQiLCJ1cmxzIiwiX2Nob29zZUltYWdlIiwic2VsZiIsImNob29zZUltYWdlIiwic2l6ZVR5cGUiLCJzb3VyY2VUeXBlIiwiY291bnQiLCJzdWNjZXNzIiwicmVzIiwiX3VwbG9hZEZpbGUiLCJ0ZW1wRmlsZVBhdGhzIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCIkYXBwbHkiLCJfdXBsb2FkIiwibGVuZ3RoIiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsImNvbmZpcm1UZXh0IiwiX3NldFdhbnQiLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCJzZXRUaW1lb3V0IiwibmF2aWdhdGVCYWNrIiwiZmlsZSIsInNob3dMb2FkaW5nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ1cGxvYWRGaWxlIiwidXJsIiwiZmlsZVBhdGgiLCJuYW1lIiwiaGVhZGVyIiwiZ2V0U3RvcmFnZVN5bmMiLCJmb3JtRGF0YSIsIkpTT04iLCJwYXJzZSIsImZhaWwiLCJlcnIiLCJjb21wbGV0ZSIsImhpZGVMb2FkaW5nIiwicmVxdWVzdCIsIm1ldGhvZCIsIiRpbnZva2UiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsWTs7Ozs7Ozs7Ozs7Ozs7a01BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsaUJBQWdCLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsb0JBQW1CLFVBQXRDLEVBQWlELGVBQWMsU0FBL0QsRUFBakIsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkM7QUFEUSxLLFFBSVZDLEksR0FBTztBQUNMQyxZQUFNLENBQUMsMkRBQUQsRUFBOEQsbUNBQTlELENBREQ7QUFFTEMsZ0JBQVUsd0NBRkw7QUFHTEMsYUFBTyxFQUhGO0FBSUxDLFlBQU07QUFKRCxLLFFBT1BDLE8sR0FBVTtBQUNSO0FBQ0FDLGNBRlEsb0JBRUVDLElBRkYsRUFFUTtBQUNkLFlBQUlBLFNBQVMsT0FBYixFQUFzQjtBQUNwQix5QkFBS0MsWUFBTCxDQUFrQixFQUFDQyxvRUFBRCxFQUF1RUMsTUFBTSxLQUFLVCxJQUFsRixFQUFsQjtBQUNELFNBRkQsTUFFTztBQUNMLHlCQUFLTyxZQUFMLENBQWtCLEVBQUNDLDRDQUFELEVBQStDQyxNQUFNLEtBQUtULElBQTFELEVBQWxCO0FBQ0Q7QUFDRixPQVJPOztBQVNSO0FBQ0FVLGtCQVZRLHdCQVVNSixJQVZOLEVBVVk7QUFDbEIsWUFBSUssT0FBTyxJQUFYO0FBQ0EsdUJBQUtDLFdBQUwsQ0FBaUI7QUFDZkMsb0JBQVUsQ0FBQyxVQUFELEVBQWEsWUFBYixDQURLO0FBRWZDLHNCQUFZLENBQUMsT0FBRCxFQUFVLFFBQVYsQ0FGRztBQUdmQyxpQkFBTyxDQUhRO0FBSWZDLGlCQUplLG1CQUlOQyxHQUpNLEVBSUQ7QUFDWixnQkFBSVgsU0FBUyxPQUFiLEVBQXNCO0FBQ3BCSyxtQkFBS08sV0FBTCxDQUFpQkQsSUFBSUUsYUFBSixDQUFrQixDQUFsQixDQUFqQixFQUF1Q0MsSUFBdkMsQ0FBNEMsVUFBQ0gsR0FBRCxFQUFTO0FBQ25ESSx3QkFBUUMsR0FBUixDQUFZTCxHQUFaO0FBQ0FOLHFCQUFLVCxLQUFMLENBQVcsQ0FBWCxJQUFnQmUsR0FBaEI7QUFDQU4scUJBQUtZLE1BQUw7QUFDRCxlQUpEO0FBS0QsYUFORCxNQU1PO0FBQ0xaLG1CQUFLTyxXQUFMLENBQWlCRCxJQUFJRSxhQUFKLENBQWtCLENBQWxCLENBQWpCLEVBQXVDQyxJQUF2QyxDQUE0QyxVQUFDSCxHQUFELEVBQVM7QUFDbkRJLHdCQUFRQyxHQUFSLENBQVlMLEdBQVo7QUFDQU4scUJBQUtSLElBQUwsQ0FBVSxDQUFWLElBQWVjLEdBQWY7QUFDQU4scUJBQUtZLE1BQUw7QUFDRCxlQUpEO0FBS0Q7QUFDRjtBQWxCYyxTQUFqQjtBQW9CRCxPQWhDTzs7QUFpQ1I7QUFDTUMsYUFsQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBbUNGLEtBQUt0QixLQUFMLENBQVd1QixNQUFYLEtBQXNCLENBQXRCLElBQTJCLEtBQUt0QixJQUFMLENBQVVzQixNQUFWLEtBQXFCLENBbkM5QztBQUFBO0FBQUE7QUFBQTs7QUFvQ0osaUNBQUtDLFNBQUwsQ0FBZTtBQUNiQywyQkFBTyxJQURNO0FBRWJDLDZCQUFTLFVBRkk7QUFHYkMsZ0NBQVksS0FIQztBQUliQyxpQ0FBYTtBQUpBLG1CQUFmO0FBcENJO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHlCQTJDRSxLQUFLQyxRQUFMLENBQWMsS0FBSzdCLEtBQUwsQ0FBVyxDQUFYLENBQWQsRUFBNkIsS0FBS0MsSUFBTCxDQUFVLENBQVYsQ0FBN0IsQ0EzQ0Y7O0FBQUE7QUE0Q0osaUNBQUs2QixTQUFMLENBQWU7QUFDYkwsMkJBQU8sTUFETTtBQUViTSwwQkFBTSxTQUZPO0FBR2JDLDhCQUFVO0FBSEcsbUJBQWY7QUFLQUMsNkJBQVcsWUFBTTtBQUFFLG1DQUFLQyxZQUFMO0FBQXFCLG1CQUF4QyxFQUEwQyxJQUExQzs7QUFqREk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxLOzs7Ozs7O0FBc0RWO2dDQUNhQyxJLEVBQU07QUFDakIscUJBQUtDLFdBQUwsQ0FBaUIsRUFBQ1gsT0FBTyxLQUFSLEVBQWpCO0FBQ0EsYUFBTyxJQUFJWSxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUsseUNBRFM7QUFFZEMsb0JBQVVQLElBRkk7QUFHZFEsZ0JBQU0sTUFIUTtBQUlkQyxrQkFBUTtBQUNOLDRCQUFnQixxQkFEVjtBQUVOLHNCQUFVLGVBQUtDLGNBQUwsQ0FBb0IsUUFBcEI7QUFGSixXQUpNO0FBUWRDLG9CQUFVO0FBQ1Isb0JBQVE7QUFEQSxXQVJJO0FBV2RoQyxpQkFYYyxtQkFXTEMsR0FYSyxFQVdBO0FBQ1p1QixvQkFBUVMsS0FBS0MsS0FBTCxDQUFXakMsSUFBSWxCLElBQWYsRUFBcUJBLElBQXJCLENBQTBCNEMsR0FBbEM7QUFDRCxXQWJhO0FBY2RRLGNBZGMsZ0JBY1JDLEdBZFEsRUFjSDtBQUNUL0Isb0JBQVFDLEdBQVIsQ0FBWThCLEdBQVo7QUFDQVgsbUJBQU9XLEdBQVA7QUFDRCxXQWpCYTtBQWtCZEMsa0JBbEJjLHNCQWtCRjtBQUNWLDJCQUFLQyxXQUFMO0FBQ0Q7QUFwQmEsU0FBaEI7QUFzQkQsT0F2Qk0sQ0FBUDtBQXdCRDs7QUFFRDs7Ozs2QkFDVXBELEssRUFBT0MsSSxFQUFNO0FBQ3JCLHFCQUFLbUMsV0FBTCxDQUFpQixFQUFDWCxPQUFPLEtBQVIsRUFBakI7QUFDQSxhQUFPLElBQUlZLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsdUJBQUtjLE9BQUwsQ0FBYTtBQUNYWixlQUFLLDRDQURNO0FBRVhhLGtCQUFRLE1BRkc7QUFHWHpELGdCQUFNO0FBQ0pHLG1CQUFPQSxLQURIO0FBRUpDLGtCQUFNQTtBQUZGLFdBSEs7QUFPWGEsaUJBUFcsbUJBT0ZDLEdBUEUsRUFPRztBQUNadUIsb0JBQVF2QixHQUFSO0FBQ0QsV0FUVTtBQVVYa0MsY0FWVyxnQkFVTEMsR0FWSyxFQVVBO0FBQ1RYLG1CQUFPVyxHQUFQO0FBQ0QsV0FaVTtBQWFYQyxrQkFiVyxzQkFhQztBQUNWLDJCQUFLQyxXQUFMO0FBQ0Q7QUFmVSxTQUFiO0FBaUJELE9BbEJNLENBQVA7QUFtQkQ7Ozs4QkFFVTtBQUNULFdBQUtHLE9BQUwsQ0FBYSxlQUFiLEVBQThCLHdCQUE5QjtBQUNEOzs7O0VBaEl1QyxlQUFLQyxJOztrQkFBMUJuRSxZIiwiZmlsZSI6IndhbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHphbk5vdGljZWJhciBmcm9tICdAL2NvbXBvbmVudHMvemFuLW5vdGljZWJhcidcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JrYm9va1dhbnQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkuIrkvKDkuaDpopjlhownXG4gICAgfVxuXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInphbk5vdGljZWJhcjFcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRleHQub25jZVwiOlwibG9uZ1RleHRcIixcImNvbXBvbmVudElkXCI6XCJzdGF0aWMxXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIHphbk5vdGljZWJhcjE6IHphbk5vdGljZWJhclxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBpbWdzOiBbJ2h0dHA6Ly9pbWcuZ3VpbmFiZW4uY29tL3dvcmtib29rUGljLzExMDgtY292ZXItNzI1NzExLmpwZycsICdodHRwOi8vaW1nLmd1aW5hYmVuLmNvbS93YW50MS5qcGcnXSxcbiAgICAgIGxvbmdUZXh0OiAn6K+35oyJ56S65L6L5LiK5Lyg5Lmg6aKY5YaM5bCB6Z2i5ZKM54mI5Y2w5qyh77yM5oiR5Lus5bCG5bC95b+r5LiK5p626K+l5Lmg6aKY5YaM77yM6K+35rOo5oSP5p+l55yL5raI5oGv6YCa55+lficsXG4gICAgICBmaXJzdDogW10sXG4gICAgICBsYXN0OiBbXVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICAvKiog5p+l55yL5aSn5Zu+ICovXG4gICAgICBfcHJldmlldyAodHlwZSkge1xuICAgICAgICBpZiAodHlwZSA9PT0gJ2ZpcnN0Jykge1xuICAgICAgICAgIHdlcHkucHJldmlld0ltYWdlKHtjdXJyZW50OiBgaHR0cDovL2ltZy5ndWluYWJlbi5jb20vd29ya2Jvb2tQaWMvMTEwOC1jb3Zlci03MjU3MTEuanBnYCwgdXJsczogdGhpcy5pbWdzfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3ZXB5LnByZXZpZXdJbWFnZSh7Y3VycmVudDogYGh0dHA6Ly9pbWcuZ3VpbmFiZW4uY29tL3dhbnQxLmpwZ2AsIHVybHM6IHRoaXMuaW1nc30pXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyDngrnlh7vpgInmi6nmjInpkq5cbiAgICAgIF9jaG9vc2VJbWFnZSAodHlwZSkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgd2VweS5jaG9vc2VJbWFnZSh7XG4gICAgICAgICAgc2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLFxuICAgICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sXG4gICAgICAgICAgY291bnQ6IDEsXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2ZpcnN0Jykge1xuICAgICAgICAgICAgICBzZWxmLl91cGxvYWRGaWxlKHJlcy50ZW1wRmlsZVBhdGhzWzBdKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICAgICAgc2VsZi5maXJzdFswXSA9IHJlc1xuICAgICAgICAgICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNlbGYuX3VwbG9hZEZpbGUocmVzLnRlbXBGaWxlUGF0aHNbMF0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgICAgICBzZWxmLmxhc3RbMF0gPSByZXNcbiAgICAgICAgICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIC8vIOS4iuS8oOaMiemSrueahOS6i+S7tlxuICAgICAgYXN5bmMgX3VwbG9hZCAoKSB7XG4gICAgICAgIGlmICh0aGlzLmZpcnN0Lmxlbmd0aCA9PT0gMCB8fCB0aGlzLmxhc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgY29udGVudDogJ+ivt+S4iuS8oOato+ehrueahOWwgemdoicsXG4gICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbmZpcm1UZXh0OiAn56Gu5a6aJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5fc2V0V2FudCh0aGlzLmZpcnN0WzBdLCB0aGlzLmxhc3RbMF0pXG4gICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICfkuIrkvKDmiJDlip8nLFxuICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcbiAgICAgICAgICB9KVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB3ZXB5Lm5hdmlnYXRlQmFjaygpIH0sIDIwMDApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiog5LiK5Lyg57uD5Lmg5YaM5bCB6Z2iICovXG4gICAgX3VwbG9hZEZpbGUgKGZpbGUpIHtcbiAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe3RpdGxlOiAn6K+356iN5YCZJ30pXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnVwbG9hZEZpbGUoe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vcHJpbWFyeS5ndWluYWJlbi5jb20vdXBsb2FkL2ltZycsXG4gICAgICAgICAgZmlsZVBhdGg6IGZpbGUsXG4gICAgICAgICAgbmFtZTogJ2ZpbGUnLFxuICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcbiAgICAgICAgICAgICdvcGVuSWQnOiB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdvcGVuSWQnKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZm9ybURhdGE6IHtcbiAgICAgICAgICAgICd0eXBlJzogJ3dhbnR3b3JrYm9vaydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHJlcy5kYXRhKS5kYXRhLnVybClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbXBsZXRlICgpIHtcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqIOiOt+WPlueroOiKguaVsOaNriAqL1xuICAgIF9zZXRXYW50IChmaXJzdCwgbGFzdCkge1xuICAgICAgd2VweS5zaG93TG9hZGluZyh7dGl0bGU6ICfor7fnqI3lgJknfSlcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9wcmltYXJ5Lmd1aW5hYmVuLmNvbS93b3JrYm9vay93YW50JyxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBmaXJzdDogZmlyc3QsXG4gICAgICAgICAgICBsYXN0OiBsYXN0XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29tcGxldGUgKCkge1xuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBvblJlYWR5ICgpIHtcbiAgICAgIHRoaXMuJGludm9rZSgnemFuTm90aWNlYmFyMScsICdpbml0WmFuTm90aWNlQmFyU2Nyb2xsJylcbiAgICB9XG4gIH1cbiJdfQ==