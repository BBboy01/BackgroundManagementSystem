<template>
  <div class="base-echart">
    <div ref="echartsDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineProps, withDefaults, watchEffect } from 'vue'

import useEcharts from '../hooks/useEcharts'

import type { EChartsOption } from 'echarts'

const props = withDefaults(
  defineProps<{
    width?: string
    height?: string
    options: EChartsOption
  }>(),
  {
    width: '100%',
    height: '360px'
  }
)

const echartsDivRef = ref<HTMLElement>()
onMounted(() => {
  const { setOptions } = useEcharts(echartsDivRef.value!)
  watchEffect(() => {
    setOptions(props.options)
  })
})
</script>

<style scoped lang="scss">
.base-echart {
}
</style>
