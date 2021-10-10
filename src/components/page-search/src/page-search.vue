<template>
  <div class="page-search">
    <hy-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btn">
          <el-button type="primary" icon="el-icon-refresh" @click="handleResetClick">
            重置
          </el-button>
          <el-button type="primary" icon="el-icon-search" @click="handleQueryClick">
            搜索
          </el-button>
        </div>
      </template>
    </hy-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import HyForm from '@/base-ui/form'

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    const formItems = props.searchFormConfig.formItems ?? []
    const formOriginalData: any = {}
    for (const item of formItems) {
      formOriginalData[item.field] = ''
    }

    const formData = ref(formOriginalData)

    const handleResetClick = () => {
      for (const key in formOriginalData) {
        formData.value[key] = formOriginalData[key]
      }
      emit('resetBtnClick')
    }

    const handleQueryClick = () => {
      emit('queryBtnClick', formData.value)
    }

    return { formData, handleResetClick, handleQueryClick }
  },
  components: { HyForm }
})
</script>

<style scoped lang="scss">
.page-search {
  .header {
    color: aqua;
  }
  .handle-btn {
    text-align: right;
    padding: 0 50px 20px 0;
  }
}
</style>
