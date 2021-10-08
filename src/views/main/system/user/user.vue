<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />

    <hy-table
      :userList="userList"
      :propList="propList"
      :showIndexColumn="showIndexColumn"
      :showSelectColumn="showSelectColumn"
      @selectionChange="handleSelectionChange"
    >
      <template #enable="innerData">
        <el-button plain size="mini" :type="innerData.row.enable ? 'primary' : 'danger'">{{
          innerData.row.enable ? '启用' : '禁用'
        }}</el-button>
      </template>
      <template #createAt="innerData">
        <span>{{ $filters.formatTime(innerData.row.createAt) }}</span>
      </template>
      <template #updateAt="innerData">
        <span>{{ $filters.formatTime(innerData.row.updateAt) }}</span>
      </template>
      <template #action>
        <el-button size="mini" type="text" icon="el-icon-edit">编辑</el-button>
        <el-button size="mini" type="text" icon="el-icon-delete">删除</el-button>
      </template>
    </hy-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

import PageSearch from '@/components/page-search'
import HyTable from '@/base-ui/table'

import { searchFormConfig, propList } from './config/search.config'

export default defineComponent({
  name: 'user',
  setup() {
    const store = useStore()

    store.dispatch('systemModule/getPageListAction', {
      pageUrl: 'users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    const userList = computed(() => store.state.systemModule.userList)

    const userCount = computed(() => store.state.systemModule.userCount)

    const showIndexColumn = true
    const showSelectColumn = true

    const handleSelectionChange = (value: any) => {
      console.log(value)
    }

    return {
      searchFormConfig,
      userList,
      propList,
      showIndexColumn,
      showSelectColumn,
      handleSelectionChange
    }
  },
  components: { PageSearch, HyTable }
})
</script>

<style scoped></style>
