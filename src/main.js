import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/base.css';
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
import axios from 'axios';
import VueAxios from 'vue-axios';
import gsap from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger';
import MotionPathPlugin from 'gsap/MotionPathPlugin';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all';
import SplitText from 'gsap/TextPlugin';
import * as THREE from 'three';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import loads from './components/Loading.vue';
import App from './App.vue';
import router from './router';
import store from './store';

gsap.registerPlugin(scrollTrigger, MotionPathPlugin, SplitText);
Vue.use(ElementUI);
Vue.use(Loading);
Vue.component('load', Loading);
Vue.component('loads', loads);
Vue.use(gsap);
Vue.component(CollapseTransition.name, CollapseTransition);
Vue.use(VueAxios, axios);
Vue.use(THREE);

Vue.config.productionTip = false;

// 全域註冊
Vue.mixin({
  created() {
    this.gsap = gsap;
    this.scrollTrigger = scrollTrigger;
    this.THREE = THREE;
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
