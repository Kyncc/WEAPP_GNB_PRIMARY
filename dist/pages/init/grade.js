'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InitGrade = function (_wepy$page) {
  _inherits(InitGrade, _wepy$page);

  function InitGrade() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, InitGrade);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InitGrade.__proto__ || Object.getPrototypeOf(InitGrade)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '错题归纳本小学数学'
    }, _this.data = {
      name: '',
      openId: '',
      headImg: '',
      sex: ''

      /** 设置用户信息 */
    }, _this.methods = {
      _intoAddWorkbook: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(grade) {
          var name;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this._setUserInfo({
                    grade: grade,
                    name: this.name,
                    openId: this.openId,
                    headImg: this.headImg,
                    sex: this.sex
                  });

                case 2:
                  name = '';
                  // let textbookId = ''

                  _context.t0 = grade;
                  _context.next = _context.t0 === '3' ? 6 : _context.t0 === '4' ? 8 : _context.t0 === '5' ? 10 : _context.t0 === '6' ? 12 : 14;
                  break;

                case 6:
                  name = '三年级下册';return _context.abrupt('break', 14);

                case 8:
                  name = '四年级下册';return _context.abrupt('break', 14);

                case 10:
                  name = '五年级下册';return _context.abrupt('break', 14);

                case 12:
                  name = '六年级下册';return _context.abrupt('break', 14);

                case 14:
                  _wepy2.default.navigateTo({ url: '/pages/init/add?grade=' + grade + '&name=' + name });

                case 15:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function _intoAddWorkbook(_x) {
          return _ref2.apply(this, arguments);
        }

        return _intoAddWorkbook;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InitGrade, [{
    key: '_setUserInfo',
    value: function _setUserInfo(user) {
      _wepy2.default.showLoading({ title: '请稍候' });
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://primary.guinaben.com/member/infoEdit',
          method: 'POST',
          data: {
            grade: user.grade,
            name: user.name,
            openId: user.openId,
            headImg: user.headImg,
            sex: user.sex
          },
          success: function success(res) {
            _wepy2.default.hideLoading();
            _wepy2.default.setStorageSync('User', res);
            resolve(res);
          },
          fail: function fail(err) {
            _wepy2.default.hideLoading();
            reject(err);
          }
        });
      });
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.getUserInfo({
        success: function success(res) {
          self.name = res.userInfo.nickName;
          self.openId = res.userInfo.openId;
          self.headImg = res.userInfo.avatarUrl;
          self.sex = res.userInfo.gender;
          self.$apply();
        }
      });
    }
  }]);

  return InitGrade;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(InitGrade , 'pages/init/grade'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyYWRlLmpzIl0sIm5hbWVzIjpbIkluaXRHcmFkZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibmFtZSIsIm9wZW5JZCIsImhlYWRJbWciLCJzZXgiLCJtZXRob2RzIiwiX2ludG9BZGRXb3JrYm9vayIsImdyYWRlIiwiX3NldFVzZXJJbmZvIiwibmF2aWdhdGVUbyIsInVybCIsInVzZXIiLCJzaG93TG9hZGluZyIsInRpdGxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwibWV0aG9kIiwic3VjY2VzcyIsInJlcyIsImhpZGVMb2FkaW5nIiwic2V0U3RvcmFnZVN5bmMiLCJmYWlsIiwiZXJyIiwic2VsZiIsImdldFVzZXJJbmZvIiwidXNlckluZm8iLCJuaWNrTmFtZSIsImF2YXRhclVybCIsImdlbmRlciIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLFlBQU0sRUFERDtBQUVMQyxjQUFRLEVBRkg7QUFHTEMsZUFBUyxFQUhKO0FBSUxDLFdBQUs7O0FBR1A7QUFQTyxLLFFBa0NQQyxPLEdBQVU7QUFDRkMsc0JBREU7QUFBQSw2RkFDZ0JDLEtBRGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRUEsS0FBS0MsWUFBTCxDQUFrQjtBQUN0QkQsMkJBQU9BLEtBRGU7QUFFdEJOLDBCQUFNLEtBQUtBLElBRlc7QUFHdEJDLDRCQUFRLEtBQUtBLE1BSFM7QUFJdEJDLDZCQUFTLEtBQUtBLE9BSlE7QUFLdEJDLHlCQUFLLEtBQUtBO0FBTFksbUJBQWxCLENBRkE7O0FBQUE7QUFTRkgsc0JBVEUsR0FTSyxFQVRMO0FBVU47O0FBVk0sZ0NBV0VNLEtBWEY7QUFBQSxrREFZQyxHQVpELHVCQWFDLEdBYkQsdUJBY0MsR0FkRCx3QkFlQyxHQWZEO0FBQUE7O0FBQUE7QUFZUU4seUJBQU8sT0FBUCxDQVpSOztBQUFBO0FBYVFBLHlCQUFPLE9BQVAsQ0FiUjs7QUFBQTtBQWNRQSx5QkFBTyxPQUFQLENBZFI7O0FBQUE7QUFlUUEseUJBQU8sT0FBUCxDQWZSOztBQUFBO0FBaUJOLGlDQUFLUSxVQUFMLENBQWdCLEVBQUVDLGdDQUE4QkgsS0FBOUIsY0FBNENOLElBQTlDLEVBQWhCOztBQWpCTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLEs7Ozs7O2lDQTFCSVUsSSxFQUFNO0FBQ2xCLHFCQUFLQyxXQUFMLENBQWlCLEVBQUNDLE9BQU8sS0FBUixFQUFqQjtBQUNBLGFBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Qyx1QkFBS0MsT0FBTCxDQUFhO0FBQ1hQLGVBQUssOENBRE07QUFFWFEsa0JBQVEsTUFGRztBQUdYbEIsZ0JBQU07QUFDSk8sbUJBQU9JLEtBQUtKLEtBRFI7QUFFSk4sa0JBQU1VLEtBQUtWLElBRlA7QUFHSkMsb0JBQVFTLEtBQUtULE1BSFQ7QUFJSkMscUJBQVNRLEtBQUtSLE9BSlY7QUFLSkMsaUJBQUtPLEtBQUtQO0FBTE4sV0FISztBQVVYZSxpQkFWVyxtQkFVRkMsR0FWRSxFQVVHO0FBQ1osMkJBQUtDLFdBQUw7QUFDQSwyQkFBS0MsY0FBTCxDQUFvQixNQUFwQixFQUE0QkYsR0FBNUI7QUFDQUwsb0JBQVFLLEdBQVI7QUFDRCxXQWRVO0FBZVhHLGNBZlcsZ0JBZUxDLEdBZkssRUFlQTtBQUNULDJCQUFLSCxXQUFMO0FBQ0FMLG1CQUFPUSxHQUFQO0FBQ0Q7QUFsQlUsU0FBYjtBQW9CRCxPQXJCTSxDQUFQO0FBc0JEOzs7NkJBdUJRO0FBQ1AsVUFBSUMsT0FBTyxJQUFYO0FBQ0EscUJBQUtDLFdBQUwsQ0FBaUI7QUFDZlAsZUFEZSxtQkFDTkMsR0FETSxFQUNEO0FBQ1pLLGVBQUt4QixJQUFMLEdBQVltQixJQUFJTyxRQUFKLENBQWFDLFFBQXpCO0FBQ0FILGVBQUt2QixNQUFMLEdBQWNrQixJQUFJTyxRQUFKLENBQWF6QixNQUEzQjtBQUNBdUIsZUFBS3RCLE9BQUwsR0FBZWlCLElBQUlPLFFBQUosQ0FBYUUsU0FBNUI7QUFDQUosZUFBS3JCLEdBQUwsR0FBV2dCLElBQUlPLFFBQUosQ0FBYUcsTUFBeEI7QUFDQUwsZUFBS00sTUFBTDtBQUNEO0FBUGMsT0FBakI7QUFTRDs7OztFQXZFb0MsZUFBS0MsSTs7a0JBQXZCbkMsUyIsImZpbGUiOiJncmFkZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluaXRHcmFkZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mUmemimOW9kue6s+acrOWwj+WtpuaVsOWtpidcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgbmFtZTogJycsXG4gICAgICBvcGVuSWQ6ICcnLFxuICAgICAgaGVhZEltZzogJycsXG4gICAgICBzZXg6ICcnXG4gICAgfVxuXG4gICAgLyoqIOiuvue9rueUqOaIt+S/oeaBryAqL1xuICAgIF9zZXRVc2VySW5mbyAodXNlcikge1xuICAgICAgd2VweS5zaG93TG9hZGluZyh7dGl0bGU6ICfor7fnqI3lgJknfSlcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9wcmltYXJ5Lmd1aW5hYmVuLmNvbS9tZW1iZXIvaW5mb0VkaXQnLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGdyYWRlOiB1c2VyLmdyYWRlLFxuICAgICAgICAgICAgbmFtZTogdXNlci5uYW1lLFxuICAgICAgICAgICAgb3BlbklkOiB1c2VyLm9wZW5JZCxcbiAgICAgICAgICAgIGhlYWRJbWc6IHVzZXIuaGVhZEltZyxcbiAgICAgICAgICAgIHNleDogdXNlci5zZXhcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdVc2VyJywgcmVzKVxuICAgICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBhc3luYyBfaW50b0FkZFdvcmtib29rIChncmFkZSkge1xuICAgICAgICBhd2FpdCB0aGlzLl9zZXRVc2VySW5mbyh7XG4gICAgICAgICAgZ3JhZGU6IGdyYWRlLFxuICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICBvcGVuSWQ6IHRoaXMub3BlbklkLFxuICAgICAgICAgIGhlYWRJbWc6IHRoaXMuaGVhZEltZyxcbiAgICAgICAgICBzZXg6IHRoaXMuc2V4XG4gICAgICAgIH0pXG4gICAgICAgIGxldCBuYW1lID0gJydcbiAgICAgICAgLy8gbGV0IHRleHRib29rSWQgPSAnJ1xuICAgICAgICBzd2l0Y2ggKGdyYWRlKSB7XG4gICAgICAgICAgY2FzZSAnMyc6IHsgbmFtZSA9ICfkuInlubTnuqfkuIvlhownOyBicmVhayB9XG4gICAgICAgICAgY2FzZSAnNCc6IHsgbmFtZSA9ICflm5vlubTnuqfkuIvlhownOyBicmVhayB9XG4gICAgICAgICAgY2FzZSAnNSc6IHsgbmFtZSA9ICfkupTlubTnuqfkuIvlhownOyBicmVhayB9XG4gICAgICAgICAgY2FzZSAnNic6IHsgbmFtZSA9ICflha3lubTnuqfkuIvlhownOyBicmVhayB9XG4gICAgICAgIH1cbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHsgdXJsOiBgL3BhZ2VzL2luaXQvYWRkP2dyYWRlPSR7Z3JhZGV9Jm5hbWU9JHtuYW1lfWAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICBzZWxmLm5hbWUgPSByZXMudXNlckluZm8ubmlja05hbWVcbiAgICAgICAgICBzZWxmLm9wZW5JZCA9IHJlcy51c2VySW5mby5vcGVuSWRcbiAgICAgICAgICBzZWxmLmhlYWRJbWcgPSByZXMudXNlckluZm8uYXZhdGFyVXJsXG4gICAgICAgICAgc2VsZi5zZXggPSByZXMudXNlckluZm8uZ2VuZGVyXG4gICAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuIl19