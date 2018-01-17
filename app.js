//app.js
const AV = require('./utils/av-weapp.js');
const Products = require('./model/products');
const Course = require('./model/course');


App({
  globalData: {
    userInfo: null,
    coursedetails: [],
    products: [],
    order: [],
    oid: '',
  },
  addListener: function (callback) {
    this.callback = callback;
  },

  setChangedData: function (data) {
    this.data = data;
    if (this.callback != null) {
      this.callback(data);
    }
  },


  getUserInfo: function (cb) {

    AV.User.loginWithWeapp().then(user => {
      this.globalData.user = user.toJSON();
    }).catch(console.error);

    const user = AV.User.current();
    // 调用小程序 API，得到用户信息
    wx.getUserInfo({
      success: ({ userInfo }) => {
        // 更新当前用户的信息
        user.set(userInfo).save().then(user => {
          // 成功，此时可在控制台中看到更新后的用户信息
          this.globalData.user = user.toJSON();
          // console.log(this.globalData.user.authData.lc_weapp.openid);
        }).catch(console.error);
      }
    });
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },

  onLaunch: function (ops) {
    //调用API从本地缓存中获取数据
    
    AV.init({
      appId: 'VcOyUpGlIElXqv5jeMg1xP05-gzGzoHsz',
      appKey: 'NwKdSSODH64p517QFSWCOfxh',
    });

    const user = AV.User.current();

    
    

    this.getUserInfo();

    /*
    // 新建一个角色，并把为当前用户赋予该角色
    var roleAcl = new AV.ACL();
    roleAcl.setPublicReadAccess(true);
    roleAcl.setPublicWriteAccess(true);

    // 当前用户是该角色的创建者，因此具备对该角色的写权限
    roleAcl.setWriteAccess(AV.User.current(), true);

    //新建角色
    var administratorRole = new AV.Role('Administrator', roleAcl);
    administratorRole.save().then(function (role) {
      // 创建成功
    }).catch(function (error) {
      console.log(error);
    });
    */



    new AV.Query(Course).find().then(Course =>
      this.globalData.coursedetails = Course
    ).catch(console.error);


    new AV.Query(Products).find().then(Products =>
      this.globalData.products = Products
    ).catch(console.error);


    var order = (wx.getStorageSync('order') || null);
    if (order == null) {
      wx.setStorageSync('order', [], null)
    }
    var that = this
    /*
    wx.request({
      url: 'https://api.wxappclub.com/get',
      data: {
        appkey: 'im22ha72su5y6wqxm1lqx9zxbxy16y2g',
        key: "1",
        type: 'products',
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        if (res.data.success) {
          console.log(res.data.result.value);
          that.globalData.products = res.data.result.value.products;
        }
      }
    });
    */

    /*
    wx.request({
      url: 'https://api.wxappclub.com/get',
      data: {
        appkey: 'im22ha72su5y6wqxm1lqx9zxbxy16y2g',
        key: "coursedetails",
        type: 'course',
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        if (res.data.success) {
          that.globalData.coursedetails = res.data.result.value.coursedetails;
        }
      }
    });
    */
  },

  finddetails: function (e) {
    var index = e;
    var choice = this.globalData.products[index];
    return choice.details;
  },

  findproductsName: function (e) {
    var index = e;
    var choice = this.globalData.products[index];
    return choice.name;
  },

  findProducts: function (e) {
    var index = e;
    var choice = this.globalData.products[index];
    return choice.img;
  },
  findprice: function (e) {
    var index = e;
    var choice = this.globalData.products[index];
    return choice.price;
  },

  findClass: function (typename) {
    var List = [];
    var index = 0;
    for (var i = 0; i < this.globalData.products.length; i++) {
      if (this.globalData.products[i].type == typename) {
        List[index] = this.globalData.products[i];
        index++;
      }
    }
    return List;
  },

  findprodutctInteger(productname) {
    var index = 0;
    for (var i = 0; i < this.globalData.products.length; i++) {
      if (this.globalData.products[i] == productname) {
        index = i;
        break;
      }
    }
    return index;
  },

  findallpictures: function (e) {
    var index = e;
    var choice = this.globalData.products[index];

    var result = [choice.img, choice.url]
    return result;
  },
})