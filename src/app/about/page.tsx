import { Sidebar } from "@/components/sidebar";
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Sidebar />

      <section className="px-6 py-12 lg:ml-80 lg:px-20">
        <div className="max-w-4xl">
          <p className="text-amber-500">关于</p>
          <h1 className="mt-6 text-4xl font-bold">关于我</h1>

          <div className="mt-10 space-y-6 text-lg leading-8 text-neutral-400">
            <p>
	      欢迎来到我的主页。
	    </p>

	    <p>
              我叫房石明，2025年本科毕业于天津财经大学经济统计系。
	    </p>
	    
            <p>
	       大学期间受GPT-3.5影响，开始对ai感兴趣，自学编程。
            </p>

            <p>
	      我希望能入职有ai相关背景的公司，进一步提升专业技能。
            </p>
          </div>

       </div>
      </section>
    </main>
  );
}
