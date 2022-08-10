import axios from 'axios';
import { getField, updateField } from 'vuex-map-fields';

export default {
  namespaced: true,
  state: {
    products: [],
    filterProducts: [],
    search: '',
    findProduct: false,
    productDeatil: [],
    qty: 1,
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
    getProductsDetails(context, { id }) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`;
      context.commit('UPDATE_LOADING', true, { root: true });
      axios.get(url).then((res) => {
        if (res.data.success) {
          context.commit('UPDATE_PRODUCT_DETAIL', res.data.product);
        }
        context.commit('UPDATE_DETAIL_STATUS', res.data.success);
        context.commit('UPDATE_LOADING', false, { root: true });
      });
    },
    addCart(context, data) {
      const { productId, qty } = data;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      context.commit('UPDATE_LOADING', true, { root: true });
      axios.post(url, {
        data: {
          product_id: productId,
          qty,
        },
      }).then((res) => {
        console.log(res);
        context.commit('UPDATE_DETAIL_STATUS', res.data.success);
        context.commit('UPDATE_LOADING', false, { root: true });
      });
    },
  },
  mutations: {
    updateField,
    PRODUCTS(state, payload) {
      state.products = payload;
      state.filterProducts = payload;
    },
    UPDATE_SEARCH(state, payload) {
      state.search = payload;
      let { products } = state;
      if (payload === '') {
        state.filterProducts = products;
      } else {
        state.filterProducts = products.filter((item) => {
          if (item.title.includes(payload)) {
            return item;
          }
          return null;
        });
      }
    },
    UPDATE_DETAIL_STATUS(state, payload) {
      state.findProduct = payload;
    },
    UPDATE_PRODUCT_DETAIL(state, payload) {
      state.productDeatil = payload;
    },
    UPDATE_QTY(state, payload) {
      console.log(payload);
      state.qty = payload;
    },
  },
  getters: {
    getField,
    products(state) {
      return state.filterProducts;
    },
    search: (state) => state.search,
    findProduct: (state) => state.findProduct,
    productDetail: (state) => state.productDeatil,
    // 產品贊助數量
    qty: (state) => state.qty,
  },
};
