# GNB_PRIMARY_MATH

### Main Javascript Framework

-	[小程序组件化开发框架-WePY](https://tencent.github.io/wepy/document.html#/)

### UI Compoents

-	[有赞微信小程序UI库](https://github.com/youzan/zanui-weapp)


## File Structure Introduction

```
├── dist       # Dist Folder
├── src         # Code Folder
  ├── libs      # 第三方组件
  ├── features    # 功能
    ├── init          # 进入前的配置页面
    ├── workbook      # 练习册
    ├── error         # 记错题
    ├── my          # 个人中心
```

## Install
```
npm/yarn install
npm/wepy build --watch
open 微信开发者工具 打开DIST文件夹
```
## 注意
使用微信开发者工具-->添加项目，项目目录请选择dist目录。
微信开发者工具-->项目-->关闭ES6转ES5。 重要：漏掉此项会运行报错。
微信开发者工具-->项目-->关闭上传代码时样式自动补全。 重要：某些情况下漏掉此项也会运行报错。
微信开发者工具-->项目-->关闭代码压缩上传。 重要：开启后，会导致真机computed, props.sync 等等属性失效。
本地项目根目录运行wepy build --watch，开启实时编译。（注：如果同时在微信开发者工具-->设置-->编辑器中勾选了文件保存时自动编译小程序，将可以实时预览，非常方便。）
