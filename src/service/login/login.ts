import bbRequest from '../index'

import type { IAccount, ILoginResult } from './types'
import { IDataType } from '../types'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenu = '/role/'
}

export function accountLoginRequest(userInfo: IAccount): Promise<IDataType<ILoginResult>> {
  return bbRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: userInfo
  })
}

export function requestUserInfoByID(id: number): Promise<IDataType> {
  return bbRequest.get({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  })
}

export function requestUserMenuByRoleID(id: number): Promise<IDataType> {
  return bbRequest.get({
    url: LoginAPI.UserMenu + id + '/menu',
    showLoading: false
  })
}
