// pages/changeInfo/changeInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  userN:'',
  destinationArea:'',
  destInitial:'',
  detailsDestination:'',
  haveRecord:false,
  array: ['City', ' Boxhill', 'Yarra', 'Niki\'s room'],
  phone:'',
  index: 0,
  focus: false,
  items: [
    {
      'name': '姓名',
      'inputName': true
    },
    {
      'name': '聯絡號碼',
      'inputPhone': true
    },
    {
      'name': '外賣地區',
      'picker': true,
      'value': 0,
      'selectorDestination': true,
    },
    {
      'name': '外賣地址',
      'inputDestination': true,
    },

    {
      'name': '遞交',
      'button': true
    }
  ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var lastorderInfo = (wx.getStorageSync('LastCustomerInfo') || null);
    this.setData
      ({
        lastorderInfo: lastorderInfo,
      })

    if (lastorderInfo != null)
    {
      
    console.log("get old information");
    console.log(this.data.lastorderInfo);
    var split = this.data.lastorderInfo.split(";*");

    this.setData({
      userN: split[0],
      destinationArea: split[1],
      detailsDestination: split[2],
      destInitial: split[2],
      phone: split[3],
    })
    }else
   { console.log("no old information");}
     
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
  destinationInput: function (e) {
    console.log("typing");
    this.setData({
      destInitial:'',
      detailsDestination: e.detail.value
    })
  },
  userNameInput: function (e) {
    this.setData({
      userN: e.detail.value
    })
  },
  phoneNoInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  submit: function (e) {
    var cRecord = this.data.userN + ";*" + this.data.destinationArea + ";*" + this.data.detailsDestination + ";*" + this.data.phone;
   wx.setStorageSync('LastCustomerInfo', cRecord);
   wx.navigateBack({
     delta: 1
   })
  }
})