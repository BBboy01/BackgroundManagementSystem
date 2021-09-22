<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="userInfo" ref="formRef">
      <el-form-item label="账号" prop="account">
        <el-input v-model="userInfo.account" type="username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="userInfo.password" type="password" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'

import { ElForm } from 'element-plus'

import { rules } from '../config/account-config'

export default defineComponent({
  setup() {
    const userInfo = reactive({
      account: '',
      password: ''
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = () => {
      formRef.value?.validate((valid) => {
        if (valid) {
          return
        }
      })
    }

    return { userInfo, rules, loginAction, formRef }
  }
})
</script>

<style scoped lang="scss"></style>
