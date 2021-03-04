const PageObject = {
  data: {
    active:0,
    hotBotData:[
      ['高新技术企业','技术改造','工程技术中心','大数据'],
      ['新一代信息技术','智能制造','云计算','人工智能'],
      ['企业技术中心','智慧城市','人才引进','集成电路']
    ]
  },
  onChange(event) {
    // event.detail 的值为当前选中项的索引
    this.setData({ active: event.detail });
  },
}

Page(PageObject);