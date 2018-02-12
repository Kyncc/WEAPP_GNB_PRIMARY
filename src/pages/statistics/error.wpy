<style lang="less" scoped>
.footer{
  position:fixed;
  bottom: 0px;
  left:0;
  width:100%;
  padding: 15px 0;
  background: #F9F9F9;
  .zan-btn--primary{
    border-radius: 30px;
  }
}
</style>

<template>
  <view class="container">
    <repeat for="{{error}}" key="index" index="index" item="item">
      <view class="zan-panel">
        <view class="zan-cell" style="padding: 5px 0" @tap='_preview({{item.errorImg.url}})'>
          <image mode="aspectFit" style="width:100%;height:{{ item.errorImg.height/4 }}px" src="{{item.errorImg.url}}?mageMogr2/auto-orient/thumbnail/750x/format/jpg/interlace/1/blur/1x0/quality/100|imageslim" lazy-load="true"/>
        </view>
        <view class="zan-cell zan-font-12" style="padding: 7px 15px">
          <view class="zan-cell__bd" style="color: #3fc6c6">{{item.workbookName}}</view>
        </view>
      </view>
    </repeat>
    <view class="footer">
      <view class="zan-row">
        <button class="zan-col zan-col-16 zan-col-offset-4 zan-btn zan-btn--primary" @tap='_download'>下载{{error.length}}道错题</button>
      </view>
    </view>
  </view>
</template>

<script>
import wepy from 'wepy'
import InfiniteScroll from '@/components/gnb-infiniteScroll'

export default class StatisticsError extends wepy.page {
  data = {
    offset: '',
    error: [],
    id: '',
    scrollDisabled: false,
    isNothing: false
  }

  components = {
    InfiniteScroll: InfiniteScroll
  }

  methods = {
    /** 查看大图 */
    _preview (url) {
      wepy.previewImage({current: `${url}-primaryError`, urls: this.imgs})
    },
    _download () {
      // 先判断是否会员
      wepy.navigateTo({
        url: `/pages/my/email?id=${this.id}&type=statistics`
      })
    }
  }

  computed = {
    /** 图片集 */
    imgs () {
      let urls = []
      for (let img of this.error) {
        urls.push(`${img.errorImg.url}-primaryError`)
      }
      return urls
    }
  }

  /** 获取错题数据 */
  _getErrorList (id, offset) {
    return new Promise((resolve, reject) => {
      wepy.request({
        url: 'https://primary.guinaben.com/textbook/statistics/error',
        data: {
          chapterId: id,
          offset: offset
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
    let result = await this._getErrorList(options.id, this.offset)
    this.id = options.id
    this.error = result.errorList
    this.offset = result.offset
    this.$apply()
  }
}
</script>
