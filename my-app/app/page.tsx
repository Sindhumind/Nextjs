import Image from "next/image";
import Link from "next/link";
import BlogCard from "./components/BlogCard";
import ServiceCard from "./components/ServiceCard";
import { fetchBlogs } from "./lib/api/blog";
import { fetchServices } from "./lib/api/service";
import { fetchSiteSettings } from "./lib/api/siteSettings";
import { STRAPI_URL } from "../app/lib/api/config";

export default async function Home() {
  const [siteSettings, services, blogs] = await Promise.all([
    fetchSiteSettings(),
    fetchServices(),
    fetchBlogs(),
  ]);

  const highlightedServices = services.slice(0, 3);

  const latestBlogs = [...blogs]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  const heroImageUrl = siteSettings.heroImage?.url
    ? `${STRAPI_URL}${siteSettings.heroImage.url}`
    : null;

  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-900">
        <div className="mx-auto grid max-w-7xl md:grid-cols-2">
          <div className="flex flex-col justify-center px-8 py-16 text-white sm:px-12 lg:px-16">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-sky-300">
              Flight Catering Solutions
            </p>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              {siteSettings.name}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              {siteSettings.description}
            </p>

            <Link
              href="/services"
              className="mt-8 inline-block w-fit rounded-lg bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-200"
            >
              Explore Our Services
            </Link>
          </div>

          <div className="relative min-h-90 md:min-h-125">
            {heroImageUrl ? (
              <Image
                src={heroImageUrl}
                alt="IFCS flight catering"
                fill
                unoptimized
                priority
                className="object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-slate-800 text-slate-400">
                No hero image available
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white">
            Our Services
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {highlightedServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-block rounded-lg border border-gray-900 px-6 py-3 font-semibold text-gray-900 hover:bg-gray-900 hover:text-white dark:border-gray-300 dark:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-gray-900"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blogs */}
      <section className="bg-gray-50 px-6 py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white">
            Latest Articles
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {latestBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-block rounded-lg border border-gray-900 px-6 py-3 font-semibold text-gray-900 hover:bg-gray-900 hover:text-white dark:border-gray-300 dark:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-gray-900"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
