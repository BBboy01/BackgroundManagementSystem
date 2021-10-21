<template>
  <div class="dashboard">
    <div ref="divRef" :style="{ width: '200px', height: '200px' }"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

import * as echarts from 'echarts'

export default defineComponent({
  name: 'dashboard',
  setup() {
    const divRef = ref<HTMLElement>()
    onMounted(() => {
      if (divRef.value) {
        const echartsInstance = echarts.init(divRef.value, 'light', { renderer: 'svg' })
        const option = {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [150, 230, 224, 218, 135, 147, 260],
              type: 'line'
            }
          ]
        }
        echartsInstance.setOption(option)
      }
    })

    return { divRef }
  }
})
</script>

<style scoped></style>
