<template>
  <div>
    <el-form
      ref="form"
      :model="form"
      label-width="80px"
      label-position="top"
      @submit.native.prevent
    >
      <el-form-item label="用戶名/賬號">
        <div class="userError">
          <el-input
            size="mini"
            v-model.trim="form.username"
            clearable
          ></el-input>
        </div>
      </el-form-item>
      <el-form-item label="密碼">
        <div class="pwdError">
          <el-input
            size="mini"
            v-model.trim="form.password"
            clearable
            show-password
          ></el-input>
        </div>
      </el-form-item>
      <el-checkbox label="記住賬號" v-model="isRemember"></el-checkbox>
      <el-button native-type="submit" size="mini" @click="loginPage"
        >登錄</el-button
      >
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      isRemember: false,
    };
  },
  methods: {
    async loginPage() {
      // 登入api
      const url = `${process.env.VUE_APP_API}/admin/signin`;
      const vm = this;
      this.$http.post(url, vm.form).then((res) => {
        console.log(res);
        // 如果登入失敗，就跳出error
        if (!res.data.success) {
          alert('error');
        } else if (vm.isRemember) {
          const tokens = res.data.token;
          const expireds = res.data.expired;
          vm.setCookie(vm.form.username, vm.form.password, true, 1 / 24 / 60, tokens, expireds);
          vm.$router.push('/admin');
        } else {
          vm.clearCookie();
        }
      });
    },
    setCookie(username, password, isRemember, exdays, tokens, expireds) {
      // 設定cookie資訊
      const time = new Date();
      time.setTime(time.getTime() + 24 * 60 * 60 * 1000 * exdays);
      // 將cookie資訊依依寫入
      document.cookie = `username = ${username} ; path=/;expires=${time.toGMTString()}`;
      document.cookie = `password = ${password} ; path=/;expires=${time.toGMTString()}`;
      document.cookie = `isRemember = ${isRemember} ; path=/;expires=${time.toGMTString()}`;
      document.cookie = `shiauspace = ${tokens} ; expires=${new Date(expireds)}`;
    },
    getCookie() {
      // 取得cookie資訊
      if (document.cookie.length > 0) {
        // 先將cookie 切割成陣列(原先為字串)
        const arr = document.cookie.split('; ');
        // 將值再切割，依序帶入cookie
        for (let i = 0; i < arr.length; i += 1) {
          const val2 = arr[i].split('=');
          console.log(val2, 'val2');
          if (val2[0] === 'username') {
            this.form.username = val2[1];
          } else if (val2[0] === 'password') {
            this.form.password = val2[1];
          } else if (val2[0] === 'isRemember') {
            this.isRemember = Boolean(val2[1]);
          }
        }
      }
    },
    clearCookie() {
      this.setCookie('', '', false, -1);
    },
  },
  mounted() {
    this.getCookie();
  },
};
</script>
