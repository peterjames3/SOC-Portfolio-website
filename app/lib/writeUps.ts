import fs from "fs";
import path from "path";
import matter from "gray-matter";

const writeupsDirectory = path.join(process.cwd(), "markdown", "writeup");

export interface WriteUpsFrontmatter {
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  date: string;
  classification: string;
  challenge: string;
  analyst: string;
  tags: string[];
  status: string;
  slug: string;
}

export function getAllWriteUpsSlugs(): string[] {
  if (!fs.existsSync(writeupsDirectory)) {
    return [];
  }
  const files = fs.readdirSync(writeupsDirectory);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getWriteUpsBySlug(
  slug: string
): { frontmatter: WriteUpsFrontmatter; content: string } | null {
  const filePath = path.join(writeupsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  return {
    frontmatter: {
      ...data,
      slug,
    } as WriteUpsFrontmatter,
    content,
  };
}

export function getAllWriteUps(): WriteUpsFrontmatter[] {
  const slugs = getAllWriteUpsSlugs();
  return slugs
    .map((slug) => {
      const result = getWriteUpsBySlug(slug);
      return result?.frontmatter ?? null;
    })
    .filter(Boolean) as WriteUpsFrontmatter[];
}
