import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";
import Image from "next/image";
import { GhostButton } from "@/app/components/GhostButton";

interface Blog {
  thumbnail: string;
  slug: string;
  title: string;
  date: string;
  summary: string;
}

function getBlogs(): Blog[] {
  const dir = path.join(process.cwd(), "markdown/blog");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  return files
    .map((file) => {
      const slug = file.replace(".mdx", "");
      const source = fs.readFileSync(path.join(dir, file), "utf-8");
      const { data } = matter(source);
      return { slug, ...data } as Blog;
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export default function BlogPage() {
  const studies = getBlogs();


  return (
    <section className="max-w-310 mx-auto px-6 py-16">
      <header className="fixed top-0 left-0 right-0 z-50 h-18 flex items-center bg-[rgba(13,10,9,0.9)] backdrop-blur-xl border-b border-[rgba(42,32,28,0.5)]">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-mono text-base font-medium tracking-widest text-text-primary hover:text-primary transition-colors duration-200"
          >
            SEC.OPS
          </Link>
          <GhostButton href="/#work">Back to Portfolio</GhostButton>
        </div>
      </header>
      <figure className="W-full h-auto mb-6">
        <Image
          src="/siem-dashboard.webp"
          alt="case studies  banner image"
          width={1200}
          height={200}
          className="object-cover"
        />
      </figure>

      <h2 className="font-mono text-3xl font-bold text-text-primary mb-10">
        Blogs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 rounded-sm shadow-sm ">
        {studies.map((study) => (
          <article
            key={study.slug}
            className="border border-border rounded-lg hover:border-primary transition-colors"
          >
            <Link
              href={`/blog/${study.slug}`}
              className="flex flex-col gap-2 "
            >
              <figure>
                <Image
                  src={study.thumbnail}
                  alt={study.title || "case study image"}
                  width={400}
                  height={100}
                  className="object-cover"
                />
              </figure>
              <div className="px-2">
                <h2 className="font-mono text-lg text-text-primary mb-1">
                  {study.title}
                </h2>
                <p className="text-text-tertiary text-xs mb-3">{study.date}</p>
                <p className="text-text-secondary text-sm">{study.summary}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
