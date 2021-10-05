import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { Login } from './routes/login';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  Login
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export { router };

export default router;
