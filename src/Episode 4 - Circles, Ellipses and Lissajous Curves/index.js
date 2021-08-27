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

const geometry = new THREE.SphereGeometry(0.5, 32, 16);
const material = new THREE.MeshBasicMaterial({ color: 0x3f7b9d });
// demo1
let x1 = 0;
let y1 = 0;
let angle1 = 0;
let speed1 = 0.05;
let radius1 = 1;
const sphere1 = new THREE.Mesh(geometry, material);
scene.add(sphere1);

// demo 2
let x2 = 2;
let y2 = 0;
let angle2 = 0;
let speed2 = 0.05;
let xRadius2 = 1;
let yRadius2 = 5;
const sphere2 = new THREE.Mesh(geometry, material);
scene.add(sphere2);

// demo 3
let x3 = 4;
let y3 = 0;
let xAngle3 = 0;
let yAngle3 = 0;
let xSpeed3 = 0.05;
let ySpeed3 = 0.03;
let xRadius3 = 1;
let yRadius3 = 2;
const sphere3 = new THREE.Mesh(geometry, material);
scene.add(sphere3);

// demo 4
let x4 = 8;
let y4 = 0;
let radius4 = 1;
let numLength = 20;
let angle4 = 0;
let slice = (Math.PI * 2) / numLength;

const group = new THREE.Group();
for (let i = 0; i < numLength; i++) {
  angle4 = i * slice;
  let sphere = new THREE.Mesh(new THREE.SphereGeometry(0.1, 32, 16), material);
  sphere.position.x = x4 + Math.cos(angle4) * radius4;
  sphere.position.y = y4 + Math.sin(angle4) * radius4;

  group.add(sphere);
}

scene.add(group);

// end

function animate() {
  sphere1.position.x = x1 + Math.cos(angle1) * radius1;
  sphere1.position.y = y1 + Math.sin(angle1) * radius1;
  angle1 += speed1;

  sphere2.position.x = x2 + Math.cos(angle2) * xRadius2;
  sphere2.position.y = y2 + Math.sin(angle2) * yRadius2;
  angle2 += speed2;

  sphere3.position.x = x3 + Math.cos(xAngle3) * xRadius3;
  sphere3.position.y = y3 + Math.sin(yAngle3) * yRadius3;
  xAngle3 += xSpeed3;
  yAngle3 += ySpeed3;

  requestAnimationFrame(animate);

  controls.update();

  renderer.render(scene, camera);
}

animate();
