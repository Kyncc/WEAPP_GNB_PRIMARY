<style lang="less" scoped>
.zan-btn {
  border-radius: 0 !important;
}
.search{
  position:fixed;
  top:0;
  left: 0;
  width: 100%;
  height: 45px;
  z-index: 999;
  margin-top: 0;
  .zan-cell{
    padding: 5px 15px;
  }
}
</style>

<template>
  <view class="container">
    <!--搜索-->
    <view class="zan-panel search">
      <searchField :options.sync="base_search" componentId="searchField"/>
    </view>
    <!--习题册区间-->
    <view class="zan-panel" style="margin-top:55px;">
      <scroll>
        <repeat for="{{ workbookList }}" key="pindex" index="pindex" item="item">
          <view class="zan-card">
            <!--习题册图片-->
            <view class="zan-card__thumb" @tap="_preview({{ item.img.url }})">
              <image class="zan-card__img" src="{{ item.img.url }}?imageView2/2/w/180/h/270/format/jpg/q/75" mode="aspectFit" lazy-load='true'/>
            </view>
            <!--习题册详情-->
            <view class="zan-card__detail" @tap="_edit({{ pindex}}, {{item.id}})">
              <view class="zan-card__detail-row">
                <view class="zan-card__left-col zan-font-14" style="color:#3FC6C6">{{item.year}}版</view>
              </view>
              <view class="zan-card__detail-row zan-c-gray-darker">
                <view class="zan-card__right-col">
                  <button wx:if="{{ item.status }}" class="zan-btn zan-btn--small zan-btn--plain zan-btn--warn">删除</button>
                  <button wx:else class="zan-btn zan-btn--small zan-btn--plain zan-btn--primary">添加</button>
                </view>
                <view class="zan-card__left-col zan-font-16" style="margin-bottom: 3px;">{{item.name}}</view>
                <repeat for="{{item.version}}" key="index" index="index" item="version">
                  <view class="zan-card__left-col zan-c-gray zan-font-12" style="margin-bottom: 6rpx;">{{version}}</view>
                </repeat>
              </view>
            </view>
          </view>
        </repeat>
        <!--进入想要习题册-->
        <navigator open-type="navigate" url="/pages/workbook/want" hover-class="none" style="background:#F9F9F9">
          <view class="zan-row zan-center" style="padding:30rpx 0;">
            <view class="zan-col zan-col-24 zan-font-14 zan-c-gray">没有找到想要的习题册？
              <text style="color:#FF7043;text-decoration:underline;">告诉我们</text>
            </view>
          </view>
        </navigator>
      </scroll>
    </view>
    <!--习题册区间End-->
  </view>
</template>

<script>
import wepy from 'wepy'
import zanField from '@/components/zan-field'

export default class WorkbookAdd extends wepy.page {
  components = {
    searchField: zanField
  }

  data = {
    workbookList: [],
    inputShowed: false,
    inputVal: '',
    textbookId: '',
    base_search: {
      title: '搜索习题册',
      value: '',
      placeholder: '请输入练习册名称'
    }
  }

  events = {
    async zanFieldChange(e) {
      this.base_search.value = e.detail.value
      this.workbookList = await this._getAllWorkbook(this.textbookId, this.base_search.value)
      this.$apply()
    }
  }

  methods = {
    /** 查看练习册大图 */
    _preview (url) {
      wepy.previewImage({current: `${url}-primaryError`, urls: [`${url}-primaryError`]})
    },
    /** 练习册增加删除 */
    async _edit (index, id) {
      this.workbookList[index].status = await this._setWorkbook(id)
      this.$apply()
    }
  }

  /** 编辑习题册 */
  _setWorkbook (id) {
    return new Promise((resolve, reject) => {
      wepy.request({
        url: 'https://primary.guinaben.com/workbook/edit',
        method: 'POST',
        data: {
          workbookId: id
        },
        success (res) {
          resolve(res.status)
        },
        fail (err) {
          reject(err)
        }
      })
    })
  }

  // 添加我的练习册
  _getAllWorkbook (id, name) {
    return new Promise((resolve, reject) => {
      wepy.request({
        url: 'https://primary.guinaben.com/workbook/all',
        data: {
          name: name,
          textbookId: id
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

  async onLoad (options) {
    this.textbookId = options.id
    this.workbookList = await this._getAllWorkbook(this.textbookId, this.base_search.value)
    this.$apply()
  }

  onShow () {
    this.base_search.value = ''
    this.$apply()
  }
}
</script>
