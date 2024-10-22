'use client';

import Link from "next/link";
import Particles from '../components/particles';
import { Navigation } from "../components/nav";
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const AboutPage: React.FC = () => {
  return (
    <div className="about-snap-container overflow-hidden">
      <Particles className="absolute inset-0 -z-10" quantity={100} />
      <Navigation />
      
      {/* Блок с контентом 1 */}
      <div className="about-snap-block flex items-center justify-center">
        <div className="text-container text-left text-white">
          <h1 className="text-4xl md:text-6xl font-display mt-4">My name is Andrey.</h1>
          <h2 className="text-2xl md:text-4xl font-sans mt-2">I am a Web3 enjoyer from Russia.</h2>
        </div>
        <div className="canvas-container w-full md:w-[37.5%] h-full">
          <Canvas className="w-full h-full">
            <RotatingPoints />
          </Canvas>
        </div>
      </div>

      {/* Новый блок с контентом 2 */}
      <div className="about-snap-block flex items-center justify-center bg-green-500">
        <h1 className="text-4xl text-white">Second Block Content</h1>
      </div>

      {/* Новый блок с контентом 3 */}
      <div className="about-snap-block flex items-center justify-center bg-red-500">
        <h1 className="text-4xl text-white">Third Block Content</h1>
      </div>

      {/* Новый блок с контентом 4 для проверки прокрутки */}
      <div className="about-snap-block flex items-center justify-center bg-purple-500">
        <h1 className="text-4xl text-white">Fourth Block Content</h1>
      </div>
    </div>
  );
};

const RotatingPoints = () => {
  const pointsRef = useRef<THREE.Points>(null);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.002;
      pointsRef.current.rotation.x += 0.001;
    }
  });

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
  pointsGeometry.setAttribute(
    'position',
    new THREE.BufferAttribute(positions, 3)
  );

  const pointsMaterial = new THREE.PointsMaterial({
    color: 'white',
    size: 0.02, 
    opacity: 0.7, 
    transparent: true,
  });

  return (
    <points ref={pointsRef} geometry={pointsGeometry} material={pointsMaterial} />
  );
};

export default AboutPage;
