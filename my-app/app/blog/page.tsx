import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "Improving Flight Catering Operations",
    slug: "improving-flight-catering-operations",
    author: "IFCS Team",
    date: "September 15, 2026",
    description: "Learn how technology can improve flight catering operations.",
  },
  {
    id: 2,
    title: "The Future of Aviation Catering",
    slug: "future-of-aviation-catering",
    author: "IFCS Team",
    date: "September 10, 2026",
    description: "Explore new technologies changing aviation catering.",
  },
  {
    id: 3,
    title: "Managing Catering Inventory",
    slug: "managing-catering-inventory",
    author: "IFCS Team",
    date: "September 5, 2026",
    description: "Best practices for managing catering inventory efficiently.",
  },
];

export default function Blog() {
  return (
    <main className="px-6 py-20">
      <h1 className="text-center text-4xl font-bold">Blog</h1>

      <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
        Read our latest articles about flight catering and aviation technology.
      </p>

      <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-3">
        {blogs.map((blog) => (
          <article
            key={blog.id}
            className="rounded-lg border bg-white p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold">{blog.title}</h2>

            <p className="mt-3 text-gray-600">{blog.description}</p>

            <div className="mt-5 text-sm text-gray-500">
              <p>Author: {blog.author}</p>
              <p>Published: {blog.date}</p>
            </div>

            <Link
              href={`/blog/${blog.slug}`}
              className="mt-6 inline-block rounded-lg bg-gray-900 px-5 py-2 text-white"
            >
              Read More
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
