<template>
  <div class="goods">
    <page-content :tableContentConfig="tableContentConfig" pageName="goods">
      <template #img="innerData">
        <el-image
          style="width: 60px; height: 60px"
          :src="innerData.row.imgUrl"
          :preview-src-list="[innerData.row.imgUrl]"
        />
      </template>
      <template #oldPrice="innerData">
        {{ '￥' + innerData.row.oldPrice }}
      </template>
      <template #newPrice="innerData">
        {{ '￥' + innerData.row.newPrice }}
      </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageContent from '@/components/page-content'

import { tableContentConfig } from './config/content.config'

export default defineComponent({
  name: 'goods',
  setup() {
    return { tableContentConfig }
  },
  components: { PageContent }
})
</script>

<style scoped></style>
