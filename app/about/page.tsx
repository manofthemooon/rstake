'use client';

import Link from "next/link";
import Particles from '../components/particles';
import { Navigation } from "../components/nav";
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const AboutPage: React.FC = () => {
  return (
    <div className="relative flex items-center h-screen">
      <Navigation />
      <Particles className="absolute inset-0 -z-10" quantity={100} />
      <div className="flex flex-col md:flex-row items-center justify-between w-full h-full p-8">
        <div className="text-container text-left text-white mt-16 md:mt-0"> 
          <p className="text-sm text-gray-400 typing-effect">{'Hello, world'}</p>
          <h1 className="text-4xl md:text-6xl font-display mt-4">
            My name is Andrey.
          </h1>
          <h2 className="text-2xl md:text-4xl font-sans mt-2">
            I am a Web3 enjoyer from Russia.
          </h2>
        </div>
        <div className="canvas-container w-full md:w-1/2 h-full mt-4 md:mt-0"> 
          <Canvas className="w-full h-full">
            <AbstractRotatingShape />
          </Canvas>
        </div>
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
