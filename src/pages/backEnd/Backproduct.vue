<template>
  <div>
    <div class="back-wrap-products">
      <div
        class="back-wrap-products-items"
        v-for="(item, i) in products"
        :key="i"
      >
        <div>
          <img :src="item.image" alt="" />
          <div>
            <h4>{{ item.title }}</h4>
            <p>分類: {{ item.category }}</p>
            <p>贊助最低單位: {{ item.price }}</p>
            <div class="back-wrap-products-items-edit">
              <el-dropdown trigger="click">
                <span class="el-dropdown-link"
                  ><img src="~@/assets/images/icon/settings.png" alt=""
                /></span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item><button>修改</button></el-dropdown-item>
                  <el-dropdown-item><button>刪除</button></el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  methods: {
    ...mapActions('backManage', ['getProducts']),
  },
  computed: {
    ...mapGetters('backManage', ['products']),
  },
  created() {
    this.getProducts();
  },
};
</script>
<style lang="scss">
@import '~@/assets/all.scss';
.back-wrap-products {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  padding: 20px 10px;
  color: black;
  &-items {
    max-width: 33%;
    flex-basis: 33%;
    margin-bottom: 20px;

    @media (max-width: 1200px) {
      max-width: 49%;
      flex-basis: 49%;
    }
    @media (max-width: 768px) {
      max-width: 33%;
      flex-basis: 33%;
    }
    @media (max-width: 576px) {
      max-width: 49%;
      flex-basis: 49%;
    }
    @media (max-width: 412px) {
      max-width: 95%;
      flex-basis: 95%;
    }
    & > div {
      border-radius: 5px;
      border: 1px solid #ebeef5;
      margin: 0px 15px;
      transition: all 0.2s;
      &:hover {
        box-shadow: 0px 0px 10px 2px map-get($color, three);
      }
      & > img {
        width: 100%;
      }
      & > div {
        padding: 10px;
        position: relative;
        & > h4 {
          margin-bottom: 10px;
        }
        & > p {
          margin-bottom: 10px;
        }
      }
    }
    &-edit {
      position: absolute;
      right: 10px;
      bottom: 5px;
      span {
        & > img {
          width: 24px;
        }
      }
    }
  }
}
.el-dropdown-menu {
  position: fixed !important;
}
</style>
