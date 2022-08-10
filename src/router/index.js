import Vue from 'vue';
import axios from 'axios';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/',
  },
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/Index.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/Home.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue'),
      },
      {
        path: '/products',
        name: 'Products',
        component: () => import('../views/Products.vue'),
      },
      {
        path: '/products/:id',
        name: 'Products_Detail',
        component: () => import('../views/ProductsDetail.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('../views/Backhome.vue'),
    children: [
      {
        path: '/',
        name: 'admin',
        component: () => import('../pages/backEnd/Backproduct.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'order',
        name: 'backOrder',
        component: () => import('../pages/backEnd/BackOrder.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'coupon',
        name: 'backCoupon',
        component: () => import('../pages/backEnd/BackCoupon.vue'),
        meta: { requiresAuth: true },
      },
    ],
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
