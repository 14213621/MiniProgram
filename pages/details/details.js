// details.js
var app = getApp()

Page({
  productname:'',
  productid:'',
  top:[],
  details:'',
  price:'',
  /**
   * 页面的初始数据
   */
  data: {
  
  },

  onLoad: function (e) {
    var productid = e.productid;

    this.setData({
      productid: productid,
      productname: app.findproductsName(productid),
      top: app.findallpictures(productid),
      details:app.finddetails(productid),
      price: app.findprice(productid),
    });
  },
  buy: function (e) {
    wx.navigateTo({
      url: '../index/index?productname=' + this.data.productname + "&productid=" + this.data.productid,
    })
  },
  clickImage: function (e) {
    var current = e.target.dataset.src
    wx.previewImage({
      current: current,
      urls: this.data.top,//内部的地址为绝对路径
      fail: function () {
      },
      complete: function () {
      },
    })
  },
 
})