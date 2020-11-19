// pages/customer/customerList/customerPortal.js

var app = getApp()
Page({

  data: {
    motto: "Hongjie Wu's Portal",
    userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo')
    orderItems: [ 
      {
        typeId: 0,
        name: 'Pending Orders',
        // url: '../../index/index',
        imageurl: '../../../images/other/_.jpeg',
      },
      {
        typeId: 1,
        name: 'Made Orders',
        // url: '../../index/index',
        imageurl: '../../../images/other/_.jpeg',
      },
      {
        typeId: 2,
        name: 'Dispatched Orders',
        // url: '../../index/index',
        imageurl: '../../../images/other/_.jpeg',
      },
      {
        typeId: 3,
        name: 'Delivered Orders',
        // url: '../../index/index',
        imageurl: '../../../images/other/_.jpeg',
      },
      {
        typeId: 4,
        name: 'Uncommand order',
        // url: '../../index/index',
        imageurl: '../../../images/other/_.jpeg',
      }
    ],
  },

  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../customerPortal',
  //   })
  // },

  toOrder: function () {
    wx.navigateTo({
      url: '../../customer/customerOrders/customerOrders',
    })
  },


  onLoad: function (options) {
    console.log("onLoad")
    var that = this
    // app.getUserInfo(function (userInfo) {
    //   that.setData ({
    //     userInfo : userInfo
    //   })
    // })
  }
})