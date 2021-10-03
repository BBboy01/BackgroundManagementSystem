import { createApp } from 'vue'

import 'normalize.css'
import './assets/css/index.scss'

import router from './router'
import store, { setupStore } from './store'

import { registerApp } from './global'

import App from './App.vue'

const app = createApp(App)

app.use(registerApp)
app.use(store)
setupStore()

app.use(router)

app.mount('#app')
