import Vue from 'vue';
import axios from 'axios';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/',
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Backhome.vue'),
    meta: { requiresAuth: true },
  },
];

const router = new VueRouter({
  routes,
});

export default router;

router.beforeEach((to, from, next) => {
  const url = `${process.env.VUE_APP_API}/api/user/check`;
  if (to.meta.requiresAuth) {
    axios.post(url).then((res) => {
      if (res.data.success) {
        next();
      } else {
        next({ name: 'Login' });
      }
    });
  }
  next();
});
