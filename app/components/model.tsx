'use client';

import { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';

const Model: React.FC = () => {
  const [model, setModel] = useState<THREE.Group | null>(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load('/alien.glb', (gltf) => {
      setModel(gltf.scene);
    });

  }, []);

  if (!model) return null; 

  return (
    <primitive object={model} scale={0.5} />
  );
};

const AboutPage: React.FC = () => {
  return (
    <div className="about-snap-container overflow-hidden relative">
      <div className="about-snap-block flex items-center justify-center h-screen relative">
        <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Model />
          <OrbitControls /> 
        </Canvas>
      </div>
    </div>
  );
};

export default AboutPage;
