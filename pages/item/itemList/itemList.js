Page({
  data: {
    items: [{
      message: 'foo',
    }]
  },
  onShow: function (){
    var that = this;
    wx.request({
      url: 'http://localhost:8080/wu-web/good/list',
      method: 'GET',
      success: (res) => {
        var resList = res.data.areaList;
        if (resList == null) {
          wx.showToast({
            title: 'fail to receive data' + res.data.errMeg,
          })
        }else {
          that.setData({
            areaList: resList
          })
        }
      }
    })
  },
})