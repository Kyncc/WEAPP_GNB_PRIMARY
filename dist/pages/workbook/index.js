'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _gnbTextbookSelect = require('./../../components/gnb-textbookSelect.js');

var _gnbTextbookSelect2 = _interopRequireDefault(_gnbTextbookSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Statistics = function (_wepy$page) {
  _inherits(Statistics, _wepy$page);

  function Statistics() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Statistics);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Statistics.__proto__ || Object.getPrototypeOf(Statistics)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '错题归纳本小学数学'
    }, _this.$repeat = {}, _this.$props = { "gnbTextbookSelect": { "xmlns:v-bind": "", "v-bind:value.sync": "grade", "v-bind:key.sync": "textbook", "xmlns:v-on": "", "v-bind:textbook.sync": "textBookList" } }, _this.$events = { "gnbTextbookSelect": { "v-on:event": "textbookChange" } }, _this.components = {
      gnbTextbookSelect: _gnbTextbookSelect2.default
    }, _this.data = {
      textBookList: [],
      textbook: '',
      grade: '',
      workbookList: []
    }, _this.methods = {
      /** 教材切换 */
      textbookChange: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this._getMyWorkbook(id);

                case 2:
                  this.workbookList = _context.sent;

                  this.$apply();

                case 4:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function textbookChange(_x) {
          return _ref2.apply(this, arguments);
        }

        return textbookChange;
      }(),

      /** 增加习题册 */
      _initAdd: function _initAdd() {
        _wepy2.default.navigateTo({
          url: '/pages/workbook/add?id=' + this.textbook
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Statistics, [{
    key: '_getMyWorkbook',

    // 获取我的练习册
    value: function _getMyWorkbook(id) {
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://primary.guinaben.com/workbook',
          data: {
            textbookId: id
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
    value: function onLoad() {
      this.grade = _wepy2.default.getStorageSync('User').grade - 3;
      this.textBookList = _wepy2.default.getStorageSync('User').textbook;
      this.textbook = this.textBookList[Number(this.grade)].id;
      this.$apply();
    }
  }, {
    key: 'onShow',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this._getMyWorkbook(this.textbook);

              case 2:
                this.workbookList = _context2.sent;

                this.$apply();

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onShow() {
        return _ref3.apply(this, arguments);
      }

      return onShow;
    }()
  }]);

  return Statistics;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Statistics , 'pages/workbook/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlN0YXRpc3RpY3MiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZ25iVGV4dGJvb2tTZWxlY3QiLCJkYXRhIiwidGV4dEJvb2tMaXN0IiwidGV4dGJvb2siLCJncmFkZSIsIndvcmtib29rTGlzdCIsIm1ldGhvZHMiLCJ0ZXh0Ym9va0NoYW5nZSIsImlkIiwiX2dldE15V29ya2Jvb2siLCIkYXBwbHkiLCJfaW5pdEFkZCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJ0ZXh0Ym9va0lkIiwic3VjY2VzcyIsInJlcyIsImZhaWwiLCJlcnIiLCJnZXRTdG9yYWdlU3luYyIsIk51bWJlciIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxVOzs7Ozs7Ozs7Ozs7Ozs4TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlWQyxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyxxQkFBb0IsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixxQkFBb0IsT0FBdkMsRUFBK0MsbUJBQWtCLFVBQWpFLEVBQTRFLGNBQWEsRUFBekYsRUFBNEYsd0JBQXVCLGNBQW5ILEVBQXJCLEUsUUFDVEMsTyxHQUFVLEVBQUMscUJBQW9CLEVBQUMsY0FBYSxnQkFBZCxFQUFyQixFLFFBQ1RDLFUsR0FBYTtBQUNWQztBQURVLEssUUFJWkMsSSxHQUFPO0FBQ0xDLG9CQUFjLEVBRFQ7QUFFTEMsZ0JBQVUsRUFGTDtBQUdMQyxhQUFPLEVBSEY7QUFJTEMsb0JBQWM7QUFKVCxLLFFBT1BDLE8sR0FBVTtBQUNSO0FBQ01DLG9CQUZFO0FBQUEsNkZBRWNDLEVBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBR29CLEtBQUtDLGNBQUwsQ0FBb0JELEVBQXBCLENBSHBCOztBQUFBO0FBR04sdUJBQUtILFlBSEM7O0FBSU4sdUJBQUtLLE1BQUw7O0FBSk07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBTVI7QUFDQUMsY0FQUSxzQkFPSTtBQUNWLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLDJDQUErQixLQUFLVjtBQUR0QixTQUFoQjtBQUdEO0FBWE8sSzs7Ozs7O0FBYVY7bUNBQ2dCSyxFLEVBQUk7QUFDbEIsYUFBTyxJQUFJTSxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLHVCQUFLQyxPQUFMLENBQWE7QUFDWEosZUFBSyx1Q0FETTtBQUVYWixnQkFBTTtBQUNKaUIsd0JBQVlWO0FBRFIsV0FGSztBQUtYVyxpQkFMVyxtQkFLRkMsR0FMRSxFQUtHO0FBQ1pMLG9CQUFRSyxHQUFSO0FBQ0QsV0FQVTtBQVFYQyxjQVJXLGdCQVFMQyxHQVJLLEVBUUE7QUFDVE4sbUJBQU9NLEdBQVA7QUFDRDtBQVZVLFNBQWI7QUFZRCxPQWJNLENBQVA7QUFjRDs7OzZCQUVRO0FBQ1AsV0FBS2xCLEtBQUwsR0FBYSxlQUFLbUIsY0FBTCxDQUFvQixNQUFwQixFQUE0Qm5CLEtBQTVCLEdBQW9DLENBQWpEO0FBQ0EsV0FBS0YsWUFBTCxHQUFvQixlQUFLcUIsY0FBTCxDQUFvQixNQUFwQixFQUE0QnBCLFFBQWhEO0FBQ0EsV0FBS0EsUUFBTCxHQUFnQixLQUFLRCxZQUFMLENBQWtCc0IsT0FBTyxLQUFLcEIsS0FBWixDQUFsQixFQUFzQ0ksRUFBdEQ7QUFDQSxXQUFLRSxNQUFMO0FBQ0Q7Ozs7Ozs7Ozs7dUJBRzJCLEtBQUtELGNBQUwsQ0FBb0IsS0FBS04sUUFBekIsQzs7O0FBQTFCLHFCQUFLRSxZOztBQUNMLHFCQUFLSyxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBM0RvQyxlQUFLZSxJOztrQkFBeEJoQyxVIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IGduYlRleHRib29rU2VsZWN0IGZyb20gJ0AvY29tcG9uZW50cy9nbmItdGV4dGJvb2tTZWxlY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRpc3RpY3MgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mUmemimOW9kue6s+acrOWwj+WtpuaVsOWtpidcbiAgfVxuXG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJnbmJUZXh0Ym9va1NlbGVjdFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dmFsdWUuc3luY1wiOlwiZ3JhZGVcIixcInYtYmluZDprZXkuc3luY1wiOlwidGV4dGJvb2tcIixcInhtbG5zOnYtb25cIjpcIlwiLFwidi1iaW5kOnRleHRib29rLnN5bmNcIjpcInRleHRCb29rTGlzdFwifX07XHJcbiRldmVudHMgPSB7XCJnbmJUZXh0Ym9va1NlbGVjdFwiOntcInYtb246ZXZlbnRcIjpcInRleHRib29rQ2hhbmdlXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgZ25iVGV4dGJvb2tTZWxlY3Q6IGduYlRleHRib29rU2VsZWN0XG4gIH1cblxuICBkYXRhID0ge1xuICAgIHRleHRCb29rTGlzdDogW10sXG4gICAgdGV4dGJvb2s6ICcnLFxuICAgIGdyYWRlOiAnJyxcbiAgICB3b3JrYm9va0xpc3Q6IFtdXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIC8qKiDmlZnmnZDliIfmjaIgKi9cbiAgICBhc3luYyB0ZXh0Ym9va0NoYW5nZSAoaWQpIHtcbiAgICAgIHRoaXMud29ya2Jvb2tMaXN0ID0gYXdhaXQgdGhpcy5fZ2V0TXlXb3JrYm9vayhpZClcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9LFxuICAgIC8qKiDlop7liqDkuaDpopjlhowgKi9cbiAgICBfaW5pdEFkZCAoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvcGFnZXMvd29ya2Jvb2svYWRkP2lkPSR7dGhpcy50ZXh0Ym9va31gXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICAvLyDojrflj5bmiJHnmoTnu4PkuaDlhoxcbiAgX2dldE15V29ya2Jvb2sgKGlkKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHBzOi8vcHJpbWFyeS5ndWluYWJlbi5jb20vd29ya2Jvb2snLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdGV4dGJvb2tJZDogaWRcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLmdyYWRlID0gd2VweS5nZXRTdG9yYWdlU3luYygnVXNlcicpLmdyYWRlIC0gM1xuICAgIHRoaXMudGV4dEJvb2tMaXN0ID0gd2VweS5nZXRTdG9yYWdlU3luYygnVXNlcicpLnRleHRib29rXG4gICAgdGhpcy50ZXh0Ym9vayA9IHRoaXMudGV4dEJvb2tMaXN0W051bWJlcih0aGlzLmdyYWRlKV0uaWRcbiAgICB0aGlzLiRhcHBseSgpXG4gIH1cblxuICBhc3luYyBvblNob3coKSB7XG4gICAgdGhpcy53b3JrYm9va0xpc3QgPSBhd2FpdCB0aGlzLl9nZXRNeVdvcmtib29rKHRoaXMudGV4dGJvb2spXG4gICAgdGhpcy4kYXBwbHkoKVxuICB9XG59XG4iXX0=