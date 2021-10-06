<template>
  <div class="mt-8 item-bg">
    <div class="pt-10">
      <h2 class="font-bold text-7xl">小米CC9</h2>
      <h3 class="mt-3 text-5xl font-bold">3200万自拍，4800万三摄</h3>
      <p class="mt-5">
        <a href="" id="" class="px-3 font-light">全球首款双频 GP</a
        ><span>|</span><a href="" id="" class="px-3 font-light">骁龙845</a
        ><span>|</span><a href="" id="" class="px-3 font-light">AI 变焦双摄</a
        ><span>|</span><a href="" id="" class="px-3 font-light">红外人脸识别</a>
      </p>
      <div class="mt-10">
        <span class="text-4xl">￥1799</span>
      </div>
    </div>
  </div>
  <div class="item-bg-2"></div>
  <div class="item-bg-3"></div>
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
.item-bg {
  background: url(/imgs/product/product-bg-1.png) no-repeat center;
  height: 718px;
  text-align: center;
}
.item-bg-2 {
  background: url(/imgs/product/product-bg-2.png) no-repeat center;
  height: 480px;
  background-size: 1226px 397px;
}
.item-bg-3 {
  background: url(/imgs/product/product-bg-3.png) no-repeat center;
  height: 638px;
  background-size: cover;
}
</style>
