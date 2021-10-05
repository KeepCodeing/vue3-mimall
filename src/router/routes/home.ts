import { RouteRecordRaw } from 'vue-router';

export const Home: RouteRecordRaw = {
  path: '/home',
  component: () => import('@/views/home/index.vue')
};
