
Page({
  data: {
      inputShowed: false,
      inputVal: ""
  },
  onLoad() {
      this.setData({
          search: this.search.bind(this)
      })
  },
  search: function (value) {
    console.log('select result', value)
    
    wx.setStorage({
        key: "queryItemId",
        data: {
            value
        }
    })
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{text: value, value: value}])
        }, 10)
    })

  },

  selectResult: function (e) {
      console.log('select result', e.detail)
      wx.navigateTo({
        url: '../../item/itemDetail/itemDetail',
      })
  },
});