<template>
  <div class="role">
    <page-search :searchFormConfig="searchFormConfig" />

    <page-content :tableContentConfig="tableContentConfig" pageName="role"></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

import { tableContentConfig } from './config/content.config'
import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'role',
  setup() {
    return { tableContentConfig, searchFormConfig }
  },
  components: { PageSearch, PageContent }
})
</script>

<style scoped></style>
