'use strict';

var _f = function _f() {};

module.exports = {
  showZanDialog: function showZanDialog() {
    var _this = this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _options$buttons = options.buttons,
        buttons = _options$buttons === undefined ? [] : _options$buttons,
        _options$title = options.title,
        title = _options$title === undefined ? '' : _options$title,
        _options$content = options.content,
        content = _options$content === undefined ? ' ' : _options$content,
        _options$buttonsShowV = options.buttonsShowVertical,
        buttonsShowVertical = _options$buttonsShowV === undefined ? false : _options$buttonsShowV,
        _options$showConfirm = options.showConfirm,
        showConfirm = _options$showConfirm === undefined ? true : _options$showConfirm,
        _options$confirmText = options.confirmText,
        confirmText = _options$confirmText === undefined ? '确定' : _options$confirmText,
        _options$confirmColor = options.confirmColor,
        confirmColor = _options$confirmColor === undefined ? '#3CC51F' : _options$confirmColor,
        _options$showCancel = options.showCancel,
        showCancel = _options$showCancel === undefined ? false : _options$showCancel,
        _options$cancelText = options.cancelText,
        cancelText = _options$cancelText === undefined ? '取消' : _options$cancelText,
        _options$cancelColor = options.cancelColor,
        cancelColor = _options$cancelColor === undefined ? '#333' : _options$cancelColor;

    // 处理默认按钮的展示
    // 纵向排布确认按钮在上方

    var showCustomBtns = false;
    if (buttons.length === 0) {
      if (showConfirm) {
        buttons.push({
          type: 'confirm',
          text: confirmText,
          color: confirmColor
        });
      }

      if (showCancel) {
        var cancelButton = {
          type: 'cancel',
          text: cancelText,
          color: cancelColor
        };
        if (buttonsShowVertical) {
          buttons.push(cancelButton);
        } else {
          buttons.unshift(cancelButton);
        }
      }
    } else {
      showCustomBtns = true;
    }

    return new Promise(function (resolve, reject) {
      _this.setData({
        zanDialog: {
          show: true,
          showCustomBtns: showCustomBtns,
          buttons: buttons,
          title: title,
          content: content,
          buttonsShowVertical: buttonsShowVertical,
          showConfirm: showConfirm,
          confirmText: confirmText,
          confirmColor: confirmColor,
          showCancel: showCancel,
          cancelText: cancelText,
          cancelColor: cancelColor,
          // 回调钩子
          resolve: resolve,
          reject: reject
        }
      });
    });
  },
  _handleZanDialogButtonClick: function _handleZanDialogButtonClick(e) {
    var _e$currentTarget = e.currentTarget,
        currentTarget = _e$currentTarget === undefined ? {} : _e$currentTarget;
    var _currentTarget$datase = currentTarget.dataset,
        dataset = _currentTarget$datase === undefined ? {} : _currentTarget$datase;

    // 获取当次弹出框的信息

    var zanDialogData = this.data.zanDialog || {};
    var _zanDialogData$resolv = zanDialogData.resolve,
        resolve = _zanDialogData$resolv === undefined ? _f : _zanDialogData$resolv,
        _zanDialogData$reject = zanDialogData.reject,
        reject = _zanDialogData$reject === undefined ? _f : _zanDialogData$reject;

    // 重置 zanDialog 里的内容

    this.setData({
      zanDialog: { show: false }
    });

    // 自定义按钮，全部 resolve 形式返回，根据 type 区分点击按钮
    if (zanDialogData.showCustomBtns) {
      resolve({
        type: dataset.type
      });
      return;
    }

    // 默认按钮，确认为 resolve，取消为 reject
    if (dataset.type === 'confirm') {
      resolve({
        type: 'confirm'
      });
    } else {
      reject({
        type: 'cancel'
      });
    }
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIl9mIiwibW9kdWxlIiwiZXhwb3J0cyIsInNob3daYW5EaWFsb2ciLCJvcHRpb25zIiwiYnV0dG9ucyIsInRpdGxlIiwiY29udGVudCIsImJ1dHRvbnNTaG93VmVydGljYWwiLCJzaG93Q29uZmlybSIsImNvbmZpcm1UZXh0IiwiY29uZmlybUNvbG9yIiwic2hvd0NhbmNlbCIsImNhbmNlbFRleHQiLCJjYW5jZWxDb2xvciIsInNob3dDdXN0b21CdG5zIiwibGVuZ3RoIiwicHVzaCIsInR5cGUiLCJ0ZXh0IiwiY29sb3IiLCJjYW5jZWxCdXR0b24iLCJ1bnNoaWZ0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXREYXRhIiwiemFuRGlhbG9nIiwic2hvdyIsIl9oYW5kbGVaYW5EaWFsb2dCdXR0b25DbGljayIsImUiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInphbkRpYWxvZ0RhdGEiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLEtBQUssU0FBTEEsRUFBSyxHQUFZLENBQUUsQ0FBekI7O0FBRUFDLE9BQU9DLE9BQVAsR0FBaUI7QUFDZkMsZUFEZSwyQkFDYTtBQUFBOztBQUFBLFFBQWRDLE9BQWMsdUVBQUosRUFBSTtBQUFBLDJCQXVCdEJBLE9BdkJzQixDQUl4QkMsT0FKd0I7QUFBQSxRQUl4QkEsT0FKd0Isb0NBSWQsRUFKYztBQUFBLHlCQXVCdEJELE9BdkJzQixDQU14QkUsS0FOd0I7QUFBQSxRQU14QkEsS0FOd0Isa0NBTWhCLEVBTmdCO0FBQUEsMkJBdUJ0QkYsT0F2QnNCLENBUXhCRyxPQVJ3QjtBQUFBLFFBUXhCQSxPQVJ3QixvQ0FRZCxHQVJjO0FBQUEsZ0NBdUJ0QkgsT0F2QnNCLENBVXhCSSxtQkFWd0I7QUFBQSxRQVV4QkEsbUJBVndCLHlDQVVGLEtBVkU7QUFBQSwrQkF1QnRCSixPQXZCc0IsQ0FZeEJLLFdBWndCO0FBQUEsUUFZeEJBLFdBWndCLHdDQVlWLElBWlU7QUFBQSwrQkF1QnRCTCxPQXZCc0IsQ0FjeEJNLFdBZHdCO0FBQUEsUUFjeEJBLFdBZHdCLHdDQWNWLElBZFU7QUFBQSxnQ0F1QnRCTixPQXZCc0IsQ0FnQnhCTyxZQWhCd0I7QUFBQSxRQWdCeEJBLFlBaEJ3Qix5Q0FnQlQsU0FoQlM7QUFBQSw4QkF1QnRCUCxPQXZCc0IsQ0FrQnhCUSxVQWxCd0I7QUFBQSxRQWtCeEJBLFVBbEJ3Qix1Q0FrQlgsS0FsQlc7QUFBQSw4QkF1QnRCUixPQXZCc0IsQ0FvQnhCUyxVQXBCd0I7QUFBQSxRQW9CeEJBLFVBcEJ3Qix1Q0FvQlgsSUFwQlc7QUFBQSwrQkF1QnRCVCxPQXZCc0IsQ0FzQnhCVSxXQXRCd0I7QUFBQSxRQXNCeEJBLFdBdEJ3Qix3Q0FzQlYsTUF0QlU7O0FBeUIxQjtBQUNBOztBQUNBLFFBQUlDLGlCQUFpQixLQUFyQjtBQUNBLFFBQUlWLFFBQVFXLE1BQVIsS0FBbUIsQ0FBdkIsRUFBMEI7QUFDeEIsVUFBSVAsV0FBSixFQUFpQjtBQUNmSixnQkFBUVksSUFBUixDQUFhO0FBQ1hDLGdCQUFNLFNBREs7QUFFWEMsZ0JBQU1ULFdBRks7QUFHWFUsaUJBQU9UO0FBSEksU0FBYjtBQUtEOztBQUVELFVBQUlDLFVBQUosRUFBZ0I7QUFDZCxZQUFNUyxlQUFlO0FBQ25CSCxnQkFBTSxRQURhO0FBRW5CQyxnQkFBTU4sVUFGYTtBQUduQk8saUJBQU9OO0FBSFksU0FBckI7QUFLQSxZQUFJTixtQkFBSixFQUF5QjtBQUN2Qkgsa0JBQVFZLElBQVIsQ0FBYUksWUFBYjtBQUNELFNBRkQsTUFFTztBQUNMaEIsa0JBQVFpQixPQUFSLENBQWdCRCxZQUFoQjtBQUNEO0FBQ0Y7QUFDRixLQXJCRCxNQXFCTztBQUNMTix1QkFBaUIsSUFBakI7QUFDRDs7QUFFRCxXQUFPLElBQUlRLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsWUFBS0MsT0FBTCxDQUFhO0FBQ1hDLG1CQUFXO0FBQ1RDLGdCQUFNLElBREc7QUFFVGIsd0NBRlM7QUFHVFYsMEJBSFM7QUFJVEMsc0JBSlM7QUFLVEMsMEJBTFM7QUFNVEMsa0RBTlM7QUFPVEMsa0NBUFM7QUFRVEMsa0NBUlM7QUFTVEMsb0NBVFM7QUFVVEMsZ0NBVlM7QUFXVEMsZ0NBWFM7QUFZVEMsa0NBWlM7QUFhVDtBQUNBVSwwQkFkUztBQWVUQztBQWZTO0FBREEsT0FBYjtBQW1CRCxLQXBCTSxDQUFQO0FBcUJELEdBM0VjO0FBNkVmSSw2QkE3RWUsdUNBNkVhQyxDQTdFYixFQTZFZ0I7QUFBQSwyQkFDRUEsQ0FERixDQUNyQkMsYUFEcUI7QUFBQSxRQUNyQkEsYUFEcUIsb0NBQ0wsRUFESztBQUFBLGdDQUVKQSxhQUZJLENBRXJCQyxPQUZxQjtBQUFBLFFBRXJCQSxPQUZxQix5Q0FFWCxFQUZXOztBQUk3Qjs7QUFDQSxRQUFNQyxnQkFBZ0IsS0FBS0MsSUFBTCxDQUFVUCxTQUFWLElBQXVCLEVBQTdDO0FBTDZCLGdDQU1TTSxhQU5ULENBTXJCVCxPQU5xQjtBQUFBLFFBTXJCQSxPQU5xQix5Q0FNWHhCLEVBTlc7QUFBQSxnQ0FNU2lDLGFBTlQsQ0FNUFIsTUFOTztBQUFBLFFBTVBBLE1BTk8seUNBTUV6QixFQU5GOztBQVE3Qjs7QUFDQSxTQUFLMEIsT0FBTCxDQUFhO0FBQ1hDLGlCQUFXLEVBQUVDLE1BQU0sS0FBUjtBQURBLEtBQWI7O0FBSUE7QUFDQSxRQUFJSyxjQUFjbEIsY0FBbEIsRUFBa0M7QUFDaENTLGNBQVE7QUFDTk4sY0FBTWMsUUFBUWQ7QUFEUixPQUFSO0FBR0E7QUFDRDs7QUFFRDtBQUNBLFFBQUljLFFBQVFkLElBQVIsS0FBaUIsU0FBckIsRUFBZ0M7QUFDOUJNLGNBQVE7QUFDTk4sY0FBTTtBQURBLE9BQVI7QUFHRCxLQUpELE1BSU87QUFDTE8sYUFBTztBQUNMUCxjQUFNO0FBREQsT0FBUDtBQUdEO0FBQ0Y7QUE1R2MsQ0FBakIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBfZiA9IGZ1bmN0aW9uICgpIHt9O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgc2hvd1phbkRpYWxvZyhvcHRpb25zID0ge30pIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgLy8g6Ieq5a6a5LmJIGJ0biDliJfooahcclxuICAgICAgLy8geyB0eXBlOiDmjInpkq7nsbvlnovvvIzlm57osIPml7bku6XmraTkvZzkuLrljLrliIbkvp3mja7vvIx0ZXh0OiDmjInpkq7mlofmoYgsIGNvbG9yOiDmjInpkq7mloflrZfpopzoibIgfVxyXG4gICAgICBidXR0b25zID0gW10sXHJcbiAgICAgIC8vIOagh+mimFxyXG4gICAgICB0aXRsZSA9ICcnLFxyXG4gICAgICAvLyDlhoXlrrlcclxuICAgICAgY29udGVudCA9ICcgJyxcclxuICAgICAgLy8g5oyJ6ZKu5piv5ZCm5bGV56S65Li657q15ZCRXHJcbiAgICAgIGJ1dHRvbnNTaG93VmVydGljYWwgPSBmYWxzZSxcclxuICAgICAgLy8g5piv5ZCm5bGV56S656Gu5a6aXHJcbiAgICAgIHNob3dDb25maXJtID0gdHJ1ZSxcclxuICAgICAgLy8g56Gu6K6k5oyJ6ZKu5paH5qGIXHJcbiAgICAgIGNvbmZpcm1UZXh0ID0gJ+ehruWumicsXHJcbiAgICAgIC8vIOehruiupOaMiemSruminOiJslxyXG4gICAgICBjb25maXJtQ29sb3IgPSAnIzNDQzUxRicsXHJcbiAgICAgIC8vIOaYr+WQpuWxleekuuWPlua2iFxyXG4gICAgICBzaG93Q2FuY2VsID0gZmFsc2UsXHJcbiAgICAgIC8vIOWPlua2iOaMiemSruaWh+ahiFxyXG4gICAgICBjYW5jZWxUZXh0ID0gJ+WPlua2iCcsXHJcbiAgICAgIC8vIOWPlua2iOaMiemSruminOiJslxyXG4gICAgICBjYW5jZWxDb2xvciA9ICcjMzMzJ1xyXG4gICAgfSA9IG9wdGlvbnM7XHJcblxyXG4gICAgLy8g5aSE55CG6buY6K6k5oyJ6ZKu55qE5bGV56S6XHJcbiAgICAvLyDnurXlkJHmjpLluIPnoa7orqTmjInpkq7lnKjkuIrmlrlcclxuICAgIGxldCBzaG93Q3VzdG9tQnRucyA9IGZhbHNlO1xyXG4gICAgaWYgKGJ1dHRvbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGlmIChzaG93Q29uZmlybSkge1xyXG4gICAgICAgIGJ1dHRvbnMucHVzaCh7XHJcbiAgICAgICAgICB0eXBlOiAnY29uZmlybScsXHJcbiAgICAgICAgICB0ZXh0OiBjb25maXJtVGV4dCxcclxuICAgICAgICAgIGNvbG9yOiBjb25maXJtQ29sb3JcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHNob3dDYW5jZWwpIHtcclxuICAgICAgICBjb25zdCBjYW5jZWxCdXR0b24gPSB7XHJcbiAgICAgICAgICB0eXBlOiAnY2FuY2VsJyxcclxuICAgICAgICAgIHRleHQ6IGNhbmNlbFRleHQsXHJcbiAgICAgICAgICBjb2xvcjogY2FuY2VsQ29sb3JcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChidXR0b25zU2hvd1ZlcnRpY2FsKSB7XHJcbiAgICAgICAgICBidXR0b25zLnB1c2goY2FuY2VsQnV0dG9uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYnV0dG9ucy51bnNoaWZ0KGNhbmNlbEJ1dHRvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzaG93Q3VzdG9tQnRucyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB6YW5EaWFsb2c6IHtcclxuICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICBzaG93Q3VzdG9tQnRucyxcclxuICAgICAgICAgIGJ1dHRvbnMsXHJcbiAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgIGNvbnRlbnQsXHJcbiAgICAgICAgICBidXR0b25zU2hvd1ZlcnRpY2FsLFxyXG4gICAgICAgICAgc2hvd0NvbmZpcm0sXHJcbiAgICAgICAgICBjb25maXJtVGV4dCxcclxuICAgICAgICAgIGNvbmZpcm1Db2xvcixcclxuICAgICAgICAgIHNob3dDYW5jZWwsXHJcbiAgICAgICAgICBjYW5jZWxUZXh0LFxyXG4gICAgICAgICAgY2FuY2VsQ29sb3IsXHJcbiAgICAgICAgICAvLyDlm57osIPpkqnlrZBcclxuICAgICAgICAgIHJlc29sdmUsXHJcbiAgICAgICAgICByZWplY3RcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgX2hhbmRsZVphbkRpYWxvZ0J1dHRvbkNsaWNrKGUpIHtcclxuICAgIGNvbnN0IHsgY3VycmVudFRhcmdldCA9IHt9IH0gPSBlO1xyXG4gICAgY29uc3QgeyBkYXRhc2V0ID0ge30gfSA9IGN1cnJlbnRUYXJnZXQ7XHJcblxyXG4gICAgLy8g6I635Y+W5b2T5qyh5by55Ye65qGG55qE5L+h5oGvXHJcbiAgICBjb25zdCB6YW5EaWFsb2dEYXRhID0gdGhpcy5kYXRhLnphbkRpYWxvZyB8fCB7fTtcclxuICAgIGNvbnN0IHsgcmVzb2x2ZSA9IF9mLCByZWplY3QgPSBfZiB9ID0gemFuRGlhbG9nRGF0YTtcclxuXHJcbiAgICAvLyDph43nva4gemFuRGlhbG9nIOmHjOeahOWGheWuuVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgemFuRGlhbG9nOiB7IHNob3c6IGZhbHNlIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIOiHquWumuS5ieaMiemSru+8jOWFqOmDqCByZXNvbHZlIOW9ouW8j+i/lOWbnu+8jOagueaNriB0eXBlIOWMuuWIhueCueWHu+aMiemSrlxyXG4gICAgaWYgKHphbkRpYWxvZ0RhdGEuc2hvd0N1c3RvbUJ0bnMpIHtcclxuICAgICAgcmVzb2x2ZSh7XHJcbiAgICAgICAgdHlwZTogZGF0YXNldC50eXBlXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6buY6K6k5oyJ6ZKu77yM56Gu6K6k5Li6IHJlc29sdmXvvIzlj5bmtojkuLogcmVqZWN0XHJcbiAgICBpZiAoZGF0YXNldC50eXBlID09PSAnY29uZmlybScpIHtcclxuICAgICAgcmVzb2x2ZSh7XHJcbiAgICAgICAgdHlwZTogJ2NvbmZpcm0nXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVqZWN0KHtcclxuICAgICAgICB0eXBlOiAnY2FuY2VsJ1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcbiJdfQ==