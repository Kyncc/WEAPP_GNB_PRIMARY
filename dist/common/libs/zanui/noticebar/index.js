'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ZanNoticeBar = {
  initZanNoticeBarScroll: function initZanNoticeBarScroll(componentId) {
    var _this = this;

    this.zanNoticeBarNode = this.zanNoticeBarNode || {};
    this.zanNoticeBarNode['' + componentId] = {
      width: undefined,
      wrapWidth: undefined,
      animation: null,
      resetAnimation: null
    };
    var currentComponent = this.zanNoticeBarNode['' + componentId];
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
            _this.scrollZanNoticeBar(componentId, mstime);
          }
        }).exec();
      } else {
        console.warn('页面缺少 noticebar 元素');
      }
    }).exec();
  },
  scrollZanNoticeBar: function scrollZanNoticeBar(componentId, mstime) {
    var _this2 = this;

    var currentComponent = this.zanNoticeBarNode['' + componentId];
    var resetAnimationData = currentComponent.resetAnimation.translateX(currentComponent.wrapWidth).step();
    this.setData(_defineProperty({}, componentId + '.animationData', resetAnimationData.export()));
    var aninationData = currentComponent.animation.translateX(-mstime * 40 / 1000).step();
    setTimeout(function () {
      _this2.setData(_defineProperty({}, componentId + '.animationData', aninationData.export()));
    }, 100);

    setTimeout(function () {
      _this2.scrollZanNoticeBar(componentId, mstime);
    }, mstime);
  }
};

module.exports = ZanNoticeBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlphbk5vdGljZUJhciIsImluaXRaYW5Ob3RpY2VCYXJTY3JvbGwiLCJjb21wb25lbnRJZCIsInphbk5vdGljZUJhck5vZGUiLCJ3aWR0aCIsInVuZGVmaW5lZCIsIndyYXBXaWR0aCIsImFuaW1hdGlvbiIsInJlc2V0QW5pbWF0aW9uIiwiY3VycmVudENvbXBvbmVudCIsInd4IiwiY3JlYXRlU2VsZWN0b3JRdWVyeSIsInNlbGVjdCIsImJvdW5kaW5nQ2xpZW50UmVjdCIsInJlY3QiLCJtc3RpbWUiLCJjcmVhdGVBbmltYXRpb24iLCJkdXJhdGlvbiIsInRpbWluZ0Z1bmN0aW9uIiwic2Nyb2xsWmFuTm90aWNlQmFyIiwiZXhlYyIsImNvbnNvbGUiLCJ3YXJuIiwicmVzZXRBbmltYXRpb25EYXRhIiwidHJhbnNsYXRlWCIsInN0ZXAiLCJzZXREYXRhIiwiZXhwb3J0IiwiYW5pbmF0aW9uRGF0YSIsInNldFRpbWVvdXQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBSUEsZUFBZTtBQUNqQkMsd0JBRGlCLGtDQUNNQyxXQUROLEVBQ21CO0FBQUE7O0FBQ2xDLFNBQUtDLGdCQUFMLEdBQXdCLEtBQUtBLGdCQUFMLElBQXlCLEVBQWpEO0FBQ0EsU0FBS0EsZ0JBQUwsTUFBeUJELFdBQXpCLElBQTBDO0FBQ3hDRSxhQUFPQyxTQURpQztBQUV4Q0MsaUJBQVdELFNBRjZCO0FBR3hDRSxpQkFBVyxJQUg2QjtBQUl4Q0Msc0JBQWdCO0FBSndCLEtBQTFDO0FBTUEsUUFBSUMsbUJBQW1CLEtBQUtOLGdCQUFMLE1BQXlCRCxXQUF6QixDQUF2QjtBQUNBUSxPQUFHQyxtQkFBSCxHQUF5QkMsTUFBekIsT0FBb0NWLFdBQXBDLGdCQUE0RFcsa0JBQTVELENBQStFLFVBQUNDLElBQUQsRUFBVTtBQUN2RixVQUFJQSxLQUFLVixLQUFULEVBQWdCO0FBQ2RLLHlCQUFpQkwsS0FBakIsR0FBeUJVLEtBQUtWLEtBQTlCO0FBQ0FNLFdBQUdDLG1CQUFILEdBQXlCQyxNQUF6QixPQUFvQ1YsV0FBcEMscUJBQWlFVyxrQkFBakUsQ0FBb0YsVUFBQ0MsSUFBRCxFQUFVO0FBQzVGTCwyQkFBaUJILFNBQWpCLEdBQTZCUSxLQUFLVixLQUFsQztBQUNBLGNBQUlLLGlCQUFpQkgsU0FBakIsR0FBNkJHLGlCQUFpQkwsS0FBbEQsRUFBeUQ7QUFDdkQsZ0JBQUlXLFNBQVNOLGlCQUFpQkwsS0FBakIsR0FBeUIsRUFBekIsR0FBOEIsSUFBM0M7QUFDQUssNkJBQWlCRixTQUFqQixHQUE2QkcsR0FBR00sZUFBSCxDQUFtQjtBQUM5Q0Msd0JBQVVGLE1BRG9DO0FBRTlDRyw4QkFBZ0I7QUFGOEIsYUFBbkIsQ0FBN0I7QUFJQVQsNkJBQWlCRCxjQUFqQixHQUFrQ0UsR0FBR00sZUFBSCxDQUFtQjtBQUNuREMsd0JBQVUsQ0FEeUM7QUFFbkRDLDhCQUFnQjtBQUZtQyxhQUFuQixDQUFsQztBQUlBLGtCQUFLQyxrQkFBTCxDQUF3QmpCLFdBQXhCLEVBQXFDYSxNQUFyQztBQUNEO0FBQ0YsU0FkRCxFQWNHSyxJQWRIO0FBZUQsT0FqQkQsTUFpQk87QUFDTEMsZ0JBQVFDLElBQVIsQ0FBYSxtQkFBYjtBQUNEO0FBQ0YsS0FyQkQsRUFxQkdGLElBckJIO0FBc0JELEdBaENnQjtBQWtDakJELG9CQWxDaUIsOEJBa0NFakIsV0FsQ0YsRUFrQ2VhLE1BbENmLEVBa0N1QjtBQUFBOztBQUN0QyxRQUFJTixtQkFBbUIsS0FBS04sZ0JBQUwsTUFBeUJELFdBQXpCLENBQXZCO0FBQ0EsUUFBSXFCLHFCQUFxQmQsaUJBQWlCRCxjQUFqQixDQUFnQ2dCLFVBQWhDLENBQTJDZixpQkFBaUJILFNBQTVELEVBQXVFbUIsSUFBdkUsRUFBekI7QUFDQSxTQUFLQyxPQUFMLHFCQUNNeEIsV0FETixxQkFDb0NxQixtQkFBbUJJLE1BQW5CLEVBRHBDO0FBR0EsUUFBSUMsZ0JBQWdCbkIsaUJBQWlCRixTQUFqQixDQUEyQmlCLFVBQTNCLENBQXNDLENBQUNULE1BQUQsR0FBVSxFQUFWLEdBQWUsSUFBckQsRUFBMkRVLElBQTNELEVBQXBCO0FBQ0FJLGVBQVcsWUFBTTtBQUNmLGFBQUtILE9BQUwscUJBQ014QixXQUROLHFCQUNvQzBCLGNBQWNELE1BQWQsRUFEcEM7QUFHRCxLQUpELEVBSUcsR0FKSDs7QUFNQUUsZUFBVyxZQUFNO0FBQ2YsYUFBS1Ysa0JBQUwsQ0FBd0JqQixXQUF4QixFQUFxQ2EsTUFBckM7QUFDRCxLQUZELEVBRUdBLE1BRkg7QUFHRDtBQWxEZ0IsQ0FBbkI7O0FBcURBZSxPQUFPQyxPQUFQLEdBQWlCL0IsWUFBakIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgWmFuTm90aWNlQmFyID0ge1xyXG4gIGluaXRaYW5Ob3RpY2VCYXJTY3JvbGwoY29tcG9uZW50SWQpIHtcclxuICAgIHRoaXMuemFuTm90aWNlQmFyTm9kZSA9IHRoaXMuemFuTm90aWNlQmFyTm9kZSB8fCB7fTtcclxuICAgIHRoaXMuemFuTm90aWNlQmFyTm9kZVtgJHtjb21wb25lbnRJZH1gXSA9IHtcclxuICAgICAgd2lkdGg6IHVuZGVmaW5lZCxcclxuICAgICAgd3JhcFdpZHRoOiB1bmRlZmluZWQsXHJcbiAgICAgIGFuaW1hdGlvbjogbnVsbCxcclxuICAgICAgcmVzZXRBbmltYXRpb246IG51bGxcclxuICAgIH07XHJcbiAgICB2YXIgY3VycmVudENvbXBvbmVudCA9IHRoaXMuemFuTm90aWNlQmFyTm9kZVtgJHtjb21wb25lbnRJZH1gXTtcclxuICAgIHd4LmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5zZWxlY3QoYCMke2NvbXBvbmVudElkfV9fY29udGVudGApLmJvdW5kaW5nQ2xpZW50UmVjdCgocmVjdCkgPT4ge1xyXG4gICAgICBpZiAocmVjdC53aWR0aCkge1xyXG4gICAgICAgIGN1cnJlbnRDb21wb25lbnQud2lkdGggPSByZWN0LndpZHRoO1xyXG4gICAgICAgIHd4LmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5zZWxlY3QoYCMke2NvbXBvbmVudElkfV9fY29udGVudC13cmFwYCkuYm91bmRpbmdDbGllbnRSZWN0KChyZWN0KSA9PiB7XHJcbiAgICAgICAgICBjdXJyZW50Q29tcG9uZW50LndyYXBXaWR0aCA9IHJlY3Qud2lkdGg7XHJcbiAgICAgICAgICBpZiAoY3VycmVudENvbXBvbmVudC53cmFwV2lkdGggPCBjdXJyZW50Q29tcG9uZW50LndpZHRoKSB7XHJcbiAgICAgICAgICAgIHZhciBtc3RpbWUgPSBjdXJyZW50Q29tcG9uZW50LndpZHRoIC8gNDAgKiAxMDAwO1xyXG4gICAgICAgICAgICBjdXJyZW50Q29tcG9uZW50LmFuaW1hdGlvbiA9IHd4LmNyZWF0ZUFuaW1hdGlvbih7XHJcbiAgICAgICAgICAgICAgZHVyYXRpb246IG1zdGltZSxcclxuICAgICAgICAgICAgICB0aW1pbmdGdW5jdGlvbjogJ2xpbmVhcidcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRDb21wb25lbnQucmVzZXRBbmltYXRpb24gPSB3eC5jcmVhdGVBbmltYXRpb24oe1xyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAwLFxyXG4gICAgICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnbGluZWFyJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGxaYW5Ob3RpY2VCYXIoY29tcG9uZW50SWQsIG1zdGltZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSkuZXhlYygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUud2Fybign6aG16Z2i57y65bCRIG5vdGljZWJhciDlhYPntKAnKTtcclxuICAgICAgfVxyXG4gICAgfSkuZXhlYygpO1xyXG4gIH0sXHJcblxyXG4gIHNjcm9sbFphbk5vdGljZUJhcihjb21wb25lbnRJZCwgbXN0aW1lKSB7XHJcbiAgICB2YXIgY3VycmVudENvbXBvbmVudCA9IHRoaXMuemFuTm90aWNlQmFyTm9kZVtgJHtjb21wb25lbnRJZH1gXTtcclxuICAgIHZhciByZXNldEFuaW1hdGlvbkRhdGEgPSBjdXJyZW50Q29tcG9uZW50LnJlc2V0QW5pbWF0aW9uLnRyYW5zbGF0ZVgoY3VycmVudENvbXBvbmVudC53cmFwV2lkdGgpLnN0ZXAoKTtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIFtgJHtjb21wb25lbnRJZH0uYW5pbWF0aW9uRGF0YWBdOiByZXNldEFuaW1hdGlvbkRhdGEuZXhwb3J0KClcclxuICAgIH0pO1xyXG4gICAgdmFyIGFuaW5hdGlvbkRhdGEgPSBjdXJyZW50Q29tcG9uZW50LmFuaW1hdGlvbi50cmFuc2xhdGVYKC1tc3RpbWUgKiA0MCAvIDEwMDApLnN0ZXAoKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtgJHtjb21wb25lbnRJZH0uYW5pbWF0aW9uRGF0YWBdOiBhbmluYXRpb25EYXRhLmV4cG9ydCgpXHJcbiAgICAgIH0pO1xyXG4gICAgfSwgMTAwKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5zY3JvbGxaYW5Ob3RpY2VCYXIoY29tcG9uZW50SWQsIG1zdGltZSk7XHJcbiAgICB9LCBtc3RpbWUpO1xyXG4gIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gWmFuTm90aWNlQmFyO1xyXG4iXX0=