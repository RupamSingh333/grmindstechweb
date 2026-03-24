import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

export const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="#0ea5e9"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

export const FloatingCubes = () => {
  const cubes = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (cubes.current) {
      cubes.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={cubes}>
      {[...Array(5)].map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i / 5) * Math.PI * 2) * 3,
            Math.sin((i / 5) * Math.PI * 2) * 0.5,
            Math.sin((i / 5) * Math.PI * 2) * 3,
          ]}
        >
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial
            color="#06b6d4"
            metalness={0.8}
            roughness={0.2}
            emissive="#0ea5e9"
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </group>
  );
};
