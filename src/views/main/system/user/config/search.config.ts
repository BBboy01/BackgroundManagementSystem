import type { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  labelWidth: '120px',
  itemLayout: {
    padding: '10px 20px'
  },
  colLayout: {
    span: 8
  },
  formItems: [
    {
      field: 'id',
      label: 'id',
      placeholder: '请输入id',
      type: 'input'
    },
    {
      field: 'name',
      label: '用户名',
      placeholder: '请输入用户名',
      type: 'input'
    },
    {
      field: 'realname',
      label: '真实姓名',
      placeholder: '请输入真实姓名',
      type: 'input'
    },
    {
      field: 'cellphone',
      label: '电话号码',
      placeholder: '请输入电话号码',
      type: 'input'
    },
    {
      field: 'enable',
      label: '用户状态',
      placeholder: '请选择用户状态',
      type: 'select',
      options: [
        { title: '启用', value: 1 },
        { title: '禁用', value: 0 }
      ]
    },
    {
      field: 'createAt',
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
