<style lang="less" scoped>
.container{
  position: relative;
  color: #c69c6d;
}
.correct_name{
  position:absolute;
  top: 36%;
  width:100%;
}
.correct_content{
  position:absolute;
  top: 52%;
  left: 8%;
  width:85%;
}
.correct_date{
  position:absolute;
  top: 72%;
  left: 14%;
}
.correct_app{
  position:absolute;
  top: 72%;
  left: 71%;
}
</style>
<template>
  <view class="container">
    <view class="correct_name zan-center zan-font-22 zan-font-bold">{{name}}</view>
    <view class="correct_content">{{result.content}}</view>
    <view class="correct_date zan-center zan-font-12">{{result.date}}</view>
    <view class="correct_app zan-center zan-font-14">归纳本</view>
    <image src="../../common/resources/statisticsCorrect.jpg" style="width:750rpx;height:100vh" mode="aspectFit"/>
  </view>
</template>

<script>
  import wepy from 'wepy'

  export default class StatisticsCorrect extends wepy.page {
    data = {
      result: [],
      name: ''
    }

    // 获取文案内容
    _getContent (id) {
      return new Promise((resolve, reject) => {
        wepy.request({
          url: 'https://primary.guinaben.com/textbook/statistics/correct',
          data: {
            chapterId: id
          },
          success (res) {
            resolve(res)
          },
          fail (err) {
            reject(err)
          }
        })
      })
    }

    async onLoad(options) {
      wx.setNavigationBarTitle({title: options.name})
      this.result = await this._getContent(options.id)
      this.name = wepy.getStorageSync('User').name
      this.$apply()
    }
  }
</script>
