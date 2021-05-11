<template>
  <div>
    <h2>backHome</h2>
    <button @click="logOut">登出</button>
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
    console.log(this.$http.defaults);
  },
};
</script>
