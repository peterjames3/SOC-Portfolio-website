import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogsDirectory = path.join(process.cwd(), "markdown", "blog");

export interface BlogsFrontmatter {
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

export function getAllBlogsSlugs(): string[] {
  if (!fs.existsSync(blogsDirectory)) {
    return [];
  }
  const files = fs.readdirSync(blogsDirectory);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getBlogsBySlug(
  slug: string
): { frontmatter: BlogsFrontmatter; content: string } | null {
  const filePath = path.join(blogsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  return {
    frontmatter: {
      ...data,
      slug,
    } as BlogsFrontmatter,
    content,
  };
}

export function getAllBlogs(): BlogsFrontmatter[] {
  const slugs = getAllBlogsSlugs();
  return slugs
    .map((slug) => {
      const result = getBlogsBySlug(slug);
      return result?.frontmatter ?? null;
    })
    .filter(Boolean) as BlogsFrontmatter[];
}
