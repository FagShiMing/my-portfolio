import Link from "next/link";
import { GitBranch, Mail, FileText, BookOpen, Rocket, User } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-full lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-80 border-r border-neutral-800 bg-neutral-950 px-8 py-10">
      <div className="flex flex-col gap-8">
        <div>
          <div className="h-44 w-44 overflow-hidden rounded-2xl bg-neutral-800">
            <img
              src="/avatar.jpg"
              alt="房石明"
              className="h-full w-full object-cover"
            />
          </div>

          <h1 className="mt-8 text-4xl font-bold text-white">房石明</h1>
          <p className="mt-3 text-neutral-400">
            AI 应用开发 / 数据分析 Agent / RAG
          </p>
          <p className="mt-6 text-lg text-neutral-500">
            经济统计背景，正在构建面向 CSV 数据分析的轻量级 Agent 系统。
          </p>
        </div>

        <div className="flex gap-3">
          <a
            href="https://github.com/你的GitHub用户名"
            className="rounded-xl border border-neutral-800 bg-neutral-900 p-3 text-neutral-300 hover:text-white"
          >
            <GitBranch size={20} />
          </a>
          <a
            href="mailto:你的邮箱"
            className="rounded-xl border border-neutral-800 bg-neutral-900 p-3 text-neutral-300 hover:text-white"
          >
            <Mail size={20} />
          </a>
          <a
            href="/resume.pdf"
            className="rounded-xl border border-neutral-800 bg-neutral-900 p-3 text-neutral-300 hover:text-white"
          >
            <FileText size={20} />
          </a>
        </div>

        <nav className="flex flex-col gap-4 text-neutral-400">
          <Link href="/blog" className="flex items-center gap-3 hover:text-white">
            <BookOpen size={18} />
            博客
          </Link>
          <Link href="/projects" className="flex items-center gap-3 hover:text-white">
            <Rocket size={18} />
            项目
          </Link>
          <Link href="/about" className="flex items-center gap-3 hover:text-white">
            <User size={18} />
            关于
          </Link>
        </nav>

        <p className="mt-auto text-sm text-neutral-600">
          © 2026 | fangshiming.dev
        </p>
      </div>
    </aside>
  );
}
