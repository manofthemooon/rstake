'use client';

import Particles from '../components/particles';
import { Navigation } from "../components/nav";
import React, { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import RotatingPoints from '../components/rotatingpoints';
import { Card } from "../components/card";
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
        <div className="flex justify-between w-full">
          <div className="education-info text-left text-white ml-8">
            <h3 className="text-2xl mt-12 font-bold glow-text">Education</h3>
            <ul className="mt-4 space-y-2">
              <li className="neon-card">Bachelor’s Degree in Infocommunication Technologies, MTUCI (2019-2023)</li>
              <li className="neon-card">Master’s Degree in Quantum Communications, MTUCI (2023-2025)</li>
            </ul>
          </div>

          <div className="languages-info text-left text-white mr-8">
            <h3 className="text-2xl mt-12 font-bold glow-text">Languages</h3>
            <ul className="mt-4 space-y-2">
              <li className="neon-card">English - B2</li>
              <li className="neon-card">Russian - C2</li>
            </ul>
          </div>
        </div>

        <div className="tech-stack text-center text-white mt-8">
          <h3 className="text-2xl font-bold glow-text">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {['React', 'TypeScript', 'Python', 'Java Core', 'C#', 'HTML/CSS', 'DevTools', 'XPath', 'Git', 'Jira', 'ZennoPoster', 'YouGile', 'API', 'ChatGPT', 'Figma'].map((tool) => (
              <span key={tool} className="holo-badge">{tool}</span>
            ))}
          </div>
        </div>

        <div className="skills-info flex justify-between items-end text-white mt-12 w-full">
          {[
            {
              title: 'Coding and Testing',
              details: ['Installing nodes', 'Creating scripts and robots', 'Testing the product']
            },
            {
              title: 'Marketing Strategies',
              details: ['Discord communities', 'Twitter communities', 'Quest platforms']
            },
            {
              title: 'Content Creation',
              details: ['Infographics and banners', 'Articles, guides, blogs, educational videos', 'Translating the docs, etc.']
            },
            {
              title: 'Community Organizing',
              details: ['Holding events online, AMAs, etc.', 'Moderating, setting up chats and roles', 'Helping new members']
            }
          ].map((skill, index) => (
            <Card key={index} className="w-1/4 m-2">
              <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
              <ul className="text-sm space-y-1">
                {skill.details.map((detail, idx) => (
                  <li key={idx}>• {detail}</li>
                ))}
              </ul>
            </Card>
          ))}
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
