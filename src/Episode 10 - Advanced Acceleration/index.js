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
