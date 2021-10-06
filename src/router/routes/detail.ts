import { RouteRecordRaw } from 'vue-router';

export const Detail: RouteRecordRaw = {
  path: '/detail',
  component: () => import('@/views/detail/index.vue')
};
