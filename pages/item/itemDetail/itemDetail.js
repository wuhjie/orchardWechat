const app = getApp

Page({
  data: {
    itemInfo: [
      
    ]
  },
  onLoad: function (){
    var that = this;
    
    wx.getStorage({
      key: 'queryItemId',
      success (res) {
        console.log(res.data)
        wx.request({
          url: 'http://localhost:8080/wu-web/good/queryById/' + res.data.value,
          method: 'GET',
          success: (res) => {
            console.log(res)
            var item = res.data.data;
            console.log(item)
            if (item == null) {
              wx.showToast({
                title: 'fail to receive data' + res.data.errMeg,
              })
            }else {
              that.setData({
                item: item
              })
            }
          }
        })
      }
  
    })


  },

  // itemInfo : function(event) {
  //   console.log(event)
  //   // url: gerApp().globalData.httpUrl + ''
  // }
})