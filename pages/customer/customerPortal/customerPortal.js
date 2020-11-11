// pages/customer/customerList/customerPortal.js

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto: "Hongjie Wu's Portal",
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  bindViewTap: function() {
    wx.navigateTo({
      url: '../customerPortal',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    }else if (this.data.canIUse) {
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        },
        fail: function() {
          wx.showModal({
            title: 'warning',
            content: 'not autherithed, please go the the autherization page',
            success: function (res) {
              if (res.confirm) {
                console.log('customer confirm')
                wx.navigateTo({
                  // url undefined todo
                  url: '../../tologin/login',
                })
              }
            }
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})