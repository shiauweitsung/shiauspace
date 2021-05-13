<template>
  <div>
    <h3>贊助項目</h3>
    <div class="back-wrap-products">
      <div
        class="back-wrap-products-items"
        v-for="(item, i) in products"
        :key="i"
      >
        <div class="back-wrap-products-items-list">
          <img :src="item.image" alt="" />
          <div class="back-wrap-products-items-list-info">
            <h4>{{ item.title }}</h4>
            <p>分類: {{ item.category }}</p>
            <p>贊助最低單位: {{ item.price }}</p>
            <div class="back-wrap-products-items-edit">
              <img
                src="~@/assets/images/icon/settings.png"
                alt=""
                @click="editShow($event)"
              />
              <div class="back-wrap-products-items-edit-list">
                <button>修改</button>
                <button>刪除</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="back-products-add" @click="dialogVisible = true">
      <svg
        height="20px"
        viewBox="0 0 448 448"
        width="20px"
        xmlns="http://www.w3.org/2000/svg"
        fill="#fff"
      >
        <path
          d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40
          17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156
          40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156
          40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0"
        />
      </svg>
    </div>
    <!-- modal -->
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    ...mapActions('backManage', ['getProducts']),
    editShow(e) {
      const dropmenu = document.getElementsByClassName('back-wrap-products-items-edit-list');
      for (let i = 0; i < dropmenu.length; i += 1) {
        const dropmeunlist = dropmenu[i];
        dropmeunlist.classList.remove('show');
      }
      e.target.nextElementSibling.classList.add('show');
    },
  },
  mounted() {
    window.onclick = function (e) {
      console.log(e);
      if (!e.target.matches('.back-wrap-products-items-edit-list')) {
        console.log('true');
        const dropmenu = document.getElementsByClassName('back-wrap-products-items-edit-list show');
        dropmenu.classList.remove('show');
        console.log(dropmenu, 'dropmenu');
      }
    };
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
  position: relative;
  &-items {
    max-width: 33.33%;
    flex-basis: 33.33%;
    margin-bottom: 20px;

    @media (max-width: 1200px) {
      max-width: 49.99%;
      flex-basis: 49.99%;
    }
    @media (max-width: 768px) {
      max-width: 33.33%;
      flex-basis: 33.33%;
    }
    @media (max-width: 576px) {
      max-width: 49.99%;
      flex-basis: 49.99%;
    }
    @media (max-width: 412px) {
      max-width: 95%;
      flex-basis: 95%;
    }
    &-list {
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
      &-info {
        padding: 10px;
        & > h4 {
          margin-bottom: 10px;
        }
        & > p {
          margin-bottom: 10px;
        }
        & > p:nth-last-of-type(1) {
          margin-bottom: 0px;
        }
      }
    }
    &-edit {
      span {
        & > img {
          width: 24px;
        }
      }
      &-list {
        display: none;
        &.show {
          display: block;
        }
      }
    }
  }
}
.back-products-add {
  position: fixed;
  right: 0px;
  bottom: 60px;
  z-index: 99;
  border: 1px solid map-get($color, main);
  line-height: 1em;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  padding: 8px 10px;
  background-color: map-get($color, three);
  text-align: center;
  transition: all 0.4s;
  cursor: pointer;
  &:hover {
    background-color: map-get($color, second);
  }
  & > svg {
    display: block;
  }
}
// .el-dropdown-menu {
//   position: fixed !important;
// }
</style>
