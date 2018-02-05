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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0bGkuanMiXSwibmFtZXMiOlsiVGhyb3R0bGUiLCJmbiIsImRlbGF5IiwiaW1tZWRpYXRlIiwiZGVib3VuY2UiLCJjdXJyIiwiRGF0ZSIsImxhc3RDYWxsIiwibGFzdEV4ZWMiLCJ0aW1lciIsImRpZmYiLCJjb250ZXh0IiwiYXJncyIsImV4ZWMiLCJhcHBseSIsImFyZ3VtZW50cyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJEZWJvdW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7OztBQU9PLElBQU1BLDhCQUFXLFNBQVhBLFFBQVcsQ0FBVUMsRUFBVixFQUFjQyxLQUFkLEVBQWtEO0FBQUEsTUFBN0JDLFNBQTZCLHVFQUFqQixLQUFpQjtBQUFBLE1BQVZDLFFBQVU7O0FBQ3hFLE1BQUlDLE9BQU8sQ0FBQyxJQUFJQyxJQUFKLEVBQVosQ0FEd0UsQ0FDbEQ7QUFDdEIsTUFBSUMsV0FBVyxDQUFmO0FBQ0EsTUFBSUMsV0FBVyxDQUFmO0FBQ0EsTUFBSUMsUUFBUSxJQUFaO0FBQ0EsTUFBSUMsYUFBSixDQUx3RSxDQUsvRDtBQUNULE1BQUlDLGdCQUFKLENBTndFLENBTTVEO0FBQ1osTUFBSUMsYUFBSjtBQUNBLE1BQUlDLE9BQU8sU0FBUEEsSUFBTyxHQUFZO0FBQ3JCTCxlQUFXSCxJQUFYO0FBQ0FKLE9BQUdhLEtBQUgsQ0FBU0gsT0FBVCxFQUFrQkMsSUFBbEI7QUFDRCxHQUhEOztBQUtBLFNBQU8sWUFBWTtBQUNqQlAsV0FBTyxDQUFDLElBQUlDLElBQUosRUFBUjtBQUNBSyxjQUFVLElBQVY7QUFDQUMsV0FBT0csU0FBUDtBQUNBTCxXQUFPTCxRQUFRRCxXQUFXRyxRQUFYLEdBQXNCQyxRQUE5QixJQUEwQ04sS0FBakQ7QUFDQWMsaUJBQWFQLEtBQWI7QUFDQSxRQUFJTCxRQUFKLEVBQWM7QUFDWixVQUFJRCxTQUFKLEVBQWU7QUFDYk0sZ0JBQVFRLFdBQVdKLElBQVgsRUFBaUJYLEtBQWpCLENBQVI7QUFDRCxPQUZELE1BRU8sSUFBSVEsUUFBUSxDQUFaLEVBQWU7QUFDcEJHO0FBQ0Q7QUFDRixLQU5ELE1BTU87QUFDTCxVQUFJSCxRQUFRLENBQVosRUFBZTtBQUNiRztBQUNELE9BRkQsTUFFTyxJQUFJVixTQUFKLEVBQWU7QUFDcEJNLGdCQUFRUSxXQUFXSixJQUFYLEVBQWlCLENBQUNILElBQWxCLENBQVI7QUFDRDtBQUNGO0FBQ0RILGVBQVdGLElBQVg7QUFDRCxHQXBCRDtBQXFCRCxDQWxDTTs7QUFvQ1A7Ozs7Ozs7O0FBUU8sSUFBTWEsOEJBQVcsU0FBWEEsUUFBVyxDQUFDakIsRUFBRCxFQUFLQyxLQUFMLEVBQVlDLFNBQVo7QUFBQSxTQUEwQkgsU0FBU0MsRUFBVCxFQUFhQyxLQUFiLEVBQW9CQyxTQUFwQixFQUErQixJQUEvQixDQUExQjtBQUFBLENBQWpCIiwiZmlsZSI6InV0bGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuKiDpopHnjofmjqfliLYg6L+U5Zue5Ye95pWw6L+e57ut6LCD55So5pe277yMZm4g5omn6KGM6aKR546H6ZmQ5a6a5Li65q+P5aSa5bCR5pe26Ze05omn6KGM5LiA5qyhXG4qIEBwYXJhbSBmbiB7ZnVuY3Rpb259ICDpnIDopoHosIPnlKjnmoTlh73mlbBcbiogQHBhcmFtIGRlbGF5ICB7bnVtYmVyfSAgICDlu7bov5/ml7bpl7TvvIzljZXkvY3mr6vnp5JcbiogQHBhcmFtIGltbWVkaWF0ZSAge2Jvb2x9IOe7mSBpbW1lZGlhdGXlj4LmlbDkvKDpgJIgdHJ1ZSDml7bvvIznu5HlrprnmoTlh73mlbAgZGVsYXkg5ZCO5omn6KGM44CCXG4qIEByZXR1cm4ge2Z1bmN0aW9ufeWunumZheiwg+eUqOWHveaVsFxuKi9cbmV4cG9ydCBjb25zdCBUaHJvdHRsZSA9IGZ1bmN0aW9uIChmbiwgZGVsYXksIGltbWVkaWF0ZSA9IGZhbHNlLCBkZWJvdW5jZSkge1xuICBsZXQgY3VyciA9ICtuZXcgRGF0ZSgpLy8g5b2T5YmN5pe26Ze0XG4gIGxldCBsYXN0Q2FsbCA9IDBcbiAgbGV0IGxhc3RFeGVjID0gMFxuICBsZXQgdGltZXIgPSBudWxsXG4gIGxldCBkaWZmIC8vIOaXtumXtOW3rlxuICBsZXQgY29udGV4dCAvLyDkuIrkuIvmlodcbiAgbGV0IGFyZ3NcbiAgbGV0IGV4ZWMgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGFzdEV4ZWMgPSBjdXJyXG4gICAgZm4uYXBwbHkoY29udGV4dCwgYXJncylcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgY3VyciA9ICtuZXcgRGF0ZSgpXG4gICAgY29udGV4dCA9IHRoaXNcbiAgICBhcmdzID0gYXJndW1lbnRzXG4gICAgZGlmZiA9IGN1cnIgLSAoZGVib3VuY2UgPyBsYXN0Q2FsbCA6IGxhc3RFeGVjKSAtIGRlbGF5XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgIGlmIChkZWJvdW5jZSkge1xuICAgICAgaWYgKGltbWVkaWF0ZSkge1xuICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoZXhlYywgZGVsYXkpXG4gICAgICB9IGVsc2UgaWYgKGRpZmYgPj0gMCkge1xuICAgICAgICBleGVjKClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGRpZmYgPj0gMCkge1xuICAgICAgICBleGVjKClcbiAgICAgIH0gZWxzZSBpZiAoaW1tZWRpYXRlKSB7XG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dChleGVjLCAtZGlmZilcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdENhbGwgPSBjdXJyXG4gIH1cbn1cblxuLypcbiog56m66Zey5o6n5Yi2IOi/lOWbnuWHveaVsOi/nue7reiwg+eUqOaXtu+8jOepuumXsuaXtumXtOW/hemhu+Wkp+S6juaIluetieS6jiBkZWxhee+8jGZuIOaJjeS8muaJp+ihjFxuKiBAcGFyYW0gZm4ge2Z1bmN0aW9ufSAg6KaB6LCD55So55qE5Ye95pWwXG4qIEBwYXJhbSBkZWxheSAgIHtudW1iZXJ9ICAgIOepuumXsuaXtumXtFxuKiBAcGFyYW0gaW1tZWRpYXRlICB7Ym9vbH0g57uZIGltbWVkaWF0ZeWPguaVsOS8oOmAkmZhbHNlIOe7keWumueahOWHveaVsOWFiOaJp+ihjO+8jOiAjOS4jeaYr2RlbGF55ZCO5ZCO5omn6KGM44CCXG4qIEByZXR1cm4ge2Z1bmN0aW9ufeWunumZheiwg+eUqOWHveaVsFxuKi9cblxuZXhwb3J0IGNvbnN0IERlYm91bmNlID0gKGZuLCBkZWxheSwgaW1tZWRpYXRlKSA9PiBUaHJvdHRsZShmbiwgZGVsYXksIGltbWVkaWF0ZSwgdHJ1ZSlcbiJdfQ==