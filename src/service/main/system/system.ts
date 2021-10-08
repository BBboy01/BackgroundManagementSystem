import hyRequest from '../../index'

import { IDataType } from '@/service/types'

export function getPageListData(url: string, queryInfo: any) {
  return hyRequest.post<IDataType>({
    url,
    data: queryInfo
  })
}
