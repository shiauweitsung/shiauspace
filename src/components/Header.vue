<template>
  <div class="header">
    <div class="header-wrap">
      <div class="header-logo">
        <h1>
          <router-link to="/">SPACE X</router-link>
        </h1>
      </div>
      <div class="header-menu">
        <ul ref="menu">
          <li>
            <routerLink class="main-link" to="/about">關於我們</routerLink>
          </li>
          <li>
            <routerLink class="main-link" to="/news">太空事件</routerLink>
          </li>
          <li>
            <routerLink class="main-link" to="/product">贊助計畫</routerLink>
          </li>
          <li>
            <routerLink class="main-link" to="/knowloge">認識SPACE</routerLink>
          </li>
          <li>
            <routerLink class="main-link" to="/login">登入</routerLink>
          </li>
        </ul>
      </div>
      <div class="header-mob-menu">
        <button class="header-mob-menu-icon" v-if="mobShow" @click="mobOpen">
          <img src="~@/assets/images/icon/menu.png" alt="" />
        </button>
        <button class="header-mob-menu-icon" v-else @click="mobHide">
          <img src="~@/assets/images/icon/cancel.png" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  inject: ['reload'],
  data() {
    return {
      mobShow: true,
    };
  },
  watch: {
    $route() {
      this.reload();
    },
  },
  mounted() {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
      let thisScroll = window.scrollY;
      if (thisScroll > 100) {
        header.classList.add('active');
      } else {
        header.classList.remove('active');
      }
    });
  },
  methods: {
    mobOpen() {
      this.mobShow = false;
      this.$refs.menu.classList.add('active');
      window.document.body.classList.add('body-active');
    },
    mobHide() {
      this.mobShow = true;
      this.$refs.menu.classList.remove('active');
      window.document.body.classList.remove('body-active');
    },
  },
};
</script>
<style lang="scss" scoped>
.header.active {
  background-color: rgba(88, 88, 88, 0.8);
}
.header {
  position: fixed;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99999;
  width: 100%;
  z-index: 99999999;
  transition: all 0.5s;
  // opacity: 0;
  &-wrap {
    max-width: 1440px;
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    letter-spacing: 1.5px;
  }
  &-logo {
    padding: 15px;
    margin-left: 15px;
    & > h1 {
      font-size: 1.5rem;
      & > a {
        color: #fff !important;
      }
    }
  }
  &-menu {
    padding: 15px;
    @media (max-width: 768px) {
      padding: 0;
    }
    .active {
      top: 0px;
    }
    & > ul {
      display: flex;
      align-items: center;
      margin: 0;
      margin-right: 15px;
      transition: ease-in-out 0.4s;
      padding-left: 0;
      @media (max-width: 768px) {
        position: fixed;
        top: -100vh;
        left: 0px;
        right: 0px;
        width: 100%;
        height: 100vh;
        margin-right: 0px;
        background-color: #000;
        flex-direction: column;
        justify-content: center;
      }
      & > li {
        margin-right: 15px;
        @media (max-width: 768px) {
          margin-right: 0px;
          margin-bottom: 15px;
          font-size: 1.1rem;
        }
        & > a {
          @media (max-width: 768px) {
            padding-bottom: 5px;
            border-bottom: 1px solid #252525;
          }
        }
      }
    }
  }
  &-mob-menu {
    display: none;
    @media (max-width: 768px) {
      display: block;
    }
    &-icon {
      margin-right: 15px;
      position: relative;
      & > img {
        width: 24px;
        z-index: 9;
      }
    }
  }
}
</style>
