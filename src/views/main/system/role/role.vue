<template>
  <div class="role">
    <page-search :searchFormConfig="searchFormConfig" />

    <page-content
      :tableContentConfig="tableContentConfig"
      pageName="role"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    />

    <page-model
      :modelConfig="modelConfig"
      pageName="role"
      ref="pageModelRef"
      :defaultInfo="defaultInfo"
      :otherInfo="otherInfo"
    >
      <div class="menu-tree">
        <el-tree
          ref="elTreeRef"
          :data="menus"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleCheckChange"
        />
      </div>
    </page-model>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, nextTick } from 'vue'
import { useStore } from '@/store'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModel from '@/components/page-model'
import { ElTree } from 'element-plus'

import { tableContentConfig } from './config/content.config'
import { searchFormConfig } from './config/search.config'
import { modelConfig } from './config/model.config'

import usePageModel from '@/hooks/usePageModel'
import { menuMapLeafKeys } from '@/utils/map-menus'

export default defineComponent({
  name: 'role',
  setup() {
    const store = useStore()
    const menus = computed(() => store.state.entireMenu)

    const otherInfo = ref({})

    const elTreeRef = ref<InstanceType<typeof ElTree>>()

    const handleCheckChange = (data1: any, data2: any) => {
      const checkKeys = data2.checkKeys
      const halfCheckKeys = data1.halfCheckKeys
      const menuList = [...checkKeys, ...halfCheckKeys]
      otherInfo.value = { menuList }
    }

    const editCallback = (item: any) => {
      const leafKeys = menuMapLeafKeys(item.menuList)
      nextTick(() => {
        elTreeRef.value?.setCheckedKeys(leafKeys, false)
      })
    }

    const [pageModelRef, defaultInfo, handleNewData, handleEditData] = usePageModel(
      undefined,
      editCallback
    )

    return {
      tableContentConfig,
      searchFormConfig,
      modelConfig,
      pageModelRef,
      defaultInfo,
      handleNewData,
      handleEditData,
      menus,
      otherInfo,
      elTreeRef,
      handleCheckChange
    }
  },
  components: { PageSearch, PageContent, PageModel }
})
</script>

<style scoped>
.menu-tree {
  margin-left: 25px;
}
</style>
