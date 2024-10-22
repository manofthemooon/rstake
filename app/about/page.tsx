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

  const blockCount = 4; // Общее количество блоков

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

      <div className="about-snap-block flex items-center justify-center h-screen">
        <h1 className="text-4xl text-white">Second Block Content</h1>
      </div>

      <div className="about-snap-block flex items-center justify-center h-screen">
        <h1 className="text-4xl text-white">Third Block Content</h1>
      </div>

      <div className="about-snap-block flex items-center justify-center h-screen">
        <h1 className="text-4xl text-white">Fourth Block Content</h1>
      </div>
    </div>
  );
};

export default AboutPage;
