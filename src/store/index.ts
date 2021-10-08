import { createStore, useStore as useVuexStore } from 'vuex'

import type { Store } from 'vuex'
import type { IRootState, IStorType } from './types'

import loginModule from './login/login'
import systemModule from './main/system/system'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'bbboy',
      age: 18
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: { loginModule, systemModule }
})

export function setupStore() {
  store.dispatch('loginModule/loadLocalLogin')
}

export function useStore(): Store<IStorType> {
  return useVuexStore()
}

export default store
