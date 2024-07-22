import axios from 'axios';
const baseURL = 'http://127.0.0.1:5173';

declare module "axios" {
  interface AxiosResponse<T = any> {
      code: number
      message: string
      result: T
  }
  interface InternalAxiosRequestConfig<D = any> {
      isRetry: boolean
      isRetryNow: number
      apiPaths: string[]
      cmd: string
  }
  export function create(config?: AxiosRequestConfig): AxiosInstance;
}

const service = axios.create({
  baseURL,
  timeout: 5000, // request timeout
});

// 發起請求前的攔截器
service.interceptors.request.use(
  (config) => {
    // 如有token 就帶tokon
    const token = window.localStorage.getItem('accessToken');
    if (token) {
      config.headers.common.Authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
// 響應攔截器
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