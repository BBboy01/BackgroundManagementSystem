import type { App } from 'vue'
import { ElButton, ElTabs, ElForm, ElInput, ElCheckbox, ElLink } from 'element-plus'
import { ElTabPane } from 'element-plus/lib/components/tabs'
import { ElFormItem } from 'element-plus/lib/components/form'

const components = [ElButton, ElTabs, ElTabPane, ElForm, ElFormItem, ElLink, ElInput, ElCheckbox]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
