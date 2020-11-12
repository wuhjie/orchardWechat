// pages/item/itemList/itemList.js
var page = 0
var totalPages = 3

Page({

  /**
   * 页面的初始数据
   */


  data: {
    logs: [],
    spinShow: true,
    loadMore: true,
    loadMoreTips: 'loading',
    allLoaded: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.clearCache();
    // this.getArticles(0);
  },

//   getArticles: function(pageno) {
//     let vm = this
//     setTimeout(function() {
//       vm.setData({
//         spinShow: false
//       })
//       var res = (wx.getStorageSync('logs') || []).map(log => {
//         return util.formatTime(new Date(log))
//       })
//     }) 
//     // this.setData({
//     //   logs: (wx.getStorageSync('logs') || []).map(log => {
//     //     return Uint8ClampedArray.formatTime(new Date(log))
//     //   })
//     // })
//   },
})