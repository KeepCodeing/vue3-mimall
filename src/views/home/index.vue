<template>
  <page-container :user-state="userState">
    <template #content>
      <product-carousel />
      <product-board />
      <phone-product />
    </template>
  </page-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import PageContainer from '@/components/layout/index.vue';
import { GET_USER_STATE } from '@/store/types';
import ProductCarousel from './components/product-carousel.vue';
import ProductBoard from './components/product-board.vue';
import PhoneProduct from './components/phone-product.vue';

export default defineComponent({
  components: {
    PageContainer,
    ProductCarousel,
    ProductBoard,
    PhoneProduct
  },
  setup() {
    const store = useStore();
    const userState = store.getters[`login/${GET_USER_STATE}`]();
    return {
      userState
    };
  }
});
</script>
