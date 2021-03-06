
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
    showAva: false,
    showLoginBtn: true,
    userInfo: {}
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
    const _this = this
    wx.checkSession({
      success(data) {
        if (data.errMsg != "checkSession:ok") {
          _this.setData({
            showAva: true,
            showLoginBtn: false
          })
        }
      }
    })
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {
    
	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	},
  onLogin(data) {
    if (data.detail.userInfo) {
      this.setData({
        showAva: true,
        showLoginBtn: false,
        userInfo: data.detail.userInfo
      })
    }
    console.log(data.detail.userInfo)
  }
})