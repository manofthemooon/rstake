'use client';

import Link from "next/link";
import Particles from '../components/particles';
import { Navigation } from "../components/nav";
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const AboutPage: React.FC = () => {
  return (
    <div className="relative flex items-center h-screen bg-black">
      <Navigation />
      <Particles className="absolute inset-0 -z-10" quantity={100} />
      <div className="flex flex-col md:flex-row items-center justify-between w-full h-full p-8">
        <div className="text-container text-left text-white pl-8">
          <p className="text-sm text-gray-400 typing-effect">{'Hello, world'}</p>
          <h1 className="text-4xl md:text-6xl font-display mt-4">
            My name is Andrey.
          </h1>
          <h2 className="text-2xl md:text-4xl font-sans mt-2">
            I am a Web3 enjoyer from Russia.
          </h2>
        </div>
        <div className="canvas-container w-full md:w-1/2 h-full">
          <Canvas className="w-full h-full">
            <RotatingPoints />
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
      pointsRef.current.rotation.y += 0.01;
    }
  });

  const pointsGeometry = new THREE.SphereGeometry(1.5, 32, 32);
  const pointsMaterial = new THREE.PointsMaterial({
    color: 'white',
    size: 0.01,
  });

  return (
    <primitive object={new THREE.Points(pointsGeometry, pointsMaterial)} ref={pointsRef} />
  );
};

export default AboutPage;
