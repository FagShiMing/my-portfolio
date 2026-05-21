import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Globe } from "lucide-react";

type Project = {
  slug: string;
  name: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
};

function GitHubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/80 p-5 transition hover:border-amber-500/60">
      <Link href={`/projects/${project.slug}`}>
        <div className="aspect-video overflow-hidden rounded-xl bg-neutral-800">
          <img
            src={project.image}
            alt={project.name}
            className="h-full w-full object-cover"
          />
        </div>
      </Link>

      <h3 className="mt-5 text-2xl font-bold text-white">{project.name}</h3>
      <p className="mt-2 text-neutral-400">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="bg-neutral-800 text-neutral-300">
            {tag}
          </Badge>
        ))}
      </div>

      <div className="mt-5 flex gap-3">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            className="inline-flex h-10 items-center justify-center rounded-md bg-amber-500 px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-amber-400"
          >
            <Globe className="mr-2 h-4 w-4" />
            Demo
          </a>
        )}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-md border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm font-medium transition-colors hover:bg-neutral-800"
          >
            <span className="mr-2 inline-flex h-4 w-4">
              <GitHubIcon />
            </span>
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}
