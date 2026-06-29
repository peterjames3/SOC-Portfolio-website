import type { BlogsFrontmatter } from "@/app/lib/blogs";
import { SectionLabel } from "../SectionLabel";
import { BlogRow } from "./BlogRow";
import { GhostButton } from "@/app/components/GhostButton";

interface BlogListProps {
  blogs: BlogsFrontmatter[];
}

export function BlogsList({ blogs }: BlogListProps) {
  if (!blogs || blogs.length === 0) return null;

  return (
    <div className="mt-20">
      <div className="flex items-center gap-4 mb-8">
        <SectionLabel label="BLOG" />
        <span className="h-px flex-1 bg-border" />
      </div>

      <div className="space-y-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
        {blogs.slice(0, 3).map((blog, index) => (
          <BlogRow key={blog.slug} blog={blog} index={index} />
        ))}
      </div>

      <div className="max-w-7xl mt-10 mx-auto w-full px-6 md:px-12 lg:px-16 flex items-center justify-center">
        <GhostButton href="/blog">View All Blogs</GhostButton>
      </div>
    </div>
  );
}
