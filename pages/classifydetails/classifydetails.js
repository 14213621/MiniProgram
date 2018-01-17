  // pages/classifydetails/classifydetails.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    price: '',
    productname: '',
    productid: '',
    typename:'',
    Tname:'',
    Height:'',
    latest:false,
    titleimage:'',
    products: [],
    line: 'http://www.poezie.net/lotusbar.gif',
  },
  buy: function (e) {
    var id = e.target.id;
    var productname = app.findproductsName(id); 
    wx.setStorageSync('productname', productname );
    wx.navigateTo({
      url: '../index/index?&productid=' + id,
    })
  },

  details: function (e) {
    var id = e.target.id;
   // var productname = this.data.products[index].name;
    wx.navigateTo({
      url: '../details/details?productid=' + id,
    })
  },
  onLoad: function (e) {
    var height;
    wx.getSystemInfo({
      success: function (res) {
      height=res.windowHeight;
      }
    })

    var typename = e.typename;
   var Tname= e.Tname
  var products=app.findClass(typename);
  this.setData({
    products: products,
    Tname: Tname,
    typename: typename,
  })
  if(typename=='latest')
  {
    this.setData({
      latest:true,
      Height: height,
      titleimage: '/img/newproduct.png',
    })
    
  } else
  {
    var tileimage = '/img/'+typename+'.png';
    this.setData({
      titleimage: tileimage,
    })
  } 


    wx.removeStorage({
      key: 'productname',
      key: 'customer',
    })
  },
  onHide: function () {
  },
  onShow: function () {
    //这里更新数据setData
  },
})