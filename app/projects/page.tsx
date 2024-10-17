import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis"; 
import Particles from "../components/particles";

const redis = Redis.fromEnv();

export const revalidate = 60;
export default async function ProjectsPage() {
  const views = (
    await redis.mget<number[]>(...allProjects.map((p) => ["pageviews", "projects", p.slug].join(":")))
  ).reduce((acc, v, i) => {
    acc[allProjects[i].slug] = v ?? 0;
    return acc;
  }, {} as Record<string, number>);

  const featured = allProjects.find((project) => project.slug === "superprotocol")!;
  const top2 = allProjects.find((project) => project.slug === "hyperlane")!;
  const top3 = allProjects.find((project) => project.slug === "injective")!;
  const sorted = allProjects
    .filter((p) => p.published)
    .filter(
      (project) =>
        project.slug !== featured.slug &&
        project.slug !== top2.slug &&
        project.slug !== top3.slug
    )
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() - 
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
    );

  return (
    <div className="relative pb-16">
      <Navigation />
      <Particles className="absolute inset-0 -z-10" quantity={100} />
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from work and some are on my own time.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            {featured.url ? (
              <Link href={featured.url} target="_blank" rel="noopener noreferrer">
                <article className="relative w-full h-full p-4 md:p-8">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-xs text-zinc-100">
                      {featured.date ? (
                        <time dateTime={new Date(featured.date).toISOString()} className="block mt-64">
                          {new Date(featured.date).getFullYear()}
                        </time>
                      ) : (
                        <span>SOON</span>
                      )}
                    </div>
                    <div className="text-xs text-zinc-400">
                      {featured.position && <span>{featured.position}</span>}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <h2
                      id="featured-post"
                      className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                    >
                      {featured.title}
                    </h2>

                    {featured.logo && (
                      <img
                        src={featured.logo}
                        alt="Project logo"
                        className="w-10 h-10 ml-4"
                      />
                    )}
                  </div>

                  <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                    {featured.description}
                  </p>
                  {featured.position && (
                    <div className="mt-6 text-center">
                      <span className="text-zinc-400">{featured.position}</span>
                    </div>
                  )}
                </article>
              </Link>
            ) : (
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="text-xs text-zinc-100">No URL available</div>
              </article>
            )}
          </Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            {[top2, top3].map((project) => (
              <Card key={project.slug}>
                {project.url ? (
                  <Link href={project.url} target="_blank" rel="noopener noreferrer">
                    <Article project={project} />
                  </Link>
                ) : (
                  <Article project={project} />
                )}
              </Card>
            ))}
          </div>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 0)
              .map((project) => (
                <Card key={project.slug}>
                  {project.url ? (
                    <Link href={project.url} target="_blank" rel="noopener noreferrer">
                      <Article project={project} />
                    </Link>
                  ) : (
                    <Article project={project} />
                  )}
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 1)
              .map((project) => (
                <Card key={project.slug}>
                  {project.url ? (
                    <Link href={project.url} target="_blank" rel="noopener noreferrer">
                      <Article project={project} />
                    </Link>
                  ) : (
                    <Article project={project} />
                  )}
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 2)
              .map((project) => (
                <Card key={project.slug}>
                  {project.url ? (
                    <Link href={project.url} target="_blank" rel="noopener noreferrer">
                      <Article project={project} />
                    </Link>
                  ) : (
                    <Article project={project} />
                  )}
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
