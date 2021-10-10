import router from '@/router'
import cache from '@/utils/cache'
import { mapMenus2Routes, mapMenus2Permissions } from '@/utils/map-menus'
import {
  accountLoginRequest,
  requestUserInfoByID,
  requestUserMenuByRoleID
} from '@/service/login/login'

import type { IAccount } from '@/service/login/types'
import type { Module } from 'vuex'
import type { ILoginState } from './types'
import type { IRootState } from '../types'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state: () => {
    return {
      token: '',
      userInfo: {},
      menus: [],
      permissions: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenu(state, menus: any) {
      state.menus = menus
      // userMenus => routes
      const routes = mapMenus2Routes(menus)
      // routes => router.main.children
      routes.forEach((route) => router.addRoute('main', route))
      const permissions = mapMenus2Permissions(menus)
      state.permissions = permissions
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      const result = await accountLoginRequest(payload)
      const { id, token } = result.data
      commit('changeToken', token)
      cache.setCache('token', token)

      const userInfoResult = await requestUserInfoByID(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      cache.setCache('userInfo', userInfo)

      const userMenusResult = await requestUserMenuByRoleID(userInfo.role.id)
      const userMenus = userMenusResult.data
      commit('changeUserMenu', userMenus)
      cache.setCache('userMenus', userMenus)

      router.push('/main')
    },
    loadLocalLogin({ commit }) {
      const token = cache.getCache('token')
      if (token) commit('changeToken', token)

      const userInfo = cache.getCache('userInfo')
      if (userInfo) commit('changeUserInfo', userInfo)

      const userMenus = cache.getCache('userMenus')
      if (userMenus) commit('changeUserMenu', userMenus)
    }
  }
}

export default loginModule
