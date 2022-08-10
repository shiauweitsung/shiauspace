<template>
    <div class="products-detail">
				<loads />
        product detail
				<div class="products-detail-container" v-if="findProduct">
					<div class="products-detail-img">
						<img :src="productDetail.image" :alt="productDetail.title">
					</div>
					<div class="products-detail-info">
						<div class="products-detail-title">{{ productDetail.title }}</div>
						<div class="products-detail-content">{{ productDetail.content }}</div>
						<div class="products-detail-count">
							<label for="">贊助金額(USDT)</label>
							<div class="products-detail-count-item">
								<button @click="countQTY('-')">-</button>
								<input type="text" v-model="qty">
								<button @click="countQTY('+')">+</button>
							</div>
						</div>
						<div class="products-detail-add_cart" @click="addCarts(productDetail.id, qty)">
							加入贊助清單
						</div>
						<div class="products-detail-buy">
							立即贊助
						</div>
					</div>
				</div>
				<div v-else>
					沒商品
				</div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'product_detail',
  data() {
    return {
      id: this.$route.params,
      cartData: {
        productId: this.id,
        qty: this.qty,
      },
    };
  },
  methods: {
    ...mapActions('products', ['addCart']),
    addCarts(id, qty) {
      const data = {
        productId: id,
        qty,
      };
      this.addCart(data);
    },
    countQTY(state) {
      // console.log(state);
      if (state === '+') {
        this.$store.commit('products/UPDATE_QTY', this.qty + 1);
      } else {
        this.$store.commit('products/UPDATE_QTY', this.qty - 1);
      }
    },
  },
  computed: {
    ...mapGetters('products', ['findProduct', 'productDetail']),
    qty: {
      get() {
        return this.$store.state.products.qty;
      },
      set(value) {
        this.$store.commit('products/UPDATE_QTY', Number(value));
      },
    },
  },
  mounted() {
    this.$store.dispatch('products/getProductsDetails', this.id);
  },
};
</script>

<style lang="scss">
@import '~@/assets/all.scss';
.products-detail {
   @include container;
}
</style>
