type Blog = {
  id: number;
  title: string;
  slug: string;
  author: string;
  date: string;
  description: string;
};

type BlogsResponse = {
  data: Blog[];
};

export default async function Blog() {
  const response = await fetch("http://localhost:1337/api/blog-posts");

  if (!response.ok) {
    throw new Error("Failed to fetch blog posts");
  }

  const result: BlogsResponse = await response.json();

  return (
    <main className="px-6 py-20">
      <h1 className="text-center text-4xl font-bold">Blog</h1>

      <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
        Read our latest articles about flight catering and aviation technology.
      </p>

      <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-3">
        {result.data.map((blog) => (
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

            <a
              href={`/blog/${blog.slug}`}
              className="mt-6 inline-block rounded-lg bg-gray-900 px-5 py-2 text-white"
            >
              Read More
            </a>
          </article>
        ))}
      </div>
    </main>
  );
}
