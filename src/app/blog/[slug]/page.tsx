import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown, { type Components } from "react-markdown";
import type { Heading as MarkdownHeading, Root } from "mdast";
import remarkGfm from "remark-gfm";
import { visit } from "unist-util-visit";
import { Sidebar } from "@/components/sidebar";
import { posts } from "@/data/posts";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type Heading = {
  id: string;
  title: string;
};

function getHeadingId(index: number) {
  return `section-${index}`;
}

function extractHeadings(markdown: string): Heading[] {
  return markdown
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line, index) => ({
      id: getHeadingId(index + 1),
      title: line.replace(/^##\s+/, "").trim(),
    }));
}

function remarkHeadingIds() {
  return (tree: Root) => {
    let index = 0;

    visit(tree, "heading", (node: MarkdownHeading) => {
      if (node.depth !== 2) {
        return;
      }

      index += 1;
      node.data = {
        ...node.data,
        hProperties: {
          ...node.data?.hProperties,
          id: getHeadingId(index),
        },
      };
    });
  };
}

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const headings = extractHeadings(post.markdown);

  const markdownComponents: Components = {
    h2({ children, id }) {
      return (
        <h2
          id={id}
          className="mt-12 scroll-mt-24 text-2xl font-bold text-white"
        >
          {children}
        </h2>
      );
    },
    h3({ children }) {
      return <h3 className="mt-8 text-xl font-semibold text-white">{children}</h3>;
    },
    p({ children }) {
      return <p className="mt-5 text-lg leading-8 text-neutral-300">{children}</p>;
    },
    ul({ children }) {
      return <ul className="mt-5 list-disc pl-6 text-neutral-300">{children}</ul>;
    },
    ol({ children }) {
      return <ol className="mt-5 list-decimal pl-6 text-neutral-300">{children}</ol>;
    },
    li({ children }) {
      return <li className="mt-2 leading-8">{children}</li>;
    },
    code({ className, children }) {
      const isCodeBlock = className?.startsWith("language-");

      if (isCodeBlock) {
        return <code className="font-mono text-sm text-neutral-200">{children}</code>;
      }

      return (
        <code className="rounded bg-neutral-800 px-1.5 py-0.5 text-sm text-amber-300">
          {children}
        </code>
      );
    },
    pre({ children }) {
      return (
        <pre className="mt-6 overflow-x-auto rounded-2xl bg-neutral-900 p-5 text-sm text-neutral-200">
          {children}
        </pre>
      );
    },
    a({ href, children }) {
      return (
        <a href={href} className="text-amber-400 underline-offset-4 hover:underline">
          {children}
        </a>
      );
    },
    blockquote({ children }) {
      return (
        <blockquote className="mt-6 border-l border-amber-500 pl-4 text-neutral-400">
          {children}
        </blockquote>
      );
    },
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Sidebar />

      <section className="px-6 py-12 lg:ml-80 lg:px-20">
        <div className="max-w-6xl">
          <div className="grid gap-12 xl:grid-cols-[minmax(0,1fr)_16rem]">
            <article className="max-w-3xl">
              <Link href="/blog" className="text-sm text-neutral-400 hover:text-amber-400">
                ← 返回博客
              </Link>

              <p className="mt-12 text-sm text-amber-500">{post.date}</p>
              <h1 className="mt-5 text-4xl font-bold leading-tight text-white md:text-5xl">
                {post.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-neutral-400">{post.summary}</p>

              <div className="mt-12">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm, remarkHeadingIds]}
                  components={markdownComponents}
                >
                  {post.markdown}
                </ReactMarkdown>
              </div>
            </article>

            <aside className="hidden xl:block">
              <div className="sticky top-24 w-56">
                <h2 className="text-sm font-semibold text-neutral-300">目录</h2>
                <nav className="mt-4 space-y-3 border-l border-neutral-800 pl-4">
                  {headings.map((heading) => (
                    <a
                      key={heading.id}
                      href={`#${heading.id}`}
                      className="block text-sm leading-6 text-neutral-500 hover:text-amber-500"
                    >
                      {heading.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
