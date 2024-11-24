'use client';

import Link from "next/link";


const navigation = [
  { name: "About Me", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];


const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-between w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-8 animate-fade-in">
        <ul className="flex items-center justify-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300 font-gtwalsheimprolight"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Home;
