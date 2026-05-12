import { Sidebar } from "@/components/sidebar";
import { Badge } from "@/components/ui/badge";

const skills = [
  "Python",
  "FastAPI",
  "pandas",
  "MySQL",
  "LLM API",
  "RAG",
  "Agent",
  "Tool Calling",
  "Evaluation",
  "Git",
];

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
              我是房石明，经济统计背景，正在转向 AI 应用开发方向。
              我的差异化优势是数据分析、统计思维、指标设计和业务理解能力。
            </p>

            <p>
              目前我的核心项目是 DataInsight-Agent：一个面向 CSV 数据分析的轻量级 Agent 系统。
              它通过工具注册表统一管理数据分析能力，并记录工具调用轨迹，用于错误分析和后续评估。
            </p>

            <p>
              我希望寻找 AI 应用开发、LLM 应用工程、RAG、数据分析 Agent 相关的实习或初级岗位。
            </p>
          </div>

          <h2 className="mt-12 text-2xl font-bold">技术栈</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <Badge key={skill} className="bg-neutral-800 px-4 py-2 text-neutral-200">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
