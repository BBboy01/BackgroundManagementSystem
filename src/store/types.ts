import type { ILoginState } from './login/types'
import type { ISystemState } from './main/system/types'
import type { IDashboardState } from './main/analysis/types'

export interface IRootState {
  name: string
  age: number
  entireDepartment: any[]
  entireRole: any[]
  entireMenu: any[]
}

export interface IRootWithModule {
  loginModule: ILoginState
  systemModule: ISystemState
  dashboardModule: IDashboardState
}

export type IStorType = IRootState & IRootWithModule
