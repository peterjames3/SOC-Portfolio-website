import fs from "fs";
import path from "path";
import matter from "gray-matter";

const selectedWorksDirectory = path.join(process.cwd(), "markdown", "selected-work");

export interface SelectedWorkFrontmatter {
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

export function getAllSelectedWorkSlugs(): string[] {
  if (!fs.existsSync(selectedWorksDirectory)) {
    return [];
  }
  const files = fs.readdirSync(selectedWorksDirectory);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getSelectedWorkBySlug(
  slug: string
): { frontmatter: SelectedWorkFrontmatter; content: string } | null {
  const filePath = path.join(selectedWorksDirectory, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  return {
    frontmatter: {
      ...data,
      slug,
    } as SelectedWorkFrontmatter,
    content,
  };
}

export function getAllSelectedWorks(): SelectedWorkFrontmatter[] {
  const slugs = getAllSelectedWorkSlugs();
  return slugs
    .map((slug) => {
      const result = getSelectedWorkBySlug(slug);
      return result?.frontmatter ?? null;
    })
    .filter(Boolean) as SelectedWorkFrontmatter[];
}