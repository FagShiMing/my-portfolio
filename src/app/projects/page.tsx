import { Sidebar } from "@/components/sidebar";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Sidebar />

      <section className="px-6 py-12 lg:ml-80 lg:px-20">
        <div className="max-w-6xl">
          <p className="text-amber-500">我的产品 / 项目</p>
          <h1 className="mt-6 text-4xl font-bold">我的项目</h1>
          <p className="mt-4 text-lg text-neutral-400">
            这里展示我的 AI 应用开发、数据分析 Agent 和 RAG 相关项目。
          </p>

          <div className="mt-10 grid gap-6 xl:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
