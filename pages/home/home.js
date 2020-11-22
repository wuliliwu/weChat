// pages/home/home.js
import request from '../../service/network.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  osnReady: function () {
    request({
      url: 'http://152.136.185.210:8000/api/w6/recommend',

    }).then(res => {
      console.log(res);
      
    }).catch(err => {
      console.log(err);
      
    })











    // ---------------------------------------------------
    // wx.request({
    //   url: 'http://152.136.185.210:8000/api/w6/recommend',
    //   // data: {
    //   //   type: 'sell',
    //   //   page: 1
    //   // },
    //   success: function(res){
    //     console.log(res);
    //   },
    //   false: function(){
    //     console.log(11);
        
    //   }
    // })
    // wx.request({
    //   url: 'http://httpbin.org/post',
    //   method: 'POST',
    //   data: {
    //     name: '黄家辉',
    //     age: 18
    //   },
    //   success (res) {
    //     console.log(res.data)
    //   },
    //   fail(){
    //       console.log(111);
          
    //   }
    // })
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

  }
})