'use client';

import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <h1 className="text-4xl text-white">About Me</h1>
      <p className="mt-4 text-lg text-zinc-300 text-center">
        Hello! I'm a passionate developer with experience in various technologies. 
        I love working on projects that challenge my skills and allow me to learn new things.
      </p>
    </div>
  );
};

export default About;
