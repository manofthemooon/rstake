'use client';

import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';

const Logo = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = new THREE.TextureLoader().load('/alien.png'); 

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01; 
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[3, 3]} /> 
      <meshBasicMaterial map={texture} transparent={true} /> 
    </mesh>
  );
};

const AboutPage: React.FC = () => {
  return (
    <div className="about-snap-container overflow-hidden relative">
      <div className="about-snap-block flex items-center justify-center h-screen relative">
        <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Logo />
          <OrbitControls /> 
        </Canvas>
      </div>
    </div>
  );
};

export default AboutPage;
