
Intro to WebGL
with Three.js
WebGL

JavaScript API for rendering interactive 2D and 3D graphics
inside an HTML <canvas> element.
three.js

threejs.org


<!DOCTYPE html>
<html>
  <head>
    <title>Basic Three.js App</title>
    <style>
      html, body { margin: 0; padding: 0; overflow: hidden; }
    </style>
  </head>
  <body>
    <script src="js/three.min.js"></script>
    <script>
      // Javascript will go here.
    </script>
  </body>
</html>

var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera( 75, aspect, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshNormalMaterial();
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );
camera.position.z = 5;

var render = function () {
  requestAnimationFrame( render );
  cube.rotation.x += 0.1;
  cube.rotation.y += 0.1;
  renderer.render( scene, camera );
};

render();

