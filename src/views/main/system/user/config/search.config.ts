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
      field: 'password',
      label: '密码',
      placeholder: '请输入密码',
      type: 'password'
    },
    {
      field: 'sport',
      label: '喜欢的运动',
      placeholder: '请选择喜欢的运动',
      type: 'select',
      options: [
        { title: '篮球', value: 'basketball' },
        { title: '足球', value: 'football' }
      ]
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

export const propList = [
  {
    prop: 'name',
    label: '用户名',
    minWidth: '100',
    slotName: 'name'
  },
  {
    prop: 'realname',
    label: '真实姓名',
    minWidth: '100',
    slotName: 'realname'
  },
  {
    prop: 'cellphone',
    label: '电话号码',
    minWidth: '100',
    slotName: 'cellphone'
  },
  {
    prop: 'enable',
    label: '状态',
    minWidth: '100',
    slotName: 'enable'
  },
  {
    prop: 'createAt',
    label: '创建时间',
    minWidth: '250',
    slotName: 'createAt'
  },
  {
    prop: 'updateAt',
    label: '更新时间',
    minWidth: '250',
    slotName: 'updateAt'
  },
  {
    label: '操作',
    minWidth: '120',
    slotName: 'action'
  }
]
