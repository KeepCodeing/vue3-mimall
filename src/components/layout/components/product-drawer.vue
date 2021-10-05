<template>
  <div class="relative w-full px-28 h-28">
    <el-row align="center" style="height: 100%; align-items: center">
      <el-col :span="3">
        <div
          style="background: rgb(255, 102, 0)"
          class="overflow-hidden h-14 w-14 logo"
        >
          <a href="#" />
        </div>
      </el-col>
      <el-col :span="16">
        <div
          class="product-item"
          @mouseenter="showProductList(phoneProductList)"
          @mouseleave="prodcutFlag = false"
        >
          小米手机
        </div>
        <div class="product-item">RedMi红米</div>
        <div
          class="product-item"
          @mouseleave="prodcutFlag = false"
          @mouseenter="showProductList(tvProductList)"
        >
          电视
        </div>
      </el-col>
    </el-row>
    <transition>
      <div
        class="absolute left-0 w-full h-56 px-28"
        @mouseenter="prodcutFlag = true"
        @mouseleave="prodcutFlag = false"
        v-show="prodcutFlag"
      >
        <el-row class="h-full bg-white shadow">
          <el-col
            :span="4"
            class="relative pro-item"
            v-for="item in curProductList"
            :key="item"
          >
            <div class="cursor-pointer product-item-box">
              <div class="p-5">
                <img :src="item.img" />
              </div>
              <div class="text-sm font-bold text-center">
                <p class="mb-1 text-black">{{ item.name }}</p>
                <p style="color: rgb(255, 102, 0)">{{ item.price }}</p>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { phoneProductList } from './data/phone.data';
import { tvProductList } from './data/tv.data';

export default defineComponent({
  setup() {
    const prodcutFlag = ref(false);
    const curProductList = ref(phoneProductList);

    const showProductList = (productList: any) => {
      curProductList.value = productList;
      prodcutFlag.value = true;
    };

    return {
      phoneProductList,
      tvProductList,
      curProductList,
      showProductList,
      prodcutFlag
    };
  }
});
</script>

<style scoped>
.logo > a {
  display: inline-block;
  width: 112px;
  height: 55px;
}

.logo > a::before {
  content: ' ';
  height: 56px;
  width: 56px;
  background: url('/imgs/mi-logo.png') center no-repeat;
  display: inline-block;
  transition: margin 0.2s;
}

.logo > a:hover:before {
  margin-left: -56px;
  transition: margin 0.2s;
}

.logo > a::after {
  content: ' ';
  height: 56px;
  width: 56px;
  background: url('/imgs/mi-home.png') center no-repeat;
  display: inline-block;
  transition: margin 0.2s;
}

.product-item {
  @apply inline-block mx-3 text-lg font-black text-black cursor-pointer;
}

.product-item:hover {
  color: rgb(255, 102, 0);
  transition: color 0.2s;
}

.product-item-box::before {
  content: ' ';
  position: absolute;
  top: 28px;
  right: 0;
  border-left: 1px solid #d7d7d7;
  height: 100px;
  width: 1px;
}

.pro-item:last-child .product-item-box:before {
  border: none;
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
