// An example three.js project, a spinning cube

// create our basic constructs
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 1, 10000);
var renderer = new THREE.WebGLRenderer();

// set the background color
scene.background = new THREE.Color( Koji.config.colors.backgroundColor );

// setup our renderer and add it to the DOM
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// create a cube with wireframing
var geometry = new THREE.BoxGeometry(700, 700, 700, 10, 10, 10);
var material = new THREE.MeshBasicMaterial({color: Koji.config.colors.boxColor, wireframe: true});
var cube = new THREE.Mesh(geometry, material);

// add our cube to the scene and initialize it
scene.add(cube);
camera.position.z = 1000;

// a basic render loop
function render() {
    // do this again next frame
    requestAnimationFrame(render);

    // rotate the cube a little bit
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
};

// call our render loop
render();
