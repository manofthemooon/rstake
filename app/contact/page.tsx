"use client";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card"; 
import Particles from "../components/particles";

const socials = [
  {
    icon: (
      <img
        src="https://img.icons8.com/ios-filled/20/ffffff/twitter--v1.png"
        alt="Twitter"
        width={20}
        height={20}
      />
    ),
    href: "https://x.com/manoofthemooon",
    label: "Twitter",
    handle: "@manoofthemooon",
  },
  {
    icon: (
      <img
        src="https://img.icons8.com/ios-filled/20/ffffff/telegram-app.png"
        alt="Telegram"
        width={20}
        height={20}
      />
    ),
    href: "https://t.me/manofthemoon",
    label: "Telegram",
    handle: "@manoofthemooon",
  },
  {
    icon: (
      <img
        src="https://img.icons8.com/ios-filled/20/ffffff/github.png"
        alt="GitHub"
        width={20}
        height={20}
      />
    ),
    href: "https://github.com/manofthemooon",
    label: "GitHub",
    handle: "manofthemooon",
  },
  {
    icon: (
      <img
        src="https://img.icons8.com/ios-filled/20/ffffff/medium.png"
        alt="Medium"
        width={20}
        height={20}
      />
    ),
    href: "https://manofthemooon.medium.com/",
    label: "Medium",
    handle: "manofthemooon",
  },
  {
    icon: (
      <img
        src="https://img.icons8.com/ios-filled/20/ffffff/discord.png"
        alt="Discord"
        width={20}
        height={20}
      />
    ),
    href: "https://discordapp.com/users/542318439633780736",
    label: "Discord",
    handle: "manofthemooon",
  },
  {
    icon: (
      <img
        src="https://img.icons8.com/ios-filled/20/ffffff/email.png"
        alt="Email"
        width={20}
        height={20}
      />
    ),
    href: "mailto:manofthemoonwork@gmail.com",
    label: "Email",
    handle: (
      <div className="text-center">
        manofthemoonwork
        <br />
        @gmail.com
      </div>
    ),
  },
];

export default function Example() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
	  <Particles className="absolute inset-0 -z-10" quantity={100} />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto mt-10 mb-10">
        <div className="grid w-full grid-cols-2 gap-4 mx-auto sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {socials.map((s) => (
            <Card key={s.label} className="h-56 sm:h-64"> 
              <Link
                href={s.href}
                target="_blank"
                className="p-4 relative flex flex-col items-center gap-2 duration-700 group md:gap-4 md:py-10 lg:pb-20 md:p-8"
              >
                <span
                  className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                  {s.icon}
                </span>
                <div className="z-10 flex flex-col items-center">
                  <span className="mt-2 text-lg font-bold text-center duration-1000 text-zinc-200 group-hover:text-white">
                    {s.label}
                  </span>
                  <span className="mt-1 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    {s.handle}
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
        <div className="mb-20" /> 
      </div>
    </div>
  );
}
