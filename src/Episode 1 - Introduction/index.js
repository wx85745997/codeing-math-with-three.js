const width = window.innerWidth;
const height = window.innerHeight;

const canvas = document.querySelector("canvas.webgl");
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(width, height);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, width / height, 1, 100);

const controls = new THREE.OrbitControls(camera, canvas);

camera.position.set(0, 20, 20);
controls.update();

const axesHelper = new THREE.AxesHelper(10);
scene.add(axesHelper);

// start
const material = new THREE.LineBasicMaterial({
  color: 0xffffff,
});

const points = [];

for (let i = 0; i < 100; i++) {
  points.push(
    new THREE.Vector3(Math.random() * 10, Math.random() * 10, Math.random() * 10)
  );
}

const geometry = new THREE.BufferGeometry().setFromPoints(points);

const line = new THREE.Line(geometry, material);
scene.add(line);
// end


function animate() {
  requestAnimationFrame(animate);

  controls.update();

  renderer.render(scene, camera);
}

animate();
