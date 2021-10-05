<template>
  <div class="flex items-center min-h-screen bg-gray-100">
    <div class="grid grid-cols-5 grid-rows-2 px-28">
      <div class="col-span-1 row-span-2 py-3 cursor-pointer">
        <img src="/imgs/mix-alpha.jpg" />
      </div>
      <div
        class="col-span-1 row-span-1 py-3"
        v-for="(item, idx) in phoneProductList"
        :key="item"
      >
        <div class="relative h-full pt-10 pb-2 mx-2 bg-white">
          <span v-if="idx % 2 === 0" class="new-product">新品</span>
          <img :src="item.img" />
          <div class="mt-5 text-center cursor-pointer">
            <p class="font-bold">{{ item.name }}</p>
            <p class="text-xs font-thin text-gray-500">6400万全场景四摄</p>
            <p style="color: rgb(255, 102, 0)" class="mt-5">
              {{ item.price }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="w-full py-8 text-center text-gray-500 border-b-4"
    style="border-color: rgb(255, 102, 0)"
  >
    <span class="px-10 service-item" v-for="item in serviceList" :key="item"
      ><i
        style="
          height: 13px;
          width: 20px;
          background-size: contain;
          background-repeat: no-repeat;
        "
        :style="{ 'background-image': `url(${item.icon})` }"
        class="inline-block"
      />{{ item.name }}</span
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { phoneProductList } from '../data/phone.data';

export default defineComponent({
  setup() {
    const serviceList = [
      { name: '预约维修服务', icon: '/imgs/icon-setting.png' },
      { name: '7天无理由退货', icon: '/imgs/icon-7day.png' },
      { name: '15天免费换货', icon: '/imgs/icon-15day.png' },
      { name: '满150包邮', icon: '/imgs/icon-post.png' }
    ];
    return {
      phoneProductList,
      serviceList
    };
  }
});
</script>

<style scoped>
.new-product {
  @apply transform -translate-x-1/2 absolute top-0 text-center text-white bg-green-400  left-1/2;
  padding: 1px 10px;
}
.service-item {
  border-right: 1px solid rgb(51, 51, 51);
}
.service-item:last-child {
  border: none;
}
</style>
