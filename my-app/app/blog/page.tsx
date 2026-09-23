"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { fetchBlogs } from "../lib/api/blog";

export default function Blog() {
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
      <main className="px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-gray-600">Loading blog posts...</p>
        </div>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-2xl font-bold text-red-600">
            Failed to load blog posts
          </h1>
          <p className="mt-3 text-gray-600">Please try again later.</p>
        </div>
      </main>
    );
  }

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
          <div className="grid gap-8 md:grid-cols-3">
            {blogs?.map((blog) => (
              <article
                key={blog.id}
                className="rounded-lg border bg-white p-6 shadow-sm"
              >
                <h2 className="text-xl font-semibold text-gray-900">
                  {blog.title}
                </h2>

                <p className="mt-3 text-gray-600">{blog.description}</p>

                <div className="mt-4 text-sm text-gray-500">
                  <p>Author: {blog.author}</p>
                  <p>Published: {blog.date}</p>
                </div>

                <Link
                  href={`/blog/${blog.slug}`}
                  className="mt-6 inline-block rounded-lg bg-gray-900 px-5 py-2 text-white hover:bg-gray-700"
                >
                  Read More
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
