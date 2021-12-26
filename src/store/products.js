import axios from 'axios';
import { getField, updateField } from 'vuex-map-fields';

export default {
  namespaced: true,
  state: {
    products: [],
    // isNew: false,
  },
  actions: {
    getProducts(context) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      context.commit('UPDATE_LOADING', true, { root: true });
      axios.get(url).then((res) => {
        console.log(res);
        context.commit('PRODUCTS', res.data.products);
        context.commit('UPDATE_LOADING', false, { root: true });
      });
    },
  },
  mutations: {
    updateField,
    PRODUCTS(state, payload) {
      state.products = payload;
    },
  },
  getters: {
    getField,
    products(state) {
      return state.products;
    },
  },
};
