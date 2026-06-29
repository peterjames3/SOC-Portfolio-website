import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";
import Image from "next/image";
import { GhostButton } from "@/app/components/GhostButton";

interface WriteUp {
  thumbnail: string;
  slug: string;
  title: string;
  date: string;
  summary: string;
}

function getWriteUps(): WriteUp[] {
  const dir = path.join(process.cwd(), "markdown/writeup");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  return files
    .map((file) => {
      const slug = file.replace(".mdx", "");
      const source = fs.readFileSync(path.join(dir, file), "utf-8");
      const { data } = matter(source);
      return { slug, ...data } as WriteUp;
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export default function WriteUpsPage() {
  const writeups = getWriteUps();

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
          src="/virus-total_1.png"
          alt="write ups  banner image"
          width={1200}
          height={200}
          className="object-cover"
        />
      </figure>

      <h2 className="font-mono text-3xl font-bold text-text-primary mb-10">
        WriteUps
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 rounded-sm shadow-sm ">
        {writeups.map((writeup) => (
          <article
            key={writeup.slug}
            className="border border-border rounded-lg hover:border-primary transition-colors"
          >
            <Link
              href={`/writeups/${writeup.slug}`}
              className="flex flex-col gap-2 "
            >
              <figure>
                <Image
                  src={writeup.thumbnail}
                  alt={writeup.title || "writeups image"}
                  width={600}
                  height={100}
                  layout="responsive"
                  className="object-cover"
                />
              </figure>
              <div className="px-2">
                <h2 className="font-mono text-lg text-text-primary mb-1">
                  {writeup.title}
                </h2>
                <p className="text-text-tertiary text-xs mb-3">
                  {writeup.date}
                </p>
                <p className="text-text-secondary text-sm">{writeup.summary}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
