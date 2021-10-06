<template>
  <page-container>
    <template #content>
      <detail-header />
      <detail-container />
    </template>
  </page-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageContainer from '@/components/layout/index.vue';
import DetailHeader from './components/detail-header.vue';
import DetailContainer from './components/detail-container.vue';

export default defineComponent({
  components: {
    PageContainer,
    DetailHeader,
    DetailContainer
  },
  setup() {
    return {};
  }
});
</script>
