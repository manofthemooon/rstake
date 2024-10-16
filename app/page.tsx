import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

// Ссылка на логотип с прозрачным фоном
const logoUrl = "https://i.ibb.co/f0kTqbx/web3ali3n.png";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
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

      {/* Заголовок */}
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Web3 Ali3n
      </h1>

      {/* Логотип под заголовком и чуть выше */}
      <div className="my-4">
        <img
          src={logoUrl}
          alt="Web3 Ali3n Logo"
          className="h-16 w-16 object-contain md:h-24 md:w-24 lg:h-32 lg:w-32"
        />
      </div>

      {/* Бегущая строка с компетенциями */}
      <div className="my-8 w-full overflow-hidden whitespace-nowrap">
        <p className="text-lg text-zinc-500 animate-marquee">
          Moderator &nbsp; | &nbsp; Ambassador &nbsp; | &nbsp; Community Manager &nbsp; | &nbsp; RPA Developer &nbsp; | &nbsp; QA Engineer &nbsp; | &nbsp; Prompt Engineer
        </p>
      </div>

      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 15s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
