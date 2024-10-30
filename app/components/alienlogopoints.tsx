import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const AlienLogoPoints: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.002;
      pointsRef.current.rotation.x += 0.001;
    }
  });

  const textureLoader = new THREE.TextureLoader();
  const alienLogoTexture = textureLoader.load('https://i.ibb.co/NLKxDLB/web3ali3n-BIG.png');

  const particlesCount = 10000; 
  const positions = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount; i++) {
    const r = 2.5;
    const theta = 2 * Math.PI * Math.random();
    const phi = Math.PI * Math.random();

    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi) * Math.sin(theta);

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
  }

  const pointsGeometry = new THREE.BufferGeometry();
  pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const pointsMaterial = new THREE.PointsMaterial({
    map: alienLogoTexture,
    size: 0.05,
    transparent: true,
    opacity: 0.7,
    depthWrite: false
  });

  return (
    <points ref={pointsRef} geometry={pointsGeometry} material={pointsMaterial} />
  );
};

const AlienLogoCanvas: React.FC = () => (
  <Canvas>
    <AlienLogoPoints/>
  </Canvas>
);

export default AlienLogoCanvas;