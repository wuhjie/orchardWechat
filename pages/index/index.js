
const app = getApp()

Page ({
  data: {
    list:'',
    imgUrls: [
      '../../images/index/index_1.JPG',
      '../../images/index/index_2.JPG',
      '../../images/index/index_3.JPG',
    ],

    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    
    isAdd: false,
    handleAdd() {
      this.setData({
        isAdd: !this.data.isAdd
      })
    }
  },
  
  customerLogin:function() {
    var that = this;
    wx.request({
      url: 'http://localhost:8080/customer/login',
      method: 'Get',
      header :{
        'content-type': 'application/json'
      },
      success: function (req) {
        var list = req.data;
        if (list == null) {
          wx.showToast({
            title: 'ErrorMsg',
            icon: 'false',
            duration: 1500
          })
        } else {
          that.setData({
            list: list
          })
        }
      }
    })
  },

  companyLogin() {

  },

  itemInfo:function() {
    var that = this;
    wx.navigateTo({
      // event when clicking item info
      url: '../item/itemList/itemList',
    })
  },

  onLoad: function() {

  },

})
