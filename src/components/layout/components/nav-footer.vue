<template>
  <div class="w-full footer-box" style="background: rgb(51, 51, 51)">
    <div class="text-sm font-light" style="color: rgb(153, 153, 153)">
      <div>
        <img
          style="height: 36px; width: 53px; margin: 0 auto 0 auto"
          src="/imgs/logo-footer.png"
        />
        <p class="mt-3">小米商城</p>
      </div>
      <div class="mt-5 text-center">
        <p>
          <span class="px-5 intro-item" v-for="item in intro" :key="item">
            {{ item }}
          </span>
        </p>
        <p class="mt-2">
          Copyright ©2019
          <span style="color: rgb(222, 67, 51)">mi.futurefe.com</span> All
          Rights Reserved.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const intro = ['Vue3', 'Vue-router', 'Vuex', 'axios', 'typescript'];
    return {
      intro
    };
  }
});
</script>

<style scoped>
.footer-box {
  @apply flex items-center justify-center py-8 text-sm text-center text-gray-400;
}
.intro-item {
  border-right: 1px solid rgb(153, 153, 153);
}
.intro-item:last-child {
  border: none;
}
</style>
