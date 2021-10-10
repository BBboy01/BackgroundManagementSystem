import type { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  labelWidth: '120px',
  formItems: [
    {
      field: 'name',
      label: '角色名称',
      placeholder: '请输入角色名称',
      type: 'input'
    },
    {
      field: 'intro',
      label: '权限介绍',
      placeholder: '请输入权限介绍',
      type: 'input'
    },
    {
      field: 'createTime',
      label: '创建时间',
      placeholder: '请选择创建时间',
      type: 'datePicker',
      otherOptions: {
        startPlaceholder: '',
        endPlaceholder: '',
        type: 'daterange'
      }
    }
  ]
}
