import axios from 'axios';
import { getField, updateField } from 'vuex-map-fields';

export default {
  namespaced: true,
  state: {
    products: [],
    editProduct: [],
    isNew: false,
  },
  actions: {
    getProducts(context) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/products/all`;
      axios.get(url).then((res) => {
        console.log(res);
        if (res.data.success) {
          Object.keys(res.data.products).forEach((item) => {
            // console.log(res.data, item);
            res.data.products[item].setting = false;
          });
          context.commit('PRODUCTS', res.data.products);
        }
      });
    },
  },
  mutations: {
    updateField,
    PRODUCTS(state, payload) {
      state.products = payload;
    },
    UPDATE_MODAL(state, payload) {
      if (payload.isNew) {
        state.editProduct = {};
      } else {
        const arr = JSON.parse(JSON.stringify(payload.item));
        state.editProduct = arr;
      }
    },
    updateEditProduct(state, field) {
      updateField(state.editProduct, field);
    },
  },
  getters: {
    getField,
    products(state) {
      return state.products;
    },
    getEditProduct(state) {
      return getField(state.editProduct);
    },
  },
};
