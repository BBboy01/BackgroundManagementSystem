<template>
  <div class="login">
    <login-panel />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import LoginPanel from './cpns/login-panel.vue'

export default defineComponent({
  setup() {
    return {}
  },
  components: {
    LoginPanel
  }
})
</script>

<style scoped lang="scss">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
