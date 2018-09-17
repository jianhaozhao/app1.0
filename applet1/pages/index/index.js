//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    asd:1,
    motto: '小说',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    list: [
      {
        id: 'view',
        name: '阅读',
        open: false,
        pages: ['view', 'scroll-view', 'swiper']
      }, {
        id: 'content',
        name: '电影',
        open: false,
        pages: ['text', 'icon', 'progress']
      }, {
        id: 'form',
        name: '动漫',
        open: false,
        pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'radio', 'slider', 'switch', 'textarea']
      }, {
        id: 'nav',
        name: '风景',
        open: false,
        pages: ['navigator']
      }, {
        id: 'media',
        name: '还可以',
        open: false,
        pages: ['image', 'audio', 'video']
      }, {
        id: 'map',
        name: '我试试',
        pages: ['map']
      }, {
        id: 'canvas',
        name: '不知道行不行',
        pages: ['canvas']
      }
    ],
    array: [1, 2, 3, 4, 5]

  },
  //事件处理函数
  bindViewTap: function(event) {
    var url = '../' + event.currentTarget.dataset.value + '/' + event.currentTarget.dataset.value
    console.info( event.currentTarget)
    wx.navigateTo({ 
      url: url
    })
  },
  clickone:function(res){
    this.setData({
        asd: this.data.asd + 1
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        console.info('我是用户反馈', res.userInfo)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
