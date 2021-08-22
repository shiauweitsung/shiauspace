<template>
  <div class="home">
    <div class="loading-index">
      <p>SPACE <span>X</span></p>
      <div class="loading-bar">
        <div></div>
        <p class="loading-bar-percent">0</p>
        <span>%</span>
      </div>
    </div>
    <div class="home-wrap">
      <div class="home-wrap-banner">
        <video playsinline autoplay muted loop poster="" id="home-video">
          <source src="~@/assets/video/space.mp4" type="video/mp4" />
        </video>
        <h1>123456</h1>
      </div>
      <div class="home-wrap-cont">
        <div class="home-wrap-cont-item">
          <div class="item-img">1</div>
          <div class="item-cont">
            <h5>地球</h5>
            <p>space</p>
            <p>spaceXXXX</p>
          </div>
          <div class="item-cont">
            <h5>水星</h5>
            <p>1324564</p>
            <p>124</p>
          </div>
          <div class="item-img">02</div>
        </div>
        <div class="home-wrap-cont-item">
          <h1>木星</h1>
          <h1>土星介紹</h1>
          <h1>123456</h1>
          <h1>123456</h1>
          <h1>123456</h1>
          <h1>123456</h1>
        </div>
        <div class="home-wrap-cont-item bg3">
          <div>
            <h4>登月計畫</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
              commodi delectus suscipit reiciendis a laudantium corporis quaerat
              id pariatur maiores?
            </p>
            <h4>登月準備</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
              commodi delectus suscipit reiciendis a laudantium corporis quaerat
              id pariatur maiores?
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    const t1 = this.gsap.timeline();
    const percentData = {
      num: 0,
    };
    t1.to(percentData, 2, {
      num: 100,
      onUpdate() {
        const percent = document.querySelector('.loading-bar-percent');
        // console.log(percent);
        percent.innerHTML = percentData.num.toFixed(0);
      },
    });
    t1.to('.loading-index', 1, {
      opacity: 0,
      css: {
        display: 'none',
      },
    });
    t1.to('#home-video', 1, {
      opacity: 1,
    });
    t1.fromTo('.header', 1, {
      opacity: 0,
    }, {
      opacity: 1,
    });
    const t3 = this.gsap.timeline();
    const img = document.querySelectorAll('.item-img');
    img.forEach((item) => {
      t3.from(item, { x: '-10000%', duration: 2, delay: 2 });
    });
    t3.from('.item-cont', { xPercent: '-1000', duration: 2 });
    this.scrollTrigger.create({
      animation: t3,
      trigger: '.home-wrap-cont-item',
      start: 'top bottom',
      id: 'item',
      // markers: true,
    });
    const t4 = this.gsap.timeline();
    t4.from('.bg3 div', { y: '-1000', duration: 2 });
    this.scrollTrigger.create({
      animation: t4,
      trigger: '.bg3',
      toggleActions: 'play none none none',
      start: 'top bottom',
      end: 'bottom center',
      id: 'bg3',
      markers: true,
    });
  },
  beforeDestroy() {
    this.scrollTrigger.getById('bg3').kill();
  },
};
</script>
<style lang="scss">
@import '~@/assets/all.scss';
.loading-index {
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 999;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000;
  & > p {
    letter-spacing: 3px;
  }
}
.loading-bar {
  max-width: 375px;
  width: 90%;
  margin-top: 30px;
  text-align: center;
  & > div {
    position: relative;
    height: 10px;
    width: 100%;
    display: block;
    border: 1px solid #fff;
    border-radius: 10px;
    &::after {
      content: '';
      position: absolute;
      top: -1px;
      left: 0px;
      border-radius: 10px;
      border: 1px solid #fff;
      width: 0%;
      height: 10px;
      background-color: #fff;
      animation: loadingBar 2s ease-in-out forwards;
      @keyframes loadingBar {
        100% {
          width: 100%;
        }
      }
    }
  }
  &-percent {
    margin: 10px;
    text-align: center;
    display: inline-block;
  }
}
.home-wrap {
  &-banner {
    position: relative;
    padding-bottom: 57.25%;
  }
  &-cont {
    &-item {
      position: relative;
      display: flex;
      background-color: #e0e0e0;
      .item-cont {
        width: 50%;
        padding: 30px 0px;
        & > h5 {
          color: map-get($color, second);
          margin: 3rem;
          font-size: 4rem;
          text-align: center;
        }
        & > p {
          margin-left: 3rem;
          font-size: 2rem;
        }
      }
      .item-img {
        position: absolute;
        z-index: 9;
      }
      .item-img:nth-child(1) {
        top: -50px;
        left: 20%;
        transform: translateX(-80%);
        width: 100px;
        height: 100px;
        background-color: red;
      }
      .item-img:nth-child(2n) {
        bottom: -50px;
        right: 20%;
        transform: translateX(-80%);
        width: 100px;
        height: 100px;
        background-color: blue;
      }
    }
    &-item:nth-child(2) {
      background-color: black;
      flex-direction: column;
    }
  }
}
#home-video {
  position: absolute;
  top: 0;
  left: 0px;
  width: 100vw;
  height: 100%;
  opacity: 0;
  // z-index: -100;
  // -ms-transform: translateX(-50%) translateY(-50%);
  // -moz-transform: translateX(-50%) translateY(-50%);
  // -webkit-transform: translateX(-50%) translateY(-50%);
  // transform: translateX(-50%) translateY(-50%);
  background: url('~@/assets/images/frontEnd/bg2.jpg') no-repeat;
  background-size: cover;
  background-position: center;
  @media (max-width: 768px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    height: auto;
  }
}

.bg3 {
  background: url(~@/assets/images/frontEnd/bg3.jpg);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 0px;
  overflow: hidden;
  color: map-get($color, main);
  & > div {
    width: 50%;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 15px 30px 30px 30px;
    & > h4 {
      font-size: 2rem;
      display: inline-block;
      border-bottom: 2px solid black;
      padding-bottom: 10px;
      margin-top: 15px;
      margin-bottom: 15px;
    }
    & > p {
      font-size: 1.2rem;
    }
  }
}
</style>
