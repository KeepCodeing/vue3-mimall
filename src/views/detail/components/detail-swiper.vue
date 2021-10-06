<template>
  <el-carousel height="617px" :interval="5000" arrow="never">
    <el-carousel-item v-for="item in imgList" :key="item">
      <div
        :style="{ 'background-image': 'url(' + item + ')' }"
        class="h-full py-5 bg-center bg-no-repeat bg-contain"
      ></div>
    </el-carousel-item>
  </el-carousel>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const imgList = ref<string[]>([]);
    for (let i = 1; i <= 4; i++)
      imgList.value.push(`/imgs/detail/phone-${i}.jpg`);
    return {
      imgList
    };
  }
});
</script>

<style>
.el-carousel__button {
  background: blue !important;
}
</style>
