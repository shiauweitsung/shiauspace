<template>
  <div>
    <div class="back-header">
      <div class="back-header-btn">
        <i @click="mobShow">
          <svg
            height="24px"
            viewBox="0 -53 384 384"
            width="24px"
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
          >
            <path
              d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031
              0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
            />
            <path
              d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16
              7.167969 16 16s-7.167969 16-16 16zm0 0"
            />
            <path
              d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031
              0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
            />
          </svg>
        </i>
      </div>
      <div class="back-header-info">
        <ul>
          <li class="back-header-info-lauguage">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  style="enable-background: new 0 0 512 512"
                  xml:space="preserve"
                >
                  <g>
                    <g>
                      <path
                        d="M437.02,74.98C388.667,26.629,324.38,0,256,0S123.333,26.629,74.98,74.98C26.629,123.332,0,187.62,0,256
			s26.629,132.668,74.98,181.02C123.333,485.371,187.62,512,256,512s132.667-26.629,181.02-74.98
			C485.371,388.668,512,324.38,512,256S485.371,123.332,437.02,74.98z M207.449,35.268c-8.587,8.353-17.868,18.307-27.154,29.893
			c-16.058,20.037-29.429,41.603-39.887,64.282h-71.56C100.811,82.328,150.083,47.876,207.449,35.268z M51.695,159.443h76.819
			c-8.743,26.116-13.829,53.433-15.157,81.557H30.51C32.421,211.991,39.823,184.462,51.695,159.443z M30.51,271h82.847
			c1.328,28.124,6.413,55.441,15.157,81.557H51.695C39.823,327.538,32.421,300.009,30.51,271z M68.848,382.557h71.56
			c10.458,22.678,23.829,44.245,39.887,64.282c9.285,11.586,18.566,21.54,27.154,29.893
			C150.083,464.124,100.811,429.672,68.848,382.557z M241,466.806c-10.683-9.211-23.966-22.096-37.295-38.728
			c-11.657-14.546-21.64-29.735-29.957-45.521H241V466.806z M241,352.557h-80.782c-9.751-25.825-15.367-53.063-16.823-81.557H241
			V352.557z M241,241h-97.605c1.457-28.49,7.08-55.727,16.835-81.557H241V241z M241,129.443h-67.252
			c8.146-15.462,17.894-30.351,29.243-44.627C216.49,67.837,230.087,54.644,241,45.236V129.443z M481.49,241h-82.847
			c-1.328-28.124-6.413-55.441-15.157-81.557h76.819C472.177,184.462,479.58,211.991,481.49,241z M443.152,129.443h-71.56
			c-10.458-22.678-23.829-44.245-39.887-64.282c-9.285-11.586-18.566-21.54-27.154-29.893
			C361.918,47.876,411.19,82.328,443.152,129.443z M271,45.194c10.683,9.211,23.966,22.096,37.295,38.728
			c11.657,14.546,21.64,29.735,29.958,45.521H271V45.194z M271,159.443h80.782c9.752,25.825,15.367,53.063,16.823,81.557H271
			V159.443z M271,271h97.604c-1.457,28.49-7.08,55.727-16.835,81.557H271V271z M271,466.763v-84.206h67.252
			c-8.146,15.462-17.894,30.351-29.243,44.626C295.51,444.162,281.914,457.354,271,466.763z M304.552,476.732
			c8.587-8.353,17.868-18.307,27.154-29.893c16.058-20.037,29.429-41.603,39.887-64.282h71.56
			C411.19,429.672,361.918,464.124,304.552,476.732z M460.305,352.557h-76.819c8.743-26.116,13.829-53.433,15.157-81.557h82.847
			C479.58,300.009,472.177,327.538,460.305,352.557z"
                      />
                    </g>
                  </g>
                </svg>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>中文</el-dropdown-item>
                <el-dropdown-item>English</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
          <li class="back-header-info-user">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link"
                ><svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 480 480"
                  style="enable-background: new 0 0 480 480"
                  xml:space="preserve"
                >
                  <g>
                    <g>
                      <path
                        d="M240,0C107.664,0,0,107.664,0,240c0,57.96,20.656,111.184,54.992,152.704c0.088,0.12,0.096,0.272,0.192,0.384
			c24.792,29.896,55.928,52.816,90.624,67.624c0.4,0.168,0.792,0.352,1.192,0.52c2.808,1.184,5.648,2.28,8.496,3.352
			c1.12,0.424,2.24,0.856,3.376,1.264c2.456,0.88,4.928,1.712,7.416,2.512c1.592,0.512,3.184,1.016,4.792,1.496
			c2.2,0.656,4.408,1.288,6.632,1.888c1.952,0.528,3.92,1.016,5.888,1.488c1.992,0.48,3.992,0.96,6,1.384
			c2.24,0.48,4.504,0.904,6.776,1.32c1.824,0.336,3.64,0.688,5.48,0.984c2.52,0.408,5.056,0.728,7.6,1.056
			c1.64,0.208,3.272,0.448,4.92,0.624c2.88,0.304,5.784,0.52,8.696,0.72c1.352,0.096,2.696,0.24,4.056,0.312
			c4.248,0.24,8.544,0.368,12.872,0.368s8.624-0.128,12.888-0.352c1.36-0.072,2.704-0.216,4.056-0.312
			c2.912-0.208,5.816-0.416,8.696-0.72c1.648-0.176,3.28-0.416,4.92-0.624c2.544-0.328,5.08-0.648,7.6-1.056
			c1.832-0.296,3.656-0.648,5.48-0.984c2.264-0.416,4.528-0.84,6.776-1.32c2.008-0.432,4-0.904,6-1.384
			c1.968-0.48,3.936-0.968,5.888-1.488c2.224-0.592,4.432-1.232,6.632-1.888c1.608-0.48,3.2-0.984,4.792-1.496
			c2.488-0.8,4.96-1.632,7.416-2.512c1.128-0.408,2.248-0.84,3.376-1.264c2.856-1.072,5.688-2.176,8.496-3.352
			c0.4-0.168,0.792-0.352,1.192-0.52c34.688-14.808,65.832-37.728,90.624-67.624c0.096-0.112,0.104-0.272,0.192-0.384
			C459.344,351.184,480,297.96,480,240C480,107.664,372.336,0,240,0z M337.256,441.76c-0.12,0.056-0.232,0.12-0.352,0.176
			c-2.856,1.376-5.76,2.672-8.688,3.936c-0.664,0.28-1.32,0.568-1.984,0.848c-2.56,1.072-5.152,2.088-7.76,3.064
			c-1.088,0.408-2.176,0.808-3.272,1.192c-2.312,0.824-4.632,1.616-6.976,2.368c-1.456,0.464-2.92,0.904-4.384,1.336
			c-2.08,0.624-4.168,1.224-6.28,1.784c-1.776,0.472-3.568,0.904-5.36,1.328c-1.88,0.448-3.752,0.904-5.648,1.304
			c-2.072,0.44-4.16,0.816-6.24,1.192c-1.688,0.312-3.368,0.64-5.072,0.912c-2.344,0.368-4.712,0.664-7.072,0.96
			c-1.496,0.192-2.984,0.416-4.496,0.576c-2.696,0.288-5.416,0.472-8.128,0.664c-1.208,0.08-2.408,0.216-3.632,0.28
			c-3.96,0.208-7.928,0.32-11.912,0.32s-7.952-0.112-11.904-0.32c-1.216-0.064-2.416-0.192-3.632-0.28
			c-2.72-0.184-5.432-0.376-8.128-0.664c-1.512-0.16-3-0.384-4.496-0.576c-2.36-0.296-4.728-0.592-7.072-0.96
			c-1.704-0.272-3.384-0.6-5.072-0.912c-2.088-0.376-4.176-0.76-6.24-1.192c-1.896-0.4-3.776-0.856-5.648-1.304
			c-1.792-0.432-3.584-0.856-5.36-1.328c-2.104-0.56-4.2-1.168-6.28-1.784c-1.464-0.432-2.928-0.872-4.384-1.336
			c-2.344-0.752-4.672-1.544-6.976-2.368c-1.096-0.392-2.184-0.792-3.272-1.192c-2.608-0.976-5.2-1.992-7.76-3.064
			c-0.664-0.272-1.312-0.56-1.976-0.84c-2.928-1.256-5.832-2.56-8.696-3.936c-0.12-0.056-0.232-0.112-0.352-0.176
			c-27.912-13.504-52.568-32.672-72.576-55.952c15.464-56.944,59.24-102.848,115.56-121.112c1.112,0.68,2.272,1.288,3.416,1.928
			c0.672,0.376,1.336,0.776,2.016,1.136c2.384,1.264,4.8,2.448,7.272,3.512c1.896,0.832,3.856,1.536,5.808,2.256
			c0.384,0.136,0.768,0.288,1.152,0.424c10.848,3.84,22.456,6.04,34.6,6.04s23.752-2.2,34.592-6.04
			c0.384-0.136,0.768-0.288,1.152-0.424c1.952-0.72,3.912-1.424,5.808-2.256c2.472-1.064,4.888-2.248,7.272-3.512
			c0.68-0.368,1.344-0.76,2.016-1.136c1.144-0.64,2.312-1.248,3.432-1.936c56.32,18.272,100.088,64.176,115.56,121.112
			C389.824,409.08,365.168,428.248,337.256,441.76z M152,176c0-48.52,39.48-88,88-88s88,39.48,88,88
			c0,30.864-16.008,58.024-40.128,73.736c-3.152,2.048-6.432,3.88-9.8,5.48c-0.4,0.192-0.792,0.392-1.192,0.576
			c-23.168,10.536-50.592,10.536-73.76,0c-0.4-0.184-0.8-0.384-1.192-0.576c-3.376-1.6-6.648-3.432-9.8-5.48
			C168.008,234.024,152,206.864,152,176z M421.832,370.584c-18.136-53.552-59.512-96.832-112.376-117.392
			C330.6,234.144,344,206.64,344,176c0-57.344-46.656-104-104-104s-104,46.656-104,104c0,30.64,13.4,58.144,34.552,77.192
			c-52.864,20.568-94.24,63.84-112.376,117.392C31.672,333.792,16,288.704,16,240C16,116.488,116.488,16,240,16s224,100.488,224,224
			C464,288.704,448.328,333.792,421.832,370.584z"
                      />
                    </g>
                  </g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </svg>
              </span>
              <el-dropdown-menu slot="dropdown">
                <div class="back-header-info-user-list">
                  <img src="~@/assets/images/back/user-eso.jpg" alt="" />E So
                </div>
                <hr />
                <el-dropdown-item>個人資料</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
        </ul>
      </div>
    </div>
    <div class="back-sidebar">
      <div class="back-sidebar-logo">
        <router-link to=""><h1>SpaceX</h1></router-link>
        <i class="el-icon-close close-menu" @click="mobHide"></i>
      </div>
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
    mobShow() {
      const menu = document.querySelector('.back-sidebar');
      menu.classList.add('active');
    },
    mobHide() {
      const menu = document.querySelector('.back-sidebar');
      menu.classList.remove('active');
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
.back-header {
  position: fixed;
  top: 0px;
  left: 250px;
  right: 0px;
  width: calc(100vw - 250px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  font-size: 30px;
  padding: 10px 0px;
  @media (max-width: 768px) {
    left: 0px;
    width: 100vw;
  }
  &-btn {
    visibility: hidden;
    @media (max-width: 768px) {
      visibility: visible;
    }
    margin-left: 15px;
    & > i {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }
  &-info {
    font-size: 18px;
    & > ul {
      padding-left: 0px;
      margin: 0;
      margin-right: 30px;
      display: flex;
      align-items: center;
    }
    @at-root {
      .el-dropdown-link {
        cursor: pointer;
      }
      .el-dropdown-menu {
        background-color: map-get($color, main);
      }
      .el-dropdown-menu__item {
        color: #fff;
      }
      .el-dropdown-menu__item:focus,
      .el-dropdown-menu__item:not(.is-disabled):hover {
        background-color: map-get($color, three);
        color: #fff;
      }
      .el-popper[x-placement^='bottom'] .popper__arrow {
        border-bottom-color: map-get($color, main);
      }
      .el-popper[x-placement^='bottom'] .popper__arrow::after {
        border-bottom-color: map-get($color, main);
      }
    }
    &-lauguage {
      margin-right: 15px;
      svg {
        fill: #fff;
        width: 24px;
      }
    }
    &-user {
      svg {
        fill: #fff;
        width: 24px;
      }
      &-list {
        display: flex;
        align-items: center;
        padding-left: 15px;
        & > img {
          width: 24px;
          margin-right: 10px;
          border-radius: 50%;
        }
      }
    }
  }
}
.back-sidebar {
  position: fixed;
  left: 0px;
  top: 0px;
  bottom: 0px;
  background-color: map-get($color, main);
  width: 250px;
  transition: left 1s ease-in-out;
  @media (max-width: 768px) {
    left: -250px;
    &.active {
      left: 0px;
    }
  }
  & > ul {
    padding-left: 40px;
    & > li {
      padding: 10px;
      & > a {
        color: #fff;
        text-decoration: none;
        display: flex;
        align-items: center;
        padding-right: 15px;
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
          margin-right: 10px;
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
  &-logo {
    text-align: center;
    margin: 20px 0px;
    position: relative;
    & > h1 {
      display: inline-block;
    }
    @at-root {
      .close-menu {
        position: absolute;
        cursor: pointer;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 16px;
        display: none;
        @media (max-width: 768px) {
          display: block;
        }
      }
    }
  }
}
.logout {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translate(-50%);
  & > button {
    cursor: pointer;
    outline: none;
    background-color: transparent;
    border: 1px solid #fff;
    padding: 10px 15px;
    width: 200px;
    border-radius: 20px;
    color: #fff;
    transition: ease-in-out 0.5s;
    &:hover {
      color: map-get($color, hover);
      border-color: map-get($color, second);
      box-shadow: 0px 0px 10px 10px map-get($color, three);
    }
  }
}
</style>
