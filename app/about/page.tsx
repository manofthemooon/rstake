'use client';

import Particles from '../components/particles';
import { Navigation } from "../components/nav";
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

      <div className="about-snap-block flex items-center justify-center h-screen">
        <div className="text-container text-left text-white glow-effect">
          <h1 className="text-4xl md:text-6xl font-display mt-4 glow-text">My name is Andrey.</h1>
          <h2 className="text-2xl md:text-4xl font-sans mt-2 glow-text">I am a Web3 enjoyer from Russia.</h2>
        </div>
        <div className="canvas-container w-full md:w-[37.5%] h-full">
          <Canvas className="w-full h-full">
            <RotatingPoints />
          </Canvas>
        </div>
      </div>

      <div className="about-snap-block flex flex-col justify-between h-screen p-8">
        <div className="education-info text-left text-white cosmic-border p-4">
          <h3 className="text-2xl font-bold mt-12">Education</h3>
          <ul className="mt-4 space-y-2">
            <li>Bachelor’s Degree in Infocommunication Technologies, MTUCI (2019-2023)</li>
            <li>Master’s Degree in Quantum Communications, MTUCI (2023-2025)</li>
          </ul>
        </div>
        <div className="tech-stack text-right text-white cosmic-border p-4">
          <h3 className="text-2xl font-bold">Tech Stack</h3>
          <div className="flex flex-wrap justify-end gap-2 mt-4">
            {['React', 'TypeScript', 'Python', 'C#', 'HTML/CSS', 'DevTools', 'XPath', 'Git', 'Jira', 'ZennoPoster', 'YouGile', 'API'].map((tool) => (
              <span key={tool} className="bg-gray-800 text-white px-3 py-1 rounded-md glow-border">{tool}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="about-snap-block flex items-center justify-center h-screen">
        <h1 className="text-4xl text-white glow-text">Third Block Content</h1>
      </div>

      <div className="about-snap-block flex items-center justify-center h-screen">
        <h1 className="text-4xl text-white glow-text">Fourth Block Content</h1>
      </div>
    </div>
  );
};

export default AboutPage;
