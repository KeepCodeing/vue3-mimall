<template>
  <div class="flex justify-center w-full">
    <el-carousel
      class="w-4/5 my-10"
      :interval="4000"
      type="card"
      height="294px"
    >
      <el-carousel-item v-for="item in galleryList" :key="item">
        <img :src="item" style="height: 294px" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const galleryList = ref<string[]>([]);
    for (let i = 1; i <= 4; i++)
      galleryList.value.push(`/imgs/product/gallery-${i}.png`);
    galleryList.value.push('/imgs/product/gallery-5.jpg');
    galleryList.value.push('/imgs/product/gallery-6.jpg');

    return {
      galleryList
    };
  }
});
</script>
