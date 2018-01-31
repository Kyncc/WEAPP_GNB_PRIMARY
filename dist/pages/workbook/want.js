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
      longText: '请按示例上传习题册封面和版印次，我们将尽快上架该习题册，请注意查看消息通知~',
      fitst: '',
      last: ''
    }, _this.methods = {
      _chooseImage: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(type) {
          var res;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _wepy2.default.chooseImage({
                    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                    sourceType: ['album', 'camera'] // 可以指定来源是相册还是相机，默认二者都有
                  });

                case 2:
                  res = _context.sent;

                  if (type === 'first') {
                    this.fitst = res.tempFilePaths[0];
                  } else {
                    this.last = res.tempFilePaths[0];
                  }
                  this.$apply();

                case 5:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function _chooseImage(_x) {
          return _ref2.apply(this, arguments);
        }

        return _chooseImage;
      }(),
      _upload: function _upload() {
        console.log(1);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WorkbookWant, [{
    key: 'onReady',
    value: function onReady() {
      this.$invoke('zanNoticebar1', 'initZanNoticeBarScroll');
    }
  }]);

  return WorkbookWant;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(WorkbookWant , 'pages/workbook/want'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhbnQuanMiXSwibmFtZXMiOlsiV29ya2Jvb2tXYW50IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInphbk5vdGljZWJhcjEiLCJkYXRhIiwibG9uZ1RleHQiLCJmaXRzdCIsImxhc3QiLCJtZXRob2RzIiwiX2Nob29zZUltYWdlIiwidHlwZSIsImNob29zZUltYWdlIiwic2l6ZVR5cGUiLCJzb3VyY2VUeXBlIiwicmVzIiwidGVtcEZpbGVQYXRocyIsIiRhcHBseSIsIl91cGxvYWQiLCJjb25zb2xlIiwibG9nIiwiJGludm9rZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxZOzs7Ozs7Ozs7Ozs7OztrTUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxpQkFBZ0IsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixvQkFBbUIsVUFBdEMsRUFBaUQsZUFBYyxTQUEvRCxFQUFqQixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQztBQURRLEssUUFJVkMsSSxHQUFPO0FBQ0xDLGdCQUFVLHdDQURMO0FBRUxDLGFBQU8sRUFGRjtBQUdMQyxZQUFNO0FBSEQsSyxRQU1QQyxPLEdBQVU7QUFDRkMsa0JBREU7QUFBQSw2RkFDWUMsSUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUVVLGVBQUtDLFdBQUwsQ0FBaUI7QUFDL0JDLDhCQUFVLENBQUMsVUFBRCxFQUFhLFlBQWIsQ0FEcUIsRUFDTztBQUN0Q0MsZ0NBQVksQ0FBQyxPQUFELEVBQVUsUUFBVixDQUZtQixDQUVDO0FBRkQsbUJBQWpCLENBRlY7O0FBQUE7QUFFRkMscUJBRkU7O0FBTU4sc0JBQUlKLFNBQVMsT0FBYixFQUFzQjtBQUNwQix5QkFBS0osS0FBTCxHQUFhUSxJQUFJQyxhQUFKLENBQWtCLENBQWxCLENBQWI7QUFDRCxtQkFGRCxNQUVPO0FBQ0wseUJBQUtSLElBQUwsR0FBWU8sSUFBSUMsYUFBSixDQUFrQixDQUFsQixDQUFaO0FBQ0Q7QUFDRCx1QkFBS0MsTUFBTDs7QUFYTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQWNSQyxhQWRRLHFCQWNHO0FBQ1RDLGdCQUFRQyxHQUFSLENBQVksQ0FBWjtBQUNEO0FBaEJPLEs7Ozs7OzhCQW1CQTtBQUNSLFdBQUtDLE9BQUwsQ0FBYSxlQUFiLEVBQThCLHdCQUE5QjtBQUNEOzs7O0VBdkN1QyxlQUFLQyxJOztrQkFBMUJ6QixZIiwiZmlsZSI6IndhbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHphbk5vdGljZWJhciBmcm9tICdAL2NvbXBvbmVudHMvemFuLW5vdGljZWJhcidcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JrYm9va1dhbnQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkuIrkvKDkuaDpopjlhownXG4gICAgfVxuXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInphbk5vdGljZWJhcjFcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRleHQub25jZVwiOlwibG9uZ1RleHRcIixcImNvbXBvbmVudElkXCI6XCJzdGF0aWMxXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIHphbk5vdGljZWJhcjE6IHphbk5vdGljZWJhclxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBsb25nVGV4dDogJ+ivt+aMieekuuS+i+S4iuS8oOS5oOmimOWGjOWwgemdouWSjOeJiOWNsOasoe+8jOaIkeS7rOWwhuWwveW/q+S4iuaetuivpeS5oOmimOWGjO+8jOivt+azqOaEj+afpeeci+a2iOaBr+mAmuefpX4nLFxuICAgICAgZml0c3Q6ICcnLFxuICAgICAgbGFzdDogJydcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgYXN5bmMgX2Nob29zZUltYWdlICh0eXBlKSB7XG4gICAgICAgIGxldCByZXMgPSBhd2FpdCB3ZXB5LmNob29zZUltYWdlKHtcbiAgICAgICAgICBzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sIC8vIOWPr+S7peaMh+WumuaYr+WOn+Wbvui/mOaYr+WOi+e8qeWbvu+8jOm7mOiupOS6jOiAhemDveaciVxuICAgICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10gLy8g5Y+v5Lul5oyH5a6a5p2l5rqQ5piv55u45YaM6L+Y5piv55u45py677yM6buY6K6k5LqM6ICF6YO95pyJXG4gICAgICAgIH0pXG4gICAgICAgIGlmICh0eXBlID09PSAnZmlyc3QnKSB7XG4gICAgICAgICAgdGhpcy5maXRzdCA9IHJlcy50ZW1wRmlsZVBhdGhzWzBdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5sYXN0ID0gcmVzLnRlbXBGaWxlUGF0aHNbMF1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9LFxuXG4gICAgICBfdXBsb2FkICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coMSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvblJlYWR5KCkge1xuICAgICAgdGhpcy4kaW52b2tlKCd6YW5Ob3RpY2ViYXIxJywgJ2luaXRaYW5Ob3RpY2VCYXJTY3JvbGwnKVxuICAgIH1cbiAgfVxuIl19