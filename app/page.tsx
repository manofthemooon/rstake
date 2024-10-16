'use client';

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Particles from "./components/particles";

const logoUrl = "https://i.ibb.co/f0kTqbx/web3ali3n.png";

const navigation = [
  { name: "About Me", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const skills = [
  "Moderator",
  "Community Manager",
  "Ambassador",
  "RPA Developer",
  "QA Engineer",
  "Prompt Engineer",
];

const Home: React.FC = () => {
  const [showSkills, setShowSkills] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkills(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-between w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />

      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Web3 Ali3n
      </h1>

      <div className="flex flex-col items-center my-2 sm:my-4">
        <img
          src={logoUrl}
          alt="Web3 Ali3n Logo"
          className="h-16 w-16 object-contain md:h-24 md:w-24 lg:h-32 lg:w-32"
        />
      </div>

      <div className="flex flex-col items-center justify-center mb-6 min-h-[60px]">
        {showSkills && (
          <div className="text-center text-lg text-zinc-500 transition-opacity duration-1000 ease-in">
            <p className="flex flex-wrap justify-center gap-6">
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className="opacity-0 animate-fade-in-skill"
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  {skill}
                </span>
              ))}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
