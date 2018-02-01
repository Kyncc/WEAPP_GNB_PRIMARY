'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _zanField = require('./../../components/zan-field.js');

var _zanField2 = _interopRequireDefault(_zanField);

var _gnbTextbookSelect = require('./../../components/gnb-textbookSelect.js');

var _gnbTextbookSelect2 = _interopRequireDefault(_gnbTextbookSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
    }, _this.$repeat = {}, _this.$props = { "gnbTextbookSelect": { "v-bind:value.sync": "grade", "xmlns:v-on": "" }, "zanField1": { "xmlns:v-bind": "", "v-bind:options.once": "base_name", "componentId": "zanField1" }, "zanField2": { "v-bind:options.once": "base_sex", "componentId": "zanField2" }, "zanField3": { "v-bind:options.once": "base_school", "componentId": "zanField3" } }, _this.$events = { "gnbTextbookSelect": { "v-on:event": "textbookChange" } }, _this.components = {
      gnbTextbookSelect: _gnbTextbookSelect2.default,
      zanField1: _zanField2.default,
      zanField2: _zanField2.default,
      zanField3: _zanField2.default
    }, _this.data = {
      grade: '',
      base_school: {
        title: '学校',
        value: '',
        placeholder: '请输入学校名称'
      },
      base_name: {
        title: '姓名',
        value: '',
        placeholder: ''
      },
      base_sex: {
        title: '性别',
        value: ''
      }
    }, _this.methods = {
      textbookChange: function textbookChange(id) {
        console.log(id);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MyInfo, [{
    key: 'onLoad',
    value: function onLoad() {
      this.base_name.value = _wepy2.default.getStorageSync('User').name;
      this.base_school.value = _wepy2.default.getStorageSync('User').school;
      this.grade = _wepy2.default.getStorageSync('User').grade - 3;
      this.base_sex.value = _wepy2.default.getStorageSync('User').sex === 1 ? '男' : '女';
      this.$apply();
    }
  }]);

  return MyInfo;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(MyInfo , 'pages/my/info'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8uanMiXSwibmFtZXMiOlsiTXlJbmZvIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImduYlRleHRib29rU2VsZWN0IiwiemFuRmllbGQxIiwiemFuRmllbGQyIiwiemFuRmllbGQzIiwiZGF0YSIsImdyYWRlIiwiYmFzZV9zY2hvb2wiLCJ0aXRsZSIsInZhbHVlIiwicGxhY2Vob2xkZXIiLCJiYXNlX25hbWUiLCJiYXNlX3NleCIsIm1ldGhvZHMiLCJ0ZXh0Ym9va0NoYW5nZSIsImlkIiwiY29uc29sZSIsImxvZyIsImdldFN0b3JhZ2VTeW5jIiwibmFtZSIsInNjaG9vbCIsInNleCIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxxQkFBb0IsRUFBQyxxQkFBb0IsT0FBckIsRUFBNkIsY0FBYSxFQUExQyxFQUFyQixFQUFtRSxhQUFZLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsdUJBQXNCLFdBQXpDLEVBQXFELGVBQWMsV0FBbkUsRUFBL0UsRUFBK0osYUFBWSxFQUFDLHVCQUFzQixVQUF2QixFQUFrQyxlQUFjLFdBQWhELEVBQTNLLEVBQXdPLGFBQVksRUFBQyx1QkFBc0IsYUFBdkIsRUFBcUMsZUFBYyxXQUFuRCxFQUFwUCxFLFFBQ1RDLE8sR0FBVSxFQUFDLHFCQUFvQixFQUFDLGNBQWEsZ0JBQWQsRUFBckIsRSxRQUNUQyxVLEdBQWE7QUFDUkMsb0RBRFE7QUFFUkMsbUNBRlE7QUFHUkMsbUNBSFE7QUFJUkM7QUFKUSxLLFFBT1ZDLEksR0FBTztBQUNMQyxhQUFPLEVBREY7QUFFTEMsbUJBQWE7QUFDWEMsZUFBTyxJQURJO0FBRVhDLGVBQU8sRUFGSTtBQUdYQyxxQkFBYTtBQUhGLE9BRlI7QUFPTEMsaUJBQVc7QUFDVEgsZUFBTyxJQURFO0FBRVRDLGVBQU8sRUFGRTtBQUdUQyxxQkFBYTtBQUhKLE9BUE47QUFZTEUsZ0JBQVU7QUFDUkosZUFBTyxJQURDO0FBRVJDLGVBQU87QUFGQztBQVpMLEssUUFrQlBJLE8sR0FBVTtBQUNSQyxvQkFEUSwwQkFDUUMsRUFEUixFQUNZO0FBQ2xCQyxnQkFBUUMsR0FBUixDQUFZRixFQUFaO0FBQ0Q7QUFITyxLOzs7Ozs2QkFNRDtBQUNQLFdBQUtKLFNBQUwsQ0FBZUYsS0FBZixHQUF1QixlQUFLUyxjQUFMLENBQW9CLE1BQXBCLEVBQTRCQyxJQUFuRDtBQUNBLFdBQUtaLFdBQUwsQ0FBaUJFLEtBQWpCLEdBQXlCLGVBQUtTLGNBQUwsQ0FBb0IsTUFBcEIsRUFBNEJFLE1BQXJEO0FBQ0EsV0FBS2QsS0FBTCxHQUFhLGVBQUtZLGNBQUwsQ0FBb0IsTUFBcEIsRUFBNEJaLEtBQTVCLEdBQW9DLENBQWpEO0FBQ0EsV0FBS00sUUFBTCxDQUFjSCxLQUFkLEdBQXVCLGVBQUtTLGNBQUwsQ0FBb0IsTUFBcEIsRUFBNEJHLEdBQTVCLEtBQW9DLENBQXBDLEdBQXdDLEdBQXhDLEdBQThDLEdBQXJFO0FBQ0EsV0FBS0MsTUFBTDtBQUNEOzs7O0VBN0NpQyxlQUFLQyxJOztrQkFBcEI3QixNIiwiZmlsZSI6ImluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHphbkZpZWxkIGZyb20gJ0AvY29tcG9uZW50cy96YW4tZmllbGQnXG4gIGltcG9ydCBnbmJUZXh0Ym9va1NlbGVjdCBmcm9tICdAL2NvbXBvbmVudHMvZ25iLXRleHRib29rU2VsZWN0J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE15SW5mbyBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4quS6uui1hOaWmSdcbiAgICB9XG5cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiZ25iVGV4dGJvb2tTZWxlY3RcIjp7XCJ2LWJpbmQ6dmFsdWUuc3luY1wiOlwiZ3JhZGVcIixcInhtbG5zOnYtb25cIjpcIlwifSxcInphbkZpZWxkMVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6b3B0aW9ucy5vbmNlXCI6XCJiYXNlX25hbWVcIixcImNvbXBvbmVudElkXCI6XCJ6YW5GaWVsZDFcIn0sXCJ6YW5GaWVsZDJcIjp7XCJ2LWJpbmQ6b3B0aW9ucy5vbmNlXCI6XCJiYXNlX3NleFwiLFwiY29tcG9uZW50SWRcIjpcInphbkZpZWxkMlwifSxcInphbkZpZWxkM1wiOntcInYtYmluZDpvcHRpb25zLm9uY2VcIjpcImJhc2Vfc2Nob29sXCIsXCJjb21wb25lbnRJZFwiOlwiemFuRmllbGQzXCJ9fTtcclxuJGV2ZW50cyA9IHtcImduYlRleHRib29rU2VsZWN0XCI6e1widi1vbjpldmVudFwiOlwidGV4dGJvb2tDaGFuZ2VcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIGduYlRleHRib29rU2VsZWN0OiBnbmJUZXh0Ym9va1NlbGVjdCxcbiAgICAgIHphbkZpZWxkMTogemFuRmllbGQsXG4gICAgICB6YW5GaWVsZDI6IHphbkZpZWxkLFxuICAgICAgemFuRmllbGQzOiB6YW5GaWVsZFxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBncmFkZTogJycsXG4gICAgICBiYXNlX3NjaG9vbDoge1xuICAgICAgICB0aXRsZTogJ+WtpuagoScsXG4gICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICfor7fovpPlhaXlrabmoKHlkI3np7AnXG4gICAgICB9LFxuICAgICAgYmFzZV9uYW1lOiB7XG4gICAgICAgIHRpdGxlOiAn5aeT5ZCNJyxcbiAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICBwbGFjZWhvbGRlcjogJydcbiAgICAgIH0sXG4gICAgICBiYXNlX3NleDoge1xuICAgICAgICB0aXRsZTogJ+aAp+WIqycsXG4gICAgICAgIHZhbHVlOiAnJ1xuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICB0ZXh0Ym9va0NoYW5nZSAoaWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coaWQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgdGhpcy5iYXNlX25hbWUudmFsdWUgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdVc2VyJykubmFtZVxuICAgICAgdGhpcy5iYXNlX3NjaG9vbC52YWx1ZSA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXInKS5zY2hvb2xcbiAgICAgIHRoaXMuZ3JhZGUgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdVc2VyJykuZ3JhZGUgLSAzXG4gICAgICB0aGlzLmJhc2Vfc2V4LnZhbHVlID0gKHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXInKS5zZXggPT09IDEgPyAn55S3JyA6ICflpbMnKVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cbiAgfVxuIl19