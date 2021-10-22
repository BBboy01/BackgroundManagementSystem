import * as echarts from 'echarts'

import chinaMapData from '../data/china.json'

echarts.registerMap('china', chinaMapData)

export default function (domEl: HTMLElement) {
  const echartsInstance = echarts.init(domEl)

  const setOptions = (options: echarts.EChartsOption) => {
    echartsInstance.setOption(options)
  }

  const updateSize = () => echartsInstance.resize()

  window.addEventListener('resize', () => {
    echartsInstance.resize()
  })

  return {
    echartsInstance,
    setOptions,
    updateSize
  }
}
