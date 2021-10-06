import { RouteRecordRaw } from 'vue-router';

export const Product: RouteRecordRaw = {
  path: '/product',
  component: () => import('@/views/product/index.vue')
};
