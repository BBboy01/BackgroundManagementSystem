import { createApp } from 'vue'

import 'normalize.css'
import './assets/css/index.scss'

import router from './router'
import store from './store'

import { registerApp } from './global'

import bbRequest from './service'

import App from './App.vue'

const app = createApp(App)

app.use(router).use(store)

app.use(registerApp)

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

bbRequest
  .request<DataType>({
    url: '/home/multidata',
    method: 'GET'
  })
  .then((res) => {
    console.log(res.data)
  })

app.mount('#app')
