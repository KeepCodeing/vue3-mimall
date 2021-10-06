import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { Login } from './routes/login';
import { Home } from './routes/home';
import { Product } from './routes/product';
import { Detail } from './routes/detail';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  Login,
  Home,
  Product,
  Detail
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export { router };

export default router;
