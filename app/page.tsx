'use client';

import Link from "next/link";


const navigation = [
  { name: "Home", href: "/about" },
  { name: "Blog", href: "/projects" },
  { name: "Ecosystem", href: "/contact" },
  { name: "Docs", href: "/about" },
];


const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-between w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-8 animate-fade-in">
        <ul className="flex items-center justify-center gap-[30px]">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-white hover:text-zinc-300 hover:underline font-gtwalsheimpro"
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
