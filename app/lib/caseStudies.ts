import fs from "fs";
import path from "path";
import matter from "gray-matter";

const caseStudiesDirectory = path.join(process.cwd(), "content", "case-studies");

export interface CaseStudyFrontmatter {
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

export function getAllCaseStudySlugs(): string[] {
  if (!fs.existsSync(caseStudiesDirectory)) {
    return [];
  }
  const files = fs.readdirSync(caseStudiesDirectory);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getCaseStudyBySlug(
  slug: string
): { frontmatter: CaseStudyFrontmatter; content: string } | null {
  const filePath = path.join(caseStudiesDirectory, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  return {
    frontmatter: {
      ...data,
      slug,
    } as CaseStudyFrontmatter,
    content,
  };
}

export function getAllCaseStudies(): CaseStudyFrontmatter[] {
  const slugs = getAllCaseStudySlugs();
  return slugs
    .map((slug) => {
      const result = getCaseStudyBySlug(slug);
      return result?.frontmatter ?? null;
    })
    .filter(Boolean) as CaseStudyFrontmatter[];
}
