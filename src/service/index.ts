import BBRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

export default new BBRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => config,
    requestInterceptorCatch: (err) => err,
    responseInterceptor: (res) => res,
    responseInterceptorCatch: (err) => err
  }
})
