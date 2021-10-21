import hyRequest from '../../index'

import { IDataType } from '@/service/types'

export function getPageListData(url: string, queryInfo: any) {
  return hyRequest.post<IDataType>({
    url,
    data: queryInfo
  })
}

export function deletePageData(url: string) {
  return hyRequest.delete<IDataType>({ url })
}

export function createPageData(url: string, newData: any) {
  return hyRequest.post<IDataType>({
    url,
    data: newData
  })
}
export function editPageData(url: string, editData: any) {
  return hyRequest.patch<IDataType>({
    url,
    data: editData
  })
}
