<template>
  <page-container :user-state="userState"></page-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import PageContainer from '@/components/layout/index.vue';
import { GET_USER_STATE } from '@/store/types';

export default defineComponent({
  components: {
    PageContainer
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
