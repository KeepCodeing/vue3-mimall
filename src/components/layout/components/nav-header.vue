<template>
  <div class="text-xs font-medium text-gray-400">
    <div class="flex items-center justify-between h-10 bg-gray-700 px-28">
      <div v-if="showMenus">
        <slot name="header-menu" :menuList="menuList">
          <ul class="flex">
            <li
              v-for="item in menuList"
              :key="item"
              class="mx-2 transition cursor-pointer"
              @click="item.link && $router.push(item.link)"
            >
              {{ item }}
            </li>
          </ul>
        </slot>
      </div>
      <div v-if="showActions" class="text-gray-400">
        <span
          class="mr-4 cursor-pointer"
          v-if="!userState.isLogin"
          @click="$router.push('/login')"
          >登陆</span
        >
        <div class="inline-block" v-else>
          <span class="mr-2 cursor-pointer hover:text-white">{{
            userState.userInfo.username
          }}</span>
          <span class="mr-2 cursor-pointer hover:text-white">我的订单</span>
          <span @click="logout" class="mr-2 cursor-pointer hover:text-white"
            >退出</span
          >
        </div>
        <div class="act-button">
          <i class="mr-2 el-icon-shopping-cart-1" />
          <span>购物车(0)</span>
        </div>
      </div>
    </div>
    <div>
      <slot name="header-product-menu">
        <product-drawer />
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { IMenuList } from '../types/header';
import { useStore } from 'vuex';
import { USER_LOG_OUT } from '@/store/types';
import { phoneProductList } from './data/phone.data';
import { tvProductList } from './data/tv.data';
import ProductDrawer from './product-drawer.vue';

export default defineComponent({
  components: { ProductDrawer },
  props: {
    menuList: {
      type: Array as PropType<IMenuList[]>,
      default: () => ['小米商城', 'MIUI', '云服务', '规则协议']
    },
    showMenus: {
      type: Boolean,
      default: true
    },
    showActions: {
      type: Boolean,
      default: true
    },
    userState: {
      type: Object,
      default: () => ({})
    }
  },
  setup() {
    const store = useStore();
    const logout = () => {
      store.dispatch(`login/${USER_LOG_OUT}`);
      window.location.reload();
    };
    const prodcutFlag = ref(false);
    const curProductList = ref(phoneProductList);

    const showProductList = (productList: any) => {
      curProductList.value = productList;
      productList.value = true;
    };

    return {
      logout,
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
.act-button {
  @apply inline-block h-full cursor-pointer
  px-4 leading-10 text-white;
  background: rgb(255, 102, 0);
}
</style>
