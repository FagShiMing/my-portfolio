import Link from "next/link";
import { Sidebar } from "@/components/sidebar";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";
import { posts } from "@/data/posts";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Sidebar />

      <section className="px-6 py-12 lg:ml-80 lg:px-20">
        <section className="max-w-6xl">
          <div className="mb-20">
            <div className="mb-4 h-px w-10 bg-amber-500" />
            <h2 className="text-3xl font-bold">关于我</h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-neutral-400">
              <p>
                我是房石明，经济统计背景,大学期间对编程感兴趣，目前转向AI应用开发和全栈。
              </p>
              <p>
                我正在构建 DataInsight-Agent：一个面向 CSV 数据分析的轻量级 Agent 系统。
                它可以完成数据画像、缺失值分析、数值摘要、报告生成和数据问答。
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="mb-4 h-px w-10 bg-amber-500" />
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-3xl font-bold">我的项目</h2>
              <Link href="/projects" className="text-sm text-neutral-400 hover:text-amber-400">
                查看全部 →
              </Link>
            </div>

            <div className="grid gap-6 xl:grid-cols-2">
              {projects.slice(0, 2).map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 h-px w-10 bg-amber-500" />
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-3xl font-bold">最近文章</h2>
              <Link href="/blog" className="text-sm text-neutral-400 hover:text-amber-400">
                阅读更多 →
              </Link>
            </div>

            <div className="space-y-6">
              {posts.map((post, index) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="grid grid-cols-[60px_1fr_120px] items-center gap-6 rounded-xl px-4 py-4 hover:bg-neutral-900"
                >
                  <span className="font-mono text-neutral-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-medium text-neutral-200">{post.title}</span>
                  <span className="text-right text-sm text-neutral-500">{post.date}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
