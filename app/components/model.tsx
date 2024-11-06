'use client';

import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Logo: React.FC = () => {
  const meshRef = useRef<any>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (meshRef.current) {
        meshRef.current.rotation.y += 0.01;  
      }
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} scale={[0.5, 0.5, 0.5]}>
      <planeGeometry args={[5, 5]} />
      <meshBasicMaterial map={new THREE.TextureLoader().load('/alien.png')} transparent={true} />
      <meshBasicMaterial map={new THREE.TextureLoader().load('/alien.png')} transparent={true} side={THREE.BackSide} />
    </mesh>
  );
};

export default Logo;
