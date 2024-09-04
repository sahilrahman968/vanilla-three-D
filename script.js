document.addEventListener('DOMContentLoaded', function() {
    const scene = document.querySelector('a-scene');
    const modelEntity = document.getElementById('gltf-model');

    // URL of the GLTF file
    const gltfUrl = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/CesiumMan/glTF/CesiumMan.gltf';

    const loader = new THREE.GLTFLoader();
    loader.load(gltfUrl, function(gltf) {
        const model = gltf.scene;
        modelEntity.setObject3D('mesh', model);
    }, undefined, function(error) {
        console.error('An error happened while loading the GLTF model', error);
    });
});
