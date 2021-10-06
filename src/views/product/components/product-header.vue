<template>
  <div class="flex justify-between h-8 pt-3 border-t-2 px-28">
    <div class="text-xl font-extrabold">小米CC9</div>
    <div class="text-sm font-light">
      <span class="px-2 service-item">概述</span>
      <span class="px-2 service-item">参数</span>
      <span class="px-2 service-item">用户评价</span>
      <div
        style="background: rgb(255, 102, 0)"
        class="inline-block px-5 py-1 ml-2 text-white cursor-pointer"
      >
        立即购买
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  }
});
</script>

<style scoped>
.service-item {
  border-right: 1px solid black;
}
.service-item:last-of-type {
  border: none;
}
</style>
