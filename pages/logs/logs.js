var app = getApp()

Page({
  data: {
    name: [],
    phone: [],
    others: [],
    destination: [],
    productNumber: [],
    productName: [],
    currentyear: '',
    currentmonth: '',
    currentday: '',
    order: [],
    sum: [],
    orderIndex: [],
    haveOrder: false,
    items: [{
      'name': '',
      'phone': '',
      'destination': '',
      'productNumber': '',
      'others': '',
      'date': '',
      'productName': '',
      'logs': '',
      'able': true,
      'productID': ''
    },
    {
      'name': '',
      'phone': '',
      'destination': '',
      'productNumber': '',
      'others': '',
      'date': '',
      'logs': '',
      'productName': '',
      'able': true,
      'productID': ''
    }],
  },
  onLoad: function (e) {
/*
    var totalorder = [];
    totalorder[0] = "Monkey;*97738548;*Hong Kong;*nothing;*2;*2016-09-04;*35;*MangoCakes"
    totalorder[1] = "Yoyo;*88888888;*MK;*good;*3;*2017-1-18;*25;*FlowerCakes"
    totalorder[2] = "David;*66666666;*Japan;*tasty;*1;*2017-06-02;*15;*TreeCakes"
    totalorder[3] = "Niki;*55555555;*Korea;*easy;*1;*2017-08-14;*40;*BigCakes"
    totalorder[4] = "Suki;*44444444;*UK;*No Problem;*2;*2017-06-20;*30;*FlowerCakes"
    totalorder[5] = "Louis;*33333333;*USA;*Hello Bye;*2;*2019-01-01;*42;*PinkCakes"
    wx.setStorageSync('order', totalorder)
*/

    var date = new Date();
    var dateStr = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    this.setData({
      currentyear: date.getFullYear(),
      currentmonth: (date.getMonth() + 1),
      currentday: date.getDate()
    }) 
  },
  checkboxChange: function (e) {
    var index = e.target.id // tick which one
    console.log(index);
    var orderIndex = this.data.orderIndex;
    console.log(orderIndex);

    var neworderIndex = [];
    var point = 0;
    var insert =true;
    for (var j = 0; j < orderIndex.length; j++) {
      if (orderIndex[j] == index) {
        console.log("had");
        insert=false;
        for (var i = 0; i < orderIndex.length; i++) {
          if (orderIndex[i] != index) {
            neworderIndex[point] = orderIndex[i];
            point++;
          }
        }
        break;
      }else{
        insert = true;
      } 
    }
    if (insert==true)
    {
      for (var d = 0; d < orderIndex.length+1; d++)
      {
        if (d < orderIndex.length) {
          neworderIndex[point] = orderIndex[d];
        }else
        {
          neworderIndex[point] = index;
        }
        point++;
      }
    }
    this.setData({
      orderIndex: neworderIndex,
    })
    console.log("final:" + this.data.orderIndex)
  },
  rubbishtap: function (e) {
    var index = e.target.id;
    var order = (wx.getStorageSync('order'));
    var currentIndex = 0;
    var neworder = [];
    for (var i = 0; i < order.length; i++) {
      if (i != index) {
        neworder[currentIndex] = order[i];
        currentIndex++;
      }
    }
    wx.setStorageSync('order', neworder);
    setTimeout((function callback() {
     this.onShow();
    }).bind(this), 800);
  },

  orderconfirm: function (e) {

    var orderIndex = this.data.orderIndex;
    var order = (wx.getStorageSync('order'));
    var confirmOrder = [];
    for (var j = 0; j < orderIndex.length; j++) {
      confirmOrder[j] = order[orderIndex[j]];
    }

    if (confirmOrder.length > 0) {
      var array = [];
      wx.setStorageSync('order', array);
      wx.setStorageSync('confirmOrder', confirmOrder);
      wx.navigateTo({
        url: '../confirm/confirm',
      })
    }

  },


  onShow: function (e) {
    var order = (wx.getStorageSync('order'))

    if (order[0] == null) {
      var check = false;
      this.setData({
        'haveOrder': check,
        'order': order,
      })
    } else {
      var check = true;
      this.setData({
        'haveOrder': check,
        'order': order,
      })
      var typecheck = [];
      var type = [{
        'name': '',
        'phone': '',
        'destination': '',
        'productNumber': '',
        'others': '',
        'date': '',
        'productName': '',
        'sum': 0,
        'logs': '',
        'able': true,
        'productID': '',
      }];

      /*
      for (var j = 0; j < order.length; j++) {
        
        typecheck[j] = type;
      }
      */


      var array = [];
      var newItems = type;
      var listindex = 0;
      for (var i = 0; i < order.length; i++) {
        var split = this.data.order[i].split(";*");
        //  console.log(split[0] + ";" + split[1] + ";" + split[2] + ";" + split[3] + ";" + split[4] + ";" + split[5] + ";" +split[6]);


        var list = [{
          'name': split[0],
          'phone': split[1],
          'destination': split[2],
          'others': split[3],
          'productNumber': split[4],
          'date': split[5],
          'sum': split[6],
          'productName': split[7],
          'logs': split[8],
          'productID':split[9],
          'able': false,
        }];
        // console.log(split[8]);
        var date = list[0].date.split("-");
        //console.log(date[0]); //year
        //console.log(date[1]); //month
        //console.log(date[2]); //day 
        //console.log(this.data.currentyear);
        //console.log(this.data.currentmonth);
        //console.log(this.data.currentday);
        if (this.data.currentyear < date[0]) {
          list[0].able = true;
        } else if (this.data.currentyear == date[0]) {
          if (this.data.currentmonth < date[1]) {
            list[0].able = true;

          } else if (this.data.currentmonth == date[1]) {
            if (this.data.currentday < date[2]) {
              list[0].able = true;
            } else if (this.data.currentday == date[2]) {
              list[0].able = true;
            }
          }
        }

        if (list[0].able) {
          newItems[listindex] = list;
          array[listindex] = list[0].name + ";*" + list[0].phone + ";*" + list[0].destination + ";*" + list[0].others + ";*" + list[0].productNumber + ";*" + list[0].date + ";*" + list[0].sum + ";*" + list[0].productName + ";*" + list[0].logs+ ";*" + list[0].productID;
          listindex++;
        }
      }
      this.setData({
        orderitem: newItems,
      })
      wx.setStorageSync('order', array);
      var orderIndex = [];
      for (var oi = 0; oi < array.length; oi++) {
        orderIndex[oi] = oi;
      }

      this.setData({
        orderIndex: orderIndex,
      })
    }
  }
})