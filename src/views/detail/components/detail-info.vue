<template>
  <div class="pb-4 border-b-2">
    <h2 class="text-4xl font-bold">小米CC9</h2>
    <p class="mt-2 text-sm">
      相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS /
      骁龙845处理器 / 红 外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏
    </p>
    <p class="mt-4 text-lg" style="color: rgb(255, 102, 0)">小米直营</p>
    <p class="mt-1 text-lg">
      <span style="color: rgb(255, 102, 0)" class="mr-2">1799元</span
      ><span class="text-sm text-gray-500 line-through">1999元</span>
    </p>
  </div>
  <div class="text-sm text-gray-600 border-2 p-7 bg-gray-50 mt-7">
    <p>
      <i class="mr-2 el-icon-location-outline" />北京 北京市 朝阳区 安定门街道
    </p>
    <p class="mt-2" style="color: rgb(255, 102, 0)">有现货</p>
  </div>
  <div class="mt-7">
    <h2 class="text-xl font-bold">选择版本</h2>
    <div class="grid grid-cols-2 mt-4">
      <div class="item-button">6G+64GB全网</div>
      <div class="item-button">4G+64GB移动4G</div>
    </div>
  </div>
  <div class="mt-7">
    <h2 class="text-xl font-bold">选择颜色</h2>
    <div class="grid grid-cols-2 mt-4">
      <div class="item-button">深空灰</div>
    </div>
  </div>
  <div class="mt-10 text-sm text-gray-500 p-7 bg-gray-50">
    <p class="flex justify-between">
      <span>小米CC9 4GB+64GB 移动4G 深灰色</span>
      <span>1799元</span>
    </p>
    <p class="mt-4 text-2xl" style="color: rgb(255, 102, 0)">总计：1799元</p>
  </div>
  <div>
    <div class="grid grid-cols-2 mt-8">
      <div
        class="p-4 text-xl text-center text-white cursor-pointer"
        style="background: rgb(255, 102, 0)"
      >
        加入购物车
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
.item-button {
  @apply col-span-1 p-3 mr-2 text-center border-2 cursor-pointer  hover:border-yellow-500;
}
</style>
