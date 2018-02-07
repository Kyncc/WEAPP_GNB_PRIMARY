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
    }, _this.$repeat = {}, _this.$props = { "zanField1": { "xmlns:v-bind": "", "v-bind:options.once": "base_name", "componentId": "zanField1" }, "zanField2": { "v-bind:options.once": "base_sex", "componentId": "zanField2" }, "zanField3": { "v-bind:options.once": "base_school", "componentId": "zanField3" } }, _this.$events = {}, _this.components = {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8uanMiXSwibmFtZXMiOlsiTXlJbmZvIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInphbkZpZWxkMSIsInphbkZpZWxkMiIsInphbkZpZWxkMyIsImRhdGEiLCJncmFkZSIsImJhc2Vfc2Nob29sIiwidGl0bGUiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwiYmFzZV9uYW1lIiwiYmFzZV9zZXgiLCJtZXRob2RzIiwidGV4dGJvb2tDaGFuZ2UiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJnZXRTdG9yYWdlU3luYyIsIm5hbWUiLCJzY2hvb2wiLCJzZXgiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLGFBQVksRUFBQyxnQkFBZSxFQUFoQixFQUFtQix1QkFBc0IsV0FBekMsRUFBcUQsZUFBYyxXQUFuRSxFQUFiLEVBQTZGLGFBQVksRUFBQyx1QkFBc0IsVUFBdkIsRUFBa0MsZUFBYyxXQUFoRCxFQUF6RyxFQUFzSyxhQUFZLEVBQUMsdUJBQXNCLGFBQXZCLEVBQXFDLGVBQWMsV0FBbkQsRUFBbEwsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkMsbUNBRFE7QUFFUkMsbUNBRlE7QUFHUkM7QUFIUSxLLFFBTVZDLEksR0FBTztBQUNMQyxhQUFPLEVBREY7QUFFTEMsbUJBQWE7QUFDWEMsZUFBTyxJQURJO0FBRVhDLGVBQU8sRUFGSTtBQUdYQyxxQkFBYTtBQUhGLE9BRlI7QUFPTEMsaUJBQVc7QUFDVEgsZUFBTyxJQURFO0FBRVRDLGVBQU8sRUFGRTtBQUdUQyxxQkFBYTtBQUhKLE9BUE47QUFZTEUsZ0JBQVU7QUFDUkosZUFBTyxJQURDO0FBRVJDLGVBQU87QUFGQztBQVpMLEssUUFrQlBJLE8sR0FBVTtBQUNSQyxvQkFEUSwwQkFDUUMsRUFEUixFQUNZO0FBQ2xCQyxnQkFBUUMsR0FBUixDQUFZRixFQUFaO0FBQ0Q7QUFITyxLOzs7Ozs2QkFNRDtBQUNQLFdBQUtKLFNBQUwsQ0FBZUYsS0FBZixHQUF1QixlQUFLUyxjQUFMLENBQW9CLE1BQXBCLEVBQTRCQyxJQUFuRDtBQUNBLFdBQUtaLFdBQUwsQ0FBaUJFLEtBQWpCLEdBQXlCLGVBQUtTLGNBQUwsQ0FBb0IsTUFBcEIsRUFBNEJFLE1BQXJEO0FBQ0EsV0FBS2QsS0FBTCxHQUFhLGVBQUtZLGNBQUwsQ0FBb0IsTUFBcEIsRUFBNEJaLEtBQTVCLEdBQW9DLENBQWpEO0FBQ0EsV0FBS00sUUFBTCxDQUFjSCxLQUFkLEdBQXVCLGVBQUtTLGNBQUwsQ0FBb0IsTUFBcEIsRUFBNEJHLEdBQTVCLEtBQW9DLENBQXBDLEdBQXdDLEdBQXhDLEdBQThDLEdBQXJFO0FBQ0EsV0FBS0MsTUFBTDtBQUNEOzs7O0VBNUNpQyxlQUFLQyxJOztrQkFBcEI1QixNIiwiZmlsZSI6ImluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHphbkZpZWxkIGZyb20gJ0AvY29tcG9uZW50cy96YW4tZmllbGQnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlJbmZvIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Liq5Lq66LWE5paZJ1xuICAgIH1cblxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJ6YW5GaWVsZDFcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOm9wdGlvbnMub25jZVwiOlwiYmFzZV9uYW1lXCIsXCJjb21wb25lbnRJZFwiOlwiemFuRmllbGQxXCJ9LFwiemFuRmllbGQyXCI6e1widi1iaW5kOm9wdGlvbnMub25jZVwiOlwiYmFzZV9zZXhcIixcImNvbXBvbmVudElkXCI6XCJ6YW5GaWVsZDJcIn0sXCJ6YW5GaWVsZDNcIjp7XCJ2LWJpbmQ6b3B0aW9ucy5vbmNlXCI6XCJiYXNlX3NjaG9vbFwiLFwiY29tcG9uZW50SWRcIjpcInphbkZpZWxkM1wifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICB6YW5GaWVsZDE6IHphbkZpZWxkLFxuICAgICAgemFuRmllbGQyOiB6YW5GaWVsZCxcbiAgICAgIHphbkZpZWxkMzogemFuRmllbGRcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgZ3JhZGU6ICcnLFxuICAgICAgYmFzZV9zY2hvb2w6IHtcbiAgICAgICAgdGl0bGU6ICflrabmoKEnLFxuICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAn6K+36L6T5YWl5a2m5qCh5ZCN56ewJ1xuICAgICAgfSxcbiAgICAgIGJhc2VfbmFtZToge1xuICAgICAgICB0aXRsZTogJ+Wnk+WQjScsXG4gICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICcnXG4gICAgICB9LFxuICAgICAgYmFzZV9zZXg6IHtcbiAgICAgICAgdGl0bGU6ICfmgKfliKsnLFxuICAgICAgICB2YWx1ZTogJydcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgdGV4dGJvb2tDaGFuZ2UgKGlkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGlkKVxuICAgICAgfVxuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgIHRoaXMuYmFzZV9uYW1lLnZhbHVlID0gd2VweS5nZXRTdG9yYWdlU3luYygnVXNlcicpLm5hbWVcbiAgICAgIHRoaXMuYmFzZV9zY2hvb2wudmFsdWUgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdVc2VyJykuc2Nob29sXG4gICAgICB0aGlzLmdyYWRlID0gd2VweS5nZXRTdG9yYWdlU3luYygnVXNlcicpLmdyYWRlIC0gM1xuICAgICAgdGhpcy5iYXNlX3NleC52YWx1ZSA9ICh3ZXB5LmdldFN0b3JhZ2VTeW5jKCdVc2VyJykuc2V4ID09PSAxID8gJ+eUtycgOiAn5aWzJylcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG4gIH1cbiJdfQ==