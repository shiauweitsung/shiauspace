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
          <img
            src="~@/assets/images/back/spacecloth.jpg"
            alt=""
            :title="item.title"
          />
          <div class="back-wrap-products-items-list-info">
            <h4>{{ item.title }}</h4>
            <p>分類: {{ item.category }}</p>
            <p>贊助最低單位: {{ item.price }}</p>
          </div>
        </div>
        <div class="back-wrap-products-items-edit">
          <img
            src="~@/assets/images/icon/settings.png"
            alt="編輯"
            title="編輯"
            class="back-wrap-products-items-edit-btn"
            @click="editShow($event)"
          />
          <div class="back-wrap-products-items-edit-list">
            <button>修改</button>
            <button>刪除</button>
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
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      class="edit-modal"
    >
      <span>
        <div class="edit-form">
          <div class="edit-form-title edit-form-item">
            <input
              type="text"
              class="edit-form-input"
              id="title"
              placeholder="標題"
            />
            <label for="title" class="edit-form-label">標題</label>
          </div>
          <div class="edit-form-category edit-form-item">
            <input
              type="text"
              class="edit-form-input"
              id="category"
              placeholder="分類"
            />
            <label for="category" class="edit-form-label">分類</label>
          </div>
          <div class="edit-form-price edit-form-item">
            <input
              type="number"
              class="edit-form-input"
              id="price"
              placeholder="贊助最低金額"
            />
            <label for="price" class="edit-form-label">贊助最低金額</label>
          </div>
          <div class="edit-form-unit edit-form-item">
            <input
              type="text"
              class="edit-form-input"
              id="unit"
              placeholder="單位"
            />
            <label for="unit" class="edit-form-label">單位</label>
          </div>
          <div class="edit-form-description edit-form-item">
            <textarea
              name=""
              cols="30"
              rows="5"
              class="edit-form-textarea"
              id="description"
            >
            </textarea>
            <label for="description" class="edit-form-label">介紹</label>
          </div>
          <div class="edit-form-content edit-form-item">
            <textarea
              name="content"
              id=""
              cols="30"
              rows="5"
              class="edit-form-textarea"
            ></textarea>
            <label for="content" class="edit-form-label">內容</label>
          </div>
        </div>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button class="second-btn" @click="dialogVisible = false"
          >取 消</el-button
        >
        <el-button
          type="primary"
          class="main-btn"
          @click="dialogVisible = false"
          >確 定</el-button
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
      const thisBtn = document.getElementsByClassName('back-wrap-products-items-edit-btn');
      for (let y = 0; y < dropmenu.length; y += 1) {
        dropmenu[y].dataset.index = y + 1;
        thisBtn[y].dataset.index = y + 1;
      }
      // 第一次點擊時，還是false，所以不會執行全部關閉，第二次點擊時，已經為true，則執行全部關閉
      if (!e.target.nextElementSibling.classList.contains('show')) {
        for (let i = 0; i < dropmenu.length; i += 1) {
          const dropmeunlist = dropmenu[i];
          dropmeunlist.classList.remove('show');
        }
      }
      const thisId = e.target.dataset.index;
      const menuId = e.target.nextElementSibling.dataset.index;
      if (thisId === menuId) {
        e.target.nextElementSibling.classList.toggle('show');
      }
    },
  },
  mounted() {
    window.onclick = function (e) {
      if (!e.target.matches('.back-wrap-products-items-edit img')) {
        const dropmenu = document.getElementsByClassName('back-wrap-products-items-edit-list show');
        if (dropmenu.length > 0) {
          dropmenu[0].classList.remove('show');
        }
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
    position: relative;

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
      position: absolute;
      cursor: pointer;
      right: 25px;
      top: 10px;

      & > img {
        position: absolute;
        right: 0px;
        width: 24px;
      }
      &-list {
        position: absolute;
        top: 32px;
        right: -3px;
        visibility: hidden;
        transition: all 0.2s ease-in-out;
        background-color: map-get($color, main);
        padding: 5px 0px;
        border-radius: 6px;
        display: none;
        &::after {
          content: '';
          position: absolute;
          width: 0px;
          height: 0px;
          top: -6px;
          right: 10px;
          border-style: solid;
          border-color: transparent transparent map-get($color, main)
            transparent;
          border-width: 0px 5px 8px 5px;
        }
        & > button {
          color: #fff;
          transition: all 0.4s ease-in-out;
          display: block;
          padding: 10px 15px;
          width: 65px;
          &:hover {
            background-color: #6c6c6c;
            color: map-get($color, hover);
          }
        }
        &.show {
          visibility: visible;
          display: flex;
          flex-direction: column;
          align-items: center;
          opacity: 1;
          animation: fadein 0.4s ease-in-out forwards;
          transform-origin: top center;
          @keyframes fadein {
            0% {
              transform: scaleY(0);
            }
            80% {
              transform: scaleY(1.1);
            }
            100% {
              transform: scaleY(1);
            }
          }
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
</style>
