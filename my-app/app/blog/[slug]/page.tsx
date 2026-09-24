import { STRAPI_URL } from "../../lib/api/config";
export const revalidate = 60;

type RichTextChild = {
  type: string;
  text?: string;
};

type RichTextBlock = {
  type: string;
  children?: RichTextChild[];
};

type Blog = {
  id: number;
  title: string;
  slug: string;
  author: string;
  date: string;
  description: string;
  content: RichTextBlock[];
};

type BlogsResponse = {
  data: Blog[];
};

function RichText({ content }: { content: RichTextBlock[] }) {
  return (
    <div className="mt-8 space-y-4 leading-8 text-gray-700">
      {content.map((block, index) => {
        if (block.type === "paragraph") {
          return (
            <p key={index}>
              {block.children?.map((child, childIndex) => (
                <span key={childIndex}>{child.text}</span>
              ))}
            </p>
          );
        }

        return null;
      })}
    </div>
  );
}

export async function generateStaticParams() {
  const response = await fetch(`${STRAPI_URL}/api/blog-posts`);

  if (!response.ok) {
    throw new Error("Failed to fetch blog posts");
  }

  const result: BlogsResponse = await response.json();

  return result.data.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const response = await fetch(
    `/api/blog-posts?filters[slug][$eq]=${slug}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch blog post");
  }

  const result: BlogsResponse = await response.json();

  const blog = result.data[0];

  if (!blog) {
    return (
      <main className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold">Blog post not found</h1>

          <p className="mt-4 text-gray-600">
            The blog post you are looking for does not exist.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="px-6 py-20">
      <article className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">{blog.title}</h1>

        <div className="mt-4 text-sm text-gray-500">
          <p>Author: {blog.author}</p>
          <p>Published: {blog.date}</p>
        </div>

        <p className="mt-8 text-lg text-gray-600">{blog.description}</p>

        <RichText content={blog.content} />
      </article>
    </main>
  );
}
