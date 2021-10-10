<template>
  <div class="app">
    <el-config-provider :locale="zhCn">
      <router-view />
    </el-config-provider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

export default defineComponent({
  name: 'App',
  setup() {
    return { zhCn }
  },
  components: { ElConfigProvider }
})
</script>

<style lang="scss">
.app {
  height: 100%;
}
</style>
