'use strict';

module.exports = {
  showZanToast: function showZanToast(title, timeout) {
    var _this = this;

    var zanToast = this.data.zanToast || {};
    clearTimeout(zanToast.timer);

    // 弹层设置~
    zanToast = {
      show: true,
      title: title
    };
    this.setData({
      zanToast: zanToast
    });

    var timer = setTimeout(function () {
      _this.clearZanToast();
    }, timeout || 3000);

    this.setData({
      'zanToast.timer': timer
    });
  },
  clearZanToast: function clearZanToast() {
    var zanToast = this.data.zanToast || {};
    clearTimeout(zanToast.timer);

    this.setData({
      'zanToast.show': false
    });
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJzaG93WmFuVG9hc3QiLCJ0aXRsZSIsInRpbWVvdXQiLCJ6YW5Ub2FzdCIsImRhdGEiLCJjbGVhclRpbWVvdXQiLCJ0aW1lciIsInNob3ciLCJzZXREYXRhIiwic2V0VGltZW91dCIsImNsZWFyWmFuVG9hc3QiXSwibWFwcGluZ3MiOiI7O0FBQUFBLE9BQU9DLE9BQVAsR0FBaUI7QUFDZkMsY0FEZSx3QkFDRkMsS0FERSxFQUNLQyxPQURMLEVBQ2M7QUFBQTs7QUFDM0IsUUFBSUMsV0FBVyxLQUFLQyxJQUFMLENBQVVELFFBQVYsSUFBc0IsRUFBckM7QUFDQUUsaUJBQWFGLFNBQVNHLEtBQXRCOztBQUVBO0FBQ0FILGVBQVc7QUFDVEksWUFBTSxJQURHO0FBRVROO0FBRlMsS0FBWDtBQUlBLFNBQUtPLE9BQUwsQ0FBYTtBQUNYTDtBQURXLEtBQWI7O0FBSUEsUUFBSUcsUUFBUUcsV0FBVyxZQUFNO0FBQzNCLFlBQUtDLGFBQUw7QUFDRCxLQUZXLEVBRVRSLFdBQVcsSUFGRixDQUFaOztBQUlBLFNBQUtNLE9BQUwsQ0FBYTtBQUNYLHdCQUFrQkY7QUFEUCxLQUFiO0FBR0QsR0FyQmM7QUF1QmZJLGVBdkJlLDJCQXVCQztBQUNkLFFBQUlQLFdBQVcsS0FBS0MsSUFBTCxDQUFVRCxRQUFWLElBQXNCLEVBQXJDO0FBQ0FFLGlCQUFhRixTQUFTRyxLQUF0Qjs7QUFFQSxTQUFLRSxPQUFMLENBQWE7QUFDWCx1QkFBaUI7QUFETixLQUFiO0FBR0Q7QUE5QmMsQ0FBakIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICBzaG93WmFuVG9hc3QodGl0bGUsIHRpbWVvdXQpIHtcclxuICAgIHZhciB6YW5Ub2FzdCA9IHRoaXMuZGF0YS56YW5Ub2FzdCB8fCB7fTtcclxuICAgIGNsZWFyVGltZW91dCh6YW5Ub2FzdC50aW1lcik7XHJcblxyXG4gICAgLy8g5by55bGC6K6+572uflxyXG4gICAgemFuVG9hc3QgPSB7XHJcbiAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgIHRpdGxlXHJcbiAgICB9O1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgemFuVG9hc3RcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNsZWFyWmFuVG9hc3QoKTtcclxuICAgIH0sIHRpbWVvdXQgfHwgMzAwMCk7XHJcblxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgJ3phblRvYXN0LnRpbWVyJzogdGltZXJcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIGNsZWFyWmFuVG9hc3QoKSB7XHJcbiAgICB2YXIgemFuVG9hc3QgPSB0aGlzLmRhdGEuemFuVG9hc3QgfHwge307XHJcbiAgICBjbGVhclRpbWVvdXQoemFuVG9hc3QudGltZXIpO1xyXG5cclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICd6YW5Ub2FzdC5zaG93JzogZmFsc2VcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuIl19