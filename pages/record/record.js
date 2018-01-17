//获取应用实例

var app = getApp();
Page({
  data: {
    userInfo: {},
    userHaveInfo: false,
    haveRecord: false,
    buttonDisabled: false,
    modalHidden: true,
    show: false,
    contactDisabled: false,//buttonDisabled
    contactHidden: true,//modalHidden
    contactshow: false,//show
  },
  onLoad: function () {

    this.setData({
      userInfo: app.globalData.userInfo,
    })
    if (this.data.userInfo != null) {
      this.setData({
        userHaveInfo: true,
      })
    }
  },
  contacterror: function () {
    this.setData({
      contactHidden: !this.data.contactHidden
    })
  },
  showModal: function () {
    this.setData({
      modalHidden: !this.data.modalHidden
    })
  },
  getUserInfo: function () {
    app.getUserInfo();
    setTimeout((function callback() {
      this.setData({
        userInfo: app.globalData.userInfo,
      });
      if (this.data.userInfo != null) {
        this.setData({
          userHaveInfo: true,
        })
      }
    }).bind(this), 1000);

  },

  modalBindaconfirm: function () {
    this.setData({
      modalHidden: !this.data.modalHidden,
      show: !this.data.show,
      buttonDisabled: !this.data.buttonDisabled
    })
  },
  modalBindcancel: function () {
    this.setData({
      modalHidden: !this.data.modalHidden,
    })
  },
  contactBindaconfirm: function () {
    this.setData({
      contactHidden: !this.data.contactHidden,
      contactshow: !this.data.contactshow,
      contactDisabled: !this.data.contactDisabled
    })
  },
  contactBindcancel: function () {
    this.setData({
      contactHidden: !this.data.contactHidden,
    })
  },
  onShow: function () {
    var lastorderInfo = (wx.getStorageSync('LastCustomerInfo') || null);
    if (lastorderInfo != null) {
      this.setData({
        haveRecord: true,
      })
    } else {
      this.setData({
        haveRecord: false,
      })
    }
  }
});
