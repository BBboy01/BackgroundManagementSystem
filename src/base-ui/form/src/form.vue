<template>
  <div class="form">
    <div class="header">
      <slot name="header" />
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item :label="item.label" :rules="item.rules" :style="itemLayout">
              <template v-if="item.type === 'password' || item.type === 'input'">
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-model="formData[`${item.field}`]"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select :placeholder="item.placeholder" v-model="selectedValue">
                  <el-option
                    v-for="option in item.options"
                    :key="option.key"
                    :value="option.value"
                    v-model="formData[item.field]"
                    >{{ option.title }}</el-option
                  >
                </el-select>
              </template>
              <template v-else-if="item.type === 'datePicker'">
                <el-date-picker
                  v-bind="item.otherOptions"
                  v-model="formData[item.field]"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
        <el-col :span="8">
          <el-form-item label="用户名">
            <el-input />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue'

import type { IFormItem } from '../types'

export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      require: true
    },
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    itemLayout: {
      type: Object,
      default: () => ({ padding: '10px 40px' })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const selectedValue = ref('')
    const formData = ref({ ...props.modelValue })

    watch(formData, (newVal) => emit('update:modelValue', newVal), { deep: true })

    return { selectedValue, formData }
  }
})
</script>

<style scoped lang="scss">
.form {
  padding-top: 22px;
}
</style>
