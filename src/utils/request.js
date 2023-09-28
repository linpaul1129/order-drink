import axios from 'axios';
const baseURL = ' http://127.0.0.1:5173';
const service = axios.create({
  baseURL,
  timeout: 5000, // request timeout
});
// 发起请求之前的拦截器
service.interceptors.request.use(
  (config) => {
    // 如果有token 就携带tokon
    const token = window.localStorage.getItem('accessToken');
    if (token) {
      config.headers.common.Authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data;

    if (response.status !== 200) {
      return Promise.reject(new Error(res.message || 'Error'));
    } else {
      return res;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default service;