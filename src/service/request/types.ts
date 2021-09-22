import type { AxiosRequestConfig } from 'axios'

interface BBRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: any) => any
  responseInterceptorCatch?: (error: any) => any
}

interface BBRequestConfig extends AxiosRequestConfig {
  interceptors?: BBRequestInterceptors
  showLoading?: boolean
}

export { BBRequestConfig, BBRequestInterceptors }
