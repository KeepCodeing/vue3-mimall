<template>
  <div class="login-form-container">
    <el-form
      ref="loginForm"
      :model="account"
      :rules="rules"
      style="width: 330px"
    >
      <el-form-item>
        <div class="flex justify-around text-2xl font-bold text-center mb-7">
          <span style="color: #ff6600">账号登陆</span>
          <span>|</span>
          <span>手机登陆</span>
        </div>
      </el-form-item>
      <el-form-item prop="username">
        <el-input
          v-model="account.username"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="account.password"
          type="password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          style="
            width: 100%;
            height: 50px;
            margin-top: 10px;
            background: #ff6600;
            border: none;
            border-radius: 0;
          "
          type="primary"
          @click="submitLogin"
          >登陆</el-button
        >
      </el-form-item>
      <el-form-item style="margin-top: -15px">
        <div class="flex justify-between">
          <span class="text-yellow-500">手机短信登陆/注册</span>
          <span>立即注册 | 忘记密码？</span>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import { useStore } from 'vuex';
import { GET_LOGING_INFO } from '@/store/types';

export default defineComponent({
  setup() {
    const loginForm = ref<any>(null);
    const store = useStore();

    const account = reactive({
      username: '',
      password: ''
    });
    const rules = reactive({
      username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
      password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
    });

    const submitLogin = () => {
      loginForm.value?.validate((valid: boolean) => {
        if (valid) store.dispatch(`login/${GET_LOGING_INFO}`, account);
      });
    };

    return {
      account,
      rules,
      submitLogin,
      loginForm
    };
  }
});
</script>

<style>
.login-form-container {
  height: 510px;
  @apply absolute p-10 transform -translate-y-1/2 bg-white  top-1/2;
  right: 10%;
}
.el-input__inner {
  height: 50px !important;
}
</style>
