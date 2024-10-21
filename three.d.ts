'use client';

import Link from "next/link";
import Particles from '../components/particles';
import { Navigation } from "../components/nav";
import React from 'react';
import { motion } from 'framer-motion'; 

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

      <motion.div
        className="rotating-element"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
      />
    </div>
  );
};

export default AboutPage;
