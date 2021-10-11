<template>
  <div class="page-content">
    <hy-table
      :userList="dataList"
      v-bind="tableContentConfig"
      :listCount="dataCount"
      @selectionChange="handleSelectionChange"
      v-model:page="pageInfo"
    >
      <template #headerHandler>
        <el-button type="primary" size="medium" v-if="isCreate" @click="handleNewClick">
          新建用户
        </el-button>
      </template>

      <template #enable="innerData">
        <el-button plain size="mini" :type="innerData.row.enable ? 'primary' : 'danger'">
          {{ innerData.row.enable ? '启用' : '禁用' }}
        </el-button>
      </template>
      <template #createAt="innerData">
        <span>{{ $filters.formatTime(innerData.row.createAt) }}</span>
      </template>
      <template #updateAt="innerData">
        <span>{{ $filters.formatTime(innerData.row.updateAt) }}</span>
      </template>
      <template #action="innerData">
        <el-button
          size="mini"
          type="text"
          icon="el-icon-edit"
          v-if="isUpdate"
          @click="handleEditClick(innerData.row)"
        >
          编辑
        </el-button>
        <el-button
          size="mini"
          type="text"
          icon="el-icon-delete"
          v-if="isDelete"
          @click="handleDeleteClick(innerData.row)"
        >
          删除
        </el-button>
      </template>

      <template v-for="item in otherPropSlots" :key="item.prop" #[item.slotName]="scope">
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </hy-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import { useStore } from '@/store'

import HyTable from '@/base-ui/table'

import usePermission from '@/hooks/usePermission'

export default defineComponent({
  props: {
    tableContentConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  emits: ['newBtnClick', 'editBtnClick'],
  setup(props, { emit }) {
    const store = useStore()

    const pageInfo = ref({ currentPage: 1, pageSize: 10 })

    const isCreate = usePermission(props.pageName, 'create')
    const isUpdate = usePermission(props.pageName, 'update')
    const isQuery = usePermission(props.pageName, 'query')
    const isDelete = usePermission(props.pageName, 'delete')

    watch(pageInfo, () => getPageContent())

    const getPageContent = (queryInfo = {}) => {
      if (!isQuery) return
      store.dispatch('systemModule/getPageListAction', {
        pageName: props.pageName,
        pageUrl: 'users/list',
        queryInfo: {
          offset: (pageInfo.value.pageSize - 1) * pageInfo.value.currentPage,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }

    getPageContent()

    const dataList = computed(() => store.getters['systemModule/pageListData'](props.pageName))
    const dataCount = computed(() => store.getters['systemModule/pageListCount'](props.pageName))

    const handleSelectionChange = (value: any) => {
      console.log(value)
    }

    const otherPropSlots = props.tableContentConfig?.propList.filter((item: any) => {
      if (item.slotName === 'status') return false
      if (item.slotName === 'createAt') return false
      if (item.slotName === 'updateAt') return false
      if (item.slotName === 'action') return false
      return true
    })

    const handleDeleteClick = (item: any) => {
      store.dispatch('systemModule/deletePageDataAction', {
        pageName: props.pageName,
        id: item.id
      })
    }
    const handleNewClick = () => {
      emit('newBtnClick')
    }
    const handleEditClick = (item: any) => {
      emit('editBtnClick', item)
    }

    return {
      dataList,
      handleSelectionChange,
      getPageContent,
      handleDeleteClick,
      handleNewClick,
      handleEditClick,
      dataCount,
      pageInfo,
      otherPropSlots,
      isCreate,
      isDelete,
      isUpdate
    }
  },
  components: { HyTable }
})
</script>

<style scoped lang="scss"></style>
