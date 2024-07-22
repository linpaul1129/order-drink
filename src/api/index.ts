import axios from "@/utils/request";

export const getOrderHistoryList = () => {
  return axios.get('/home/getdata')
}

export const saveOrderItem = (data: any) => {
  return axios.post('/home/postdata', data)
}