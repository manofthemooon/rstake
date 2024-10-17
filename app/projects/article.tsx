import type { Project } from "@/.contentlayer/generated";
import Link from "next/link";

type Props = {
  project: Project;
};

export const Article: React.FC<Props> = ({ project }) => {
  return (
    <Link href={project.url ? project.url : `/projects/${project.slug}`} target={project.url ? "_blank" : "_self"} rel={project.url ? "noopener noreferrer" : undefined}>
      <article className="relative p-4 md:p-8">
        <div className="flex justify-between gap-2 items-center">
          <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
            {project.date ? (
              <time dateTime={new Date(project.date).toISOString()}>
                {new Date(project.date).getFullYear()}
              </time>
            ) : (
              <span>SOON</span>
            )}
          </span>
        </div>

        <div className="flex items-center justify-between mt-2">
          <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
            {project.title}
          </h2>
          {project.logo && (
            <img
              src={project.logo}
              alt={`${project.title} logo`}
              className="ml-2 w-8 h-8 -mt-1"
            />
          )}
        </div>

        <p className="z-20 mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
          {project.description}
        </p>

        {project.position && (
          <p className="z-20 mt-6 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200 text-center">
            {project.position}
          </p>
        )}
      </article>
    </Link>
  );
};
