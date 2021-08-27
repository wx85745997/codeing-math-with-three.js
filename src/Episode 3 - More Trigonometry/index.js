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
const geometry = new THREE.SphereGeometry(2, 32, 16);
const material = new THREE.MeshBasicMaterial({ color: 0x3f7b9d, wireframe: true ,transparent:true });
// demo1
let ySpeed = 0.1;
let yAngle = 0;
let yOffset = 3;
let y = 5;
const sphere1 = new THREE.Mesh(geometry, material);
scene.add(sphere1);



// demo2
let radiusSpeed = 0.1;
let radiusAngle = 0;
let radius = 1
let radiusOffset = 0.2;
const sphere2 = new THREE.Mesh(geometry, material);
sphere2.position.x = 5
scene.add(sphere2);


// demo3
let alphaSpeed = 0.1;
let alphaAngle = 0;
let alpha = 0.5
let alphaOffset = 0.3;
const sphere3 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial().copy( material ));
sphere3.position.x = 10
scene.add(sphere3);


// end


function animate() {
  sphere1.position.y = y + Math.sin(yAngle) * yOffset
  yAngle += ySpeed

  let scale = radius + Math.sin(radiusAngle) * radiusOffset
  sphere2.scale.set(scale,scale,scale)
  radiusAngle += radiusSpeed

  sphere3.material.opacity = alpha + Math.sin(alphaAngle) * alphaOffset
  console.log( alpha + Math.sin(alphaAngle) * alphaOffset)
  alphaAngle += alphaSpeed


  requestAnimationFrame(animate);

  controls.update();

  renderer.render(scene, camera);
}

animate();
