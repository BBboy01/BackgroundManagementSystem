export const tableContentConfig = {
  title: '用户列表',
  showIndexColumn: true,
  showSelectColumn: true,
  propList: [
    {
      prop: 'name',
      label: '角色名',
      minWidth: '100',
      slotName: 'name'
    },
    {
      prop: 'intro',
      label: '权限介绍',
      minWidth: '100',
      slotName: 'intro'
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
}
