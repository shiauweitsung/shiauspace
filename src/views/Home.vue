<template>
  <div class="home">
    <div class="loading-index">
      <p>SPACE <span>X</span></p>
      <div class="loading-bar">
        <div class="loading-bar-width">
          <div class="loading-bar-width-before"></div>
        </div>
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
        <div class="home-wrap-cont-item planet-bg">
          <div class="item-cont">
            <div>
              <canvas id="earth"></canvas>
            </div>
            <div class="item-cont-earth">
              <h5>地球</h5>
              <p>
                地球誕生於約45.4億年前，42億年前開始形成海洋，並在35億年前的海洋中出現生命，之後逐步涉足地表和大氣，並分化為好氧生物和厭氧生物
              </p>
            </div>
          </div>
          <div class="item-cont">
            <div>
              <canvas id="Material"></canvas>
            </div>
            <div class="item-cont-Material">
              <h5>水星</h5>
              <p>
                水星，中國古稱辰星；到西漢時期，《史記‧天官書》作者天文學家司馬遷從實際觀測發現辰星呈灰色，與「五行」學說聯繫在一起，以黑色配水星，因此正式把它命名為水星。
              </p>
            </div>
          </div>
        </div>
        <div class="home-wrap-cont-item planet-bg">
          <input
            type="radio"
            name="planet"
            id="Jupiter-check"
            class="planet-check"
            checked
          />
          <input
            type="radio"
            name="planet"
            id="Venus-check"
            class="planet-check"
          />
          <input
            type="radio"
            name="planet"
            id="Pluto-check"
            class="planet-check"
          />
          <div class="planet-list">
            <label for="Jupiter-check" class="planet-list-Jupiter"
              ><canvas id="Jupiter"></canvas>
              <p>木星</p>
            </label>
            <label for="Venus-check" class="planet-list-Venus">
              <canvas id="Venus"></canvas>金星
            </label>
            <label for="Pluto-check" class="planet-list-Pluto">
              <canvas id="Pluto"></canvas>
              冥王星
            </label>
          </div>
          <div class="planet-cont">
            <p class="planet-cont-Jupiter">
              木星是距離太陽第五近的行星，也是太陽系中體積最大的行星，目前已知有79顆衛星。
              古代的天文學家就已經知道這顆行星，羅馬人以他們的神稱這顆行星為朱庇特。古代中
              國則稱木星為歲星，取其繞行天球一周約為12年，與地支相同之故。到西漢時期，
              《史記‧天官書》作者天文學家司馬遷從實際觀測發現歲星呈青色，與「五行」學
              說聯繫在一起，正式把它命名為木星。
            </p>
            <p class="planet-cont-Venus">
              金星是太陽系的四顆類地行星之一，因為它的大小、質量、體積與到太陽的距離，均與地球相似，所以經常被稱為地球的姊妹或攣生兄弟。它的直徑是12,092公里（只比地球少
              650公里），質量是地球的81.5%
            </p>
            <p class="planet-cont-Pluto">
              冥王星，是太陽系古柏帶中的矮行星。冥王星是第一顆被發現的古柏帶天體。冥王星是太陽系內已知體積最大、質量第二大的矮行星。在直接圍繞太陽運行的天體中，冥王星體積排名第九，質量排名第十。
            </p>
          </div>
        </div>
        <div class="home-wrap-cont-item bg3">
          <div>
            <h4>登月計畫</h4>
            <p>
              我們將於2025年實施登月計畫，將帶領百人團隊搭乘火箭前往，3分鐘內抵達宇宙空間，半小時光速抵達月球上，我們準備了30天的糧食，準備在月球上進行初步的建設計畫，將是史上人類最大突破的計畫。
            </p>
            <h4>登月準備</h4>
            <p>
              在準備期間，我們團隊做足了數萬次的模擬，進行各種探測。斥資了300億，每人擁有數套備用太空衣以及單獨太空艙火箭，以便發生意外時，可以自救回地球。
            </p>
          </div>
        </div>
        <div class="home-wrap-cont-item rocket-bg">
          <span class="star star-1"></span>
          <span class="star star-2"></span>
          <span class="star star-3"></span>
          <div class="home-wrap-cont-item-rocket">
            <h4>專利太空衣</h4>
          </div>
        </div>
        <div class="home-wrap-cont-scroll">
          <div class="home-wrap-cont-scroll-item scroll-item-1"></div>
          <div class="home-wrap-cont-scroll-item scroll-item-2"></div>
          <div class="home-wrap-cont-scroll-item scroll-item-3"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

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
        percent.innerHTML = percentData.num.toFixed(0);
      },
    });
    t1.to('.loading-bar-width-before', 2, {
      css: {
        width: '100%',
      },
    }, '-=2');
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
    t3.to('#earth', { opacity: 1, duration: 2 });
    t3.to('#Material', { opacity: 1, duration: 2 }, '-=1.5');
    t3.from('.item-cont-earth', { yPercent: '-1000', duration: 2 });
    t3.from('.item-cont-Material', { yPercent: '-1000', duration: 2 }, '-=1.5');
    this.scrollTrigger.create({
      animation: t3,
      trigger: '.home-wrap-cont-item',
      start: 'top bottom',
      id: 'item',
      // markers: true,
    });
    const t4 = this.gsap.timeline();
    t4.from('.bg3 div', { y: '-1000', duration: 4, ease: 'power4.out' });
    this.scrollTrigger.create({
      animation: t4,
      trigger: '.bg3',
      toggleActions: 'play none none none',
      start: 'top bottom',
      end: 'bottom center',
      id: 'bg3',
      // markers: true,
    });
    const t5 = this.gsap.timeline();
    t5.from('.scroll-item-1', 2, { xPercent: '-100' })
      .from('.scroll-item-2', 2, { xPercent: '100' })
      .from('.scroll-item-3', 2, { xPercent: '-100' });
    this.scrollTrigger.create({
      animation: t5,
      trigger: '.home-wrap-cont-scroll',
      start: 'top top',
      end: '+=3000',
      scrub: true,
      pin: true,
      anticipatePin: 1,
      // markers: true,
    });
    // 地球
    const earth = document.getElementById('earth');
    const scene = new this.THREE.Scene();
    const renderer = new this.THREE.WebGLRenderer({
      canvas: earth,
      alpha: true,
    });
    // window.innerWidth, window.innerHeight
    renderer.setSize(150, 150);
    const camera = new this.THREE.PerspectiveCamera(
      45,
      1,
      1,
      2000,
    );
    camera.position.z = 25;
    camera.lookAt(0, 0, 0);
    const light = new this.THREE.AmbientLight('white');
    scene.add(light);
    const texture = new this.THREE.TextureLoader().load('/3d/earth.jpeg');
    const geometry = new this.THREE.SphereGeometry(8, 50, 50);
    const material = new this.THREE.MeshLambertMaterial({
      map: texture,
    });
    const mesh = new this.THREE.Mesh(geometry, material);
    scene.add(mesh);
    const control = new OrbitControls(camera, renderer.domElement);
    control.target = new this.THREE.Vector3(0, 0, 0);
    control.autoRotate = false;
    control.enablePan = false;
    control.enableZoom = false;
    function animate() {
      requestAnimationFrame(animate);
      mesh.rotation.y += 0.002;
      control.update();
      renderer.render(scene, camera);
    }
    animate();
    // 水星
    const Material = document.getElementById('Material');
    const scene2 = new this.THREE.Scene();
    const renderer2 = new this.THREE.WebGLRenderer({
      canvas: Material,
      alpha: true,
    });
    // window.innerWidth, window.innerHeight
    renderer2.setSize(150, 150);
    const camera2 = new this.THREE.PerspectiveCamera(
      45,
      1,
      1,
      2000,
    );
    camera2.position.z = 25;
    camera2.lookAt(0, 0, 0);
    const light2 = new this.THREE.AmbientLight('white');
    scene2.add(light2);
    const texture2 = new this.THREE.TextureLoader().load('/3d/Material.jpeg');
    const geometry2 = new this.THREE.SphereGeometry(8, 50, 50);
    const material2 = new this.THREE.MeshLambertMaterial({
      map: texture2,
    });
    const mesh2 = new this.THREE.Mesh(geometry2, material2);
    scene2.add(mesh2);
    const control2 = new OrbitControls(camera2, renderer2.domElement);
    control2.target = new this.THREE.Vector3(0, 0, 0);
    control2.autoRotate = false;
    control2.enablePan = false;
    control2.enableZoom = false;
    function animate2() {
      requestAnimationFrame(animate2);
      mesh2.rotation.y += 0.003;
      control2.update();
      renderer2.render(scene2, camera2);
    }
    animate2();
    // 木星
    const Jupiter = document.getElementById('Jupiter');
    const scene3 = new this.THREE.Scene();
    const renderer3 = new this.THREE.WebGLRenderer({
      canvas: Jupiter,
      alpha: true,
    });
    renderer3.setSize(100, 100);
    const camera3 = new this.THREE.PerspectiveCamera(
      45,
      1,
      1,
      2000,
    );
    camera3.position.z = 30;
    camera3.lookAt(0, 0, 0);
    const light3 = new this.THREE.AmbientLight('white');
    scene3.add(light3);
    const texture3 = new this.THREE.TextureLoader().load('/3d/Jupiter.jpg');
    const geometry3 = new this.THREE.SphereGeometry(8, 50, 50);
    const material3 = new this.THREE.MeshLambertMaterial({
      map: texture3,
    });
    const mesh3 = new this.THREE.Mesh(geometry3, material3);
    scene3.add(mesh3);
    function animate3() {
      requestAnimationFrame(animate3);
      mesh3.rotation.y += 0.003;
      renderer3.render(scene3, camera3);
    }
    animate3();
    // 金星
    const Venus = document.getElementById('Venus');
    const scene4 = new this.THREE.Scene();
    const renderer4 = new this.THREE.WebGLRenderer({
      canvas: Venus,
      alpha: true,
    });
    renderer4.setSize(100, 100);
    const camera4 = new this.THREE.PerspectiveCamera(
      45,
      1,
      1,
      2000,
    );
    camera4.position.z = 30;
    camera4.lookAt(0, 0, 0);
    const light4 = new this.THREE.AmbientLight('white');
    scene4.add(light4);
    const texture4 = new this.THREE.TextureLoader().load('/3d/venus.jpeg');
    const geometry4 = new this.THREE.SphereGeometry(8, 50, 50);
    const material4 = new this.THREE.MeshLambertMaterial({
      map: texture4,
    });
    const mesh4 = new this.THREE.Mesh(geometry4, material4);
    scene4.add(mesh4);
    function animate4() {
      requestAnimationFrame(animate4);
      mesh4.rotation.y += 0.003;
      renderer4.render(scene4, camera4);
    }
    animate4();
    // 冥王星
    const Pluto = document.getElementById('Pluto');
    const scene5 = new this.THREE.Scene();
    const renderer5 = new this.THREE.WebGLRenderer({
      canvas: Pluto,
      alpha: true,
    });
    renderer5.setSize(100, 100);
    const camera5 = new this.THREE.PerspectiveCamera(
      45,
      1,
      1,
      2000,
    );
    camera5.position.z = 30;
    camera5.lookAt(0, 0, 0);
    const light5 = new this.THREE.AmbientLight('white');
    scene5.add(light5);
    const texture5 = new this.THREE.TextureLoader().load('/3d/pluto.png');
    const geometry5 = new this.THREE.SphereGeometry(8, 50, 50);
    const material5 = new this.THREE.MeshLambertMaterial({
      map: texture5,
    });
    const mesh5 = new this.THREE.Mesh(geometry5, material5);
    scene5.add(mesh5);
    function animate5() {
      requestAnimationFrame(animate5);
      mesh5.rotation.y += 0.003;
      renderer5.render(scene5, camera5);
    }
    animate5();
  },
  beforeDestroy() {
    this.scrollTrigger.getById('bg3').kill();
  },
};
</script>
<style lang="scss">
@import '~@/assets/all.scss';
@mixin planetbg {
  background-color: rgba(81, 81, 81, 0.5);
  padding: 20px;
  border-radius: 8px;
}
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
    & > div {
      position: absolute;
      top: -1px;
      left: 0px;
      border-radius: 10px;
      border: 1px solid #fff;
      width: 0%;
      height: 10px;
      background-color: #fff;
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
    overflow: hidden;
    &-item {
      position: relative;
      display: flex;
      background-size: contain;
      background-position: center;
      overflow: hidden;
      .item-cont {
        width: 50%;
        padding: 30px 0px;
        display: flex;
        @media (max-width: 1000px) {
          width: 100%;
        }
        @media (max-width: 576px) {
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        & > div {
          width: 30%;
          @media (max-width: 1200px) {
            width: 40%;
          }
          @media (max-width: 1000px) {
            width: 30%;
          }
          & > h5 {
            color: map-get($color, white);
            margin: 3rem 0;
            font-size: 2.5rem;
            text-align: left;
            @media (max-width: 576px) {
              margin: 1rem 0;
              text-align: center;
            }
          }
          & > p {
            color: map-get($color, white);
            font-size: 14px;
            margin-right: 3rem;
            @include planetbg;
            @media (max-width: 576px) {
              margin-right: 0;
            }
          }
        }
        & > div:nth-child(1) {
          text-align: center;
        }
        & > div:nth-child(2) {
          width: 70%;
          @media (max-width: 1200px) {
            width: 60%;
          }
          @media (max-width: 1000px) {
            width: 70%;
          }
        }
      }
      #earth {
        opacity: 0;
      }
      #Material {
        opacity: 0;
      }
    }
    &-item.planet-bg {
      background-image: url(~@/assets/images/frontEnd/bg4.jpg);
    }
    &-item:nth-child(1) {
      @media (max-width: 1000px) {
        flex-direction: column;
      }
    }
    .planet-check {
      display: none;
    }
    #Jupiter-check:checked ~ .planet-cont .planet-cont-Jupiter,
    #Venus-check:checked ~ .planet-cont .planet-cont-Venus,
    #Pluto-check:checked ~ .planet-cont .planet-cont-Pluto {
      animation: fadeIn 2s ease-in-out forwards;
    }
    .planet-cont-Pluto,
    .planet-cont-Venus,
    .planet-cont-Jupiter {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      opacity: 0;
    }
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    &-item:nth-child(2) {
      @media (max-width: 1000px) {
        flex-direction: column;
      }
    }
    #Jupiter-check:checked ~ .planet-list .planet-list-Jupiter,
    #Venus-check:checked ~ .planet-list .planet-list-Venus,
    #Pluto-check:checked ~ .planet-list .planet-list-Pluto {
      transform: scale(1.4);
    }
    .planet-list {
      width: 100%;
      max-width: 450px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0px 10px;
      @media (max-width: 1000px) {
        max-width: 100%;
      }
      & > label {
        width: 33.33%;
        padding: 0px 15px;
        text-align: center;
        cursor: pointer;
        transform: scale(1);
        transition: ease-in-out 0.4s;
        @media (max-width: 1000px) {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 20%;
          margin-top: 30px;
        }
        @media (max-width: 576px) {
          width: 33%;
        }
      }
    }
    .planet-cont {
      flex-grow: 1;
      overflow: hidden;
      position: relative;
      min-height: 250px;
      @media (max-width: 1000px) {
        display: flex;
        justify-content: center;
      }
      & > p {
        width: 90%;
        @include planetbg;
      }
    }
    &-scroll {
      overflow: hidden;
      background-color: black;
      height: 100vh;
      width: 100vw;
      position: relative;
      &-item {
        height: 100%;
        width: 100%;
        position: absolute;
        background-color: black;
        $i: 0;
        $scroll-color: (
          rgb(255, 106, 106),
          rgb(113, 215, 255),
          rgb(117, 245, 117)
        );
        // @each $item in $scroll-color {
        //   &.scroll-item-#{index($scroll-color,($item))} {
        //     background-color: $item;
        //   }
        // }
        @each $color in $scroll-color {
          $i: $i + 1;
          &.scroll-item-#{$i} {
            background-color: $color;
          }
        }
      }
    }
    &-item.rocket-bg {
      position: relative;
      overflow: hidden;
      .star {
        position: absolute;
        top: -215px;
        left: 230px;
        width: 150px;
        height: 2px;
        transform-origin: 100% 0;
        transform: rotate(-45deg);
        background-image: linear-gradient(
          to right,
          #fff,
          rgba(255, 255, 255, 0)
        );
        opacity: 0;
      }
      .star::before {
        content: '';
        position: absolute;
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background-color: #fff;
        box-shadow: 0 0 15px 5px #fff;
        z-index: 9;
      }
      $n: 3;
      @for $i from 1 through 3 {
        $l: random(150) + 150;
        $t: random(215) + 50;
        $s: random(10) + 2;
        .star-#{$i} {
          left: $l + px;
          top: $t + px;
          animation: shotting 2s linear infinite;
          animation-delay: $s + s;
        }
      }

      @keyframes shotting {
        0% {
          opacity: 1;
        }
        80% {
          opacity: 1;
        }
        100% {
          opacity: 0;
          transform: rotate(-45deg) translate3d(-300px, 0, 0);
        }
      }
      .home-wrap-cont-item-rocket {
        & > h4 {
          height: 400px;
        }
      }
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
    @media (max-width: 768px) {
      width: 80%;
    }
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
