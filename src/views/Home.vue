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
        <div class="home-wrap-cont-item">
          <div class="planet-list">
            <label>
              <p>木星</p>
            </label>
            <label>
              <p>金星</p>
            </label>
            <label>
              <p>冥王星</p>
            </label>
          </div>
          <div class="planet-cont">
            <p>切換內容顯示</p>
          </div>
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
      markers: true,
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
      background-image: url(~@/assets/images/frontEnd/bg4.jpg);
      background-size: contain;
      background-position: center;
      overflow: hidden;
      @media (max-width: 1000px) {
        flex-direction: column;
      }
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
            font-size: 1.1rem;
            margin-right: 3rem;
            background-color: rgba(81, 81, 81, 0.5);
            padding: 20px;
            border-radius: 8px;
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
      canvas {
      }
      #earth {
        opacity: 0;
      }
      #Material {
        opacity: 0;
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
