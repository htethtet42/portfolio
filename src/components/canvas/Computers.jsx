
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Sparkles,
  Preload,
} from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const EmeraldCore = () => {
  const coreRef = useRef();
  const ringRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (!coreRef.current) return;

    coreRef.current.rotation.y += delta * 0.35;
    coreRef.current.rotation.x += delta * 0.15;

    const targetScale = hovered ? 1.15 : 1;

    coreRef.current.scale.setScalar(
      THREE.MathUtils.damp(
        coreRef.current.scale.x,
        targetScale,
        5,
        delta
      )
    );

    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.25;
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.5}
      floatIntensity={0.8}
    >
      <group position={[1.7, -0.1, 0]} scale={0.9}>
        {/* Main emerald crystal */}
        <group
          ref={coreRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <mesh>
            <octahedronGeometry args={[1.35, 0]} />
            <meshPhysicalMaterial
              color="#10B981"
              emissive="#047857"
              emissiveIntensity={0.7}
              metalness={0.5}
              roughness={0.12}
              clearcoat={1}
              clearcoatRoughness={0.1}
              flatShading
            />
          </mesh>

          {/* Crystal wireframe */}
          <mesh scale={1.015}>
            <octahedronGeometry args={[1.35, 0]} />
            <meshBasicMaterial
              color="#A7F3D0"
              wireframe
              transparent
              opacity={0.65}
            />
          </mesh>

          {/* Inner energy sphere */}
          <mesh scale={0.35}>
            <icosahedronGeometry args={[1, 2]} />
            <meshBasicMaterial
              color="#D1FAE5"
              wireframe
            />
          </mesh>
        </group>

        {/* Orbital rings */}
        <group ref={ringRef}>
          <mesh rotation={[Math.PI / 2.5, 0, 0]}>
            <torusGeometry args={[2, 0.018, 16, 100]} />
            <meshBasicMaterial
              color="#34D399"
              transparent
              opacity={0.85}
            />
          </mesh>

          <mesh rotation={[0.8, 0.5, 0.7]}>
            <torusGeometry args={[2.3, 0.012, 16, 100]} />
            <meshBasicMaterial
              color="#6EE7B7"
              transparent
              opacity={0.6}
            />
          </mesh>
        </group>

        {/* Lights */}
        <pointLight
          color="#10B981"
          intensity={3}
          distance={7}
        />

        <Sparkles
          count={90}
          scale={5}
          size={2}
          speed={0.4}
          color="#6EE7B7"
        />
      </group>
    </Float>
  );
};

const ComputersCanvas = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-auto">
      <Canvas
        camera={{
          position: [0, 0, 7],
          fov: 45,
        }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.7} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={2}
        />

        <directionalLight
          position={[-5, -3, -2]}
          color="#10B981"
          intensity={2}
        />

        <React.Suspense fallback={<CanvasLoader />}>
          <EmeraldCore />
        </React.Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2.8}
          maxPolarAngle={Math.PI / 1.8}
          rotateSpeed={0.5}
        />

        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
