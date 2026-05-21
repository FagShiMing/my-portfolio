import Link from "next/link";
import { BookOpen, Rocket, User } from "lucide-react";
function GitHubIcon({ size = 20 }: { size?: number }) {
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
            AI应用开发/全栈
          </p>
          <p className="mt-6 text-lg text-neutral-500">
            正在构建面向 CSV 数据分析的轻量级 Agent 系统。
          </p>
        </div>

        <div className="flex gap-3">
          <a
            href="https://github.com/FagShiMing"
            className="rounded-xl border border-neutral-800 bg-neutral-900 p-3 text-neutral-300 hover:text-white"
          >
            <GitHubIcon size={20} />
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
