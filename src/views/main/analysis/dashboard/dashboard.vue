<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <hy-card title="分类商品数量（饼图）">
          <pie-echarts :pieData="categoryGoodsCount"></pie-echarts>
        </hy-card>
      </el-col>
      <el-col :span="10">
        <hy-card title="不同城市商品销量">
          <map-echarts :mapData="addressGoodsSale"></map-echarts>
        </hy-card>
      </el-col>
      <el-col :span="7">
        <hy-card title="分类商品数量（玫瑰图）">
          <rose-echarts :roseData="categoryGoodsCount"></rose-echarts>
        </hy-card>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <hy-card title="分类商品销量">
          <line-echarts v-bind="categoryGoodsSale"></line-echarts>
        </hy-card>
      </el-col>
      <el-col :span="12">
        <hy-card title="分类商品收藏">
          <bar-echarts v-bind="categoryGoodsFavor"></bar-echarts>
        </hy-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useStore } from '@/store'

import HyCard from '@/base-ui/card'
import {
  PieEcharts,
  RoseEcharts,
  LineEcharts,
  BarEcharts,
  MapEcharts
} from '@/components/page-echarts'

export default defineComponent({
  name: 'dashboard',
  setup() {
    const store = useStore()
    store.dispatch('dashboardModule/getDashboardDataAction')
    const divRef = ref<HTMLElement>()

    const categoryGoodsCount = computed(() => {
      return store.state.dashboardModule.categoryGoodsCount.map((item) => ({
        name: item.name,
        value: item.goodsCount
      }))
    })

    const categoryGoodsSale = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []
      for (const item of store.state.dashboardModule.categoryGoodsSale) {
        xLabels.push(item.name)
        values.push(item.goodsCount)
      }
      return { xLabels, values }
    })

    const categoryGoodsFavor = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []
      for (const item of store.state.dashboardModule.categoryGoodsFavor) {
        xLabels.push(item.name)
        values.push(item.goodsFavor)
      }
      return { xLabels, values }
    })

    const addressGoodsSale = computed(() => {
      return store.state.dashboardModule.addressGoodsSale.map((item) => ({
        name: item.address,
        value: item.count
      }))
    })

    return { divRef, categoryGoodsCount, categoryGoodsSale, categoryGoodsFavor, addressGoodsSale }
  },
  components: { HyCard, PieEcharts, RoseEcharts, LineEcharts, BarEcharts, MapEcharts }
})
</script>

<style scoped>
.content-row {
  margin-top: 20px;
}
</style>
