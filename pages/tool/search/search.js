Page({
  data: {
    inputShowed: false,
    inputVal:""
  },

  onLoad() {
    this.setData({
      search: this.search.bind(this)
    })
  },

  search: function (value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([{
          // todo: replace pre-define text into the real result
          text: 'search result', value: 1}, {text: 'second search result', value: 2}])
      }, 200)
    })
  },

  selectResult: function (e) {
    console.log('select resilt', e.detail)
  },
});