export default {
  getData: () => {
    return {
      code: 200,
      tableData: [
        { order: '多多綠', size: 'L', cost: 55, store:'50嵐', lastOrderTime: '2023-09-28' },
        { order: '大甲芋頭鮮奶', size: 'L', cost: 90, store:'迷客夏', lastOrderTime: '2023-09-01' }
      ]
    }
  },
  postData: () => {
    return {
      code: 200,
      tableData2: [
        {
          id: '01',
          name: 'post测试001'
        },
        {
          id: '02',
          name: 'post测试002'
        },
        {
          id: '03',
          name: 'post测试003'
        },
        {
          id: '04',
          name: 'post测试004'
        }
      ]
    }
  }
}
