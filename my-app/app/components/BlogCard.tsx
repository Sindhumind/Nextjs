import Link from "next/link";
import type { Blog } from "../type/blog";

type BlogCardProps = {
  blog: Blog;
};

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <article className="rounded-lg border bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
        {blog.title}
      </h2>

      <p className="mt-3 text-gray-600 dark:text-gray-300">
        {blog.description}
      </p>

      <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
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
  );
}
