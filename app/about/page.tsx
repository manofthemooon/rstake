'use client';

import Link from "next/link";
import Particles from '../components/particles';
import { Navigation } from "../components/nav";
import React, { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import RotatingPoints from '../components/rotatingpoints';

const AboutPage: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [activeBlock, setActiveBlock] = useState(0);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      event.preventDefault();
      if (pageRef.current) {
        const blocks = pageRef.current.querySelectorAll('.about-snap-block');
        const currentBlock = Array.from(blocks).findIndex(block => {
          const { top, bottom } = block.getBoundingClientRect();
          return top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2;
        });

        if (currentBlock === -1) return;

        if (event.deltaY > 0 && currentBlock < blocks.length - 1) {
          blocks[currentBlock + 1].scrollIntoView({ behavior: 'smooth' });
          setActiveBlock(currentBlock + 1);
        } else if (event.deltaY < 0 && currentBlock > 0) {
          blocks[currentBlock - 1].scrollIntoView({ behavior: 'smooth' });
          setActiveBlock(currentBlock - 1);
        }
      }
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveBlock(Number(entry.target.getAttribute('data-index')));
        }
      });
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    const blocks = pageRef.current?.querySelectorAll('.about-snap-block');
    blocks?.forEach((block, index) => {
      block.setAttribute('data-index', index.toString());
      observer.observe(block);
    });

    return () => {
      window.removeEventListener('wheel', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleClick = (index: number) => {
    const blocks = pageRef.current?.querySelectorAll('.about-snap-block');
    if (blocks) {
      blocks[index].scrollIntoView({ behavior: 'smooth' });
      setActiveBlock(index);
    }
  };

  return (
    <div ref={pageRef} className="about-snap-container overflow-hidden relative">
      <Particles className="absolute inset-0 -z-10" quantity={100} />
      <Navigation />
      
      <div className="absolute top-1/2 right-4 flex flex-col space-y-2 transform -translate-y-1/2">
        {[0, 1, 2, 3].map((_, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`w-1.5 h-10 rounded-md cursor-pointer transition-all duration-300 ${activeBlock === index ? 'bg-white' : 'bg-gray-600'}`}
          />
        ))}
      </div>

      <div className="about-snap-block flex items-center justify-center bg-blue-500 h-screen">
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

      <div className="about-snap-block flex items-center justify-center bg-green-500 h-screen">
        <h1 className="text-4xl text-white">Second Block Content</h1>
      </div>

      <div className="about-snap-block flex items-center justify-center bg-red-500 h-screen">
        <h1 className="text-4xl text-white">Third Block Content</h1>
      </div>

      <div className="about-snap-block flex items-center justify-center bg-purple-500 h-screen">
        <h1 className="text-4xl text-white">Fourth Block Content</h1>
      </div>
    </div>
  );
};

export default AboutPage;
