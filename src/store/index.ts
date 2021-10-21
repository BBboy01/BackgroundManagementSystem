import { createStore, useStore as useVuexStore } from 'vuex'

import { getPageListData } from '@/service/main/system/system'

import type { Store } from 'vuex'
import type { IRootState, IStorType } from './types'

import loginModule from './login/login'
import systemModule from './main/system/system'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'bbboy',
      age: 18,
      entireDepartment: [],
      entireRole: [],
      entireMenu: []
    }
  },
  getters: {},
  mutations: {
    changeEntireDepartment(state, list) {
      state.entireDepartment = list
    },
    changeEntireRole(state, list) {
      state.entireRole = list
    },
    changeEntireMenu(state, list) {
      state.entireMenu = list
    }
  },
  actions: {
    async getInitialDataAction({ commit }) {
      const { list: departmentList } = (
        await getPageListData('/department/list', {
          offset: 0,
          size: 1000
        })
      ).data
      const { list: roleList } = (
        await getPageListData('/role/list', {
          offset: 0,
          size: 1000
        })
      ).data
      const { list: menuList } = (await getPageListData('/menu/list', {})).data
      commit('changeEntireDepartment', departmentList)
      commit('changeEntireRole', roleList)
      commit('changeEntireMenu', menuList)
    }
  },
  modules: { loginModule, systemModule }
})

export function setupStore() {
  store.dispatch('loginModule/loadLocalLogin')
}

export function useStore(): Store<IStorType> {
  return useVuexStore()
}

export default store
