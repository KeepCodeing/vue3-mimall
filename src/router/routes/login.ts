import { RouteRecordRaw } from 'vue-router';

export const Login: RouteRecordRaw = {
  path: '/login',
  component: () => import('@/views/login/index.vue')
};
