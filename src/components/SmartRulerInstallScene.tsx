import React, { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
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

function LoadingScreen() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{
        color: 'var(--primary)',
        fontFamily: 'var(--font-mono)',
        fontSize: '12px',
        fontWeight: 'bold',
      }}>
        CARREGANDO_ASSETS // {Math.round(progress)}%
      </div>
    </Html>
  );
}

/**
 * Mapeamento: step → malhas no smart2.glb
 */
const STEP_MESH_MAP: Record<number, string[]> = {
  1: ['Cube003', 'Cube004', 'Cube005', 'Cube006'],
  2: ['Cube010'],
  3: ['Cube011'],
  4: ['Cube', 'Cube013', 'Cube014', 'Cube015', 'Cube016'],
};

/**
 * Componente do modelo 3D — só cuida de materiais e highlight.
 * NÃO toca em posição nem rotação.
 */
function SmartRulerInstallModel({ activeStep }: { activeStep: number }) {
  const { scene } = useGLTF('/smart2.glb');
  const originalMaterials = useRef(new Map<string, THREE.Material>());

  // Inicializa materiais e rotação fixa
  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        if (!originalMaterials.current.has(child.uuid)) {
          originalMaterials.current.set(child.uuid, child.material.clone());
        }
      }
    });
    scene.rotation.y = -0.5;
  }, [scene]);

  // Highlight das malhas do passo ativo
  useEffect(() => {
    const VIBRANT_ORANGE = new THREE.Color('#FF6A00');
    const targetNames = new Set(STEP_MESH_MAP[activeStep] ?? []);

    scene.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;
      const origMat = originalMaterials.current.get(child.uuid);
      if (!origMat) return;

      if (targetNames.has(child.name)) {
        const hlMat = (origMat as THREE.MeshStandardMaterial).clone();
        hlMat.color = VIBRANT_ORANGE;
        hlMat.emissive = VIBRANT_ORANGE;
        hlMat.emissiveIntensity = 0.6;
        hlMat.roughness = 0.3;
        hlMat.metalness = 0.1;
        child.material = hlMat;
      } else {
        child.material = origMat.clone();
      }
    });
  }, [scene, activeStep]);

  return <primitive object={scene} />;
}

/**
 * Controla a câmera: orbita suavemente ao redor do modelo
 * sem mover o modelo. Step 4 gira a câmera 180° para ver a traseira.
 */
function AnimatedOrbitControls({ activeStep }: { activeStep: number }) {
  const controlsRef = useRef<any>(null);
  const isAnimating = useRef(false);
  const targetAzimuth = useRef(0);

  // Ângulos: frente = 0, traseira = PI
  useEffect(() => {
    targetAzimuth.current = activeStep === 4 ? Math.PI : 0;
    isAnimating.current = true;
  }, [activeStep]);

  useFrame(() => {
    if (!controlsRef.current || !isAnimating.current) return;

    const current = controlsRef.current.getAzimuthalAngle();
    const target = targetAzimuth.current;

    if (Math.abs(current - target) > 0.01) {
      const next = THREE.MathUtils.lerp(current, target, 0.06);
      controlsRef.current.setAzimuthalAngle(next);
      controlsRef.current.update();
    } else {
      // Animação finalizada
      controlsRef.current.setAzimuthalAngle(target);
      controlsRef.current.update();
      isAnimating.current = false;
    }
  });

  return (
    <OrbitControls
      ref={controlsRef}
      makeDefault
      enableDamping
      enablePan={false}
    />
  );
}

/**
 * Componente principal exportado — orquestra tudo.
 */
export default function SmartRulerInstallScene() {
  const [activeStep, setActiveStep] = useState<number>(1);

  useEffect(() => {
    const handleStep = (e: any) => setActiveStep(e.detail.step);
    window.addEventListener('smartruler:step', handleStep);
    return () => window.removeEventListener('smartruler:step', handleStep);
  }, []);

  return (
    <div
      className="sr-3d-stage"
      aria-label="Visualizador 3D da SmartRuler - Instalação"
      style={{ width: '100%', height: '100%' }}
    >
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
        <AnimatedOrbitControls activeStep={activeStep} />
        <Suspense fallback={<LoadingScreen />}>
          <Stage
            intensity={1.5}
            environment="city"
            shadows={{ type: 'contact', opacity: 0.5, blur: 2 }}
            adjustCamera={0.9}
          >
            <SmartRulerInstallModel activeStep={activeStep} />
          </Stage>
          <BakeShadows />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload('/smart2.glb');
