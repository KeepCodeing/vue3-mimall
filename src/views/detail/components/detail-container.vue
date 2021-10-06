<template>
  <div class="grid grid-cols-2 py-10 px-28">
    <div class="col-span-1 row-span-1">
      <detail-swiper />
    </div>
    <div class="col-span-1 row-span-1 pl-3">
      <detail-info />
    </div>
  </div>
  <div class="w-full py-10 px-28 bg-gray-50">
    <h2 class="text-2xl font-bold">价格说明</h2>
    <div class="mt-10">
      <img src="/imgs/detail/item-price.jpeg" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DetailSwiper from './detail-swiper.vue';
import DetailInfo from './detail-info.vue';

export default defineComponent({
  components: {
    DetailSwiper,
    DetailInfo
  },
  setup() {
    return {};
  }
});
</script>
