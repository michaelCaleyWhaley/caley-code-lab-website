import { useCallback, useEffect, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import styles from './hero-canvas.module.scss';

function buildScene(canvas: HTMLCanvasElement) {
  const scene = new THREE.Scene();
  scene.background = null;

  const light = new THREE.AmbientLight(0xffffff); // soft white light
  scene.add(light);

  const camera = new THREE.PerspectiveCamera(
    75,
    canvas.width / canvas.height,
    0.1,
    1000,
  );

  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    canvas,
  });

  const loader = new GLTFLoader();

  loader.load(
    '/robo.glb',
    function (gltf) {
      gltf.scene.position.x = 0;
      gltf.scene.position.y = -250;
      gltf.scene.position.z = -100;

      gltf.scene.rotation.y = 1.5;
      gltf.scene.rotation.z = 0;
      gltf.scene.rotation.x = 0;

      scene.add(gltf.scene);
    },
    undefined,
    function (error) {
      console.error(error);
    },
  );

  function animate() {
    renderer.render(scene, camera);

    const robo = scene?.children?.[1];

    if (robo && robo.position.y < -200) {
      robo.position.y += 0.5;
    }

    if (robo && robo.rotation.y > 0) {
      robo.rotation.y -= 0.01;
    }

    requestAnimationFrame(animate);
  }
  animate();
}

function HeroCanvas() {
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [sceneActive, setSceneActive] = useState(false);

  useEffect(() => {
    if (!canvas || sceneActive) return;
    buildScene(canvas as HTMLCanvasElement);
    setSceneActive(true);
  }, [canvas]);

  const refCanvas = useCallback((node: HTMLCanvasElement) => {
    if (node !== null) {
      setCanvas(node);
      setHeight(node.getBoundingClientRect().height);
      setWidth(node.getBoundingClientRect().width);
    }
  }, []);

  return (
    <canvas
      className={styles.canvas}
      height={height}
      width={width}
      ref={refCanvas}
    />
  );
}

export { HeroCanvas };
