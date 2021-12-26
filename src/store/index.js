import Vue from 'vue';
import Vuex from 'vuex';
import backManage from './backManage';
import products from './products';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
  },
  mutations: {
    UPDATE_LOADING(state, payload) {
      state.isLoading = payload;
    },
  },
  actions: {
  },
  getters: {
    isLoading: (state) => state.isLoading,
  },
  modules: {
    backManage,
    products,
  },
});
