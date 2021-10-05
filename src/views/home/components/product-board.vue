<template>
  <div class="my-5 px-28">
    <el-row :gutter="20">
      <el-col :span="6" v-for="item in imgList" :key="item">
        <img
          class="cursor-pointer"
          style="height: 167px; width: 297px"
          :src="item"
        />
      </el-col>
      <el-col :span="24">
        <img class="mt-3 cursor-pointer" src="/imgs/banner-1.png" />
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const imgList = ref<string[]>([]);
    imgList.value.push('/imgs/ads/ads-1.png');
    imgList.value.push('/imgs/ads/ads-2.jpg');
    imgList.value.push('/imgs/ads/ads-3.png');
    imgList.value.push('/imgs/ads/ads-4.jpg');
    return {
      imgList
    };
  }
});
</script>
