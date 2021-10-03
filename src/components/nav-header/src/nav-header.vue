<template>
  <div class="nav-header">
    <i
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      class="fold-menu"
      @click="handleFoldClick"
    ></i>
    <div class="content">
      <hy-breadcrumb :breadcrumbs="breadcrumbs" />
      <user-info></user-info>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from '@/store'

import UserInfo from './user-info.vue'
import HyBreadcrumb from '@/base-ui/breadcrumb'
import { pathMap2Breadcrumbs } from '@/utils/map-menus'

import type { IBreadCrumb } from '@/base-ui/breadcrumb'

export default defineComponent({
  emits: ['foldChange'],
  setup(props, { emit }) {
    const store = useStore()
    const route = useRoute()
    const isFold = ref<boolean>(false)

    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    const userMenus = store.state.loginModule.menus

    const breadcrumbs = computed<IBreadCrumb[]>(() => {
      const currentPath = route.path

      return pathMap2Breadcrumbs(userMenus, currentPath)
    })

    return { handleFoldClick, isFold, breadcrumbs }
  },
  components: { UserInfo, HyBreadcrumb }
})
</script>

<style scoped lang="scss">
.nav-header {
  width: 100%;
  display: flex;

  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    flex: 1;
  }
}
</style>
