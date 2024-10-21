'use client';

import Link from "next/link";
import Particles from '../components/particles';
import { Navigation } from "../components/nav";
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const AboutPage: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-black">
      <Navigation />
      <Particles className="absolute inset-0 -z-10" quantity={100} />

      <div className="absolute text-center">
        <p className="text-sm text-gray-400">{'<Hello, world>'}</p>
        <h1 className="text-4xl md:text-6xl font-display text-white mt-4">
          My name is Ivan.
        </h1>
        <h2 className="text-2xl md:text-4xl font-sans text-white mt-2">
          I am a Python backend developer from Ukraine.
        </h2>
        <button className="mt-6 px-4 py-2 border border-white text-white hover:bg-gray-700 transition duration-300">
          Contact Me
        </button>
      </div>

      <Canvas className="w-full h-full">
        <RotatingPoints />
      </Canvas>
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
