'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import zanNoticebar from '@/components/zan-noticebar'

var WorkbookExercise = function (_wepy$page) {
  _inherits(WorkbookExercise, _wepy$page);

  function WorkbookExercise() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, WorkbookExercise);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WorkbookExercise.__proto__ || Object.getPrototypeOf(WorkbookExercise)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.components = {
      // zanNoticebar1: zanNoticebar
    }, _this.data = {
      longText: '点错题题号完成记错，提交作业查看我的错题'
    }, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WorkbookExercise, [{
    key: 'onLoad',
    value: function onLoad(options) {
      wx.setNavigationBarTitle({ title: options.name });
    }
  }, {
    key: 'onReady',
    value: function onReady() {}
  }]);

  return WorkbookExercise;
}(_wepy2.default.page);

exports.default = WorkbookExercise;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4ZXJjaXNlLmpzIl0sIm5hbWVzIjpbIldvcmtib29rRXhlcmNpc2UiLCJjb21wb25lbnRzIiwiZGF0YSIsImxvbmdUZXh0IiwibWV0aG9kcyIsImV2ZW50cyIsIm9wdGlvbnMiLCJ3eCIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInRpdGxlIiwibmFtZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7QUFDQTs7SUFFcUJBLGdCOzs7Ozs7Ozs7Ozs7OzswTUFDbkJDLFUsR0FBYSxFLFFBSWJBLFUsR0FBYTtBQUNYO0FBRFcsSyxRQUliQyxJLEdBQU87QUFDTEMsZ0JBQVU7QUFETCxLLFFBSVBDLE8sR0FBVSxFLFFBUVZDLE0sR0FBUyxFOzs7OzsyQkFKRkMsTyxFQUFTO0FBQ2RDLFNBQUdDLHFCQUFILENBQXlCLEVBQUNDLE9BQU9ILFFBQVFJLElBQWhCLEVBQXpCO0FBQ0Q7Ozs4QkFNUyxDQUVUOzs7O0VBM0IyQyxlQUFLQyxJOztrQkFBOUJYLGdCIiwiZmlsZSI6ImV4ZXJjaXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIC8vIGltcG9ydCB6YW5Ob3RpY2ViYXIgZnJvbSAnQC9jb21wb25lbnRzL3phbi1ub3RpY2ViYXInXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29ya2Jvb2tFeGVyY2lzZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29tcG9uZW50cyA9IHtcblxuICAgIH1cblxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgICAvLyB6YW5Ob3RpY2ViYXIxOiB6YW5Ob3RpY2ViYXJcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgbG9uZ1RleHQ6ICfngrnplJnpopjpopjlj7flrozmiJDorrDplJnvvIzmj5DkuqTkvZzkuJrmn6XnnIvmiJHnmoTplJnpopgnXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcblxuICAgIH1cblxuICAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe3RpdGxlOiBvcHRpb25zLm5hbWV9KVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcblxuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG5cbiAgICB9XG4gIH1cbiJdfQ==