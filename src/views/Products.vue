<template>
  <div class="products">
    <loads />
    <div class="products-header">
      <div class="products-header-search">
        <input type="text" placeholder="Search" />
      </div>
      <div class="products-header-category"></div>
    </div>
    <div class="products-cont">
      <transition-group class="products-list" tag="div" name="fade">
        <div
          class="products-list-item"
          v-for="(item, key) in products"
          :key="key"
          :data-delay="key"
          :style="{ '--key': key }"
        >
          <img :src="item.image" alt="" />
          <div class="products-list-item-info">
            <p class="products-title">{{ item.title }}</p>
            <p>贊助內容:</p>
            <p>最低贊助額度: {{ item.price }}</p>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      show: true,
    };
  },
  methods: {
    ...mapActions('products', ['getProducts']),
  },
  computed: {
    ...mapGetters('products', ['products', 'isNew']),
  },
  created() {
    this.getProducts();
  },
};
</script>
<style lang="scss">
@import '~@/assets/all.scss';
.products {
  &-header {
    @include container;
    position: sticky;

    &-search {
      max-width: 50%;
      margin: 0 auto;
      @media (max-width: 768px) {
        max-width: 100%;
      }
      & > input {
        width: 100%;
      }
    }
  }
  &-cont {
    @include container;
  }
  &-list {
    margin: 0 auto;
    margin-top: 30px;
    max-width: 900px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    &-item {
      max-width: 30%;
      flex-basis: 30%;
      margin-bottom: 20px;
      border: 1px solid white;
      @media (max-width: 768px) {
        max-width: 47%;
        flex-basis: 47%;
      }
      @media (max-width: 576px) {
        max-width: 70%;
        flex-basis: 70%;
      }
      & > img {
        max-width: 100%;
        width: 100%;
      }
      &-info {
        padding: 10px;
      }
    }
  }
  &-title {
    font-size: 18px;
    font-weight: 600;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s;
    transition-delay: calc(0.1s * var(--key));
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
</style>
