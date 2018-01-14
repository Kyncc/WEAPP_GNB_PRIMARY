'use strict';

module.exports = {
  showZanTopTips: function showZanTopTips() {
    var _this = this;

    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var zanTopTips = this.data.zanTopTips || {};
    // 如果已经有一个计时器在了，就清理掉先
    if (zanTopTips.timer) {
      clearTimeout(zanTopTips.timer);
      zanTopTips.timer = undefined;
    }

    if (typeof options === 'number') {
      options = {
        duration: options
      };
    }

    // options参数默认参数扩展
    options = Object.assign({
      duration: 3000
    }, options);

    // 设置定时器，定时关闭topTips
    var timer = setTimeout(function () {
      _this.setData({
        'zanTopTips.show': false,
        'zanTopTips.timer': undefined
      });
    }, options.duration);

    // 展示出topTips
    this.setData({
      zanTopTips: {
        show: true,
        content: content,
        options: options,
        timer: timer
      }
    });
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJzaG93WmFuVG9wVGlwcyIsImNvbnRlbnQiLCJvcHRpb25zIiwiemFuVG9wVGlwcyIsImRhdGEiLCJ0aW1lciIsImNsZWFyVGltZW91dCIsInVuZGVmaW5lZCIsImR1cmF0aW9uIiwiT2JqZWN0IiwiYXNzaWduIiwic2V0VGltZW91dCIsInNldERhdGEiLCJzaG93Il0sIm1hcHBpbmdzIjoiOztBQUFBQSxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZDLGdCQURlLDRCQUM0QjtBQUFBOztBQUFBLFFBQTVCQyxPQUE0Qix1RUFBbEIsRUFBa0I7QUFBQSxRQUFkQyxPQUFjLHVFQUFKLEVBQUk7O0FBQ3pDLFFBQUlDLGFBQWEsS0FBS0MsSUFBTCxDQUFVRCxVQUFWLElBQXdCLEVBQXpDO0FBQ0E7QUFDQSxRQUFJQSxXQUFXRSxLQUFmLEVBQXNCO0FBQ3BCQyxtQkFBYUgsV0FBV0UsS0FBeEI7QUFDQUYsaUJBQVdFLEtBQVgsR0FBbUJFLFNBQW5CO0FBQ0Q7O0FBRUQsUUFBSSxPQUFPTCxPQUFQLEtBQW1CLFFBQXZCLEVBQWlDO0FBQy9CQSxnQkFBVTtBQUNSTSxrQkFBVU47QUFERixPQUFWO0FBR0Q7O0FBRUQ7QUFDQUEsY0FBVU8sT0FBT0MsTUFBUCxDQUFjO0FBQ3RCRixnQkFBVTtBQURZLEtBQWQsRUFFUE4sT0FGTyxDQUFWOztBQUlBO0FBQ0EsUUFBSUcsUUFBUU0sV0FBVyxZQUFNO0FBQzNCLFlBQUtDLE9BQUwsQ0FBYTtBQUNYLDJCQUFtQixLQURSO0FBRVgsNEJBQW9CTDtBQUZULE9BQWI7QUFJRCxLQUxXLEVBS1RMLFFBQVFNLFFBTEMsQ0FBWjs7QUFPQTtBQUNBLFNBQUtJLE9BQUwsQ0FBYTtBQUNYVCxrQkFBWTtBQUNWVSxjQUFNLElBREk7QUFFVlosd0JBRlU7QUFHVkMsd0JBSFU7QUFJVkc7QUFKVTtBQURELEtBQWI7QUFRRDtBQXJDYyxDQUFqQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIHNob3daYW5Ub3BUaXBzKGNvbnRlbnQgPSAnJywgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICBsZXQgemFuVG9wVGlwcyA9IHRoaXMuZGF0YS56YW5Ub3BUaXBzIHx8IHt9O1xyXG4gICAgLy8g5aaC5p6c5bey57uP5pyJ5LiA5Liq6K6h5pe25Zmo5Zyo5LqG77yM5bCx5riF55CG5o6J5YWIXHJcbiAgICBpZiAoemFuVG9wVGlwcy50aW1lcikge1xyXG4gICAgICBjbGVhclRpbWVvdXQoemFuVG9wVGlwcy50aW1lcik7XHJcbiAgICAgIHphblRvcFRpcHMudGltZXIgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnbnVtYmVyJykge1xyXG4gICAgICBvcHRpb25zID0ge1xyXG4gICAgICAgIGR1cmF0aW9uOiBvcHRpb25zXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gb3B0aW9uc+WPguaVsOm7mOiupOWPguaVsOaJqeWxlVxyXG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICBkdXJhdGlvbjogMzAwMFxyXG4gICAgfSwgb3B0aW9ucyk7XHJcblxyXG4gICAgLy8g6K6+572u5a6a5pe25Zmo77yM5a6a5pe25YWz6ZetdG9wVGlwc1xyXG4gICAgbGV0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgJ3phblRvcFRpcHMuc2hvdyc6IGZhbHNlLFxyXG4gICAgICAgICd6YW5Ub3BUaXBzLnRpbWVyJzogdW5kZWZpbmVkXHJcbiAgICAgIH0pO1xyXG4gICAgfSwgb3B0aW9ucy5kdXJhdGlvbik7XHJcblxyXG4gICAgLy8g5bGV56S65Ye6dG9wVGlwc1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgemFuVG9wVGlwczoge1xyXG4gICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgY29udGVudCxcclxuICAgICAgICBvcHRpb25zLFxyXG4gICAgICAgIHRpbWVyXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuIl19