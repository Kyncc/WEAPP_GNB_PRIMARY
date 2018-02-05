"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
* 频率控制 返回函数连续调用时，fn 执行频率限定为每多少时间执行一次
* @param fn {function}  需要调用的函数
* @param delay  {number}    延迟时间，单位毫秒
* @param immediate  {bool} 给 immediate参数传递 true 时，绑定的函数 delay 后执行。
* @return {function}实际调用函数
*/
var Throttle = exports.Throttle = function Throttle(fn, delay) {
  var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var debounce = arguments[3];

  var curr = +new Date(); // 当前时间
  var lastCall = 0;
  var lastExec = 0;
  var timer = null;
  var diff = void 0; // 时间差
  var context = void 0; // 上下文
  var args = void 0;
  var exec = function exec() {
    lastExec = curr;
    fn.apply(context, args);
  };

  return function () {
    curr = +new Date();
    context = this;
    args = arguments;
    diff = curr - (debounce ? lastCall : lastExec) - delay;
    clearTimeout(timer);
    if (debounce) {
      if (immediate) {
        timer = setTimeout(exec, delay);
      } else if (diff >= 0) {
        exec();
      }
    } else {
      if (diff >= 0) {
        exec();
      } else if (immediate) {
        timer = setTimeout(exec, -diff);
      }
    }
    lastCall = curr;
  };
};

/*
* 空闲控制 返回函数连续调用时，空闲时间必须大于或等于 delay，fn 才会执行
* @param fn {function}  要调用的函数
* @param delay   {number}    空闲时间
* @param immediate  {bool} 给 immediate参数传递false 绑定的函数先执行，而不是delay后后执行。
* @return {function}实际调用函数
*/

var Debounce = exports.Debounce = function Debounce(fn, delay, immediate) {
  return Throttle(fn, delay, immediate, true);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVudGxpLmpzIl0sIm5hbWVzIjpbIlRocm90dGxlIiwiZm4iLCJkZWxheSIsImltbWVkaWF0ZSIsImRlYm91bmNlIiwiY3VyciIsIkRhdGUiLCJsYXN0Q2FsbCIsImxhc3RFeGVjIiwidGltZXIiLCJkaWZmIiwiY29udGV4dCIsImFyZ3MiLCJleGVjIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiRGVib3VuY2UiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7QUFPTyxJQUFNQSw4QkFBVyxTQUFYQSxRQUFXLENBQVVDLEVBQVYsRUFBY0MsS0FBZCxFQUFrRDtBQUFBLE1BQTdCQyxTQUE2Qix1RUFBakIsS0FBaUI7QUFBQSxNQUFWQyxRQUFVOztBQUN4RSxNQUFJQyxPQUFPLENBQUMsSUFBSUMsSUFBSixFQUFaLENBRHdFLENBQ2xEO0FBQ3RCLE1BQUlDLFdBQVcsQ0FBZjtBQUNBLE1BQUlDLFdBQVcsQ0FBZjtBQUNBLE1BQUlDLFFBQVEsSUFBWjtBQUNBLE1BQUlDLGFBQUosQ0FMd0UsQ0FLL0Q7QUFDVCxNQUFJQyxnQkFBSixDQU53RSxDQU01RDtBQUNaLE1BQUlDLGFBQUo7QUFDQSxNQUFJQyxPQUFPLFNBQVBBLElBQU8sR0FBWTtBQUNyQkwsZUFBV0gsSUFBWDtBQUNBSixPQUFHYSxLQUFILENBQVNILE9BQVQsRUFBa0JDLElBQWxCO0FBQ0QsR0FIRDs7QUFLQSxTQUFPLFlBQVk7QUFDakJQLFdBQU8sQ0FBQyxJQUFJQyxJQUFKLEVBQVI7QUFDQUssY0FBVSxJQUFWO0FBQ0FDLFdBQU9HLFNBQVA7QUFDQUwsV0FBT0wsUUFBUUQsV0FBV0csUUFBWCxHQUFzQkMsUUFBOUIsSUFBMENOLEtBQWpEO0FBQ0FjLGlCQUFhUCxLQUFiO0FBQ0EsUUFBSUwsUUFBSixFQUFjO0FBQ1osVUFBSUQsU0FBSixFQUFlO0FBQ2JNLGdCQUFRUSxXQUFXSixJQUFYLEVBQWlCWCxLQUFqQixDQUFSO0FBQ0QsT0FGRCxNQUVPLElBQUlRLFFBQVEsQ0FBWixFQUFlO0FBQ3BCRztBQUNEO0FBQ0YsS0FORCxNQU1PO0FBQ0wsVUFBSUgsUUFBUSxDQUFaLEVBQWU7QUFDYkc7QUFDRCxPQUZELE1BRU8sSUFBSVYsU0FBSixFQUFlO0FBQ3BCTSxnQkFBUVEsV0FBV0osSUFBWCxFQUFpQixDQUFDSCxJQUFsQixDQUFSO0FBQ0Q7QUFDRjtBQUNESCxlQUFXRixJQUFYO0FBQ0QsR0FwQkQ7QUFxQkQsQ0FsQ007O0FBb0NQOzs7Ozs7OztBQVFPLElBQU1hLDhCQUFXLFNBQVhBLFFBQVcsQ0FBQ2pCLEVBQUQsRUFBS0MsS0FBTCxFQUFZQyxTQUFaO0FBQUEsU0FBMEJILFNBQVNDLEVBQVQsRUFBYUMsS0FBYixFQUFvQkMsU0FBcEIsRUFBK0IsSUFBL0IsQ0FBMUI7QUFBQSxDQUFqQiIsImZpbGUiOiJ1bnRsaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4qIOmikeeOh+aOp+WItiDov5Tlm57lh73mlbDov57nu63osIPnlKjml7bvvIxmbiDmiafooYzpopHnjofpmZDlrprkuLrmr4/lpJrlsJHml7bpl7TmiafooYzkuIDmrKFcbiogQHBhcmFtIGZuIHtmdW5jdGlvbn0gIOmcgOimgeiwg+eUqOeahOWHveaVsFxuKiBAcGFyYW0gZGVsYXkgIHtudW1iZXJ9ICAgIOW7tui/n+aXtumXtO+8jOWNleS9jeavq+enklxuKiBAcGFyYW0gaW1tZWRpYXRlICB7Ym9vbH0g57uZIGltbWVkaWF0ZeWPguaVsOS8oOmAkiB0cnVlIOaXtu+8jOe7keWumueahOWHveaVsCBkZWxheSDlkI7miafooYzjgIJcbiogQHJldHVybiB7ZnVuY3Rpb2595a6e6ZmF6LCD55So5Ye95pWwXG4qL1xuZXhwb3J0IGNvbnN0IFRocm90dGxlID0gZnVuY3Rpb24gKGZuLCBkZWxheSwgaW1tZWRpYXRlID0gZmFsc2UsIGRlYm91bmNlKSB7XG4gIGxldCBjdXJyID0gK25ldyBEYXRlKCkvLyDlvZPliY3ml7bpl7RcbiAgbGV0IGxhc3RDYWxsID0gMFxuICBsZXQgbGFzdEV4ZWMgPSAwXG4gIGxldCB0aW1lciA9IG51bGxcbiAgbGV0IGRpZmYgLy8g5pe26Ze05beuXG4gIGxldCBjb250ZXh0IC8vIOS4iuS4i+aWh1xuICBsZXQgYXJnc1xuICBsZXQgZXhlYyA9IGZ1bmN0aW9uICgpIHtcbiAgICBsYXN0RXhlYyA9IGN1cnJcbiAgICBmbi5hcHBseShjb250ZXh0LCBhcmdzKVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBjdXJyID0gK25ldyBEYXRlKClcbiAgICBjb250ZXh0ID0gdGhpc1xuICAgIGFyZ3MgPSBhcmd1bWVudHNcbiAgICBkaWZmID0gY3VyciAtIChkZWJvdW5jZSA/IGxhc3RDYWxsIDogbGFzdEV4ZWMpIC0gZGVsYXlcbiAgICBjbGVhclRpbWVvdXQodGltZXIpXG4gICAgaWYgKGRlYm91bmNlKSB7XG4gICAgICBpZiAoaW1tZWRpYXRlKSB7XG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dChleGVjLCBkZWxheSlcbiAgICAgIH0gZWxzZSBpZiAoZGlmZiA+PSAwKSB7XG4gICAgICAgIGV4ZWMoKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZGlmZiA+PSAwKSB7XG4gICAgICAgIGV4ZWMoKVxuICAgICAgfSBlbHNlIGlmIChpbW1lZGlhdGUpIHtcbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGV4ZWMsIC1kaWZmKVxuICAgICAgfVxuICAgIH1cbiAgICBsYXN0Q2FsbCA9IGN1cnJcbiAgfVxufVxuXG4vKlxuKiDnqbrpl7LmjqfliLYg6L+U5Zue5Ye95pWw6L+e57ut6LCD55So5pe277yM56m66Zey5pe26Ze05b+F6aG75aSn5LqO5oiW562J5LqOIGRlbGF577yMZm4g5omN5Lya5omn6KGMXG4qIEBwYXJhbSBmbiB7ZnVuY3Rpb259ICDopoHosIPnlKjnmoTlh73mlbBcbiogQHBhcmFtIGRlbGF5ICAge251bWJlcn0gICAg56m66Zey5pe26Ze0XG4qIEBwYXJhbSBpbW1lZGlhdGUgIHtib29sfSDnu5kgaW1tZWRpYXRl5Y+C5pWw5Lyg6YCSZmFsc2Ug57uR5a6a55qE5Ye95pWw5YWI5omn6KGM77yM6ICM5LiN5pivZGVsYXnlkI7lkI7miafooYzjgIJcbiogQHJldHVybiB7ZnVuY3Rpb2595a6e6ZmF6LCD55So5Ye95pWwXG4qL1xuXG5leHBvcnQgY29uc3QgRGVib3VuY2UgPSAoZm4sIGRlbGF5LCBpbW1lZGlhdGUpID0+IFRocm90dGxlKGZuLCBkZWxheSwgaW1tZWRpYXRlLCB0cnVlKVxuIl19