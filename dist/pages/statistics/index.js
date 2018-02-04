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
      navigationBarTitleText: '错题本'
    }, _this.$repeat = {}, _this.$props = { "gnbTextbookSelect": { "xmlns:v-bind": "", "v-bind:value.sync": "grade", "v-bind:key.sync": "textbook", "xmlns:v-on": "", "v-bind:textbook.once": "textBookList" } }, _this.$events = { "gnbTextbookSelect": { "v-on:event": "textbookChange" } }, _this.components = {
      gnbTextbookSelect: _gnbTextbookSelect2.default
    }, _this.data = {
      textBookList: _wepy2.default.getStorageSync('User').textbook,
      textbook: '',
      grade: '',
      statistics: []
    }, _this.methods = {
      _intoList: function _intoList(item) {
        wx.navigateTo({
          url: '/pages/statistics/list?name=' + item.name + '&id=' + item.chapterId
        });
      },
      textbookChange: function textbookChange(id) {
        this.statistics = this._getStatistics(id);
        this.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Statistics, [{
    key: '_getStatistics',
    value: function _getStatistics(id) {
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://primary.guinaben.com/textbook/statistics',
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
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.grade = _wepy2.default.getStorageSync('User').grade - 3;
                this.textbook = this.textBookList[Number(this.grade)].id;
                _context.next = 4;
                return this._getStatistics(this.textbook);

              case 4:
                this.statistics = _context.sent;

                this.$apply();

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return Statistics;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Statistics , 'pages/statistics/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlN0YXRpc3RpY3MiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZ25iVGV4dGJvb2tTZWxlY3QiLCJkYXRhIiwidGV4dEJvb2tMaXN0IiwiZ2V0U3RvcmFnZVN5bmMiLCJ0ZXh0Ym9vayIsImdyYWRlIiwic3RhdGlzdGljcyIsIm1ldGhvZHMiLCJfaW50b0xpc3QiLCJpdGVtIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwibmFtZSIsImNoYXB0ZXJJZCIsInRleHRib29rQ2hhbmdlIiwiaWQiLCJfZ2V0U3RhdGlzdGljcyIsIiRhcHBseSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsInRleHRib29rSWQiLCJzdWNjZXNzIiwicmVzIiwiZmFpbCIsImVyciIsIk51bWJlciIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxVOzs7Ozs7Ozs7Ozs7Ozs4TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxxQkFBb0IsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixxQkFBb0IsT0FBdkMsRUFBK0MsbUJBQWtCLFVBQWpFLEVBQTRFLGNBQWEsRUFBekYsRUFBNEYsd0JBQXVCLGNBQW5ILEVBQXJCLEUsUUFDVEMsTyxHQUFVLEVBQUMscUJBQW9CLEVBQUMsY0FBYSxnQkFBZCxFQUFyQixFLFFBQ1RDLFUsR0FBYTtBQUNSQztBQURRLEssUUFHVkMsSSxHQUFPO0FBQ0xDLG9CQUFjLGVBQUtDLGNBQUwsQ0FBb0IsTUFBcEIsRUFBNEJDLFFBRHJDO0FBRUxBLGdCQUFVLEVBRkw7QUFHTEMsYUFBTyxFQUhGO0FBSUxDLGtCQUFZO0FBSlAsSyxRQU1QQyxPLEdBQVU7QUFDUkMsZUFEUSxxQkFDR0MsSUFESCxFQUNTO0FBQ2ZDLFdBQUdDLFVBQUgsQ0FBYztBQUNaQyxnREFBb0NILEtBQUtJLElBQXpDLFlBQW9ESixLQUFLSztBQUQ3QyxTQUFkO0FBR0QsT0FMTztBQU1SQyxvQkFOUSwwQkFNUUMsRUFOUixFQU1ZO0FBQ2xCLGFBQUtWLFVBQUwsR0FBa0IsS0FBS1csY0FBTCxDQUFvQkQsRUFBcEIsQ0FBbEI7QUFDQSxhQUFLRSxNQUFMO0FBQ0Q7QUFUTyxLOzs7OzttQ0FXTUYsRSxFQUFJO0FBQ2xCLGFBQU8sSUFBSUcsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Qyx1QkFBS0MsT0FBTCxDQUFhO0FBQ1hWLGVBQUssa0RBRE07QUFFWFgsZ0JBQU07QUFDSnNCLHdCQUFZUDtBQURSLFdBRks7QUFLWFEsaUJBTFcsbUJBS0ZDLEdBTEUsRUFLRztBQUFFTCxvQkFBUUssR0FBUjtBQUFjLFdBTG5CO0FBTVhDLGNBTlcsZ0JBTUxDLEdBTkssRUFNQTtBQUFFTixtQkFBT00sR0FBUDtBQUFhO0FBTmYsU0FBYjtBQVFELE9BVE0sQ0FBUDtBQVVEOzs7Ozs7Ozs7QUFFQyxxQkFBS3RCLEtBQUwsR0FBYSxlQUFLRixjQUFMLENBQW9CLE1BQXBCLEVBQTRCRSxLQUE1QixHQUFvQyxDQUFqRDtBQUNBLHFCQUFLRCxRQUFMLEdBQWdCLEtBQUtGLFlBQUwsQ0FBa0IwQixPQUFPLEtBQUt2QixLQUFaLENBQWxCLEVBQXNDVyxFQUF0RDs7dUJBQ3dCLEtBQUtDLGNBQUwsQ0FBb0IsS0FBS2IsUUFBekIsQzs7O0FBQXhCLHFCQUFLRSxVOztBQUNMLHFCQUFLWSxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBM0NvQyxlQUFLVyxJOztrQkFBeEJwQyxVIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBnbmJUZXh0Ym9va1NlbGVjdCBmcm9tICdAL2NvbXBvbmVudHMvZ25iLXRleHRib29rU2VsZWN0J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRpc3RpY3MgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfplJnpopjmnKwnXG4gICAgfVxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJnbmJUZXh0Ym9va1NlbGVjdFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dmFsdWUuc3luY1wiOlwiZ3JhZGVcIixcInYtYmluZDprZXkuc3luY1wiOlwidGV4dGJvb2tcIixcInhtbG5zOnYtb25cIjpcIlwiLFwidi1iaW5kOnRleHRib29rLm9uY2VcIjpcInRleHRCb29rTGlzdFwifX07XHJcbiRldmVudHMgPSB7XCJnbmJUZXh0Ym9va1NlbGVjdFwiOntcInYtb246ZXZlbnRcIjpcInRleHRib29rQ2hhbmdlXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBnbmJUZXh0Ym9va1NlbGVjdDogZ25iVGV4dGJvb2tTZWxlY3RcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIHRleHRCb29rTGlzdDogd2VweS5nZXRTdG9yYWdlU3luYygnVXNlcicpLnRleHRib29rLFxuICAgICAgdGV4dGJvb2s6ICcnLFxuICAgICAgZ3JhZGU6ICcnLFxuICAgICAgc3RhdGlzdGljczogW11cbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIF9pbnRvTGlzdCAoaXRlbSkge1xuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6IGAvcGFnZXMvc3RhdGlzdGljcy9saXN0P25hbWU9JHtpdGVtLm5hbWV9JmlkPSR7aXRlbS5jaGFwdGVySWR9YFxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIHRleHRib29rQ2hhbmdlIChpZCkge1xuICAgICAgICB0aGlzLnN0YXRpc3RpY3MgPSB0aGlzLl9nZXRTdGF0aXN0aWNzKGlkKVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9XG4gICAgfVxuICAgIF9nZXRTdGF0aXN0aWNzIChpZCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL3ByaW1hcnkuZ3VpbmFiZW4uY29tL3RleHRib29rL3N0YXRpc3RpY3MnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHRleHRib29rSWQ6IGlkXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHsgcmVzb2x2ZShyZXMpIH0sXG4gICAgICAgICAgZmFpbCAoZXJyKSB7IHJlamVjdChlcnIpIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuICAgIGFzeW5jIG9uTG9hZCgpIHtcbiAgICAgIHRoaXMuZ3JhZGUgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdVc2VyJykuZ3JhZGUgLSAzXG4gICAgICB0aGlzLnRleHRib29rID0gdGhpcy50ZXh0Qm9va0xpc3RbTnVtYmVyKHRoaXMuZ3JhZGUpXS5pZFxuICAgICAgdGhpcy5zdGF0aXN0aWNzID0gYXdhaXQgdGhpcy5fZ2V0U3RhdGlzdGljcyh0aGlzLnRleHRib29rKVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cbiAgfVxuIl19