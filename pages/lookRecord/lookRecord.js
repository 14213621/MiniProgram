// pages/lookRecord/lookRecord.js
const AV = require('../../utils/av-weapp.js');
const Order = require('../../model/order');

var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid: '',
    order:[],
    img:[],
    check:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    var check = e.check;
    var confirm = null;
    confirm =e.confirm;

    if(confirm!=null)
    {
      this.setData({
        confirm:confirm
      })
    }else{
      this.setData({
        confirm: null
      })
    }

    if (check=='false')
    {
      this.setData({
        check:false
      })
    }else if(check == 'true')
    {
      this.setData({
        check:true
      }) 
    }else
    {
      this.setData({
        check: null
      }) 
    }

    console.log('check:' + this.data.check);
    console.log('confirm:' + this.data.confirm);

    this.setData({
      openid: app.globalData.user.authData.lc_weapp.openid,
    })
    
    var that = this;
    var order = new AV.Query(Order);
    if(this.data.check==false)
    {
    order.equalTo('done', false);
    order.equalTo('confirm', false);
    console.log("done false , confirm false");
    } else if (this.data.check == true) 
    {
      order.equalTo('done', true);
      order.equalTo('confirm', true);
      console.log("done true , confirm true");

    }
     else if (this.data.check == null)
    {
      order.equalTo('confirm', true);
      order.equalTo('done', false);
      console.log("done false, confirm true");
    }
    order.descending('createdAt');

    order.find().then(
      order => {
        this.setData(
          {
            order: order
          }
        )
        console.log(this.data.order);
      }
    ).catch(console.error);
    

    /*
    var Query = new AV.Query("Order");
    Query.find().then(function (data) {
      //查询的结果数据 data
      //将data转成json格式
      var json = JSON.parse(JSON.stringify(data));
      console.log("云端数据为:");
      console.log(json);
    }, function (err) {
      //错误信息 err
    });
    */


    /*

    var order = new AV.Query(Order);
    new AV.Query('Order')
      .descending('createdAt')
      .find()
      .then(order => this.setData({ order }))
      .catch(console.error);
    */
    /*
        wx.request({
          url: 'https://api.wxappclub.com/list',
          data: {
            appkey: '3hfh9zwgbf7k75uq3dg2al8i222j8qn8',
            type: this.data.openid
          },
          header: {
            'Content-Type': 'application/json'
          },
          success: function (res) {
            if (res.data.success) {
              var result = res.data.result;
            }
            console.log(result);
          }
        });
          */
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
  backHome: function (e) {
    wx.navigateBack({
      delta: 1
    })
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