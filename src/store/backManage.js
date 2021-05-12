import axios from 'axios';

export default {
  namespaced: true,
  state: {
    products: [],
  },
  actions: {
    getProducts(context) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/products/all`;
      axios.get(url).then((res) => {
        console.log(res);
        if (res.data.success) {
          Object.keys(res.data.products).forEach((item) => {
            console.log(res.data, item);
            res.data.products[item].setting = false;
          });
          context.commit('PRODUCTS', res.data.products);
        }
      });
    },
  },
  mutations: {
    PRODUCTS(state, payload) {
      state.products = payload;
    },
  },
  getters: {
    products(state) {
      return state.products;
    },
  },
};
