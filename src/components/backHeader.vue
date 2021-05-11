<template>
  <div class="back-sidebar">
    <ul>
      <li>
        <router-link to=""
          ><span><img src="~@/assets/images/icon/rocket.png" alt="" /></span>
          <p>贊助項目</p>
        </router-link>
      </li>
      <li>
        <router-link to=""
          ><span><img src="~@/assets/images/icon/space.png" alt="" /></span
          >贊助訂單</router-link
        >
      </li>
      <li>
        <router-link to=""
          ><span
            ><img
              src="~@/assets/images/icon/coupon-removebg-preview.png"
              alt="" /></span
          >贊助優惠</router-link
        >
      </li>
    </ul>
    <div class="logout">
      <button @click="logOut">登出</button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    logOut() {
      const url = `${process.env.VUE_APP_API}/logout`;
      const vm = this;
      this.$http.post(url).then((res) => {
        if (res.data.success) {
          vm.$router.push('/');
        }
      });
    },
  },
  created() {
    const cookietoken = document.cookie.replace(/(?:(?:^|.*;\s*)shiauspace\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = cookietoken;
  },
};
</script>
<style lang="scss">
@import '~@/assets/base/base.scss';
.back-sidebar {
  position: fixed;
  left: 0px;
  top: 0px;
  bottom: 0px;
  background-color: map-get($color, main);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > ul {
    padding-left: 0px;
    & > li {
      padding: 10px;
      & > a {
        color: #fff;
        text-decoration: none;
        display: flex;
        align-items: center;
        &:hover {
          color: map-get($color, hover);
          & > span {
            & > img {
              box-shadow: 0 0 10px 10px #fffbfb1f;
            }
          }
        }
        & > span {
          display: inline-block;
          margin-right: 15px;
          padding: 5px;
          border-radius: 10px;
          transition: all 0.5s;
          & > img {
            width: 40px;
          }
        }
      }
    }
  }
}
.logout {
  margin-bottom: 30px;
}
</style>
