<template>
  <div class="table">
    <el-table :data="userList" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column v-if="showSelectColumn" type="selection" align="center" width="60" />
      <el-table-column v-if="showIndexColumn" type="index" label="序号" align="center" width="80" />
      <template v-for="item in propList" :key="item.prop">
        <el-table-column v-bind="item" align="center">
          <template #default="innerData">
            <slot :name="item.slotName" :row="innerData.row">{{ innerData.row[item.prop] }}</slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    userList: {
      type: Object,
      require: true
    },
    propList: {
      type: Object,
      require: true
    },
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    showSelectColumn: {
      type: Boolean,
      default: false
    }
  },
  emits: ['selectionChange'],
  setup(prop, { emit }) {
    const handleSelectionChange = (val: any) => {
      emit('selectionChange', val)
    }

    return { handleSelectionChange }
  }
})
</script>

<style scoped lang="scss">
.table {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
