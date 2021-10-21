<template>
  <div class="page-model">
    <el-dialog v-model="dialogVisible" title="新建用户" width="30%" center destroy-on-close>
      <hy-form v-bind="modelConfig" v-model="formData" />
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick = false">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

import { useStore } from '@/store'

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
    },
    pageName: {
      type: String,
      required: true
    },
    otherInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const store = useStore()

    const dialogVisible = ref(false)
    const formData = ref<any>({})

    watch(
      () => props.defaultInfo,
      (newVal) => {
        for (const item of props.modelConfig.formItems) {
          formData.value[item.field] = newVal[item.field]
        }
      }
    )

    const handleConfirmClick = () => {
      dialogVisible.value = false
      if (Object.getOwnPropertyNames(props.defaultInfo).length) {
        store.dispatch('systemModule/editPageDataAction', {
          pageName: props.pageName,
          editData: { ...formData.value, ...props.otherInfo },
          id: props.defaultInfo.id
        })
      } else {
        store.dispatch('systemModule/createPageDataAction', {
          pageName: props.pageName,
          newData: { ...formData.value }
        })
      }
    }

    return { dialogVisible, formData, handleConfirmClick }
  },
  components: { HyForm }
})
</script>

<style scoped lang="scss"></style>
