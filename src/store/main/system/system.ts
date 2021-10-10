import { getPageListData } from '@/service/main/system/system'

import type { Module } from 'vuex'
import type { ISystemState } from './types'
import type { IRootState } from '@/store/types'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      usersList: [],
      goodsCount: 0,
      goodsList: [],
      menuCount: 0,
      menuList: []
    }
  },

  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
      }
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  },

  mutations: {
    changeUsersList(state, userList: any[]) {
      state.usersList = userList
    },
    changeUsersCount(state, userCount: number) {
      state.usersCount = userCount
    },
    changeRoleList(state, roleList: any[]) {
      state.roleList = roleList
    },
    changeRoleCount(state, roleCount: number) {
      state.roleCount = roleCount
    },
    changeGoodsList(state, goodsList: any[]) {
      state.goodsList = goodsList
    },
    changeGoodsCount(state, goodsCount: number) {
      state.goodsCount = goodsCount
    },
    changeMenuList(state, menuList: any[]) {
      state.menuList = menuList
    },
    changeMenuCount(state, menuCount: number) {
      state.menuCount = menuCount
    }
  },

  actions: {
    async getPageListAction({ commit }, payload: any) {
      const { pageName } = payload
      const pageUrl = `/${pageName}/list`
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      const { list, totalCount } = pageResult.data
      commit(`change${pageName.replace(pageName[0], pageName[0].toUpperCase())}List`, list)
      commit(`change${pageName.replace(pageName[0], pageName[0].toUpperCase())}Count`, totalCount)
    }
  }
}

export default systemModule
