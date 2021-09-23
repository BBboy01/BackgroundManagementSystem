import BBRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import cache from '@/utils/cache'

export default new BBRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = cache.getCache('token')
      if (token) config.headers.Authorization = 'Bearer ' + token

      return config
    },
    requestInterceptorCatch: (err) => err,
    responseInterceptor: (res) => res.data,
    responseInterceptorCatch: (err) => err
  }
})
