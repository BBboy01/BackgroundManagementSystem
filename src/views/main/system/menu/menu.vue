<template>
  <div class="menu">
    <page-content :tableContentConfig="tableContentConfig" pageName="menu"></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageContent from '@/components/page-content'

import { tableContentConfig } from './config/content.config'

export default defineComponent({
  setup() {
    return { tableContentConfig }
  },
  components: { PageContent }
})
</script>

<style scoped></style>
