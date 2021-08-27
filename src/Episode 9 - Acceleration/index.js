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

// start
const geometry = new THREE.SphereGeometry(0.5, 32, 16);
const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);
let p = particle.create(0, 5, 0.1, Math.PI / 2)


let accel = vertor.create(0.001, -0.001)

let centerX = 5

let centerY = 5

let centerZ = 0

let particles = [];
let numParticles = 100;
const particlesGeometry = new THREE.BufferGeometry()
const particlesMaterial = new THREE.PointsMaterial({
  size: 0.1,
  sizeAttenuation: true
})
particlesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(centerX,centerY,centerZ, 3));

let particlesPoints = new THREE.Group()
for (let i = 0; i < numParticles; i++) {
  particles.push(particle.create(centerX, centerY, Math.random() * (0.1 - 0.05) + 0.03, Math.random() *  Math.PI * 2  ,-0.1))
  particlesPoints.add(new THREE.Points(particlesGeometry.clone(), particlesMaterial))
  scene.add(particlesPoints)
}


console.log(particles)
console.log(particlesPoints)
// end
function animate() {

  requestAnimationFrame(animate);
  controls.update();
  p.accelerate(accel)
  p.update()
  sphere.position.x = p.position.getX()
  sphere.position.y = p.position.getY()
  for (let i = 0; i < particlesPoints.children.length; i++) {
    let particlesPoint = particlesPoints.children[i];
    let particle = particles[i]
    particle.update()
    particlesPoint.geometry.setAttribute('position', new THREE.Float32BufferAttribute([particle.position.getX(), particle.position.getY(), 0], 3));
  }

  renderer.render(scene, camera);
}

animate();
