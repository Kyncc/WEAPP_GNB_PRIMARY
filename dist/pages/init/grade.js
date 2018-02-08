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
          var name, textbookId;
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
                  // 获取当前年级的教材
                  textbookId = _wepy2.default.getStorageSync('User').textbook[Number(grade) - 3].id;

                  _wepy2.default.navigateTo({ url: '/pages/init/add?grade=' + grade + '&name=' + name + '&textbookId=' + textbookId });

                case 16:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyYWRlLmpzIl0sIm5hbWVzIjpbIkluaXRHcmFkZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibmFtZSIsIm9wZW5JZCIsImhlYWRJbWciLCJzZXgiLCJtZXRob2RzIiwiX2ludG9BZGRXb3JrYm9vayIsImdyYWRlIiwiX3NldFVzZXJJbmZvIiwidGV4dGJvb2tJZCIsImdldFN0b3JhZ2VTeW5jIiwidGV4dGJvb2siLCJOdW1iZXIiLCJpZCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ1c2VyIiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJyZXMiLCJoaWRlTG9hZGluZyIsInNldFN0b3JhZ2VTeW5jIiwiZmFpbCIsImVyciIsInNlbGYiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwibmlja05hbWUiLCJhdmF0YXJVcmwiLCJnZW5kZXIiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxZQUFNLEVBREQ7QUFFTEMsY0FBUSxFQUZIO0FBR0xDLGVBQVMsRUFISjtBQUlMQyxXQUFLOztBQUdQO0FBUE8sSyxRQWtDUEMsTyxHQUFVO0FBQ0ZDLHNCQURFO0FBQUEsNkZBQ2dCQyxLQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUVBLEtBQUtDLFlBQUwsQ0FBa0I7QUFDdEJELDJCQUFPQSxLQURlO0FBRXRCTiwwQkFBTSxLQUFLQSxJQUZXO0FBR3RCQyw0QkFBUSxLQUFLQSxNQUhTO0FBSXRCQyw2QkFBUyxLQUFLQSxPQUpRO0FBS3RCQyx5QkFBSyxLQUFLQTtBQUxZLG1CQUFsQixDQUZBOztBQUFBO0FBU0ZILHNCQVRFLEdBU0ssRUFUTDtBQUFBLGdDQVVFTSxLQVZGO0FBQUEsa0RBV0MsR0FYRCx1QkFZQyxHQVpELHVCQWFDLEdBYkQsd0JBY0MsR0FkRDtBQUFBOztBQUFBO0FBV1FOLHlCQUFPLE9BQVAsQ0FYUjs7QUFBQTtBQVlRQSx5QkFBTyxPQUFQLENBWlI7O0FBQUE7QUFhUUEseUJBQU8sT0FBUCxDQWJSOztBQUFBO0FBY1FBLHlCQUFPLE9BQVAsQ0FkUjs7QUFBQTtBQWdCTjtBQUNJUSw0QkFqQkUsR0FpQlksZUFBS0MsY0FBTCxDQUFvQixNQUFwQixFQUE0QkMsUUFBN0IsQ0FBdUNDLE9BQU9MLEtBQVAsSUFBZ0IsQ0FBdkQsRUFBMERNLEVBakJyRTs7QUFrQk4saUNBQUtDLFVBQUwsQ0FBZ0IsRUFBRUMsZ0NBQThCUixLQUE5QixjQUE0Q04sSUFBNUMsb0JBQStEUSxVQUFqRSxFQUFoQjs7QUFsQk07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxLOzs7OztpQ0ExQklPLEksRUFBTTtBQUNsQixxQkFBS0MsV0FBTCxDQUFpQixFQUFDQyxPQUFPLEtBQVIsRUFBakI7QUFDQSxhQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsdUJBQUtDLE9BQUwsQ0FBYTtBQUNYUCxlQUFLLDhDQURNO0FBRVhRLGtCQUFRLE1BRkc7QUFHWHZCLGdCQUFNO0FBQ0pPLG1CQUFPUyxLQUFLVCxLQURSO0FBRUpOLGtCQUFNZSxLQUFLZixJQUZQO0FBR0pDLG9CQUFRYyxLQUFLZCxNQUhUO0FBSUpDLHFCQUFTYSxLQUFLYixPQUpWO0FBS0pDLGlCQUFLWSxLQUFLWjtBQUxOLFdBSEs7QUFVWG9CLGlCQVZXLG1CQVVGQyxHQVZFLEVBVUc7QUFDWiwyQkFBS0MsV0FBTDtBQUNBLDJCQUFLQyxjQUFMLENBQW9CLE1BQXBCLEVBQTRCRixHQUE1QjtBQUNBTCxvQkFBUUssR0FBUjtBQUNELFdBZFU7QUFlWEcsY0FmVyxnQkFlTEMsR0FmSyxFQWVBO0FBQ1QsMkJBQUtILFdBQUw7QUFDQUwsbUJBQU9RLEdBQVA7QUFDRDtBQWxCVSxTQUFiO0FBb0JELE9BckJNLENBQVA7QUFzQkQ7Ozs2QkF3QlE7QUFDUCxVQUFJQyxPQUFPLElBQVg7QUFDQSxxQkFBS0MsV0FBTCxDQUFpQjtBQUNmUCxlQURlLG1CQUNOQyxHQURNLEVBQ0Q7QUFDWkssZUFBSzdCLElBQUwsR0FBWXdCLElBQUlPLFFBQUosQ0FBYUMsUUFBekI7QUFDQUgsZUFBSzVCLE1BQUwsR0FBY3VCLElBQUlPLFFBQUosQ0FBYTlCLE1BQTNCO0FBQ0E0QixlQUFLM0IsT0FBTCxHQUFlc0IsSUFBSU8sUUFBSixDQUFhRSxTQUE1QjtBQUNBSixlQUFLMUIsR0FBTCxHQUFXcUIsSUFBSU8sUUFBSixDQUFhRyxNQUF4QjtBQUNBTCxlQUFLTSxNQUFMO0FBQ0Q7QUFQYyxPQUFqQjtBQVNEOzs7O0VBeEVvQyxlQUFLQyxJOztrQkFBdkJ4QyxTIiwiZmlsZSI6ImdyYWRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5pdEdyYWRlIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6ZSZ6aKY5b2S57qz5pys5bCP5a2m5pWw5a2mJ1xuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBuYW1lOiAnJyxcbiAgICAgIG9wZW5JZDogJycsXG4gICAgICBoZWFkSW1nOiAnJyxcbiAgICAgIHNleDogJydcbiAgICB9XG5cbiAgICAvKiog6K6+572u55So5oi35L+h5oGvICovXG4gICAgX3NldFVzZXJJbmZvICh1c2VyKSB7XG4gICAgICB3ZXB5LnNob3dMb2FkaW5nKHt0aXRsZTogJ+ivt+eojeWAmSd9KVxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL3ByaW1hcnkuZ3VpbmFiZW4uY29tL21lbWJlci9pbmZvRWRpdCcsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZ3JhZGU6IHVzZXIuZ3JhZGUsXG4gICAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXG4gICAgICAgICAgICBvcGVuSWQ6IHVzZXIub3BlbklkLFxuICAgICAgICAgICAgaGVhZEltZzogdXNlci5oZWFkSW1nLFxuICAgICAgICAgICAgc2V4OiB1c2VyLnNleFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ1VzZXInLCByZXMpXG4gICAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGFzeW5jIF9pbnRvQWRkV29ya2Jvb2sgKGdyYWRlKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuX3NldFVzZXJJbmZvKHtcbiAgICAgICAgICBncmFkZTogZ3JhZGUsXG4gICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgIG9wZW5JZDogdGhpcy5vcGVuSWQsXG4gICAgICAgICAgaGVhZEltZzogdGhpcy5oZWFkSW1nLFxuICAgICAgICAgIHNleDogdGhpcy5zZXhcbiAgICAgICAgfSlcbiAgICAgICAgbGV0IG5hbWUgPSAnJ1xuICAgICAgICBzd2l0Y2ggKGdyYWRlKSB7XG4gICAgICAgICAgY2FzZSAnMyc6IHsgbmFtZSA9ICfkuInlubTnuqfkuIvlhownOyBicmVhayB9XG4gICAgICAgICAgY2FzZSAnNCc6IHsgbmFtZSA9ICflm5vlubTnuqfkuIvlhownOyBicmVhayB9XG4gICAgICAgICAgY2FzZSAnNSc6IHsgbmFtZSA9ICfkupTlubTnuqfkuIvlhownOyBicmVhayB9XG4gICAgICAgICAgY2FzZSAnNic6IHsgbmFtZSA9ICflha3lubTnuqfkuIvlhownOyBicmVhayB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g6I635Y+W5b2T5YmN5bm057qn55qE5pWZ5p2QXG4gICAgICAgIGxldCB0ZXh0Ym9va0lkID0gKHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXInKS50ZXh0Ym9vaylbTnVtYmVyKGdyYWRlKSAtIDNdLmlkXG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7IHVybDogYC9wYWdlcy9pbml0L2FkZD9ncmFkZT0ke2dyYWRlfSZuYW1lPSR7bmFtZX0mdGV4dGJvb2tJZD0ke3RleHRib29rSWR9YCB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgIHNlbGYubmFtZSA9IHJlcy51c2VySW5mby5uaWNrTmFtZVxuICAgICAgICAgIHNlbGYub3BlbklkID0gcmVzLnVzZXJJbmZvLm9wZW5JZFxuICAgICAgICAgIHNlbGYuaGVhZEltZyA9IHJlcy51c2VySW5mby5hdmF0YXJVcmxcbiAgICAgICAgICBzZWxmLnNleCA9IHJlcy51c2VySW5mby5nZW5kZXJcbiAgICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4iXX0=