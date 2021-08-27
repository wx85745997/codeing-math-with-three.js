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

camera.position.set(10, 15, 20);
controls.update();

const axesHelper = new THREE.AxesHelper(10);
scene.add(axesHelper);


const material = new THREE.LineBasicMaterial({
  color: 0xffffff,
});

const array = [2, 5, 6, 8, 10, 2, 26, 4 ,22 ,50 ,47,33,22,11];
const min = Math.min.apply(null, array)
const max = Math.max.apply(null, array)
let points = []
for (let i = 0; i < array.length; i++) {
  var normValue = norm(array[i], min, max)
  points.push(
    new THREE.Vector3(10 / (array.length - 1) * i, 10 * normValue, 0)
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
