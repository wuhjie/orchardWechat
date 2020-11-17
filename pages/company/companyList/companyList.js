Page({
  data: {
    itemInfo: [
      
      
    ]
  },
  onLoad: function (){
    var that = this;
    wx.request({
      url: 'http://localhost:8080/wu-web/company/list',
      method: 'GET',
      success: (res) => {
        console.log(res)
        var itemList = res.data.data;
        console.log(itemList)
        if (itemList == null) {
          wx.showToast({
            title: 'fail to receive data' + res.data.errMeg,
          })
        }else {
          that.setData({
            itemList: itemList
          })
        }
      }
    })
  },

  // itemInfo : function(event) {
  //   console.log(event)
  //   // url: gerApp().globalData.httpUrl + ''
  // }
})