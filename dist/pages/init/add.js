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

var InitAddWorkbook = function (_wepy$page) {
  _inherits(InitAddWorkbook, _wepy$page);

  function InitAddWorkbook() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, InitAddWorkbook);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InitAddWorkbook.__proto__ || Object.getPrototypeOf(InitAddWorkbook)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '错题归纳本小学数学'
    }, _this.data = {
      gradeName: '',
      id: ''
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InitAddWorkbook, [{
    key: '_getAllWorkbook',


    // 添加我的练习册
    value: function _getAllWorkbook(id) {
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://primary.guinaben.com/workbook/all',
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
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.gradeName = options.name;
                this.grade = options.grade;
                this.$apply();

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad(_x) {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return InitAddWorkbook;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(InitAddWorkbook , 'pages/init/add'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC5qcyJdLCJuYW1lcyI6WyJJbml0QWRkV29ya2Jvb2siLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImdyYWRlTmFtZSIsImlkIiwibWV0aG9kcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsInVybCIsInRleHRib29rSWQiLCJzdWNjZXNzIiwicmVzIiwiZmFpbCIsImVyciIsIm9wdGlvbnMiLCJuYW1lIiwiZ3JhZGUiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGU7Ozs7Ozs7Ozs7Ozs7O3dNQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxpQkFBVyxFQUROO0FBRUxDLFVBQUk7QUFGQyxLLFFBS1BDLE8sR0FBVSxFOzs7Ozs7O0FBR1Y7b0NBQ2lCRCxFLEVBQUk7QUFDbkIsYUFBTyxJQUFJRSxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLHVCQUFLQyxPQUFMLENBQWE7QUFDWEMsZUFBSywyQ0FETTtBQUVYUixnQkFBTTtBQUNKUyx3QkFBWVA7QUFEUixXQUZLO0FBS1hRLGlCQUxXLG1CQUtGQyxHQUxFLEVBS0c7QUFDWk4sb0JBQVFNLEdBQVI7QUFDRCxXQVBVO0FBUVhDLGNBUlcsZ0JBUUxDLEdBUkssRUFRQTtBQUNUUCxtQkFBT08sR0FBUDtBQUNEO0FBVlUsU0FBYjtBQVlELE9BYk0sQ0FBUDtBQWNEOzs7OzJGQUVZQyxPOzs7OztBQUNYLHFCQUFLYixTQUFMLEdBQWlCYSxRQUFRQyxJQUF6QjtBQUNBLHFCQUFLQyxLQUFMLEdBQWFGLFFBQVFFLEtBQXJCO0FBQ0EscUJBQUtDLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFsQ3lDLGVBQUtDLEk7O2tCQUE3QnJCLGUiLCJmaWxlIjoiYWRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5pdEFkZFdvcmtib29rIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6ZSZ6aKY5b2S57qz5pys5bCP5a2m5pWw5a2mJ1xuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBncmFkZU5hbWU6ICcnLFxuICAgICAgaWQ6ICcnXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICB9XG5cbiAgICAvLyDmt7vliqDmiJHnmoTnu4PkuaDlhoxcbiAgICBfZ2V0QWxsV29ya2Jvb2sgKGlkKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vcHJpbWFyeS5ndWluYWJlbi5jb20vd29ya2Jvb2svYWxsJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB0ZXh0Ym9va0lkOiBpZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIGFzeW5jIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICB0aGlzLmdyYWRlTmFtZSA9IG9wdGlvbnMubmFtZVxuICAgICAgdGhpcy5ncmFkZSA9IG9wdGlvbnMuZ3JhZGVcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG4gIH1cbiJdfQ==