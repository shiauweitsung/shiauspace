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
          <div class="item-img">01</div>
          <div class="item-cont">
            <h5>01</h5>
            <p>space</p>
            <p>spaceXXXX</p>
          </div>
          <div class="item-cont">
            <p>1324564</p>
            <p>124</p>
          </div>
          <div class="item-img">02</div>
        </div>
        <div class="home-wrap-cont-item">
          <h1>123456</h1>
          <h1>123456</h1>
          <h1>123456</h1>
          <h1>123456</h1>
          <h1>123456</h1>
          <h1>123456</h1>
        </div>
      </div>
      <div class="bg-cont">
        <div class="testbg testbg1">1</div>
        <div class="testbg testbg2">2</div>
        <div class="testbg testbg3">3</div>
        <div class="testbg testbg4">4</div>
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
    const t2 = this.gsap.timeline();
    t2.from('.testbg2', { xPercent: '-100', duration: 2 });
    t2.from('.testbg3', { yPercent: '-100', duration: 2 });
    t2.from('.testbg4', { xPercent: '-100', duration: 2 });
    this.scrollTrigger.create({
      animation: t2,
      trigger: '.bg-cont',
      start: 'top top',
      end: '+=3000',
      id: 'bgID',
      pin: true,
      scrub: true,
      anticipatePin: 1,
      // markers: true,
    });
    const t3 = this.gsap.timeline();
    const img = document.querySelectorAll('.item-img');
    img.forEach((item) => {
      t3.from(item, { xPercent: '-1000', duration: 2, delay: 2 });
    });
    t3.from('.item-cont', { xPercent: '-1000', duration: 2 });
    this.scrollTrigger.create({
      animation: t3,
      trigger: '.home-wrap-cont-item',
      start: 'top bottom',
      id: 'item',
      // markers: true,
    });
  },
  beforeDestroy() {
    this.scrollTrigger.getById('bgID').kill();
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

.testbg {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
}
.testbg1 {
  background-color: red;
}
.testbg2 {
  background-color: blue;
}
.testbg3 {
  background-color: green;
}
.testbg4 {
  background-color: greenyellow;
}
.bg-cont {
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
}
</style>
