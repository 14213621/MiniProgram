var app = getApp()

Page({
  data: {
    name : null,
    phone : null,
    others: null,
    destination:null,
    customer: [],
    productname:null,
    productNumber:null,
    productdate:null,
    price:null,
    sum:0,
    
  },
  onLoad:function(e)
{
  var customer = (wx.getStorageSync('customer') || [])
  var productname = (wx.getStorageSync('productname') || [])
  var price = (wx.getStorageSync('price') || [])

  this.setData({
    customer: customer,
    productname: productname,
  })
 var split = this.data.customer.split(";*");
 
  this.setData({
    name: split[0],
    phone:split[1],
    destination:split[2],
    others:split[3],
    productNumber:split[4],
    productdate:split[5],
    sum:split[6],
    price:price,
  })
},
  backHome:function(e)
{
  console.log("hello");
  wx.reLaunch({
    url: '../logs/logs',
  })
}

})