<template>
  <div class="page-model">
    <el-dialog v-model="dialogVisible" title="新建用户" width="30%" center destroy-on-close>
      <hy-form v-bind="modelConfig" v-model="formData" />
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

import HyForm from '@/base-ui/form'

export default defineComponent({
  props: {
    modelConfig: {
      type: Object,
      required: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const dialogVisible = ref(false)
    const formData = ref<any>({})

    watch(
      () => props.defaultInfo,
      (newVal) => {
        for (const item of props.defaultInfo.formItems) {
          formData.value[item.field] = newVal[item.field]
        }
      }
    )

    return { dialogVisible, formData }
  },
  components: { HyForm }
})
</script>

<style scoped lang="scss"></style>
