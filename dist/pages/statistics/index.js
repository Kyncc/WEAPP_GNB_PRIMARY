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
    }, _this.$repeat = {}, _this.$props = { "gnbTextbookSelect": { "xmlns:v-bind": "", "v-bind:value.sync": "gradeId", "xmlns:v-on": "" } }, _this.$events = { "gnbTextbookSelect": { "v-on:event": "textbookChange" } }, _this.components = {
      gnbTextbookSelect: _gnbTextbookSelect2.default
    }, _this.data = {
      gradeId: '',
      statistics: []
    }, _this.methods = {
      _intoList: function _intoList(val) {
        wx.navigateTo({
          url: '/pages/statistics/list?name=' + val
        });
      },
      textbookChange: function textbookChange(id) {
        console.log(id);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Statistics, [{
    key: '_getStatistics',
    value: function _getStatistics() {
      var self = this;
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://primary.guinaben.com/workbook/statistics',
          data: {
            grade: self.gradeId
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
                this.gradeId = _wepy2.default.getStorageSync('User').grade - 3;
                _context.next = 3;
                return this._getStatistics();

              case 3:
                this.statistics = _context.sent;

                this.$apply();

              case 5:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlN0YXRpc3RpY3MiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZ25iVGV4dGJvb2tTZWxlY3QiLCJkYXRhIiwiZ3JhZGVJZCIsInN0YXRpc3RpY3MiLCJtZXRob2RzIiwiX2ludG9MaXN0IiwidmFsIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwidGV4dGJvb2tDaGFuZ2UiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJzZWxmIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwiZ3JhZGUiLCJzdWNjZXNzIiwicmVzIiwiZmFpbCIsImVyciIsImdldFN0b3JhZ2VTeW5jIiwiX2dldFN0YXRpc3RpY3MiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMscUJBQW9CLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLFNBQXZDLEVBQWlELGNBQWEsRUFBOUQsRUFBckIsRSxRQUNUQyxPLEdBQVUsRUFBQyxxQkFBb0IsRUFBQyxjQUFhLGdCQUFkLEVBQXJCLEUsUUFDVEMsVSxHQUFhO0FBQ1JDO0FBRFEsSyxRQUdWQyxJLEdBQU87QUFDTEMsZUFBUyxFQURKO0FBRUxDLGtCQUFZO0FBRlAsSyxRQUlQQyxPLEdBQVU7QUFDUkMsZUFEUSxxQkFDR0MsR0FESCxFQUNRO0FBQ2RDLFdBQUdDLFVBQUgsQ0FBYztBQUNaQyxnREFBb0NIO0FBRHhCLFNBQWQ7QUFHRCxPQUxPO0FBTVJJLG9CQU5RLDBCQU1RQyxFQU5SLEVBTVk7QUFDbEJDLGdCQUFRQyxHQUFSLENBQVlGLEVBQVo7QUFDRDtBQVJPLEs7Ozs7O3FDQVVRO0FBQ2hCLFVBQUlHLE9BQU8sSUFBWDtBQUNBLGFBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Qyx1QkFBS0MsT0FBTCxDQUFhO0FBQ1hULGVBQUssa0RBRE07QUFFWFIsZ0JBQU07QUFDSmtCLG1CQUFPTCxLQUFLWjtBQURSLFdBRks7QUFLWGtCLGlCQUxXLG1CQUtGQyxHQUxFLEVBS0c7QUFBRUwsb0JBQVFLLEdBQVI7QUFBYyxXQUxuQjtBQU1YQyxjQU5XLGdCQU1MQyxHQU5LLEVBTUE7QUFBRU4sbUJBQU9NLEdBQVA7QUFBYTtBQU5mLFNBQWI7QUFRRCxPQVRNLENBQVA7QUFVRDs7Ozs7Ozs7O0FBRUMscUJBQUtyQixPQUFMLEdBQWUsZUFBS3NCLGNBQUwsQ0FBb0IsTUFBcEIsRUFBNEJMLEtBQTVCLEdBQW9DLENBQW5EOzt1QkFDd0IsS0FBS00sY0FBTCxFOzs7QUFBeEIscUJBQUt0QixVOztBQUNMLHFCQUFLdUIsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXhDb0MsZUFBS0MsSTs7a0JBQXhCbEMsVSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgZ25iVGV4dGJvb2tTZWxlY3QgZnJvbSAnQC9jb21wb25lbnRzL2duYi10ZXh0Ym9va1NlbGVjdCdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0aXN0aWNzIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6ZSZ6aKY5pysJ1xuICAgIH1cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiZ25iVGV4dGJvb2tTZWxlY3RcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnZhbHVlLnN5bmNcIjpcImdyYWRlSWRcIixcInhtbG5zOnYtb25cIjpcIlwifX07XHJcbiRldmVudHMgPSB7XCJnbmJUZXh0Ym9va1NlbGVjdFwiOntcInYtb246ZXZlbnRcIjpcInRleHRib29rQ2hhbmdlXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBnbmJUZXh0Ym9va1NlbGVjdDogZ25iVGV4dGJvb2tTZWxlY3RcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIGdyYWRlSWQ6ICcnLFxuICAgICAgc3RhdGlzdGljczogW11cbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIF9pbnRvTGlzdCAodmFsKSB7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogYC9wYWdlcy9zdGF0aXN0aWNzL2xpc3Q/bmFtZT0ke3ZhbH1gXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgdGV4dGJvb2tDaGFuZ2UgKGlkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGlkKVxuICAgICAgfVxuICAgIH1cbiAgICBfZ2V0U3RhdGlzdGljcyAoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9wcmltYXJ5Lmd1aW5hYmVuLmNvbS93b3JrYm9vay9zdGF0aXN0aWNzJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBncmFkZTogc2VsZi5ncmFkZUlkXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHsgcmVzb2x2ZShyZXMpIH0sXG4gICAgICAgICAgZmFpbCAoZXJyKSB7IHJlamVjdChlcnIpIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuICAgIGFzeW5jIG9uTG9hZCgpIHtcbiAgICAgIHRoaXMuZ3JhZGVJZCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXInKS5ncmFkZSAtIDNcbiAgICAgIHRoaXMuc3RhdGlzdGljcyA9IGF3YWl0IHRoaXMuX2dldFN0YXRpc3RpY3MoKVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cbiAgfVxuIl19