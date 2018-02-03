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

var WorkbookAdd = function (_wepy$page) {
  _inherits(WorkbookAdd, _wepy$page);

  function WorkbookAdd() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, WorkbookAdd);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WorkbookAdd.__proto__ || Object.getPrototypeOf(WorkbookAdd)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      workbookList: [],
      inputShowed: false,
      inputVal: '',
      textbookId: ''

      // 添加我的练习册
    }, _this.methods = {
      showInput: function showInput() {
        this.inputShowed = true;
      },
      hideInput: function hideInput() {
        this.inputVal = '';
        this.inputShowed = false;
      },
      clearInput: function clearInput() {
        this.inputVal = '';
      },
      inputTyping: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  this.inputVal = e.detail.value;
                  _context.next = 3;
                  return this._getAllWorkbook(this.textbookId);

                case 3:
                  this.workbookList = _context.sent;

                case 4:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function inputTyping(_x) {
          return _ref2.apply(this, arguments);
        }

        return inputTyping;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WorkbookAdd, [{
    key: '_getAllWorkbook',
    value: function _getAllWorkbook(id) {
      var self = this;
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://wechat.guinaben.com/primary/workbook/all',
          data: {
            name: self.inputVal,
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
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(options) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.textbookId = options.id;
                _context2.next = 3;
                return this._getAllWorkbook(this.textbookId);

              case 3:
                this.workbookList = _context2.sent;

                this.$apply();

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onLoad(_x2) {
        return _ref3.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return WorkbookAdd;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(WorkbookAdd , 'pages/workbook/add'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC5qcyJdLCJuYW1lcyI6WyJXb3JrYm9va0FkZCIsImRhdGEiLCJ3b3JrYm9va0xpc3QiLCJpbnB1dFNob3dlZCIsImlucHV0VmFsIiwidGV4dGJvb2tJZCIsIm1ldGhvZHMiLCJzaG93SW5wdXQiLCJoaWRlSW5wdXQiLCJjbGVhcklucHV0IiwiaW5wdXRUeXBpbmciLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJfZ2V0QWxsV29ya2Jvb2siLCJpZCIsInNlbGYiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJ1cmwiLCJuYW1lIiwic3VjY2VzcyIsInJlcyIsImZhaWwiLCJlcnIiLCJvcHRpb25zIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxXOzs7Ozs7Ozs7Ozs7OztnTUFDbkJDLEksR0FBTztBQUNMQyxvQkFBYyxFQURUO0FBRUxDLG1CQUFhLEtBRlI7QUFHTEMsZ0JBQVUsRUFITDtBQUlMQyxrQkFBWTs7QUFHZDtBQVBPLEssUUEyQlBDLE8sR0FBVTtBQUNSQyxlQURRLHVCQUNLO0FBQ1gsYUFBS0osV0FBTCxHQUFtQixJQUFuQjtBQUNELE9BSE87QUFJUkssZUFKUSx1QkFJSztBQUNYLGFBQUtKLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxhQUFLRCxXQUFMLEdBQW1CLEtBQW5CO0FBQ0QsT0FQTztBQVFSTSxnQkFSUSx3QkFRTTtBQUNaLGFBQUtMLFFBQUwsR0FBZ0IsRUFBaEI7QUFDRCxPQVZPO0FBV0ZNLGlCQVhFO0FBQUEsNkZBV1dDLENBWFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlOLHVCQUFLUCxRQUFMLEdBQWdCTyxFQUFFQyxNQUFGLENBQVNDLEtBQXpCO0FBWk07QUFBQSx5QkFhb0IsS0FBS0MsZUFBTCxDQUFxQixLQUFLVCxVQUExQixDQWJwQjs7QUFBQTtBQWFOLHVCQUFLSCxZQWJDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsSzs7Ozs7b0NBbkJPYSxFLEVBQUk7QUFDbkIsVUFBSUMsT0FBTyxJQUFYO0FBQ0EsYUFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLHVCQUFLQyxPQUFMLENBQWE7QUFDWEMsZUFBSyxrREFETTtBQUVYcEIsZ0JBQU07QUFDSnFCLGtCQUFNTixLQUFLWixRQURQO0FBRUpDLHdCQUFZVTtBQUZSLFdBRks7QUFNWFEsaUJBTlcsbUJBTUZDLEdBTkUsRUFNRztBQUNaTixvQkFBUU0sR0FBUjtBQUNELFdBUlU7QUFTWEMsY0FUVyxnQkFTTEMsR0FUSyxFQVNBO0FBQ1RQLG1CQUFPTyxHQUFQO0FBQ0Q7QUFYVSxTQUFiO0FBYUQsT0FkTSxDQUFQO0FBZUQ7Ozs7NEZBb0JhQyxPOzs7OztBQUNaLHFCQUFLdEIsVUFBTCxHQUFrQnNCLFFBQVFaLEVBQTFCOzt1QkFDMEIsS0FBS0QsZUFBTCxDQUFxQixLQUFLVCxVQUExQixDOzs7QUFBMUIscUJBQUtILFk7O0FBQ0wscUJBQUswQixNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBakRxQyxlQUFLQyxJOztrQkFBekI3QixXIiwiZmlsZSI6ImFkZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29ya2Jvb2tBZGQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBkYXRhID0ge1xuICAgIHdvcmtib29rTGlzdDogW10sXG4gICAgaW5wdXRTaG93ZWQ6IGZhbHNlLFxuICAgIGlucHV0VmFsOiAnJyxcbiAgICB0ZXh0Ym9va0lkOiAnJ1xuICB9XG5cbiAgLy8g5re75Yqg5oiR55qE57uD5Lmg5YaMXG4gIF9nZXRBbGxXb3JrYm9vayAoaWQpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly93ZWNoYXQuZ3VpbmFiZW4uY29tL3ByaW1hcnkvd29ya2Jvb2svYWxsJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIG5hbWU6IHNlbGYuaW5wdXRWYWwsXG4gICAgICAgICAgdGV4dGJvb2tJZDogaWRcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgc2hvd0lucHV0ICgpIHtcbiAgICAgIHRoaXMuaW5wdXRTaG93ZWQgPSB0cnVlXG4gICAgfSxcbiAgICBoaWRlSW5wdXQgKCkge1xuICAgICAgdGhpcy5pbnB1dFZhbCA9ICcnXG4gICAgICB0aGlzLmlucHV0U2hvd2VkID0gZmFsc2VcbiAgICB9LFxuICAgIGNsZWFySW5wdXQgKCkge1xuICAgICAgdGhpcy5pbnB1dFZhbCA9ICcnXG4gICAgfSxcbiAgICBhc3luYyBpbnB1dFR5cGluZyAoZSkge1xuICAgICAgdGhpcy5pbnB1dFZhbCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICB0aGlzLndvcmtib29rTGlzdCA9IGF3YWl0IHRoaXMuX2dldEFsbFdvcmtib29rKHRoaXMudGV4dGJvb2tJZClcbiAgICAgIC8vIHRoaXMuJGFwcGx5KClcbiAgICB9XG4gIH1cblxuICBhc3luYyBvbkxvYWQgKG9wdGlvbnMpIHtcbiAgICB0aGlzLnRleHRib29rSWQgPSBvcHRpb25zLmlkXG4gICAgdGhpcy53b3JrYm9va0xpc3QgPSBhd2FpdCB0aGlzLl9nZXRBbGxXb3JrYm9vayh0aGlzLnRleHRib29rSWQpXG4gICAgdGhpcy4kYXBwbHkoKVxuICB9XG59XG4iXX0=