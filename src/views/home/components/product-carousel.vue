<template>
  <div class="relative px-28" style="height: 451px">
    <div
      class="absolute z-50 h-full bg-black bg-opacity-20"
      style="width: 264px; padding-top: 30px"
    >
      <div
        class="inline-block w-full p-3 pl-4 text-white cursor-pointer menu-item"
        v-for="item in menuList"
        :key="item"
      >
        <div
          class="flex justify-between w-full h-full"
          @mouseenter="drawerFlag = true"
          @mouseleave="drawerFlag = false"
        >
          <span>{{ item }}</span>
          <i class="mt-1 el-icon-arrow-right" />
        </div>
      </div>
      <transition>
        <swiper-drawer v-show="drawerFlag" />
      </transition>
    </div>
    <el-carousel height="451px" :interval="5000" arrow="always">
      <el-carousel-item v-for="item in imgList" :key="item">
        <img :key="item" :src="item" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import SwiperDrawer from './swiper-drawer.vue';

export default defineComponent({
  components: {
    SwiperDrawer
  },
  setup() {
    const imgList = ref<string[]>([]);
    const drawerFlag = ref(false);
    const menuList = ref([
      '手机 电话卡',
      '电视 盒子',
      '笔记本 平板',
      '家电 插线板',
      '出行 穿戴',
      '智能 路由器',
      '电源 配件',
      '生活 箱包'
    ]);
    for (let i = 1; i <= 5; i++)
      imgList.value.push(`/imgs/slider/slide-${i}.jpg`);

    return {
      imgList,
      menuList,
      drawerFlag
    };
  }
});
</script>

<style>
.el-carousel__arrow.el-carousel__arrow--left {
  left: 280px !important;
}
.menu-item:hover {
  background: rgb(255, 102, 0);
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  translate: transformY(60px);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}
</style>
