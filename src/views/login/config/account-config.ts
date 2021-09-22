export const rules = {
  account: [
    {
      required: true,
      message: '用户名为必传参数',
      trigger: 'blur'
    },
    {
      pattern: /^[a-zA-Z0-9]{5,10}$/,
      message: '用户名必须为5~10个字母或数字组合',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码为必传参数',
      trigger: 'blur'
    },
    {
      pattern: /^[a-zA-Z0-9]{6,}$/,
      message: '密码必须为6位以上',
      trigger: 'blur'
    }
  ]
}
