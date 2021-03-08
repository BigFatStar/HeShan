// components/tabBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    active: 0,
    list:[
      {
        pagePath: "/pages/index/index",
        text: "首页",
        name: "index",
        icon: "home-o"
      },
      {
        pagePath: "/pages/subscription/index",
        text: "订阅",
        name: "subscription",
        icon: "search"
      },
      {
        pagePath: "/pages/user/index",
        text: "我的",
        name: "user",
        icon: "user-o"
      }

    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      // event.detail 的值为当前选中项的索引
      this.setData({ active: event.detail })
      wx.switchTab({
        url: this.data.list[event.detail].pagePath,
      })
    }
  }
})
