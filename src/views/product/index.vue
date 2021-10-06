<template>
  <page-container>
    <template #content>
      <product-header />
      <product-hero />
      <product-swiper />
      <product-video />
    </template>
  </page-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageContainer from '@/components/layout/index.vue';
import ProductHeader from './components/product-header.vue';
import ProductHero from './components/product-hero.vue';
import ProductSwiper from './components/product-swiper.vue';
import ProductVideo from './components/product-video.vue';

export default defineComponent({
  components: {
    PageContainer,
    ProductHeader,
    ProductHero,
    ProductSwiper,
    ProductVideo
  },
  setup() {
    return {};
  }
});
</script>
