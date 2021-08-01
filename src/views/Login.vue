<template>
  <div class="login">
    <form action="" class="login-form">
      <div class="login-form-title">
        <h4>Login</h4>
      </div>
      <div class="login-form-account">
        <input type="text" placeholder="Account" v-model.trim="form.username" />
      </div>
      <div class="login-form-pwd">
        <input
          type="password"
          placeholder="Password"
          v-model.trim="form.password"
        />
      </div>
      <div class="login-form-remember">
        <input type="checkbox" id="rememberID" v-model="isRemember" />
        <label for="rememberID">記住我</label>
      </div>
      <input type="submit" @click="loginPage" class="login-btn" value="登入" />
      <div class="login-form-forget">
        <a href="">忘記密碼</a> ｜
        <a href="">註冊帳號</a>
      </div>
    </form>
    <button class="main-btn" id="copy-account" @click="copy('shiau@gmail.com')">
      複製帳號
    </button>
    <button class="main-btn" id="copy-pwd" @click="copy('shiau123')">
      複製密碼
    </button>
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
    loginPage() {
      // 登入api
      const url = `${process.env.VUE_APP_API}/admin/signin`;
      const vm = this;
      this.$http.post(url, vm.form).then((res) => {
        // 如果登入失敗，就跳出error
        console.log(res);
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
    copy(e) {
      const txt = document.createElement('textarea');
      console.log(e);
      txt.value = e;
      txt.style.position = 'fixed';
      txt.style.top = 0;
      txt.style.clip = 'rect(0,0,0,0)';
      document.body.appendChild(txt);
      txt.select();
      document.execCommand('copy');
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
<style lang="scss" scoped>
@import '~@/assets/all.scss';
.login {
  height: 100vh;
  width: 100%;
  background: url(~@/assets/images/frontEnd/bg.jpg);
  background-size: contain;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  &-form {
    width: 370px;
    padding: 30px;

    border-radius: 8px;
    position: relative;
    overflow: hidden;
    z-index: 1;
    &::before {
      content: '';
      position: absolute;
      left: 0px;
      right: 0px;
      top: 0px;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(2px);
      z-index: -1;
    }
    &-title {
      font-weight: normal;
      text-align: center;
      margin-top: 10px;
      margin-bottom: 25px;
      & > h4 {
        font-size: 24px;
      }
    }
    &-account,
    &-pwd {
      display: flex;
    }
    &-forget {
      text-align: center;
      margin-top: 10px;
      & > a {
        font-size: 12px;
      }
    }
    &-remember {
      display: flex;
      align-items: center;
      & > input {
        width: auto;
        margin: 0;
        margin-right: 5px;
        padding: 0;
      }
      & > label {
        margin-bottom: 0px;
      }
    }
  }
}
input {
  background-color: rgba(50, 50, 50, 0.3);
  outline: none;
  border: transparent;
  border-radius: 0px;
  width: 100%;
  margin-bottom: 10px;
  padding: 8px 10px;
  line-height: 1em;
  color: #fff;
  &:focus {
    outline: none;
  }
  &::placeholder {
    letter-spacing: 1.2px;
    color: rgb(99, 85, 85);
  }
}
.login-btn {
  width: 100%;
  display: block;
  background-color: map-get($color, three);
  margin-top: 15px;
  padding: 8px;
  color: #fff;
  line-height: 1rem;
  cursor: pointer;
}
</style>
