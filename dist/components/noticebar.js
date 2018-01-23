'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var zanNoticebar = function (_wepy$component) {
  _inherits(zanNoticebar, _wepy$component);

  function zanNoticebar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, zanNoticebar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = zanNoticebar.__proto__ || Object.getPrototypeOf(zanNoticebar)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      componentId: String,
      text: String
    }, _this.data = {
      animationData: {},
      currentComponent: {}
    }, _this.methods = {
      initZanNoticeBarScroll: function initZanNoticeBarScroll() {
        var _this2 = this;

        var componentId = this.componentId;
        var currentComponent = {
          width: undefined,
          wrapWidth: undefined,
          animation: null,
          resetAnimation: null
        };
        wx.createSelectorQuery().select('#' + componentId + '__content').boundingClientRect(function (rect) {
          if (rect.width) {
            currentComponent.width = rect.width;
            wx.createSelectorQuery().select('#' + componentId + '__content-wrap').boundingClientRect(function (rect) {
              currentComponent.wrapWidth = rect.width;
              if (currentComponent.wrapWidth < currentComponent.width) {
                var mstime = currentComponent.width / 40 * 1000;
                currentComponent.animation = wx.createAnimation({
                  duration: mstime,
                  timingFunction: 'linear'
                });
                currentComponent.resetAnimation = wx.createAnimation({
                  duration: 0,
                  timingFunction: 'linear'
                });
                _this2.currentComponent = currentComponent;
                _this2.methods.scrollZanNoticeBar.call(_this2, componentId, mstime);
              }
            }).exec();
          } else {
            console.warn('页面缺少 noticebar 元素');
          }
        }).exec();
      },
      scrollZanNoticeBar: function scrollZanNoticeBar(componentId, mstime) {
        var _this3 = this;

        var currentComponent = this.currentComponent;
        var resetAnimationData = currentComponent.resetAnimation.translateX(currentComponent.wrapWidth).step();
        this.animationData = resetAnimationData.export();
        this.$apply();
        var aninationData = currentComponent.animation.translateX(-mstime * 40 / 1000).step();
        setTimeout(function () {
          _this3.animationData = aninationData.export();
          _this3.$apply();
        }, 100);

        setTimeout(function () {
          _this3.methods.scrollZanNoticeBar.call(_this3, componentId, mstime);
        }, mstime);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return zanNoticebar;
}(_wepy2.default.component);

exports.default = zanNoticebar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGljZWJhci5qcyJdLCJuYW1lcyI6WyJ6YW5Ob3RpY2ViYXIiLCJwcm9wcyIsImNvbXBvbmVudElkIiwiU3RyaW5nIiwidGV4dCIsImRhdGEiLCJhbmltYXRpb25EYXRhIiwiY3VycmVudENvbXBvbmVudCIsIm1ldGhvZHMiLCJpbml0WmFuTm90aWNlQmFyU2Nyb2xsIiwid2lkdGgiLCJ1bmRlZmluZWQiLCJ3cmFwV2lkdGgiLCJhbmltYXRpb24iLCJyZXNldEFuaW1hdGlvbiIsInd4IiwiY3JlYXRlU2VsZWN0b3JRdWVyeSIsInNlbGVjdCIsImJvdW5kaW5nQ2xpZW50UmVjdCIsInJlY3QiLCJtc3RpbWUiLCJjcmVhdGVBbmltYXRpb24iLCJkdXJhdGlvbiIsInRpbWluZ0Z1bmN0aW9uIiwic2Nyb2xsWmFuTm90aWNlQmFyIiwiY2FsbCIsImV4ZWMiLCJjb25zb2xlIiwid2FybiIsInJlc2V0QW5pbWF0aW9uRGF0YSIsInRyYW5zbGF0ZVgiLCJzdGVwIiwiZXhwb3J0IiwiJGFwcGx5IiwiYW5pbmF0aW9uRGF0YSIsInNldFRpbWVvdXQiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxZOzs7Ozs7Ozs7Ozs7OztrTUFDbkJDLEssR0FBUTtBQUNOQyxtQkFBYUMsTUFEUDtBQUVOQyxZQUFNRDtBQUZBLEssUUFJUkUsSSxHQUFPO0FBQ0xDLHFCQUFlLEVBRFY7QUFFTEMsd0JBQWtCO0FBRmIsSyxRQUlQQyxPLEdBQVU7QUFDUkMsNEJBRFEsb0NBQ2lCO0FBQUE7O0FBQ3ZCLFlBQUlQLGNBQWMsS0FBS0EsV0FBdkI7QUFDQSxZQUFJSyxtQkFBbUI7QUFDckJHLGlCQUFPQyxTQURjO0FBRXJCQyxxQkFBV0QsU0FGVTtBQUdyQkUscUJBQVcsSUFIVTtBQUlyQkMsMEJBQWdCO0FBSkssU0FBdkI7QUFNQUMsV0FDR0MsbUJBREgsR0FFR0MsTUFGSCxPQUVjZixXQUZkLGdCQUdHZ0Isa0JBSEgsQ0FHc0IsZ0JBQVE7QUFDMUIsY0FBSUMsS0FBS1QsS0FBVCxFQUFnQjtBQUNkSCw2QkFBaUJHLEtBQWpCLEdBQXlCUyxLQUFLVCxLQUE5QjtBQUNBSyxlQUNHQyxtQkFESCxHQUVHQyxNQUZILE9BRWNmLFdBRmQscUJBR0dnQixrQkFISCxDQUdzQixnQkFBUTtBQUMxQlgsK0JBQWlCSyxTQUFqQixHQUE2Qk8sS0FBS1QsS0FBbEM7QUFDQSxrQkFBSUgsaUJBQWlCSyxTQUFqQixHQUE2QkwsaUJBQWlCRyxLQUFsRCxFQUF5RDtBQUN2RCxvQkFBSVUsU0FBU2IsaUJBQWlCRyxLQUFqQixHQUF5QixFQUF6QixHQUE4QixJQUEzQztBQUNBSCxpQ0FBaUJNLFNBQWpCLEdBQTZCRSxHQUFHTSxlQUFILENBQW1CO0FBQzlDQyw0QkFBVUYsTUFEb0M7QUFFOUNHLGtDQUFnQjtBQUY4QixpQkFBbkIsQ0FBN0I7QUFJQWhCLGlDQUFpQk8sY0FBakIsR0FBa0NDLEdBQUdNLGVBQUgsQ0FBbUI7QUFDbkRDLDRCQUFVLENBRHlDO0FBRW5EQyxrQ0FBZ0I7QUFGbUMsaUJBQW5CLENBQWxDO0FBSUEsdUJBQUtoQixnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0EsdUJBQUtDLE9BQUwsQ0FBYWdCLGtCQUFiLENBQWdDQyxJQUFoQyxTQUEyQ3ZCLFdBQTNDLEVBQXdEa0IsTUFBeEQ7QUFDRDtBQUNGLGFBbEJILEVBbUJHTSxJQW5CSDtBQW9CRCxXQXRCRCxNQXNCTztBQUNMQyxvQkFBUUMsSUFBUixDQUFhLG1CQUFiO0FBQ0Q7QUFDRixTQTdCSCxFQThCR0YsSUE5Qkg7QUErQkQsT0F4Q087QUEwQ1JGLHdCQTFDUSw4QkEwQ1d0QixXQTFDWCxFQTBDd0JrQixNQTFDeEIsRUEwQ2dDO0FBQUE7O0FBQ3RDLFlBQUliLG1CQUFtQixLQUFLQSxnQkFBNUI7QUFDQSxZQUFJc0IscUJBQXFCdEIsaUJBQWlCTyxjQUFqQixDQUFnQ2dCLFVBQWhDLENBQTJDdkIsaUJBQWlCSyxTQUE1RCxFQUF1RW1CLElBQXZFLEVBQXpCO0FBQ0EsYUFBS3pCLGFBQUwsR0FBcUJ1QixtQkFBbUJHLE1BQW5CLEVBQXJCO0FBQ0EsYUFBS0MsTUFBTDtBQUNBLFlBQUlDLGdCQUFnQjNCLGlCQUFpQk0sU0FBakIsQ0FBMkJpQixVQUEzQixDQUFzQyxDQUFDVixNQUFELEdBQVUsRUFBVixHQUFlLElBQXJELEVBQTJEVyxJQUEzRCxFQUFwQjtBQUNBSSxtQkFBVyxZQUFNO0FBQ2YsaUJBQUs3QixhQUFMLEdBQXFCNEIsY0FBY0YsTUFBZCxFQUFyQjtBQUNBLGlCQUFLQyxNQUFMO0FBQ0QsU0FIRCxFQUdHLEdBSEg7O0FBS0FFLG1CQUFXLFlBQU07QUFDZixpQkFBSzNCLE9BQUwsQ0FBYWdCLGtCQUFiLENBQWdDQyxJQUFoQyxTQUEyQ3ZCLFdBQTNDLEVBQXdEa0IsTUFBeEQ7QUFDRCxTQUZELEVBRUdBLE1BRkg7QUFHRDtBQXhETyxLOzs7O0VBVDhCLGVBQUtnQixTOztrQkFBMUJwQyxZIiwiZmlsZSI6Im5vdGljZWJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgemFuTm90aWNlYmFyIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHtcbiAgICBjb21wb25lbnRJZDogU3RyaW5nLFxuICAgIHRleHQ6IFN0cmluZ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgYW5pbWF0aW9uRGF0YToge30sXG4gICAgY3VycmVudENvbXBvbmVudDoge31cbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGluaXRaYW5Ob3RpY2VCYXJTY3JvbGwoKSB7XG4gICAgICBsZXQgY29tcG9uZW50SWQgPSB0aGlzLmNvbXBvbmVudElkXG4gICAgICBsZXQgY3VycmVudENvbXBvbmVudCA9IHtcbiAgICAgICAgd2lkdGg6IHVuZGVmaW5lZCxcbiAgICAgICAgd3JhcFdpZHRoOiB1bmRlZmluZWQsXG4gICAgICAgIGFuaW1hdGlvbjogbnVsbCxcbiAgICAgICAgcmVzZXRBbmltYXRpb246IG51bGxcbiAgICAgIH1cbiAgICAgIHd4XG4gICAgICAgIC5jcmVhdGVTZWxlY3RvclF1ZXJ5KClcbiAgICAgICAgLnNlbGVjdChgIyR7Y29tcG9uZW50SWR9X19jb250ZW50YClcbiAgICAgICAgLmJvdW5kaW5nQ2xpZW50UmVjdChyZWN0ID0+IHtcbiAgICAgICAgICBpZiAocmVjdC53aWR0aCkge1xuICAgICAgICAgICAgY3VycmVudENvbXBvbmVudC53aWR0aCA9IHJlY3Qud2lkdGhcbiAgICAgICAgICAgIHd4XG4gICAgICAgICAgICAgIC5jcmVhdGVTZWxlY3RvclF1ZXJ5KClcbiAgICAgICAgICAgICAgLnNlbGVjdChgIyR7Y29tcG9uZW50SWR9X19jb250ZW50LXdyYXBgKVxuICAgICAgICAgICAgICAuYm91bmRpbmdDbGllbnRSZWN0KHJlY3QgPT4ge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRDb21wb25lbnQud3JhcFdpZHRoID0gcmVjdC53aWR0aFxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Q29tcG9uZW50LndyYXBXaWR0aCA8IGN1cnJlbnRDb21wb25lbnQud2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgIGxldCBtc3RpbWUgPSBjdXJyZW50Q29tcG9uZW50LndpZHRoIC8gNDAgKiAxMDAwXG4gICAgICAgICAgICAgICAgICBjdXJyZW50Q29tcG9uZW50LmFuaW1hdGlvbiA9IHd4LmNyZWF0ZUFuaW1hdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBtc3RpbWUsXG4gICAgICAgICAgICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnbGluZWFyJ1xuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRDb21wb25lbnQucmVzZXRBbmltYXRpb24gPSB3eC5jcmVhdGVBbmltYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMCxcbiAgICAgICAgICAgICAgICAgICAgdGltaW5nRnVuY3Rpb246ICdsaW5lYXInXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Q29tcG9uZW50ID0gY3VycmVudENvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgdGhpcy5tZXRob2RzLnNjcm9sbFphbk5vdGljZUJhci5jYWxsKHRoaXMsIGNvbXBvbmVudElkLCBtc3RpbWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuZXhlYygpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybign6aG16Z2i57y65bCRIG5vdGljZWJhciDlhYPntKAnKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmV4ZWMoKVxuICAgIH0sXG5cbiAgICBzY3JvbGxaYW5Ob3RpY2VCYXIoY29tcG9uZW50SWQsIG1zdGltZSkge1xuICAgICAgbGV0IGN1cnJlbnRDb21wb25lbnQgPSB0aGlzLmN1cnJlbnRDb21wb25lbnRcbiAgICAgIGxldCByZXNldEFuaW1hdGlvbkRhdGEgPSBjdXJyZW50Q29tcG9uZW50LnJlc2V0QW5pbWF0aW9uLnRyYW5zbGF0ZVgoY3VycmVudENvbXBvbmVudC53cmFwV2lkdGgpLnN0ZXAoKVxuICAgICAgdGhpcy5hbmltYXRpb25EYXRhID0gcmVzZXRBbmltYXRpb25EYXRhLmV4cG9ydCgpXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgICBsZXQgYW5pbmF0aW9uRGF0YSA9IGN1cnJlbnRDb21wb25lbnQuYW5pbWF0aW9uLnRyYW5zbGF0ZVgoLW1zdGltZSAqIDQwIC8gMTAwMCkuc3RlcCgpXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5hbmltYXRpb25EYXRhID0gYW5pbmF0aW9uRGF0YS5leHBvcnQoKVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9LCAxMDApXG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLm1ldGhvZHMuc2Nyb2xsWmFuTm90aWNlQmFyLmNhbGwodGhpcywgY29tcG9uZW50SWQsIG1zdGltZSlcbiAgICAgIH0sIG1zdGltZSlcbiAgICB9XG4gIH1cbn1cbiJdfQ==