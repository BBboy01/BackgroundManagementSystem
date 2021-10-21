<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <hy-card title="分类商品数量（饼图）">
          <pie-echarts :pieData="categoryGoodsCount"></pie-echarts>
        </hy-card>
      </el-col>
      <el-col :span="10">
        <hy-card title="不同城市商品销量"> </hy-card>
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
          <line-echarts v-bind="categoryGoodsSale" title=""></line-echarts>
        </hy-card>
      </el-col>
      <el-col :span="12">
        <hy-card title="分类商品收藏"> </hy-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useStore } from '@/store'

import HyCard from '@/base-ui/card'
import { PieEcharts, RoseEcharts, LineEcharts } from '@/components/page-echarts'

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

    return { divRef, categoryGoodsCount, categoryGoodsSale }
  },
  components: { HyCard, PieEcharts, RoseEcharts, LineEcharts }
})
</script>

<style scoped>
.content-row {
  margin-top: 20px;
}
</style>
