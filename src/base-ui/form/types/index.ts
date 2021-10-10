type IFormType = 'input' | 'select' | 'password' | 'datePicker'
interface OptionType {
  title: string
  value: any
}

export interface IFormItem {
  field: string
  type: IFormType
  label: string
  placeholder?: any
  rules?: any[]
  options?: OptionType[]
  otherOptions?: any
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth: string
  colLayout?: any
  itemLayout?: any
}
