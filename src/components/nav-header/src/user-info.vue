<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          size="small"
          url="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        ></el-avatar>
        <span>{{ userName }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="el-icon-circle-close" @click="handleExitClick">
            退出
          </el-dropdown-item>
          <el-dropdown-item divided>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import localCache from '@/utils/cache'

export default defineComponent({
  setup() {
    const store = useStore()
    const router = useRouter()

    const userName = computed(() => store.state.loginModule.userInfo.name)

    const handleExitClick = () => {
      localCache.deleteCache('token')
      router.push('/main')
    }

    return { userName, handleExitClick }
  }
})
</script>

<style scoped lang="scss">
.user-info {
  .el-dropdown-link {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
  }
}
</style>
