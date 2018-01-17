// pages/confirm/confirm.js
const AV = require('../../utils/av-weapp.js');

var app = getApp();

Page({
  data: {
    order: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    var order = (wx.getStorageSync('confirmOrder'))
    var openid = app.globalData.user.authData.lc_weapp.openid;
    /*
    wx.request({
      url: 'https://api.wxappclub.com/put',
      data: {
        appkey: '3hfh9zwgbf7k75uq3dg2al8i222j8qn8',
        key: "id_@",
        type: openid,
        value: order,
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
      }
    });
    
    wx.request({
      url: 'https://api.wxappclub.com/put',
      data: {
        appkey: 'im22ha72su5y6wqxm1lqx9zxbxy16y2g',
        key: "id_@",
        type:"order",
        value: order,
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        wx.navigateTo({
          url: '../cart/cart',
        })
        var arr =[];
        wx.setStorageSync('confirmOrder', arr);
      }
    });

  */
    for (var j = 0; j < order.length; j++) {
      var split = order[j].split(";*");
      console.log("name:" + split[0]);
      console.log("phone:" + split[1]);
      console.log("destination:" + split[2]);
      console.log("others:" + split[3]);
      console.log("productNumber:" + split[4]);
      console.log("date:" + split[5]);
      console.log("sum:" + split[6]);
      console.log("productName:" + split[7]);
      console.log("productID:" + split[9]);


      var Todo = AV.Object.extend("Order");
      var administratorRole = new AV.Role('Administrator');
      
      // 新建一个 Todo 对象
      var todo = new Todo();
      todo.set('name', split[0]);
      todo.set('phone', split[1]);
      todo.set('destination', split[2]);
      todo.set('others', split[3]);
      todo.set('productNumber', split[4]);
      todo.set('date', split[5]);
      todo.set('sum', split[6]);
      todo.set('productName', split[7]);
      todo.set('productID', split[9]);
      var img = app.findProducts(split[9]);
      todo.set('img',img);
      const acl = new AV.ACL();
      acl.setPublicReadAccess(false);
      acl.setPublicWriteAccess(false);
      acl.setReadAccess(AV.User.current(), true);
      acl.setWriteAccess(AV.User.current(), true);
      acl.setRoleWriteAccess(administratorRole, true);
      acl.setRoleReadAccess(administratorRole, true);

      todo.setACL(acl);

      todo.save().then(function (todo) {
        // 成功保存之后，执行其他逻辑.
        console.log('New object created with objectId: ' + todo.id);
      }, function (error) {
        // 异常处理
        console.error('Failed to create new object, with error message: ' + error.message);
      });
    }
    wx.navigateTo({
      url: '../cart/cart',
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

  }
})