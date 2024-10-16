"use client";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

// Ссылки на SVG-иконки
const iconUrls = {
  twitter: "https://raw.githubusercontent.com/CLorant/readme-social-icons/main/twitter-x/dark/twitter-x.svg",
  mail: "https://raw.githubusercontent.com/CLorant/readme-social-icons/main/messenger/dark/messenger.svg",
  github: "https://raw.githubusercontent.com/CLorant/readme-social-icons/main/github/dark/github.svg",
  telegram: "https://raw.githubusercontent.com/CLorant/readme-social-icons/main/telegram/dark/telegram.svg",
  medium: "https://raw.githubusercontent.com/CLorant/readme-social-icons/main/medium/dark/medium.svg",
  discord: "https://raw.githubusercontent.com/CLorant/readme-social-icons/main/discord/dark/discord.svg",
};

const socials = [
  {
    icon: iconUrls.twitter,
    href: "http://x.com/manoofthemooon",
    label: "Twitter",
    handle: "@manoofthemooon",
  },
  {
    icon: iconUrls.mail,
    href: "mailto:manoofthemoonwork@gmail.com",
    label: "Email",
    handle: "manoofthemoonwork@gmail.com",
  },
  {
    icon: iconUrls.github,
    href: "https://github.com/manofthemooon/",
    label: "GitHub",
    handle: "manofthemooon",
  },
  {
    icon: iconUrls.telegram,
    href: "https://t.me/manofthemoon",
    label: "Telegram",
    handle: "@manofthemoon",
  },
  {
    icon: iconUrls.medium,
    href: "https://manofthemooon.medium.com/",
    label: "Medium",
    handle: "manofthemooon",
  },
  {
    icon: iconUrls.discord,
    href: "https://discordapp.com/users/542318439633780736",
    label: "Discord",
    handle: "manofthemooon",
  },
];

export default function Example() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
          {socials.map((s) => (
            <Card key={s.label}>
              <Link
                href={s.href}
                target="_blank"
                className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16"
              >
                <span
                  className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                  <img src={s.icon} alt={`${s.label} icon`} className="w-full h-full object-contain" />
                </span>
                <div className="z-10 flex flex-col items-center">
                  <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                    {s.handle}
                  </span>
                  <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    {s.label}
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
