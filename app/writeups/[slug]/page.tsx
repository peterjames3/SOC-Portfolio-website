import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import NextImage from "next/image";
import rehypeHighlight from "rehype-highlight";
import {
  getAllWriteUpsSlugs,
  getWriteUpsBySlug,
} from "@/app/lib/writeUps";
import { Callout } from "@/app/components/Callout";
import { GhostButton } from "@/app/components/GhostButton";
import { Calendar, Shield, Tag, User } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  const slugs = getAllWriteUpsSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getWriteUpsBySlug(slug);
  if (!study) return { title: "Write  Ups  Not Found" };
  return {
    title: `${study.frontmatter.title} | SEC.OPS`,
    description: study.frontmatter.description,
  };
}

const mdxComponents = {
  Callout,
  table: (props: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto my-6">
      <table
        className="w-full text-sm border border-border rounded"
        {...props}
      />
    </div>
  ),
  thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="bg-surface border-b border-border" {...props} />
  ),
  tbody: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <tbody className="divide-y divide-border" {...props} />
  ),
  tr: (props: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className="transition-colors hover:bg-[rgba(26,20,18,0.5)]"
      {...props}
    />
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className="px-4 py-3 text-left font-body text-xs font-medium uppercase tracking-wider text-text-secondary"
      {...props}
    />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className="px-4 py-3 text-text-primary" {...props} />
  ),
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="font-display text-3xl md:text-4xl font-normal text-text-primary mt-12 mb-6 leading-tight"
      {...props}
    />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="font-display text-2xl md:text-3xl font-normal text-text-primary mt-10 mb-5 leading-snug"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="font-display text-xl md:text-2xl font-normal text-text-primary mt-8 mb-4"
      {...props}
    />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className="font-body text-lg font-medium text-text-primary mt-6 mb-3"
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className="font-body text-[15px] leading-relaxed text-text-secondary mb-4"
      {...props}
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className="list-disc list-inside font-body text-[15px] leading-relaxed text-text-secondary mb-4 space-y-1.5 marker:text-primary"
      {...props}
    />
  ),
  Image: ({ src, alt }: { src: string; alt: string }) => (
    <div
      className="relative w-full my-6 rounded-lg border border-border overflow-hidden"
      style={{ minHeight: "300px" }}
    >
      <NextImage // ← use NextImage here
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className="object-contain"
      />
    </div>
  ),
  ol: (props: React.OlHTMLAttributes<HTMLOListElement>) => (
    <ol
      className="list-decimal list-inside font-body text-[15px] leading-relaxed text-text-secondary mb-4 space-y-1.5"
      {...props}
    />
  ),
  blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-2 border-primary pl-5 my-6 italic text-text-secondary font-display text-lg"
      {...props}
    />
  ),
  code: (props: React.HTMLAttributes<HTMLElement> & { className?: string }) => {
    const isBlock = props.className?.includes("language-");
    if (isBlock) {
      return (
        <code
          className={`${props.className} font-mono text-[13px]`}
          {...props}
        />
      );
    }
    return (
      <code
        className="font-mono text-[13px] bg-surface px-1.5 py-0.5 rounded text-primary"
        {...props}
      />
    );
  },
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="bg-[#0f0c0b] border border-border rounded p-4 overflow-x-auto my-6 font-mono text-[13px] leading-relaxed text-text-primary"
      {...props}
    />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-medium text-text-primary" {...props} />
  ),
  hr: () => <hr className="border-border my-8" />,
};

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getWriteUpsBySlug(slug);

  if (!study) {
    notFound();
  }

  const { frontmatter, content } = study;

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 h-18 flex items-center bg-[rgba(13,10,9,0.9)] backdrop-blur-xl border-b border-[rgba(42,32,28,0.5)]">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 flex items-center justify-between">
          <Link
            href="/writeups"
            className="font-mono text-base font-medium tracking-widest text-text-primary hover:text-primary transition-colors duration-200"
          >
            SEC.OPS
          </Link>
          <GhostButton href="/writeups">Back to Portfolio</GhostButton>
        </div>
      </header>

      <main className="pt-18">
        {/* Hero Banner */}
        <section className="relative bg-surface border-b border-border">
          <div className="max-w-250 mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[rgba(232,104,26,0.1)] border border-[rgba(232,104,26,0.2)] rounded-sm font-mono text-[10px] font-medium uppercase tracking-wider text-primary">
                <Shield size={10} />
                {frontmatter.category}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[rgba(74,222,128,0.1)] border border-[rgba(74,222,128,0.2)] rounded-sm font-mono text-[10px] font-medium uppercase tracking-wider text-success">
                {frontmatter.status}
              </span>
            </div>

            <h1 className="font-display text-[32px] md:text-[48px] font-normal leading-[1.1] text-text-primary mb-4">
              {frontmatter.title}
            </h1>

            <p className="font-body text-lg text-text-secondary leading-relaxed max-w-175 mb-6">
              {frontmatter.description}
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-text-tertiary">
                <User size={14} />
                <span className="font-body text-sm">{frontmatter.analyst}</span>
              </div>
              <div className="flex items-center gap-2 text-text-tertiary">
                <Calendar size={14} />
                <span className="font-body text-sm">{frontmatter.date}</span>
              </div>
              <div className="flex items-center gap-2 text-text-tertiary">
                <Tag size={14} />
                <span className="font-body text-sm">
                  {frontmatter.classification}
                </span>
              </div>
            </div>

            {/* Tags */}
           {frontmatter.tags && frontmatter.tags.length > 0 && (
  <div className="flex flex-wrap gap-2 mt-6">
    {frontmatter.tags.map((tag) => (
      <span
        key={tag}
        className="px-3 py-1 border border-border rounded-sm font-mono text-[11px] font-normal tracking-wider text-text-secondary bg-[rgba(26,20,18,0.6)]"
      >
        {tag}
      </span>
    ))}
  </div>
)}
          </div>
        </section>

        {/* MDX Content */}
        <section className="py-12 md:py-16">
          <div className="max-w-200 mx-auto px-6 md:px-12 lg:px-16">
            <article className="prose-custom">
              <MDXRemote
                source={content}
                components={mdxComponents}
                options={{
                  parseFrontmatter: false,
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [rehypeHighlight],
                  },
                }}
              />
            </article>

            {/* Back to portfolio */}
            <div className="mt-16 pt-8 border-t border-border">
              <GhostButton href="/#work">← Back to All Work</GhostButton>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
