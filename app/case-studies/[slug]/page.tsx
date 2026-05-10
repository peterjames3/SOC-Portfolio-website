import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";

interface Props {
  params: { slug: string };
}

interface Frontmatter {
  title: string;
  date: string;
  summary: string;
  tags: string[];
}

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "markdown/case-studies");
  const files = fs.readdirSync(dir);
  return files
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => ({ slug: f.replace(".mdx", "") }));
}

export default async function CaseStudyPage({ params }: Props) {
  const filePath = path.join(
    process.cwd(),
    "markdown/case-studies",
    `${params.slug}.mdx`
  );

  if (!fs.existsSync(filePath)) notFound();

  const source = fs.readFileSync(filePath, "utf-8");

  const { content, frontmatter } = await compileMDX<Frontmatter>({
    source,
    options: { parseFrontmatter: true },
  });

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-mono text-3xl font-bold text-text-primary mb-2">
        {frontmatter.title}
      </h1>
      <p className="text-text-tertiary text-sm mb-10">{frontmatter.date}</p>
      <div className="prose prose-invert max-w-none">
        {content}
      </div>
    </article>
  );
}