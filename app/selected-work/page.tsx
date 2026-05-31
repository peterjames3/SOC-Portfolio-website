import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";

interface SelectedWork {
  slug: string;
  title: string;
  category: string;
  description: string;
}

function getSelectedWork(): SelectedWork[] {
  const dir = path.join(process.cwd(), "markdown/selected-work");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  return files
    .map((file) => {
      const slug = file.replace(".mdx", "");
      const source = fs.readFileSync(path.join(dir, file), "utf-8");
      const { data } = matter(source);
      return { slug, ...data } as SelectedWork;
    })
    //.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export default function SelectedWorkPage() {
  const projects = getSelectedWork();

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-mono text-3xl font-bold text-text-primary mb-10">
        Selected Work
      </h1>
      <ul className="space-y-6">
        {projects.map((project) => (
          <li key={project.slug} className="border border-border rounded-lg p-6 hover:border-primary transition-colors">
            <Link href={`/selected-work/${project.slug}`}>
              <h2 className="font-mono text-lg text-text-primary mb-1">
                {project.title}
              </h2>
              <p className="text-text-tertiary text-xs mb-3">{project.category}</p>
              <p className="text-text-secondary text-sm">{project.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}