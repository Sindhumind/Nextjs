import type { Blog } from "../../type/blog";

export async function fetchBlogs(): Promise<Blog[]> {
  const response = await fetch("http://localhost:1337/api/blog-posts");

  if (!response.ok) {
    throw new Error("Failed to fetch blog posts");
  }

  const result = await response.json();

  return result.data;
}

export async function fetchBlogBySlug(slug: string) {
  const response = await fetch(
    `http://localhost:1337/api/blog-posts?filters[slug][$eq]=${slug}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch blog post");
  }

  const result = await response.json();

  return result.data[0] ?? null;
}