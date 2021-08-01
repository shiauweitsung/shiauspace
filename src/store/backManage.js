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
      context.commit('UPDATE_LOADING', true, { root: true });
      axios.get(url).then((res) => {
        console.log(res.data);
        if (res.data.success) {
          Object.keys(res.data.products).forEach((item) => {
            // console.log(res.data, item);
            res.data.products[item].setting = false;
          });
          context.commit('PRODUCTS', res.data.products);
          context.commit('UPDATE_LOADING', false, { root: true });
        }
      });
    },
    updateProduct(context, { item, isNew }) {
      let url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${item.id}`;
      let method = 'put';
      if (isNew) {
        url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product`;
        method = 'post';
      }
      context.commit('UPDATE_LOADING', true, { root: true });
      axios[method](url, { data: item }).then((res) => {
        if (res.data.success) {
          context.dispatch('getProducts');
        }
        context.commit('UPDATE_LOADING', false, { root: true });
      });
    },
    delProduct(context, item) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${item.id}`;
      context.commit('UPDATE_LOADING', true, { root: true });
      axios.delete(url).then((res) => {
        if (res.data.success) {
          context.dispatch('getProducts');
        }
        context.commit('UPDATE_LOADING', false, { root: true });
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
        state.isNew = true;
        state.editProduct = {};
      } else {
        state.isNew = false;
        const arr = JSON.parse(JSON.stringify(payload.item));
        state.editProduct = arr;
      }
    },
    DEL_MODAL(state, payload) {
      state.editProduct = payload;
    },
    UPDATE_FILE(state, payload) {
      state.editProduct.image = payload;
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
    editProduct: (state) => state.editProduct,
    isNew: (state) => state.isNew,
    getEditProduct(state) {
      return getField(state.editProduct);
    },
  },
};
