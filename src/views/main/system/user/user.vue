<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    />

    <page-content
      :tableContentConfig="tableContentConfig"
      pageName="users"
      ref="pageContent"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

import { usePageSearch } from '@/hooks/usePageSearch'

import { searchFormConfig } from './config/search.config'
import { tableContentConfig } from './config/content.config'

export default defineComponent({
  name: 'users',
  setup() {
    const [pageContent, handleResetClick, handleQueryClick] = usePageSearch()

    return {
      searchFormConfig,
      tableContentConfig,
      pageContent,
      handleResetClick,
      handleQueryClick
    }
  },
  components: { PageSearch, PageContent }
})
</script>

<style scoped></style>
