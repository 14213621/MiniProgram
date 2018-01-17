var app = getApp();
const Products = require('../../model/products');
const AV = require('../../utils/av-weapp.js');


Page({
  data: {
    userInfo: {},
    banners: [],
    Type:[],
    /*
    products: [
      {
        'id': 0,
        'img': 'https://imagizer.imageshack.us/v2/1040x780q90/923/cGWD63.jpg',
        'url': 'https://imagizer.imageshack.us/v2/644x483q50/923/jQShkv.jpg',
        'name': 'cupcakes',
        'details': 'it is cupcake, small',
        'price': '5',
        'type': 'cupckae'
      },
      {
        'id': 1,
        'img': 'https://imagizer.imageshack.us/v2/644x483q90/922/jex3is.jpg',
        'url': 'https://imagizer.imageshack.us/v2/326x510q90/633/6xVcGB.jpg',
        'name': 'treecakes',
        'details': 'it is treecakes, big',
        'price': '10',
        'type': 'birthdaycake'
      },
      {
        'id': 2,
        'img': 'https://imagizer.imageshack.us/v2/644x483q50/923/jQShkv.jpg',
        'url': 'https://imagizer.imageshack.us/v2/1040x780q90/923/cGWD63.jpg',
        'name': 'flowercakes',
        'details': 'it is flowercakes, big',
        'price': '15',
        'type': 'birthdaycake'
      },
      {
        'id': 3,
        'img': 'https://imagizer.imageshack.us/v2/1040x780q90/924/0hPZVa.jpg',
        'url': 'https://imagizer.imageshack.us/v2/326x510q90/633/6xVcGB.jpg',
        'name': 'whiteflowercakes',
        'details': 'it is whiteflowercakes, big',
        'price': '12',
        'type': 'cupcake'
      },
      {
        'id': 4,
        'img': 'https://imagizer.imageshack.us/v2/644x483q90/922/lQi5YC.jpg',
        'url': 'https://imagizer.imageshack.us/v2/326x510q90/633/6xVcGB.jpg',
        'name': 'ricecakes',
        'details': 'it is ricecakes, medium',
        'price': '10',
        'type': 'other'
      },
      {
        'id': 5,
        'img': 'https://imagizer.imageshack.us/v2/644x483q90/924/UfZgi5.jpg',
        'url': 'https://imagizer.imageshack.us/v2/326x510q90/633/6xVcGB.jpg',
        'name': 'bigricecakes',
        'details': 'it is bigricecakes, small',
        'price': '8',
        'type': 'other'
      },
      {
        'id': 6,
        'img': 'https://imageshack.com/a/img924/7160/PlHXdL.jpg',
        'url': 'https://imagizer.imageshack.us/v2/326x510q90/633/6xVcGB.jpg',
        'name': 'greenteecakes',
        'details': 'it is greenteecakes, big',
        'price': '12',
        'type': 'other'
      },
      {
        'id': 7,
        'img': 'https://imagizer.imageshack.us/v2/644x483q90/924/5Bb7wE.jpg',
        'url': 'https://imagizer.imageshack.us/v2/326x510q90/633/6xVcGB.jpg',
        'name': 'strawberry',
        'details': 'it is strawberrycake, medium',
        'price': '11',
        'type': 'other'
      },
      {
        'id': 8,
        'img': 'https://imageshack.com/a/img923/218/mFigEZ.jpg',
        'url': 'https://imagizer.imageshack.us/v2/326x510q90/633/6xVcGB.jpg',
        'name': 'mango',
        'details': 'it is mangocake, medium',
        'price': '12',
        'type': 'other'
      },
      {
        'id': 9,
        'img': 'http://imagizer.imageshack.us/v2/640x480q90/923/le1IYi.jpg',
        'url': 'http://imagizer.imageshack.us/v2/640x480q90/922/bjJDrD.jpg',
        'name': 'chocolate cup',
        'details': 'it is chocoloate cake like a cup, medium',
        'price': '10.5',
        'type': 'latest'
      },
      {
        'id': 10,
        'img': 'http://imagizer.imageshack.us/v2/640x480q90/922/iGWD4T.jpg',
        'url': 'http://imagizer.imageshack.us/v2/640x480q90/923/F0TFh4.jpg',
        'name': 'flower cup',
        'details': 'it is flower cup cake, JJ, medium',
        'price': '13',
        'type': 'latest'
      },
      {
        'id': 11,
        'img': 'http://imagizer.imageshack.us/v2/640x480q90/924/DEAZv1.jpg',
        'url': 'http://imagizer.imageshack.us/v2/640x480q90/922/gmDBuA.jpg',
        'name': 'rice cake diy',
        'details': 'it is rice cake diy, lalala, medium',
        'price': '10.5',
        'type': 'latest'
      },
    ]
    */
  },
  onShareAppMessage: function () {
    return {
      title: 'Mini Kitchen',
      desc: '最美好的就是最好味的!',
      path: 'pages/homepage/homepage'
    }
  },

  classify: function () {

  },
  onReady :function()
  {
    

    
    /*
    for(var j =10 ;j<this.data.products.length;j++)
    {
    var Todo = AV.Object.extend("Products");
    // 新建一个 Todo 对象
    var todo = new Todo();
    todo.set('name', this.data.products[j].name);
    todo.set('img', this.data.products[j].img);
    todo.set('url', this.data.products[j].url);
    todo.set('details', this.data.products[j].details);
    todo.set('price', this.data.products[j].price);
    todo.set('type', this.data.products[j].type);
    todo.set('index', this.data.products[j].id);
    todo.save().then(function (todo) {
      // 成功保存之后，执行其他逻辑.
      console.log('New object created with objectId: ' + todo.id);
    }, function (error) {
      // 异常处理
      console.error('Failed to create new object, with error message: ' + error.message);
    });
    }
   */
  
    new AV.Query(Products).find().then(products => this.setData({ products })).catch(console.error);
    
  },
  onLoad: function (e) {
  //  console.log(app.globalData.products);
    var banners = [],
      banners = (wx.getStorageSync('bannerDetails') || null);
      var Type =[],
        Type = (wx.getStorageSync('TypeDetails') || null);
    if (banners == null) {
      banners = [
        {
          id: 3,
          img: 'http://imagizer.imageshack.us/v2/640x480q90/924/rDMLFW.png',
          url: '',
          name: 'banner1'
        },
        {
          id: 2,
          img: 'http://imagizer.imageshack.us/v2/640x480q90/924/6bRvzw.jpg',
          url: '',
          name: 'banner2'
        },
        {
          id: 1,
          img: 'http://imagizer.imageshack.us/v2/640x480q90/923/V8kUUG.png',
          url: '',
          name: 'banner3'
        },
      ]
      wx.setStorageSync('bannerDetails', banners);
      this.setData
        ({
          banners: banners,
        })
    } else {
      this.setData
        ({
          banners: banners,
        })
    }

    //
    if (Type == null) {
      Type= [
        {
          id: 0,
          img: 'https://imagizer.imageshack.us/v2/1040x780q90/923/cGWD63.jpg',
          name: 'cupcake',
          typename: 'Cupcakes'
        },
        {
          id: 1,
          img: 'https://imagizer.imageshack.us/v2/981x736q90/924/5Bb7wE.jpg',
          name: 'birthdaycake',
          typename: 'Birthday Cakes'
        },
        {
          id: 2,
          img: 'http://imagizer.imageshack.us/v2/640x480q90/923/vxqJ7d.jpg',
          name: 'weddingcake',
          typename: 'Wedding Cakes'
        },
        {
          id: 3,
          img: 'http://imagizer.imageshack.us/v2/640x480q90/923/FfOBeS.jpg',
          name: 'other',
          typename: 'Others'
        },
        {
          id: 4,
          img: 'http://imagizer.imageshack.us/v2/640x480q90/922/yrFyNT.jpg',
          name: 'latest',
          newest: true,
          typename: 'New Product'
        }

      ],
        wx.setStorageSync('TypeDetails', Type);
      this.setData
        ({
          Type: Type,
        })
    } else {
      this.setData
        ({
          Type: Type,
        })
    }

  }
})



