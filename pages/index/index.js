var app = getApp();
Page({
  data: {
    price: '',
    userN: '',
    phone: 'Input phone No',
    productname: '',
    others: ' ',
    index: 0,
    focus: true,
    customerinfo: '',
    array: ['City', ' Boxhill', 'Yarra', 'Niki\'s room'],
    numberarray: ['1', '2', '3', '4', '5'],
    productIndex: 0,
    productNo: '',
    destination: '',
    orderdetails: [],
    top: '',
    date: '',
    dateend: '',
    currentdate: '',
    sum: '',
    detailsDestination: 'Details destination',
    destinationArea: '',
    lastorderInfo: '',
    productid:'',
    haveRecord: false,

    items: [
      {
        'name': '姓名',
        'inputName': true
      },
      /*
      {
        'name': '生日',
        'picker': true,
        'mode': 'date',
        'value': '2016-11-17'
      },
      */
      {
        'name': '外賣地區',
        'picker': true,
        'value': 0,
        'selectorDestination': true,

        // 'range': ['City', ' Boxhill', 'Yarra', 'Niki\'s room']
      },
      {
        'name': '外賣地址',
        'inputDestination': true,
      },
      {
        'name': '聯絡號碼',
        'inputPhone': true
      },

      /*
      {
        'name': '性別',
        'radio': true,
        'radios': [
          {'value': 'boy', 'name': '男', 'checked': true},
          { 'value': 'girl', 'name': '女'}
        ]
      },
      */


      /*
       {
         'name': '喜欢的颜色',
         'checkbox': true,
         'checkboxs': [
           {'value': 'red', 'name': '少糖份', 'checked': true},
           {'value': 'green', 'name': '少奶油'},
           {'value': 'yellow', 'name': '健康奶油'}
         ]
       }, 
       */
      {
        'name': '預約日期',
        'picker': true,
        'selectorDate': true,

      },

      {
        'name': '數量',
        'picker': true,
        'value': 0,
        'selectorNo': true,
      },
      {
        'name': 'Others',
        'textarea': true
      },

      /*
      {
        'name': '关闭通知',
        'switch': true,
        'checked': true
      },
      {
        'name': '打赏',
        'slider': true,
        'min': 0,
        'max': 200,
        'show': true
      },
      */
      {
        'name': '遞交',
        'button': true
      }
    ]
  },



  userNameInput: function (e) {
    this.setData({
      userN: e.detail.value
    })
  },

  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },

  phoneNoInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  destinationInput: function (e) {
    this.setData({
      detailsDestination: e.detail.value
    })
  },



  bindTextAreaBlur: function (e) {
    // console.log(e.detail.value)
    var others = e.detail.value;
    this.setData({
      others: others
    })
  },
  numberPickerChange: function (e) {
    var index = e.target.dataset.index,
      newItems = this.data.items
    newItems[index].value = e.detail.value
    this.setData({
      items: newItems,
      productIndex: e.detail.value,
    })
  },

  bindPickerChange: function (e) {
    var index = e.target.dataset.index,
      newItems = this.data.items
    newItems[index].value = e.detail.value
    this.setData({
      items: newItems,
      index: e.detail.value,
      destinationArea: this.data.array[e.detail.value],
    })
  },

  onShareAppMessage: function () {
    return {
      title: 'Mininiki\'s Bakery',
      desc: 'Taste delicious',
      path: '/test/test'
    }
  },
  getInfo: function () {
    var split = this.data.lastorderInfo.split(";*");

    this.setData({
      userN: split[0],
      destinationArea: split[1],
      detailsDestination: split[2],
      phone: split[3],
    })
  },


  submit: function (e) {

    if (this.data.userN.length == 0 || this.data.phone.length == 0) {
      this.setData({
        infoMess: '姓名與名字必須填寫！',
      })
    } else {
      var logs = "";
      logs = (Date.now());
      var i = this.data.index;
      //var des = this.data.array[i];     
      var no = this.data.productIndex;
      var num = this.data.numberarray[no];
      var sum = 0;
      var area = this.data.destinationArea;
      var destination = this.data.detailsDestination + "," + this.data.destinationArea;
      sum = this.data.productNo * this.data.price;
      this.setData({
        productNo: num,
        destination: destination,
        focus: true,
      }
      )
      var sum = this.data.price * this.data.productNo;
      this.setData({
        sum: sum
      }),

        this.setData({
          customerinfo: this.data.userN + ";*" + this.data.phone + ";* " + this.data.destination + ";*" + this.data.others + ";*" + this.data.productNo + ";* " + this.data.date + ";*" + this.data.sum,
        })

      var info = this.data.customerinfo + ";*" + this.data.productname + ";*" + logs +";*" + this.data.productid ;

      var cRecord = this.data.userN + ";*" + area + ";*" + this.data.detailsDestination + ";*" + this.data.phone;

      var noOforder = 0
      var totalorder = []
      totalorder = wx.getStorageSync('order')
      noOforder = totalorder.length;
      if (noOforder != 0) {
        totalorder[noOforder] = info;
      } else {
        totalorder[0] = info;
      }
      try {
        wx.setStorageSync('price', this.data.price)
        wx.setStorageSync('customer', this.data.customerinfo)
        wx.setStorageSync('LastCustomerInfo', cRecord)
        wx.setStorageSync('order', totalorder)
      } catch (e) {
      }
      wx.redirectTo({ url: "../test/test", })
    }
  },
  onShow: function (e) {
    var date = new Date();
    var dateStr = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    var dateendStr = date.getFullYear() + "-" + (date.getMonth() + 4) + "-" + date.getDate();
    this.setData({
      date: dateStr,
      dateend: dateendStr,
      currentdate: dateStr,
      destinationArea: this.data.array[0],
    })

    var lastorderInfo = (wx.getStorageSync('LastCustomerInfo') || null);
    this.setData
      ({
        lastorderInfo: lastorderInfo,
      })
    if (lastorderInfo != null) {
      this.setData({
        haveRecord: true,
      })
    }
  },

  onLoad: function (e) {
    var productid = e.productid;

    this.setData({
      productname: app.findproductsName(productid),
      productid: productid,
      price: app.findprice(productid),
    })

    this.setData({
      top: app.findProducts(productid),
    });
    try {
      wx.setStorageSync('productname', productname);
    } catch (e) {}
    wx.showShareMenu({
      withShareTicket: true
    })
  },

   clickImage: function (e) {
    var current = e.target.dataset.src
    var imageArray = [];
    imageArray[0] = this.data.top;
    wx.previewImage({
      current: current,
      urls: imageArray,//内部的地址为绝对路径
      fail: function () {
      },
      complete: function () {
      },
    })
  },
})




