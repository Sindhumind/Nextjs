import { notFound } from "next/navigation";
import { fetchBlogBySlug, fetchBlogs } from "../../lib/api/blog";

export const revalidate = 60;

type RichTextChild = {
  type?: string;
  text?: string;
};

type RichTextBlock = {
  type: string;
  children?: RichTextChild[];
};

function isRichTextBlockArray(value: unknown): value is RichTextBlock[] {
  return (
    Array.isArray(value) &&
    value.every((block) => {
      if (typeof block !== "object" || block === null) {
        return false;
      }

      const typedBlock = block as Record<string, unknown>;

      return (
        typeof typedBlock.type === "string" &&
        (!("children" in typedBlock) ||
          (Array.isArray(typedBlock.children) &&
            typedBlock.children.every((child) => {
              if (typeof child !== "object" || child === null) {
                return false;
              }

              const typedChild = child as Record<string, unknown>;

              return (
                (!("type" in typedChild) ||
                  typeof typedChild.type === "string") &&
                (!("text" in typedChild) || typeof typedChild.text === "string")
              );
            })))
      );
    })
  );
}

function RichText({ content }: { content: unknown }) {
  const safeContent = isRichTextBlockArray(content) ? content : [];

  if (safeContent.length === 0) {
    return (
      <p className="mt-8 text-gray-600 dark:text-gray-300">
        No additional content is available for this article.
      </p>
    );
  }

  return (
    <div className="mt-8 space-y-5 text-lg leading-8 text-gray-700 dark:text-gray-300">
      {safeContent.map((block, index) => {
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
  const blogs = await fetchBlogs();

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = await fetchBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="bg-white px-6 py-20 dark:bg-gray-950">
      <article className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
          IFCS Insights
        </p>

        <h1 className="mt-4 text-4xl font-bold leading-tight text-gray-900 dark:text-white md:text-5xl">
          {blog.title}
        </h1>

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
          <p>Author: {blog.author}</p>
          <p>Published: {blog.date}</p>
        </div>

        <div className="mt-8 border-l-4 border-sky-500 pl-5">
          <p className="text-xl leading-8 text-gray-600 dark:text-gray-300">
            {blog.description}
          </p>
        </div>

        <RichText content={blog.content} />
      </article>
    </main>
  );
}
