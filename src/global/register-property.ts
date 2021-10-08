import type { App } from 'vue'

import formatUTC from '@/utils/date-format'

export default function registerProperties(app: App): void {
  app.config.globalProperties.$filters = {
    formatTime(time: string): string {
      return formatUTC(time)
    }
  }
}
