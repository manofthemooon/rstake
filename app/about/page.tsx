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

      <div className="about-snap-block flex flex-col justify-between h-screen p-8">
  <Particles className="absolute inset-0 -z-10" />
  
  <div className="about-snap-block flex flex-col justify-between h-screen p-8">
  <Particles className="absolute inset-0 -z-10" />
  
  <div className="education-info text-left text-white">
    <h3 className="text-2xl mt-12 font-bold glow-text">Education</h3>
    <ul className="mt-4 space-y-2">
      <li className="neon-card">Bachelor’s Degree in Infocommunication Technologies, MTUCI (2019-2023)</li>
      <li className="neon-card">Master’s Degree in Quantum Communications, MTUCI (2023-2025)</li>
    </ul>
  </div>
  
  <div className="tech-stack text-right text-white">
    <h3 className="text-2xl font-bold glow-text">Tech Stack</h3>
    <div className="flex flex-wrap justify-end gap-2 mt-4">
      {['React', 'TypeScript', 'Python', 'Java Core', 'C#', 'HTML/CSS', 'DevTools', 'XPath', 'Git', 'Jira', 'ZennoPoster', 'YouGile', 'API', 'ChatGPT', 'Figma'].map((tool) => (
        <span key={tool} className="holo-badge">{tool}</span>
      ))}
    </div>
  </div>
  
  <div className="skills-info text-left text-white mt-12">
    <h3 className="text-2xl font-bold glow-text">Skills</h3>
    <ul className="mt-4 space-y-2">
      <li>
        <strong>Coding and testing:</strong>
        <ul className="mt-2 ml-4 list-disc">
          <li>Installing nodes</li>
          <li>Creating scripts and robots</li>
          <li>Testing the product</li>
        </ul>
      </li>
      <li>
        <strong>Marketing strategies:</strong>
        <ul className="mt-2 ml-4 list-disc">
          <li>Discord communities</li>
          <li>Twitter communities</li>
          <li>Quest platforms</li>
        </ul>
      </li>
      <li>
        <strong>Content creation:</strong>
        <ul className="mt-2 ml-4 list-disc">
          <li>Infographics and banners</li>
          <li>Articles, guides, blogs, educational videos</li>
          <li>Translating the docs, etc.</li>
        </ul>
      </li>
      <li>
        <strong>Community organising:</strong>
        <ul className="mt-2 ml-4 list-disc">
          <li>Holding events online, AMAs, etc.</li>
          <li>Moderating, setting up chats and roles</li>
          <li>Helping new members</li>
        </ul>
      </li>
    </ul>
  </div>
</div>


      <div className="about-snap-block flex items-center justify-center h-screen">
      <Particles className="absolute inset-0 -z-10" quantity={100} />
        <h1 className="text-4xl text-white">Third Block Content</h1>
      </div>

      <div className="about-snap-block flex items-center justify-center h-screen">
      <Particles className="absolute inset-0 -z-10" quantity={100} />
        <h1 className="text-4xl text-white">Fourth Block Content</h1>
      </div>
    </div>
  );
};

export default AboutPage;
