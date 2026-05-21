import Link from "next/link";
import { Sidebar } from "@/components/sidebar";
import { posts } from "@/data/posts";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Sidebar />

      <section className="px-6 py-12 lg:ml-80 lg:px-20">
        <div className="max-w-5xl">
          <p className="text-amber-500">博客</p>
          <h1 className="mt-6 text-4xl font-bold">我的文章</h1>
          <p className="mt-4 text-lg text-neutral-400">
            记录我的技术学习、项目复盘和 AI 应用开发实践。
          </p>

          <div className="mt-12 space-y-4">
            {posts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block rounded-2xl border border-neutral-800 bg-neutral-900/70 p-6 hover:border-amber-500/60"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-neutral-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-xl font-bold text-white">{post.title}</h2>
                  <span className="ml-auto text-sm text-neutral-500">{post.date}</span>
                </div>
                <p className="mt-3 text-neutral-400">{post.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
