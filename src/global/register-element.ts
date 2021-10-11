import type { App } from 'vue'
import {
  ElButton,
  ElTabs,
  ElForm,
  ElInput,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElMenu,
  ElDropdown,
  ElAvatar,
  ElRow,
  ElCol,
  ElSelect,
  ElDatePicker,
  ElBreadcrumb,
  ElTable,
  ElPagination,
  ElImage,
  ElDialog
} from 'element-plus'
import { ElTabPane } from 'element-plus/lib/components/tabs'
import { ElFormItem } from 'element-plus/lib/components/form'
import { ElSubMenu, ElMenuItemGroup, ElMenuItem } from 'element-plus/lib/components/menu'
import { ElAside, ElHeader, ElMain } from 'element-plus/lib/components/container'
import { ElDropdownMenu, ElDropdownItem } from 'element-plus/lib/components/dropdown'
import { ElOption } from 'element-plus/lib/components/select'
import { ElBreadcrumbItem } from 'element-plus/lib/components/breadcrumb'
import { ElTableColumn } from 'element-plus/lib//components/table'

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
  ElMenuItem,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElAvatar,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElImage,
  ElDialog
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
