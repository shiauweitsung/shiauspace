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
          <img :src="item.image" alt="" :title="item.title" />
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
            <button @click="openModal(item, false)">修改</button>
            <button @click="delModal(item)">刪除</button>
          </div>
        </div>
      </div>
    </div>
    <div class="back-products-add" @click="openModal({}, true)">
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
    <!-- editmodal -->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      class="edit-modal"
    >
      <span>
        <div class="edit-form">
          <form action="">
            <div class="edit-form-title edit-form-item">
              <input
                type="text"
                class="edit-form-input"
                id="title"
                placeholder="標題"
                v-model="title"
              />
              <label for="title" class="edit-form-label">標題</label>
            </div>
            <div class="edit-form-category edit-form-item">
              <input
                type="text"
                class="edit-form-input"
                id="category"
                placeholder="分類"
                v-model="category"
              />
              <label for="category" class="edit-form-label">分類</label>
            </div>
            <div class="edit-form-price edit-form-item">
              <input
                type="number"
                class="edit-form-input"
                id="price"
                placeholder="贊助最低金額"
                v-model="price"
              />
              <label for="price" class="edit-form-label">贊助最低金額</label>
            </div>
            <div class="edit-form-unit edit-form-item">
              <input
                type="text"
                class="edit-form-input"
                id="unit"
                placeholder="單位"
                v-model="unit"
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
                v-model="description"
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
                v-model="content"
              ></textarea>
              <label for="content" class="edit-form-label">內容</label>
            </div>
            <div class="edit-form-image edit-form-item">
              <label for="image">上傳圖片</label>
              <input
                type="file"
                class="edit-form-image-file"
                @change="uploadImg()"
                ref="uploadimg"
              />
              <img :src="image" alt="" style="width: 100%" />
            </div>
            <div class="edit-form-image edit-form-item">
              <input
                type="text"
                class="edit-form-input"
                id="image-url"
                placeholder="網址"
                v-model="image"
              />
              <label for="image-url" class="edit-form-label">網址</label>
            </div>
          </form>
        </div>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button class="second-btn" @click="dialogVisible = false"
          >取 消</el-button
        >
        <el-button
          type="primary"
          class="main-btn"
          @click="updateProduct(editProduct, isNew)"
          >確 定</el-button
        >
      </span>
    </el-dialog>
    <el-dialog title="刪除" :visible.sync="deldialogVisible" width="30%">
      <span>是否確定刪除</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deldialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="delProduct(editProduct)"
          >確 定</el-button
        >
      </span>
    </el-dialog>
    <loads />
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import { createHelpers } from 'vuex-map-fields';

const { mapFields } = createHelpers({
  getterType: 'backManage/getEditProduct',
  mutationType: 'backManage/updateEditProduct',
});

export default {
  data() {
    return {
      dialogVisible: false,
      deldialogVisible: false,
      img: '',
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
    openModal(item, isNew) {
      this.dialogVisible = true;
      this.$store.commit('backManage/UPDATE_MODAL', { item, isNew });
    },
    updateProduct(item, isNew) {
      this.dialogVisible = false;
      this.$store.dispatch('backManage/updateProduct', { item, isNew });
    },
    delModal(item) {
      this.deldialogVisible = true;
      this.$store.commit('backManage/DEL_MODAL', item);
    },
    delProduct(item) {
      this.deldialogVisible = false;
      this.$store.dispatch('backManage/delProduct', item);
    },
    uploadImg() {
      // 需要補上上傳一次後，如果再次點擊 取消時事件
      const file = this.$refs.uploadimg.files[0];
      const vm = this;
      const formData = new FormData();
      formData.append('file-to-upload', file);
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/upload`;
      this.$store.commit('UPDATE_LOADING', true);
      this.$http.post(url, formData, {
        header: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((res) => {
        if (res.data.success) {
          vm.$store.commit('backManage/UPDATE_FILE', res.data.imageUrl);
        }
        vm.$store.commit('UPDATE_LOADING', false);
      });
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
    ...mapGetters('backManage', ['products', 'editProduct', 'isNew']),
    ...mapFields(['title', 'category', 'price', 'unit', 'description', 'content', 'image', 'imgUrl']),
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
  padding: 20px;
  color: black;
  position: relative;
  &-items {
    max-width: 24.99%;
    flex-basis: 24.99%;
    margin-bottom: 20px;
    position: relative;

    @media (max-width: 1000px) {
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
      top: 210px;

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
        z-index: 999;
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
