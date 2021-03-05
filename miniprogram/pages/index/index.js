const app = getApp();
const PageObject = {
  data: {
    hotBotData:[
      ['高新技术企业','技术改造','工程技术中心','大数据'],
      ['新一代信息技术','智能制造','云计算','人工智能'],
      ['企业技术中心','智慧城市','人才引进','集成电路']
    ]
  },
  onShow: function () {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        // 当前页面的 tabBar 索引
        active: 0
      })
    }
  }
}
Page(PageObject);