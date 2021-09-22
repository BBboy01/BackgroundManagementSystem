import type { App } from 'vue'
import { ElButton, ElForm } from 'element-plus'

const components = [ElForm, ElButton]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
