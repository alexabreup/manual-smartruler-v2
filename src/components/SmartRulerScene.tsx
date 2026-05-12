import React, { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  BakeShadows,
  Html,
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
  useProgress,
  Stage,
} from '@react-three/drei';
import * as THREE from 'three';

// Temporarily intercept console.warn to suppress known three.js/fiber warnings
const originalWarn = console.warn;
console.warn = (...args) => {
  const msg = args.join(' ');
  if (msg.includes('THREE.Clock: This module has been deprecated')) return;
  if (msg.includes('cannot be represented accurately in double precision')) return;
  originalWarn(...args);
};

function LoadingScreen() {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="sr-3d-loading">CARREGANDO_ASSETS // {Math.round(progress)}%</div>
    </Html>
  );
}

function SmartRulerModel() {
  const { scene } = useGLTF('/smart2.glb');

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    // Rotação ideal para mostrar tomadas e logo simultaneamente
    scene.rotation.y = -0.5; 
  }, [scene]);

  return <primitive object={scene} />;
}

export default function SmartRulerScene() {
  return (
    <div className="sr-3d-stage" aria-label="Visualizador 3D da SmartRuler">
      <div className="sr-3d-caption" aria-hidden="true">
        <strong>SmartRuler V4</strong>
        <span>Eletromidia / Visualizacao 3D</span>
      </div>

      <Canvas
        shadows={{ type: THREE.PCFShadowMap }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2,
        }}
        style={{ width: '100%', height: '100%' }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={25} />
        <OrbitControls makeDefault enableDamping enablePan={false} />
        <Suspense fallback={<LoadingScreen />}>
          <Stage 
            intensity={1.5} 
            environment="city" 
            shadows={{ type: 'contact', opacity: 0.5, blur: 2 }} 
            adjustCamera={0.9}
          >
            <SmartRulerModel />
          </Stage>
          <BakeShadows />
        </Suspense>
      </Canvas>

      <div className="sr-3d-hint" aria-hidden="true">Arraste para girar / Scroll para zoom</div>
    </div>
  );
}

useGLTF.preload('/smart2.glb');
