import Image from "next/image";
import Link from "next/link";
import BlogCard from "./components/BlogCard";
import ServiceCard from "./components/ServiceCard";
import { fetchBlogs } from "./lib/api/blog";
import { fetchServices } from "./lib/api/service";
import { fetchSiteSettings } from "./lib/api/siteSettings";
import { STRAPI_URL } from "./lib/api/config";

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
    ? `/api/strapi-image?url=${encodeURIComponent(
        `${STRAPI_URL}${siteSettings.heroImage.url}`,
      )}`
    : null;

  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-900">
        <div className="mx-auto grid max-w-7xl md:grid-cols-2">
          <div className="flex flex-col justify-center px-8 py-16 text-white sm:px-12 lg:px-16">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-sky-300">
              Smarter Flight Catering Operations
            </p>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              {siteSettings.name}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              {siteSettings.description}
            </p>

            <p className="mt-4 max-w-xl leading-7 text-slate-400">
              Manage catering operations, meal planning, inventory, and flight
              requirements with a solution designed for the aviation industry.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="rounded-lg bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-200"
              >
                Explore Our Services
              </Link>

              <Link
                href="/contact"
                className="rounded-lg border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-slate-900"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="relative min-h-90 md:min-h-125">
            {heroImageUrl ? (
              <Image
                src={heroImageUrl}
                alt="Flight catering operations"
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

      {/* Introduction */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
            Aviation Catering Technology
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
            Simplifying Flight Catering Management
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-300">
            IFCS provides software solutions that help aviation catering teams
            organize their operations, improve visibility, and manage day-to-day
            catering processes more efficiently.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 px-6 py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
              What We Offer
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
              Our Services
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
              Practical solutions designed to support the key processes involved
              in flight catering operations.
            </p>
          </div>

          {highlightedServices.length > 0 ? (
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {highlightedServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <p className="mt-10 text-center text-gray-600 dark:text-gray-300">
              No services are available at the moment.
            </p>
          )}

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-block rounded-lg border border-gray-900 px-6 py-3 font-semibold text-gray-900 transition hover:bg-gray-900 hover:text-white dark:border-gray-300 dark:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-gray-900"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why IFCS */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
              Why IFCS
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
              Built Around Operational Efficiency
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
              Our approach focuses on helping aviation catering teams manage
              complex operations with greater consistency and visibility.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <article className="rounded-xl border bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Better Visibility
              </h3>
              <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                Keep important catering information organized and accessible
                across day-to-day operations.
              </p>
            </article>

            <article className="rounded-xl border bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Efficient Planning
              </h3>
              <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                Support meal planning, inventory management, and flight
                preparation through connected workflows.
              </p>
            </article>

            <article className="rounded-xl border bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Reliable Operations
              </h3>
              <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                Help teams manage operational processes consistently while
                supporting the demands of aviation catering.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Latest Blogs */}
      <section className="bg-gray-50 px-6 py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
              Insights
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
              Latest Articles
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
              Explore insights and practical ideas related to aviation catering
              operations and technology.
            </p>
          </div>

          {latestBlogs.length > 0 ? (
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {latestBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          ) : (
            <p className="mt-10 text-center text-gray-600 dark:text-gray-300">
              No articles are available at the moment.
            </p>
          )}

          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-block rounded-lg border border-gray-900 px-6 py-3 font-semibold text-gray-900 transition hover:bg-gray-900 hover:text-white dark:border-gray-300 dark:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-gray-900"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-900 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">
            Ready to Improve Your Catering Operations?
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            Learn how IFCS can help your team manage flight catering processes
            more efficiently.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-200"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
