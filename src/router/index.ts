import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { Login } from './routes/login';
import { Home } from './routes/home';
import { Product } from './routes/product';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  Login,
  Home,
  Product
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export { router };

export default router;
