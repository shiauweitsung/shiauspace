<template>
  <div>
    <canvas :id="this.data.id"></canvas>
  </div>
</template>

<script>
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default {
  name: 'planet',
  props: {
    data: Object,
  },
  methods: {
    get3D() {
      const planet = document.getElementById(this.data.id);
      const scene = new this.THREE.Scene();
      const renderer = new this.THREE.WebGLRenderer({
        canvas: planet,
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
      const texture = new this.THREE.TextureLoader().load(this.data.path);
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
    },
  },
  mounted() {
    console.log(this.data);
    this.get3D();
  },
};
</script>
