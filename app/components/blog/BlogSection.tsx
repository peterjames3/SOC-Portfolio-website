"use client";

import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import type { BlogsFrontmatter } from "@/app/lib/blogs";
import {   BlogSectionHeader } from "@/app/components/blog/BlogSectionHeader";

import { BlogsList } from "./BlogsList";


interface BlogSectionProps {
  blogs: BlogsFrontmatter[];
 
}

export function BlogSection({ blogs,  }: BlogSectionProps) {
 
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });



  return (
    <section id="blog" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div
          ref={ref}
          className={`transition-all duration-700 ease-in-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-7.5"
          }`}
        >
            <BlogSectionHeader />
                   <BlogsList blogs={blogs} />
        </div>
      </div>
    </section>
  );
}
