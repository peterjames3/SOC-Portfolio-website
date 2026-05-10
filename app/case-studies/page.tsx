import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";

interface CaseStudy {
  slug: string;
  title: string;
  date: string;
  summary: string;
}

function getCaseStudies(): CaseStudy[] {
  const dir = path.join(process.cwd(), "markdown/case-studies");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  return files
    .map((file) => {
      const slug = file.replace(".mdx", "");
      const source = fs.readFileSync(path.join(dir, file), "utf-8");
      const { data } = matter(source);
      return { slug, ...data } as CaseStudy;
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export default function CaseStudiesPage() {
  const studies = getCaseStudies();

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-mono text-3xl font-bold text-text-primary mb-10">
        Case Studies
      </h1>
      <ul className="space-y-6">
        {studies.map((study) => (
          <li key={study.slug} className="border border-border rounded-lg p-6 hover:border-primary transition-colors">
            <Link href={`/case-studies/${study.slug}`}>
              <h2 className="font-mono text-lg text-text-primary mb-1">
                {study.title}
              </h2>
              <p className="text-text-tertiary text-xs mb-3">{study.date}</p>
              <p className="text-text-secondary text-sm">{study.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}