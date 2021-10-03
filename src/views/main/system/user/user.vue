<template>
  <div class="user">
    <div class="search">
      <hy-form v-bind="searchFormConfig" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import HyForm from '@/base-ui/form'

import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  setup() {
    return { searchFormConfig }
  },
  components: { HyForm }
})
</script>

<style scoped></style>
