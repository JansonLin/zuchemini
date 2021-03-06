// pages/me/me.js
const Page = require('../../utils/ald-stat.js').Page;
const app = getApp()
var network = require("../../utils/network.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:null,
    orderCount: 0,//订单数
    balance:0,//余额
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


  },
  loadData: function (success) {
    var that = this;
    var user=wx.getStorageSync('userInfo');

    app.getUserInfoById(user.id,function () {
      
      var user=wx.getStorageSync('userInfo');
      console.log("获取用户信息成功",user);
      that.setData({
        userInfo:user,
        orderCount:user.orderCount,
        balance:user.balance
      });
      if(success!=undefined){
        success();
      }
    });
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that=this;
    this.loadData();
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
    this.loadData(function(){
      wx.stopPullDownRefresh();
    });
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
  //帐户余额
  accountBalance: function () {
    wx.navigateTo({
      url: '/pages/wallet/wallet',
    })
  },
  //优惠券
  coupon: function () {
    //app.aldstat.sendEvent('查看优惠券');
    wx.showToast({
      title: '暂无优惠券',
      icon: 'success',
      duration: 2000
    })
  },
  //积分
  score: function () {
    //app.aldstat.sendEvent('查看积分');
    wx.showToast({
      title: '积分为 0',
      icon: 'success',
      duration: 2000
    })
  },
  //新手指引
  novice: function () {
    //app.aldstat.sendEvent('点击新手指引');
    wx.navigateTo({
      url: '/pages/help/novice/novice'
    })
  },
  //服务规则
  service: function () {
    //app.aldstat.sendEvent('点击服务规则');
    wx.navigateTo({
      url: '/pages/help/service/service'
    })
  },
  //常见问题
  commonProblem: function () {
    //app.aldstat.sendEvent('点击常见问题');
    wx.navigateTo({
      url: '/pages/help/commonProblem/commonProblem'
    })
  },
  //意见反馈
  opinion: function () {
    //app.aldstat.sendEvent('点击意见反馈');
    wx.navigateTo({
      url: '/pages/help/opinion/opinion'
    })
  },
  //登录
  goLogin: function () {
    //app.aldstat.sendEvent('点击登录');
    var url = "/pages/me/me";
    var jumpType = "switchTab";
    wx.navigateTo({
      url: '/pages/login/login?url=' + url + '&jumpType=' + jumpType,
    })
  }
})