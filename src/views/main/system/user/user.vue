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
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    />

    <page-model :modelConfig="modelConfig" ref="pageModel" :defaultInfo="defaultInfo" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModel from '@/components/page-model'

import usePageSearch from '@/hooks/usePageSearch'
import usePageModel from '@/hooks/usePageModel'

import { searchFormConfig } from './config/search.config'
import { tableContentConfig } from './config/content.config'
import { modelConfig } from './config/model.config'

export default defineComponent({
  name: 'users',
  setup() {
    const [pageContent, handleResetClick, handleQueryClick] = usePageSearch()
    const [pageModel, defaultInfo, handleNewData, handleEditData] = usePageModel()

    return {
      searchFormConfig,
      tableContentConfig,
      pageContent,
      handleResetClick,
      handleQueryClick,
      modelConfig,
      pageModel,
      defaultInfo,
      handleNewData,
      handleEditData
    }
  },
  components: { PageSearch, PageContent, PageModel }
})
</script>

<style scoped></style>
