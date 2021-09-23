<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="userInfo" ref="formRef">
      <el-form-item label="账号" prop="account">
        <el-input v-model="userInfo.account" type="username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="userInfo.password" type="password" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'

import { ElForm } from 'element-plus'

import { rules } from '../config/account-config'
import cache from '@/utils/cache'

export default defineComponent({
  setup() {
    const store = useStore()

    const userInfo = reactive({
      account: cache.getCache('account') ?? '',
      password: cache.getCache('password') ?? ''
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = (isKeepLoginStatus: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          // 是否保持登录态
          if (isKeepLoginStatus) {
            cache.setCache('account', userInfo.account)
            cache.setCache('password', userInfo.password)
          } else {
            cache.deleteCache('account')
            cache.deleteCache('password')
          }

          store.dispatch('loginModule/accountLoginAction', {
            name: userInfo.account,
            password: userInfo.password
          })
        }
      })
    }

    return { userInfo, rules, loginAction, formRef }
  }
})
</script>

<style scoped lang="scss"></style>
