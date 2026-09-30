"use client";

import { useState } from "react";
import BlogCard from "../components/BlogCard";
import { useQuery } from "@tanstack/react-query";
import { fetchBlogsFromApi } from "../lib/api/blog";
import type { Blog } from "../types/blog";

export default function Blog() {
  const [search, setSearch] = useState("");

  const {
    data: blogs,
    isLoading,
    isError,
  } = useQuery<Blog[]>({
    queryKey: ["blogs"],
    queryFn: fetchBlogsFromApi,
  });

  if (isLoading) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center px-6">
        <p className="text-gray-600 dark:text-gray-300">
          Loading blog posts...
        </p>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Unable to load blog posts
        </h1>

        <p className="mt-3 text-gray-600 dark:text-gray-300">
          Please try again later.
        </p>
      </main>
    );
  }

  const filteredBlogs = blogs?.filter((blog) => {
    const searchTerm = search.trim().toLowerCase();

    return (
      blog.title.toLowerCase().includes(searchTerm) ||
      blog.description.toLowerCase().includes(searchTerm) ||
      blog.author.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <main className="bg-white dark:bg-gray-950">
      {/* Page Introduction */}
      <section className="bg-gray-900 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
            Insights & Updates
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-5xl">IFCS Blog</h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Explore insights, ideas, and updates about aviation catering,
            technology, and operational efficiency.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
              Latest Articles
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
              Explore Our Articles
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
              Stay informed about trends and practical approaches that can
              improve aviation catering operations.
            </p>
          </div>

          {/* Search */}
          <div className="mx-auto max-w-xl">
            <label htmlFor="search" className="sr-only">
              Search blog posts
            </label>

            <input
              type="search"
              id="search"
              placeholder="Search by title, description, or author..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:ring-sky-900"
            />
          </div>

          {filteredBlogs?.length === 0 ? (
            <p className="mt-12 text-center text-gray-600 dark:text-gray-300">
              No blog posts found. Try a different search term.
            </p>
          ) : (
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {filteredBlogs?.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
