'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// 从事件对象中解析得到 componentId
// 需要在元素上声明 data-component-id
function extractComponentId() {
  var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _ref = event.currentTarget || {},
      componentId = _ref.dataset.componentId;

  return componentId;
}

/*
  注：默认合并所有生命周期函数
  配置合并指定的生命周期 or 忽略指定字段
  const extend = extendCreator({
    life: ['onLoad', 'onPullDownRefresh'],
    exclude: ['binder']
  });

  Page(extend({}, {
    onLoad() {},
    ...
  }));
*/

var LIFE_CYCLE = ['onLoad', 'onReady', 'onShow', 'onHide', 'onUnload', 'onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onPageScroll'];

var extendCreator = function extendCreator() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _config$life = config.life,
      life = _config$life === undefined ? LIFE_CYCLE : _config$life,
      _config$exclude = config.exclude,
      exclude = _config$exclude === undefined ? [] : _config$exclude;


  var excludeList = exclude.concat(LIFE_CYCLE.map(getFuncArrayName));

  if (!Array.isArray(life) || !Array.isArray(exclude)) throw new Error('Invalid Extend Config');
  var lifeCycleList = life.filter(function (item) {
    return LIFE_CYCLE.indexOf(item) >= 0;
  });
  return function extend(target) {
    for (var _len = arguments.length, objList = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      objList[_key - 1] = arguments[_key];
    }

    objList.forEach(function (source) {
      if (source) {
        var keys = Object.keys(source);
        keys.forEach(function (key) {
          var value = source[key];
          if (excludeList.indexOf(key) >= 0) return;
          if (lifeCycleList.indexOf(key) >= 0 && typeof value === 'function') {
            var funcArrayName = getFuncArrayName(key);
            if (!target[funcArrayName]) {
              target[funcArrayName] = [];
              if (target[key]) {
                target[funcArrayName].push(target[key]);
              }
              target[key] = function () {
                var _this = this;

                for (var _len2 = arguments.length, rest = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                  rest[_key2] = arguments[_key2];
                }

                target[funcArrayName].forEach(function (func) {
                  return func.apply(_this, rest);
                });
              };
            }

            if (source[funcArrayName]) {
              var _target$funcArrayName;

              // 经过生命周期合并的组件直接整合函数列表
              (_target$funcArrayName = target[funcArrayName]).push.apply(_target$funcArrayName, _toConsumableArray(source[funcArrayName]));
            } else {
              // 添加生命周期函数进入函数列表
              target[funcArrayName].push(value);
            }
          } else {
            target[key] = value;
          }
        });
      }
    });
    return target;
  };
};

var getFuncArrayName = function getFuncArrayName(name) {
  return '__$' + name;
};

module.exports = {
  extractComponentId: extractComponentId,
  extend: Object.assign,
  extendCreator: extendCreator
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlci5qcyJdLCJuYW1lcyI6WyJleHRyYWN0Q29tcG9uZW50SWQiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJjb21wb25lbnRJZCIsImRhdGFzZXQiLCJMSUZFX0NZQ0xFIiwiZXh0ZW5kQ3JlYXRvciIsImNvbmZpZyIsImxpZmUiLCJleGNsdWRlIiwiZXhjbHVkZUxpc3QiLCJjb25jYXQiLCJtYXAiLCJnZXRGdW5jQXJyYXlOYW1lIiwiQXJyYXkiLCJpc0FycmF5IiwiRXJyb3IiLCJsaWZlQ3ljbGVMaXN0IiwiZmlsdGVyIiwiaW5kZXhPZiIsIml0ZW0iLCJleHRlbmQiLCJ0YXJnZXQiLCJvYmpMaXN0IiwiZm9yRWFjaCIsInNvdXJjZSIsImtleXMiLCJPYmplY3QiLCJrZXkiLCJ2YWx1ZSIsImZ1bmNBcnJheU5hbWUiLCJwdXNoIiwicmVzdCIsImZ1bmMiLCJhcHBseSIsIm5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBLFNBQVNBLGtCQUFULEdBQXdDO0FBQUEsTUFBWkMsS0FBWSx1RUFBSixFQUFJOztBQUFBLGFBQ0RBLE1BQU1DLGFBQU4sSUFBdUIsRUFEdEI7QUFBQSxNQUNuQkMsV0FEbUIsUUFDOUJDLE9BRDhCLENBQ25CRCxXQURtQjs7QUFFdEMsU0FBT0EsV0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7Ozs7OztBQWNBLElBQU1FLGFBQWEsQ0FBQyxRQUFELEVBQVcsU0FBWCxFQUFzQixRQUF0QixFQUFnQyxRQUFoQyxFQUEwQyxVQUExQyxFQUFzRCxtQkFBdEQsRUFBMkUsZUFBM0UsRUFBNEYsbUJBQTVGLEVBQWlILGNBQWpILENBQW5COztBQUVBLElBQU1DLGdCQUFnQixTQUFoQkEsYUFBZ0IsR0FBaUI7QUFBQSxNQUFoQkMsTUFBZ0IsdUVBQVAsRUFBTztBQUFBLHFCQUlqQ0EsTUFKaUMsQ0FFbkNDLElBRm1DO0FBQUEsTUFFbkNBLElBRm1DLGdDQUU1QkgsVUFGNEI7QUFBQSx3QkFJakNFLE1BSmlDLENBR25DRSxPQUhtQztBQUFBLE1BR25DQSxPQUhtQyxtQ0FHekIsRUFIeUI7OztBQU1yQyxNQUFNQyxjQUFjRCxRQUFRRSxNQUFSLENBQWVOLFdBQVdPLEdBQVgsQ0FBZUMsZ0JBQWYsQ0FBZixDQUFwQjs7QUFFQSxNQUFJLENBQUNDLE1BQU1DLE9BQU4sQ0FBY1AsSUFBZCxDQUFELElBQXdCLENBQUNNLE1BQU1DLE9BQU4sQ0FBY04sT0FBZCxDQUE3QixFQUFxRCxNQUFNLElBQUlPLEtBQUosQ0FBVSx1QkFBVixDQUFOO0FBQ3JELE1BQUlDLGdCQUFnQlQsS0FBS1UsTUFBTCxDQUFZO0FBQUEsV0FBUWIsV0FBV2MsT0FBWCxDQUFtQkMsSUFBbkIsS0FBNEIsQ0FBcEM7QUFBQSxHQUFaLENBQXBCO0FBQ0EsU0FBTyxTQUFTQyxNQUFULENBQWdCQyxNQUFoQixFQUFvQztBQUFBLHNDQUFUQyxPQUFTO0FBQVRBLGFBQVM7QUFBQTs7QUFDekNBLFlBQVFDLE9BQVIsQ0FBZ0IsVUFBQ0MsTUFBRCxFQUFZO0FBQzFCLFVBQUlBLE1BQUosRUFBWTtBQUNWLFlBQUlDLE9BQU9DLE9BQU9ELElBQVAsQ0FBWUQsTUFBWixDQUFYO0FBQ0FDLGFBQUtGLE9BQUwsQ0FBYSxVQUFDSSxHQUFELEVBQVM7QUFDcEIsY0FBSUMsUUFBUUosT0FBT0csR0FBUCxDQUFaO0FBQ0EsY0FBSWxCLFlBQVlTLE9BQVosQ0FBb0JTLEdBQXBCLEtBQTRCLENBQWhDLEVBQW1DO0FBQ25DLGNBQUlYLGNBQWNFLE9BQWQsQ0FBc0JTLEdBQXRCLEtBQThCLENBQTlCLElBQW1DLE9BQU9DLEtBQVAsS0FBaUIsVUFBeEQsRUFBb0U7QUFDbEUsZ0JBQUlDLGdCQUFnQmpCLGlCQUFpQmUsR0FBakIsQ0FBcEI7QUFDQSxnQkFBSSxDQUFDTixPQUFPUSxhQUFQLENBQUwsRUFBNEI7QUFDMUJSLHFCQUFPUSxhQUFQLElBQXdCLEVBQXhCO0FBQ0Esa0JBQUlSLE9BQU9NLEdBQVAsQ0FBSixFQUFpQjtBQUNmTix1QkFBT1EsYUFBUCxFQUFzQkMsSUFBdEIsQ0FBMkJULE9BQU9NLEdBQVAsQ0FBM0I7QUFDRDtBQUNETixxQkFBT00sR0FBUCxJQUFjLFlBQW1CO0FBQUE7O0FBQUEsbURBQU5JLElBQU07QUFBTkEsc0JBQU07QUFBQTs7QUFDL0JWLHVCQUFPUSxhQUFQLEVBQXNCTixPQUF0QixDQUE4QjtBQUFBLHlCQUFRUyxLQUFLQyxLQUFMLFFBQWlCRixJQUFqQixDQUFSO0FBQUEsaUJBQTlCO0FBQ0QsZUFGRDtBQUdEOztBQUVELGdCQUFJUCxPQUFPSyxhQUFQLENBQUosRUFBMkI7QUFBQTs7QUFDekI7QUFDQSw4Q0FBT0EsYUFBUCxHQUFzQkMsSUFBdEIsaURBQThCTixPQUFPSyxhQUFQLENBQTlCO0FBQ0QsYUFIRCxNQUdPO0FBQ0w7QUFDQVIscUJBQU9RLGFBQVAsRUFBc0JDLElBQXRCLENBQTJCRixLQUEzQjtBQUNEO0FBQ0YsV0FuQkQsTUFtQk87QUFDTFAsbUJBQU9NLEdBQVAsSUFBY0MsS0FBZDtBQUNEO0FBQ0YsU0F6QkQ7QUEwQkQ7QUFDRixLQTlCRDtBQStCQSxXQUFPUCxNQUFQO0FBQ0QsR0FqQ0Q7QUFrQ0QsQ0E1Q0Q7O0FBOENBLElBQU1ULG1CQUFtQixTQUFuQkEsZ0JBQW1CO0FBQUEsaUJBQWNzQixJQUFkO0FBQUEsQ0FBekI7O0FBRUFDLE9BQU9DLE9BQVAsR0FBaUI7QUFDZnJDLHdDQURlO0FBRWZxQixVQUFRTSxPQUFPVyxNQUZBO0FBR2ZoQztBQUhlLENBQWpCIiwiZmlsZSI6ImhlbHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIOS7juS6i+S7tuWvueixoeS4reino+aekOW+l+WIsCBjb21wb25lbnRJZFxyXG4vLyDpnIDopoHlnKjlhYPntKDkuIrlo7DmmI4gZGF0YS1jb21wb25lbnQtaWRcclxuZnVuY3Rpb24gZXh0cmFjdENvbXBvbmVudElkKGV2ZW50ID0ge30pIHtcclxuICBjb25zdCB7IGRhdGFzZXQ6IHsgY29tcG9uZW50SWQgfSB9ID0gZXZlbnQuY3VycmVudFRhcmdldCB8fCB7fTtcclxuICByZXR1cm4gY29tcG9uZW50SWQ7XHJcbn1cclxuXHJcbi8qXHJcbiAg5rOo77ya6buY6K6k5ZCI5bm25omA5pyJ55Sf5ZG95ZGo5pyf5Ye95pWwXHJcbiAg6YWN572u5ZCI5bm25oyH5a6a55qE55Sf5ZG95ZGo5pyfIG9yIOW/veeVpeaMh+WumuWtl+autVxyXG4gIGNvbnN0IGV4dGVuZCA9IGV4dGVuZENyZWF0b3Ioe1xyXG4gICAgbGlmZTogWydvbkxvYWQnLCAnb25QdWxsRG93blJlZnJlc2gnXSxcclxuICAgIGV4Y2x1ZGU6IFsnYmluZGVyJ11cclxuICB9KTtcclxuXHJcbiAgUGFnZShleHRlbmQoe30sIHtcclxuICAgIG9uTG9hZCgpIHt9LFxyXG4gICAgLi4uXHJcbiAgfSkpO1xyXG4qL1xyXG5cclxuY29uc3QgTElGRV9DWUNMRSA9IFsnb25Mb2FkJywgJ29uUmVhZHknLCAnb25TaG93JywgJ29uSGlkZScsICdvblVubG9hZCcsICdvblB1bGxEb3duUmVmcmVzaCcsICdvblJlYWNoQm90dG9tJywgJ29uU2hhcmVBcHBNZXNzYWdlJywgJ29uUGFnZVNjcm9sbCddO1xyXG5cclxuY29uc3QgZXh0ZW5kQ3JlYXRvciA9IChjb25maWcgPSB7fSkgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGxpZmUgPSBMSUZFX0NZQ0xFLFxyXG4gICAgZXhjbHVkZSA9IFtdXHJcbiAgfSA9IGNvbmZpZztcclxuXHJcbiAgY29uc3QgZXhjbHVkZUxpc3QgPSBleGNsdWRlLmNvbmNhdChMSUZFX0NZQ0xFLm1hcChnZXRGdW5jQXJyYXlOYW1lKSk7XHJcblxyXG4gIGlmICghQXJyYXkuaXNBcnJheShsaWZlKSB8fCAhQXJyYXkuaXNBcnJheShleGNsdWRlKSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIEV4dGVuZCBDb25maWcnKTtcclxuICBsZXQgbGlmZUN5Y2xlTGlzdCA9IGxpZmUuZmlsdGVyKGl0ZW0gPT4gTElGRV9DWUNMRS5pbmRleE9mKGl0ZW0pID49IDApO1xyXG4gIHJldHVybiBmdW5jdGlvbiBleHRlbmQodGFyZ2V0LCAuLi5vYmpMaXN0KSB7XHJcbiAgICBvYmpMaXN0LmZvckVhY2goKHNvdXJjZSkgPT4ge1xyXG4gICAgICBpZiAoc291cmNlKSB7XHJcbiAgICAgICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xyXG4gICAgICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICBsZXQgdmFsdWUgPSBzb3VyY2Vba2V5XTtcclxuICAgICAgICAgIGlmIChleGNsdWRlTGlzdC5pbmRleE9mKGtleSkgPj0gMCkgcmV0dXJuO1xyXG4gICAgICAgICAgaWYgKGxpZmVDeWNsZUxpc3QuaW5kZXhPZihrZXkpID49IDAgJiYgdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGxldCBmdW5jQXJyYXlOYW1lID0gZ2V0RnVuY0FycmF5TmFtZShrZXkpO1xyXG4gICAgICAgICAgICBpZiAoIXRhcmdldFtmdW5jQXJyYXlOYW1lXSkge1xyXG4gICAgICAgICAgICAgIHRhcmdldFtmdW5jQXJyYXlOYW1lXSA9IFtdO1xyXG4gICAgICAgICAgICAgIGlmICh0YXJnZXRba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0W2Z1bmNBcnJheU5hbWVdLnB1c2godGFyZ2V0W2tleV0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IGZ1bmN0aW9uICguLi5yZXN0KSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRbZnVuY0FycmF5TmFtZV0uZm9yRWFjaChmdW5jID0+IGZ1bmMuYXBwbHkodGhpcywgcmVzdCkpO1xyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChzb3VyY2VbZnVuY0FycmF5TmFtZV0pIHtcclxuICAgICAgICAgICAgICAvLyDnu4/ov4fnlJ/lkb3lkajmnJ/lkIjlubbnmoTnu4Tku7bnm7TmjqXmlbTlkIjlh73mlbDliJfooahcclxuICAgICAgICAgICAgICB0YXJnZXRbZnVuY0FycmF5TmFtZV0ucHVzaCguLi5zb3VyY2VbZnVuY0FycmF5TmFtZV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIC8vIOa3u+WKoOeUn+WRveWRqOacn+WHveaVsOi/m+WFpeWHveaVsOWIl+ihqFxyXG4gICAgICAgICAgICAgIHRhcmdldFtmdW5jQXJyYXlOYW1lXS5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBnZXRGdW5jQXJyYXlOYW1lID0gbmFtZSA9PiBgX18kJHtuYW1lfWA7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBleHRyYWN0Q29tcG9uZW50SWQsXHJcbiAgZXh0ZW5kOiBPYmplY3QuYXNzaWduLFxyXG4gIGV4dGVuZENyZWF0b3JcclxufTtcclxuIl19