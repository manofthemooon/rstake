'use client';

import Particles from '../components/particles';
import { Navigation } from "../components/nav";
import { motion } from 'framer-motion';
import React, { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import RotatingPoints from '../components/rotatingpoints';
import ScrollIndicators from '../components/scrollindicators';

const AboutPage: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [activeBlock, setActiveBlock] = useState(0);

  const blockCount = 4;

  const handleScroll = (event: WheelEvent) => {
    event.preventDefault();
    if (pageRef.current) {
      const blocks = pageRef.current.querySelectorAll('.about-snap-block');
      const nextBlock = activeBlock + (event.deltaY > 0 ? 1 : -1);
      if (nextBlock >= 0 && nextBlock < blocks.length) {
        blocks[nextBlock].scrollIntoView({ behavior: 'smooth' });
        setActiveBlock(nextBlock);
      }
    }
  };

  const handleClick = (index: number) => {
    const blocks = pageRef.current?.querySelectorAll('.about-snap-block');
    if (blocks) {
      blocks[index].scrollIntoView({ behavior: 'smooth' });
      setActiveBlock(index);
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [activeBlock]);

  return (
    <div ref={pageRef} className="about-snap-container overflow-hidden relative">
      <Particles className="absolute inset-0 -z-10" quantity={100} />
      <Navigation />
      <ScrollIndicators activeBlock={activeBlock} onClick={handleClick} blockCount={blockCount} />

      <motion.div className="about-snap-block flex items-center justify-center h-screen"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div className="text-container text-left text-white">
          <h1 className="text-4xl md:text-6xl font-display mt-4">My name is Andrey.</h1>
          <h2 className="text-2xl md:text-4xl font-sans mt-2">I am a Web3 enjoyer from Russia.</h2>
        </div>
        <div className="canvas-container w-full md:w-[37.5%] h-full">
          <Canvas className="w-full h-full">
            <RotatingPoints />
          </Canvas>
        </div>
      </motion.div>

      <motion.div className="about-snap-block flex flex-col justify-between h-screen p-8"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div className="education-info text-left text-white mt-12">
          <h3 className="text-3xl font-bold mb-8">Education</h3>
          <ul className="space-y-2 text-lg font-light">
            <li>Bachelor’s Degree in Infocommunication Technologies, MTUCI (2019-2023)</li>
            <li>Master’s Degree in Quantum Communications, MTUCI (2023-2025)</li>
          </ul>
        </div>
        <div className="tech-stack text-right text-white">
          <h3 className="text-3xl font-bold">Tech Stack</h3>
          <div className="flex flex-wrap justify-end gap-2 mt-4">
            {['React', 'TypeScript', 'Python', 'C#', 'HTML/CSS', 'DevTools', 'XPath', 'Git', 'Jira', 'ZennoPoster', 'YouGile', 'API'].map((tool) => (
              <span key={tool} className="bg-gray-900 text-white px-3 py-1 rounded-md">{tool}</span>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div className="about-snap-block flex items-center justify-center h-screen"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h1 className="text-4xl text-white">Third Block Content</h1>
      </motion.div>

      <motion.div className="about-snap-block flex items-center justify-center h-screen"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h1 className="text-4xl text-white">Fourth Block Content</h1>
      </motion.div>
    </div>
  );
};

export default AboutPage;
