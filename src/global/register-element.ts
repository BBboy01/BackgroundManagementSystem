import type { App } from 'vue'
import {
  ElButton,
  ElTabs,
  ElForm,
  ElInput,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElMenu
} from 'element-plus'
import { ElTabPane } from 'element-plus/lib/components/tabs'
import { ElFormItem } from 'element-plus/lib/components/form'
import { ElSubMenu, ElMenuItemGroup, ElMenuItem } from 'element-plus/lib/components/menu'
import { ElAside, ElHeader, ElMain } from 'element-plus/lib/components/container'

const components = [
  ElButton,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElLink,
  ElInput,
  ElCheckbox,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElSubMenu,
  ElMenu,
  ElMenuItemGroup,
  ElMenuItem
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
