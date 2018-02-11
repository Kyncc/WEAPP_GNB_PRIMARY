'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _zanField = require('./../../components/zan-field.js');

var _zanField2 = _interopRequireDefault(_zanField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var gradeList = ['三年级', '四年级', '五年级'];

var MyInfo = function (_wepy$page) {
  _inherits(MyInfo, _wepy$page);

  function MyInfo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MyInfo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MyInfo.__proto__ || Object.getPrototypeOf(MyInfo)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '个人资料'
    }, _this.$repeat = {}, _this.$props = { "nameField": { "xmlns:v-bind": "", "v-bind:options.sync": "base_name", "componentId": "nameField" }, "sexField": { "v-bind:options.once": "base_sex", "componentId": "sexField" }, "schoolField": { "v-bind:options.sync": "base_school", "componentId": "schoolField" } }, _this.$events = {}, _this.components = {
      nameField: _zanField2.default,
      sexField: _zanField2.default,
      schoolField: _zanField2.default
    }, _this.data = {
      gradeIndex: Number(_wepy2.default.getStorageSync('User').grade) - 3,
      gradeList: gradeList,
      base_school: {
        title: '学校',
        value: _wepy2.default.getStorageSync('User').school,
        placeholder: '请输入您的学校名称'
      },
      base_name: {
        title: '姓名',
        value: _wepy2.default.getStorageSync('User').name,
        placeholder: '请输入您的姓名'
      },
      base_sex: {
        title: '性别',
        value: Number(_wepy2.default.getStorageSync('User').sex) === 1 ? '男' : '女',
        disabled: true
      }
    }, _this.events = {
      zanFieldChange: function zanFieldChange(e) {
        var componentId = e.componentId,
            detail = e.detail;

        if (componentId === 'nameField') {
          this.base_name.value = detail.value;
        } else if (componentId === 'schoolField') {
          this.base_school.value = detail.value;
        }
        this.$apply();
      }
    }, _this.methods = {
      bindGradeChange: function bindGradeChange(e) {
        this.gradeIndex = e.detail.value;
      },
      _save: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var user;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  user = {
                    grade: Number(this.gradeIndex) + 3,
                    name: this.base_name.value,
                    school: this.base_school.value
                  };
                  _context.next = 3;
                  return this._setUserInfo(user);

                case 3:
                  _wepy2.default.showToast({
                    title: '成功',
                    icon: 'success',
                    duration: 2000,
                    success: function success() {
                      _wepy2.default.navigateBack();
                    }
                  });

                case 4:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function _save() {
          return _ref2.apply(this, arguments);
        }

        return _save;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MyInfo, [{
    key: '_setUserInfo',


    /** 设置用户信息 */
    value: function _setUserInfo(user) {
      _wepy2.default.showLoading({ title: '请稍候' });
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://primary.guinaben.com/member/infoEdit',
          method: 'POST',
          data: {
            grade: user.grade,
            name: user.name,
            school: user.school
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
    key: 'onShow',
    value: function onShow() {
      this.base_name.value = _wepy2.default.getStorageSync('User').name;
      this.base_school.value = _wepy2.default.getStorageSync('User').school;
      this.gradeIndex = Number(_wepy2.default.getStorageSync('User').grade) - 3;
      this.$apply();
    }
  }]);

  return MyInfo;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(MyInfo , 'pages/my/info'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8uanMiXSwibmFtZXMiOlsiZ3JhZGVMaXN0IiwiTXlJbmZvIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIm5hbWVGaWVsZCIsInNleEZpZWxkIiwic2Nob29sRmllbGQiLCJkYXRhIiwiZ3JhZGVJbmRleCIsIk51bWJlciIsImdldFN0b3JhZ2VTeW5jIiwiZ3JhZGUiLCJiYXNlX3NjaG9vbCIsInRpdGxlIiwidmFsdWUiLCJzY2hvb2wiLCJwbGFjZWhvbGRlciIsImJhc2VfbmFtZSIsIm5hbWUiLCJiYXNlX3NleCIsInNleCIsImRpc2FibGVkIiwiZXZlbnRzIiwiemFuRmllbGRDaGFuZ2UiLCJlIiwiY29tcG9uZW50SWQiLCJkZXRhaWwiLCIkYXBwbHkiLCJtZXRob2RzIiwiYmluZEdyYWRlQ2hhbmdlIiwiX3NhdmUiLCJ1c2VyIiwiX3NldFVzZXJJbmZvIiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwic3VjY2VzcyIsIm5hdmlnYXRlQmFjayIsInNob3dMb2FkaW5nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwicmVzIiwiaGlkZUxvYWRpbmciLCJzZXRTdG9yYWdlU3luYyIsImZhaWwiLCJlcnIiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVksQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsQ0FBbEI7O0lBRXFCQyxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxhQUFZLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsdUJBQXNCLFdBQXpDLEVBQXFELGVBQWMsV0FBbkUsRUFBYixFQUE2RixZQUFXLEVB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QUE1QjtBQUNBTCxvQkFBUUssR0FBUjtBQUNELFdBWlU7QUFhWEcsY0FiVyxnQkFhTEMsR0FiSyxFQWFBO0FBQ1QsMkJBQUtILFdBQUw7QUFDQUwsbUJBQU9RLEdBQVA7QUFDRDtBQWhCVSxTQUFiO0FBa0JELE9BbkJNLENBQVA7QUFvQkQ7Ozs2QkFFUztBQUNSLFdBQUtoQyxTQUFMLENBQWVILEtBQWYsR0FBdUIsZUFBS0osY0FBTCxDQUFvQixNQUFwQixFQUE0QlEsSUFBbkQ7QUFDQSxXQUFLTixXQUFMLENBQWlCRSxLQUFqQixHQUF5QixlQUFLSixjQUFMLENBQW9CLE1BQXBCLEVBQTRCSyxNQUFyRDtBQUNBLFdBQUtQLFVBQUwsR0FBa0JDLE9BQU8sZUFBS0MsY0FBTCxDQUFvQixNQUFwQixFQUE0QkMsS0FBbkMsSUFBNEMsQ0FBOUQ7QUFDQSxXQUFLZ0IsTUFBTDtBQUNEOzs7O0VBbEdpQyxlQUFLdUIsSTs7a0JBQXBCckQsTSIsImZpbGUiOiJpbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB6YW5GaWVsZCBmcm9tICdAL2NvbXBvbmVudHMvemFuLWZpZWxkJ1xuXG4gIGNvbnN0IGdyYWRlTGlzdCA9IFsn5LiJ5bm057qnJywgJ+Wbm+W5tOe6pycsICfkupTlubTnuqcnXVxuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE15SW5mbyBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4quS6uui1hOaWmSdcbiAgICB9XG5cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wibmFtZUZpZWxkXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpvcHRpb25zLnN5bmNcIjpcImJhc2VfbmFtZVwiLFwiY29tcG9uZW50SWRcIjpcIm5hbWVGaWVsZFwifSxcInNleEZpZWxkXCI6e1widi1iaW5kOm9wdGlvbnMub25jZVwiOlwiYmFzZV9zZXhcIixcImNvbXBvbmVudElkXCI6XCJzZXhGaWVsZFwifSxcInNjaG9vbEZpZWxkXCI6e1widi1iaW5kOm9wdGlvbnMuc3luY1wiOlwiYmFzZV9zY2hvb2xcIixcImNvbXBvbmVudElkXCI6XCJzY2hvb2xGaWVsZFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBuYW1lRmllbGQ6IHphbkZpZWxkLFxuICAgICAgc2V4RmllbGQ6IHphbkZpZWxkLFxuICAgICAgc2Nob29sRmllbGQ6IHphbkZpZWxkXG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGdyYWRlSW5kZXg6IE51bWJlcih3ZXB5LmdldFN0b3JhZ2VTeW5jKCdVc2VyJykuZ3JhZGUpIC0gMyxcbiAgICAgIGdyYWRlTGlzdDogZ3JhZGVMaXN0LFxuICAgICAgYmFzZV9zY2hvb2w6IHtcbiAgICAgICAgdGl0bGU6ICflrabmoKEnLFxuICAgICAgICB2YWx1ZTogd2VweS5nZXRTdG9yYWdlU3luYygnVXNlcicpLnNjaG9vbCxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICfor7fovpPlhaXmgqjnmoTlrabmoKHlkI3np7AnXG4gICAgICB9LFxuICAgICAgYmFzZV9uYW1lOiB7XG4gICAgICAgIHRpdGxlOiAn5aeT5ZCNJyxcbiAgICAgICAgdmFsdWU6IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXInKS5uYW1lLFxuICAgICAgICBwbGFjZWhvbGRlcjogJ+ivt+i+k+WFpeaCqOeahOWnk+WQjSdcbiAgICAgIH0sXG4gICAgICBiYXNlX3NleDoge1xuICAgICAgICB0aXRsZTogJ+aAp+WIqycsXG4gICAgICAgIHZhbHVlOiAoTnVtYmVyKHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXInKS5zZXgpID09PSAxID8gJ+eUtycgOiAn5aWzJyksXG4gICAgICAgIGRpc2FibGVkOiB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgICAgemFuRmllbGRDaGFuZ2UoZSkge1xuICAgICAgICBsZXQgeyBjb21wb25lbnRJZCwgZGV0YWlsIH0gPSBlXG4gICAgICAgIGlmIChjb21wb25lbnRJZCA9PT0gJ25hbWVGaWVsZCcpIHtcbiAgICAgICAgICB0aGlzLmJhc2VfbmFtZS52YWx1ZSA9IGRldGFpbC52YWx1ZVxuICAgICAgICB9IGVsc2UgaWYgKGNvbXBvbmVudElkID09PSAnc2Nob29sRmllbGQnKSB7XG4gICAgICAgICAgdGhpcy5iYXNlX3NjaG9vbC52YWx1ZSA9IGRldGFpbC52YWx1ZVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgYmluZEdyYWRlQ2hhbmdlIChlKSB7XG4gICAgICAgIHRoaXMuZ3JhZGVJbmRleCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICB9LFxuICAgICAgYXN5bmMgX3NhdmUgKCkge1xuICAgICAgICBsZXQgdXNlciA9IHtcbiAgICAgICAgICBncmFkZTogTnVtYmVyKHRoaXMuZ3JhZGVJbmRleCkgKyAzLFxuICAgICAgICAgIG5hbWU6IHRoaXMuYmFzZV9uYW1lLnZhbHVlLFxuICAgICAgICAgIHNjaG9vbDogdGhpcy5iYXNlX3NjaG9vbC52YWx1ZVxuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHRoaXMuX3NldFVzZXJJbmZvKHVzZXIpXG4gICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICB0aXRsZTogJ+aIkOWKnycsXG4gICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICAgIHN1Y2Nlc3MgKCkge1xuICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiog6K6+572u55So5oi35L+h5oGvICovXG4gICAgX3NldFVzZXJJbmZvICh1c2VyKSB7XG4gICAgICB3ZXB5LnNob3dMb2FkaW5nKHt0aXRsZTogJ+ivt+eojeWAmSd9KVxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL3ByaW1hcnkuZ3VpbmFiZW4uY29tL21lbWJlci9pbmZvRWRpdCcsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZ3JhZGU6IHVzZXIuZ3JhZGUsXG4gICAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXG4gICAgICAgICAgICBzY2hvb2w6IHVzZXIuc2Nob29sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnVXNlcicsIHJlcylcbiAgICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBvblNob3cgKCkge1xuICAgICAgdGhpcy5iYXNlX25hbWUudmFsdWUgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdVc2VyJykubmFtZVxuICAgICAgdGhpcy5iYXNlX3NjaG9vbC52YWx1ZSA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXInKS5zY2hvb2xcbiAgICAgIHRoaXMuZ3JhZGVJbmRleCA9IE51bWJlcih3ZXB5LmdldFN0b3JhZ2VTeW5jKCdVc2VyJykuZ3JhZGUpIC0gM1xuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cbiAgfVxuIl19