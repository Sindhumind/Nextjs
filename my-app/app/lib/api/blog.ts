import type { Blog } from "../../types/blog";
import { STRAPI_URL } from "./config";
import { fetchFromStrapi } from "./fetcher";

function isValidSlug(slug: string) {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug);
}

export async function fetchBlogs(): Promise<Blog[]> {
  const response = await fetchFromStrapi(
    `${STRAPI_URL}/api/blog-posts`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch blog posts");
  }

  const result = await response.json();

  return result.data;
}

export async function fetchBlogsFromApi(): Promise<Blog[]> {
  const response = await fetch("/api/blogs");

  if (!response.ok) {
    throw new Error("Failed to fetch blog posts");
  }

  return response.json();
}

export async function fetchBlogBySlug(
  slug: string,
): Promise<Blog | null> {
  if (!isValidSlug(slug)) {
    return null;
  }

  const response = await fetchFromStrapi(
    `${STRAPI_URL}/api/blog-posts?filters[slug][$eq]=${encodeURIComponent(slug)}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch blog post");
  }

  const result = await response.json();

  return result.data[0] ?? null;
}