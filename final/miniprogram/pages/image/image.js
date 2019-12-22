const devicesId = "561951998"
const api_key = "Q2v6cZ3UYSDWEuxTLOK8EnV=uww="
Page({
  data: {
    x1: false,
    x2: false,
    x3: false,
    x4: false
  },
  onLoad: function(options) {
    var _this = this;
    var x1, x2, x3, x4;

    setInterval(function () {
    wx.request({
      url: 'http://api.heclouds.com/devices/561951998/datapoints?datastream_id=state1,state2,state3,state4&limit=1',
      header: {
        'content-type': 'application/json',
        'api-key': api_key
      },
      success: function(res) {
        console.log(res.data);
        x1 = res.data.data.datastreams[0].datapoints[0].value;
        x2 = res.data.data.datastreams[1].datapoints[0].value;
        x3 = res.data.data.datastreams[2].datapoints[0].value;
        x4 = res.data.data.datastreams[3].datapoints[0].value;
        _this.setData({
          state1: res.data.data.state1,
          state2: res.data.data.state2,
          state3: res.data.data.state3,
          state4: res.data.data.state4,
          x1:x1,
          x2: x2,
          x3: x3,
          x4: x4
        });

        console.log(x1);
        console.log(x2);
        console.log(x3);
        console.log(x4);
      },
      fail: function() {
        wx.showToast({
          title: '与服务器通信失败',
          icon: 'fail',
          duration: 2000
        })
      }
    })

     }, 5000)
  },
})