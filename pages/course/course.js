// pages/course/course.js
var app = getApp();
const AV = require('../../utils/av-weapp.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    coursedetails:[]
    /*
    coursedetails: [
      {
        'courseid': 0,
        'img': 'https://imagizer.imageshack.us/v2/621x466q90/923/CEFcEG.jpg',
        'coursename': '韓國豆沙裱花',
        'details': '教你韓國豆沙裱花,meaningful.詳情請聯繫微信號：Mininiki',
      },
      {
        'courseid': 1,
        'img': 'https://imagizer.imageshack.us/v2/473x466q90/909/Td3Aaz.jpg',
        'coursename': '冬甩教學班',
        'details': '教你整冬甩,good taste.詳情請聯繫微信號：Mininiki',
      },
      {
        'courseid': 2,
        'img': 'https://imagizer.imageshack.us/v2/278x466q90/910/aJZJGK.jpg',
        'coursename': 'pineapple教學班',
        'details': 'pineapple速成班,美味誘惑.詳情請聯繫微信號：Mininiki',
      },
    ],
          */

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*
    for (var i = 0; i < this.data.coursedetails.length; i++) {
      console.log(i);
      var Todo = AV.Object.extend("Course");
      var todo = new Todo();
      todo.set('courseid', this.data.coursedetails[i].courseid);
      todo.set('img', this.data.coursedetails[i].img);
      todo.set('coursename', this.data.coursedetails[i].coursename);
      todo.set('details', this.data.coursedetails[i].details);
      todo.save().then(function (todo) {
        // 成功保存之后，执行其他逻辑.
        console.log('New object created with objectId: ' + todo.id);
      }, function (error) {
        // 异常处理
        console.error('Failed to create new object, with error message: ' + error.message);
      });
    }
    */
    this.setData({
      coursedetails: app.globalData.coursedetails,
    })
  },
  onShareAppMessage: function () {
    return {
      title: 'Mini Kitchen',
      desc: '自己味蕾自己負責!',
      path: 'pages/course/course'
    }
  },

  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '0433382826',
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  }
})