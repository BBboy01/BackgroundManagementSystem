import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import type { BBRequestConfig, BBRequestInterceptors } from './types'
import { ElLoading } from 'element-plus'
import type { ILoadingInstance } from 'element-plus'

const DEFAULT_LOADING = true

class BBRequest {
  instance: AxiosInstance
  interceptors?: BBRequestInterceptors
  loading?: ILoadingInstance
  showLoading: boolean

  constructor(config: BBRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEFAULT_LOADING

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 全局拦截器
    this.instance.interceptors.request.use<AxiosRequestConfig>(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: 'loading data',
            background: 'rgba(0, 0, 0, 0.5)'
          })
        }
        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use<AxiosResponse>((res) => {
      this.loading?.close()
      return res
    })
  }

  request<T>(config: BBRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      if (config.showLoading === !DEFAULT_LOADING) {
        this.showLoading = !DEFAULT_LOADING
      }

      this.instance.request<any, T>(config).then(
        (res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          this.showLoading = DEFAULT_LOADING
          resolve(res)
        },
        (err) => {
          this.showLoading = DEFAULT_LOADING
          reject(err)
        }
      )
    })
  }

  get<T>(config: BBRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: BBRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T>(config: BBRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T>(config: BBRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default BBRequest
