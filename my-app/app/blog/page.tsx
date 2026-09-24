"use client";

import { useState } from "react";
import BlogCard from "../components/BlogCard";
import { useQuery } from "@tanstack/react-query";
import { fetchBlogs } from "../lib/api/blog";

export default function Blog() {
  const [search, setSearch] = useState("");

  const {
    data: blogs,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });

  if (isLoading) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center">
        <p>Loading blog posts...</p>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center">
        <p>Failed to load blog posts.</p>
      </main>
    );
  }

  const filteredBlogs = blogs?.filter((blog) => {
    const searchTerm = search.toLowerCase();

    return (
      blog.title.toLowerCase().includes(searchTerm) ||
      blog.description.toLowerCase().includes(searchTerm) ||
      blog.author.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <main>
      <section className="bg-gray-900 px-6 py-20 text-center text-white">
        <h1 className="text-4xl font-bold">Blog</h1>

        <p className="mx-auto mt-4 max-w-2xl text-gray-300">
          Explore the latest insights and updates from IFCS.
        </p>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-xl">
            <input
              type="search"
              placeholder="Search blog posts..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-full rounded-lg border px-4 py-3 text-gray-900 outline-none focus:border-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            />
          </div>

          {filteredBlogs?.length === 0 ? (
            <p className="mt-12 text-center text-gray-600 dark:text-gray-300">
              No blog posts found.
            </p>
          ) : (
            <div className="mt-10 grid gap-8 md:grid-cols-3">
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
