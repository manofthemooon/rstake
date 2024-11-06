'use client';

import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const Logo: React.FC = () => {
  const meshRef = useRef<any>(null);
  const offset = useRef({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent) => {
    offset.current.x = (event.clientX / window.innerWidth) * 2 - 1;
    offset.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.x = offset.current.x * 2;
      meshRef.current.position.y = offset.current.y * 2;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} scale={[0.5, 0.5, 0.5]}>
      <planeGeometry args={[5, 5]} />
      <meshBasicMaterial map={new THREE.TextureLoader().load('/alien.png')} transparent={true} />
      <meshBasicMaterial map={new THREE.TextureLoader().load('/alien.png')} transparent={true} side={THREE.DoubleSide} />
    </mesh>
  );
};

const Logo2: React.FC = () => {
  return (
    <mesh position={[1, 1, 0]} scale={[0.5, 0.5, 0.5]}>
      <planeGeometry args={[5, 5]} />
      <meshBasicMaterial map={new THREE.TextureLoader().load('/alien.png')} transparent={true} />
    </mesh>
  );
};

export default Logo;
