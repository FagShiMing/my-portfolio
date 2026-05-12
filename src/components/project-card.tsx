import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { GitBranch, Globe } from "lucide-react";

type Project = {
  slug: string;
  name: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
};

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
            className="inline-flex h-10 items-center justify-center rounded-md border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm font-medium transition-colors hover:bg-neutral-800"
          >
            <GitBranch className="mr-2 h-4 w-4" />
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}
