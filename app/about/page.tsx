'use client';

import Link from "next/link";
import Particles from '../components/particles';
import { Navigation } from "../components/nav";

const About = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Particles className="absolute inset-0 -z-10" quantity={100} />
      <Navigation />
      <h1 className="text-4xl text-white">About Me</h1>
      <p className="mt-4 text-lg text-zinc-300 text-center">
        Hello! I'm a passionate developer with experience in various technologies. 
        I love working on projects that challenge my skills and allow me to learn new things.
      </p>
      <Link href="/" className="mt-6 text-sm text-zinc-500 hover:text-zinc-300">
        Back
      </Link>
    </div>
  );
};

export default About;
