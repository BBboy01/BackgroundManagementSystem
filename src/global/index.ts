import type { App } from 'vue'

import registerElement from './register-element'
import registerProperties from './register-property'

export function registerApp(app: App): void {
  registerElement(app)
  registerProperties(app)
}
