export default {
  getData: () => {
    return {
      code: 200,
      message: 'success',
      result: {
        data: [
          { order: '多多綠', size: 'L', cost: 55, store:'50嵐', lastOrderTime: '2023-09-28' },
          { order: '大甲芋頭鮮奶', size: 'L', cost: 90, store:'迷客夏', lastOrderTime: '2023-09-01' }
        ]
      }
    }
  },
  postData: () => {
    return {
      code: 200,
      message: 'success'
    }
  }
}
