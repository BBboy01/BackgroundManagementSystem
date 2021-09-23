<template>
  <div class="login-phone">
    <el-form label-width="60px" :rules="rules" :model="userInfo">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="userInfo.phone" type="phone" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="verifyCode">
        <div class="get-code">
          <el-input v-model="userInfo.verifyCode" type="password" autocomplete="off"></el-input>
          <el-button class="get-button" type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

import cache from '@/utils/cache'

import { rules } from '../config/account-config'

export default defineComponent({
  setup() {
    const userInfo = reactive({
      phone: cache.getCache('phone') ?? '',
      verifyCode: ''
    })

    const loginAction = (isKeepLoginStatus: boolean) => {
      if (isKeepLoginStatus) {
        cache.setCache('phone', userInfo.phone)
      }
    }

    return { userInfo, rules, loginAction }
  }
})
</script>

<style scoped lang="scss">
.get-code {
  display: flex;

  .get-button {
    margin-left: 8px;
  }
}
</style>
