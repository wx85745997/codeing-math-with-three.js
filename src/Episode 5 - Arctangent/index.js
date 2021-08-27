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

camera.position.set(0, 0, 20);
controls.update();

const axesHelper = new THREE.AxesHelper(10);
scene.add(axesHelper);

// start
const material = new THREE.LineBasicMaterial({
  color: 0xffffff,
});


let angle = 0;
let dx = 0, dy = 0
const geometry1 = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(1, 0, 0)])
const geometry2 = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0.8, 0.2, 0), new THREE.Vector3(1, 0, 0), new THREE.Vector3(0.8, -0.2, 0)])
const line1 = new THREE.Line(geometry1, material);
const line2 = new THREE.Line(geometry2, material);


const arrow = new THREE.Group();
arrow.add(line1, line2)

scene.add(arrow);

document.body.addEventListener('mousemove', (event) => {
  dx = event.clientX - width/2;
  dy = event.clientY - height/2;
  angle = - Math.atan2(dy , dx);
  arrow.rotation.z = angle
})

// end

function animate() {

  requestAnimationFrame(animate);
  controls.update();

  renderer.render(scene, camera);
}

animate();
