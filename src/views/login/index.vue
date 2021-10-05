<template>
  <el-container class="h-full">
    <el-header class="flex items-center bg-white" style="height: 113px">
      <div class="ml-8"><img src="/imgs/login-logo.png" /></div>
    </el-header>
    <el-main style="height: 576px; padding: 0">
      <div class="login-main">
        <login-form />
      </div>
    </el-main>
    <el-footer>
      <div class="flex items-center justify-center text-xl font-thin h-28">
        <p class="text-gray-300">
          I am Login footer, it's useless, but I will still write it on next
          components
        </p>
      </div>
    </el-footer>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginForm from './components/login-form.vue';

export default defineComponent({
  components: {
    LoginForm
  },
  setup() {
    return {};
  }
});
</script>

<style scoped>
.login-main {
  height: 100%;
  background: url('/imgs/login-bg.jpg') center no-repeat;
  background-size: cover;
  position: relative;
}
</style>
