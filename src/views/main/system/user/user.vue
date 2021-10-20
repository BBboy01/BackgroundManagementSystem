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

    <page-model :modelConfig="modelConfigRef" ref="pageModel" :defaultInfo="defaultInfo" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import { useStore } from '@/store'

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
    const store = useStore()

    const modelConfigRef = computed(() => {
      const departmentItem = modelConfig.formItems.find((item) => item.field === 'departmentId')
      if (departmentItem) {
        departmentItem.options = store.state.entireDepartment.map((item) => {
          return { title: item.name, value: item.id }
        })
      }
      const roleItem = modelConfig.formItems.find((item) => item.field === 'roleId')
      if (roleItem) {
        roleItem.options = store.state.entireRole.map((item) => {
          return { title: item.name, value: item.id }
        })
      }

      return modelConfig
    })

    const [pageContent, handleResetClick, handleQueryClick] = usePageSearch()

    const newCallback = () => {
      const passwordItem = modelConfig.formItems.find((item) => item.field === 'password')
      if (passwordItem) {
        passwordItem.isHidden = false
      }
    }
    const editCallback = () => {
      const passwordItem = modelConfig.formItems.find((item) => item.field === 'password')
      if (passwordItem) {
        passwordItem.isHidden = true
      }
    }

    const [pageModel, defaultInfo, handleNewData, handleEditData] = usePageModel(
      newCallback,
      editCallback
    )

    return {
      searchFormConfig,
      tableContentConfig,
      pageContent,
      handleResetClick,
      handleQueryClick,
      modelConfigRef,
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
