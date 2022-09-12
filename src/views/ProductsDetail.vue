<template>
    <div class="products-detail">
				<loads />
				<div class="products-detail-container" v-if="findProduct">
					<div class="products-detail-img">
						<img :src="productDetail.image" :alt="productDetail.title">
					</div>
					<div class="products-detail-info">
						<div class="products-detail-title">{{ productDetail.title }}</div>
						<div class="products-detail-count">
							<label for="qty">贊助單位(USDT)</label>
							<div class="products-detail-count-item">
								<button @click="countQTY('-')">-</button>
								<input class="products-detail-count-item-qty" name="qty" type="number" v-model="qty">
								<button @click="countQTY('+')">+</button>
							</div>
						</div>
            <div class="products-detail-buttons">
              <Button :title="'立即贊助'" @onClick="buyNow(productDetail.id, qty)" />
              <Button
                :title="'加入贊助清單'"
                @onClick="addCarts(productDetail.id, qty)"
              />
            </div>
					</div>
          <div class="products-detail-content">{{ productDetail.content }}123</div>
				</div>
				<div v-else>
					沒商品
				</div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Button from '../components/Button.vue';

export default {
  name: 'product_detail',
  components: {
    Button,
  },
  data() {
    return {
      id: this.$route.params,
      title: 'test',
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
    buyNow(id, qty) {
      const data = {
        productId: id,
        qty,
        push: true,
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
      if (this.qty <= 1) {
        this.$store.commit('products/UPDATE_QTY', 1);
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

    &-container {
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      background: url('~@/assets/images/frontEnd/product_detail_bg.png');
      background-position: center;
      padding: 60px;
      border-radius: 20px;
      width: 680px;
      max-width: 90%;
    }

    &-img {
      flex-basis: 60%;
      &>img {
        width: 100%;
      }
    }

    &-info {
      display: flex;
      flex-direction: column;
      text-align: right;
      flex-basis: 40%;
      flex-grow: 1;
    }

    &-title {
      font-size: 24px;
      margin-bottom: 12px;
    }

    &-count {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      flex: 1;
      flex-direction: column;
      margin-bottom: 12px;
      &>label {
        font-size: 12px;
      }
      &-item {
        &>button {
          color: map-get($color, white);
          font-size: 14px;
        }
        &-qty {
          background: none;
          outline: none;
          border: none;
          border-bottom: 1px solid white;
          color: white;
          width: 60px;
          text-align: center;
          box-shadow: none;
          border-radius: 0px;
        }
      }
    }
    &-buttons {
      display: flex;
      justify-content: flex-end;
      &>div:nth-child(1) {
        margin-right: 8px;
      }
    }
}
</style>
