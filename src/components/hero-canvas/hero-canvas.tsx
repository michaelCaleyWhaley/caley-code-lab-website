import { useCallback, useState } from 'react';
import * as THREE from 'three';

import styles from './hero-canvas.module.scss';

function buildScene(canvas: HTMLCanvasElement) {
  const scene = new THREE.Scene();
  scene.background = null;

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

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true,
  });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;
  cube.rotation.x = 0.2;

  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.y += 0.005;

    renderer.render(scene, camera);
  }
  animate();
}

function HeroCanvas() {
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  const refCanvas = useCallback((node: HTMLCanvasElement) => {
    if (node !== null) {
      setCanvas(node);
      setHeight(node.getBoundingClientRect().height);
      setWidth(node.getBoundingClientRect().width);
    }
  }, []);

  return (
    <canvas
      onClick={() => {
        buildScene(canvas as HTMLCanvasElement);
      }}
      className={styles.canvas}
      height={height}
      width={width}
      ref={refCanvas}
    />
  );
}

export { HeroCanvas };
