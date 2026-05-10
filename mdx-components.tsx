import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="font-display text-3xl font-normal text-text-primary mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-display text-2xl font-normal text-text-primary mt-8 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-display text-xl font-normal text-text-primary mt-6 mb-3">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="font-body text-base text-text-secondary leading-relaxed mb-4">
        {children}
      </p>
    ),
    img: ({ alt, ...props }) => (
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        {...(props as ImageProps)}
        alt={alt ?? "image"}
      />
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-primary hover:underline transition-colors duration-200"
      >
        {children}
      </a>
    ),
    code: ({ children }) => (
      <code className="font-mono text-sm bg-surface px-1.5 py-0.5 rounded text-primary">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-surface border border-border rounded p-4 overflow-x-auto my-4">
        {children}
      </pre>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside font-body text-base text-text-secondary leading-relaxed mb-4 space-y-1">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside font-body text-base text-text-secondary leading-relaxed mb-4 space-y-1">
        {children}
      </ol>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-primary pl-4 my-4 italic text-text-secondary">
        {children}
      </blockquote>
    ),
    ...components,
  };
}
