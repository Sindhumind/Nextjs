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

  return (
    <div className="mt-8 space-y-4 leading-8 text-gray-700 dark:text-gray-300">
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
    <main className="px-6 py-20">
      <article className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          {blog.title}
        </h1>

        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          <p>Author: {blog.author}</p>
          <p>Published: {blog.date}</p>
        </div>

        <p className="mt-8 text-lg text-gray-600 dark:text-gray-300">
          {blog.description}
        </p>

        <RichText content={blog.content} />
      </article>
    </main>
  );
}
