import Image from "next/image";

import TeamCard from "../components/TeamCard";
import { fetchSiteSettings } from "../lib/api/siteSettings";
import { fetchTeam } from "../lib/api/team";
import { STRAPI_URL } from "../lib/api/config";

export default async function About() {
  const [siteSettings, team] = await Promise.all([
    fetchSiteSettings(),
    fetchTeam(),
  ]);

  const heroImageUrl = siteSettings.heroImage?.url
    ? `/api/strapi-image?url=${encodeURIComponent(
        `${STRAPI_URL}${siteSettings.heroImage.url}`,
      )}`
    : null;

  return (
    <main className="bg-white dark:bg-gray-950">
      {/* Page Introduction */}
      <section className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
            About IFCS
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-5xl">
            Supporting Smarter Flight Catering Operations
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {siteSettings.description}
          </p>
        </div>
      </section>

      {/* Hero Image */}
      {heroImageUrl && (
        <section className="px-6 py-12 md:py-16">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl shadow-lg">
            <div className="relative aspect-video w-full">
              <Image
                src={heroImageUrl}
                alt={`${siteSettings.name} aviation catering`}
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1152px"
              />
            </div>
          </div>
        </section>
      )}

      {/* About IFCS */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
            Who We Are
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
            Technology for Efficient Aviation Catering
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            IFCS provides software solutions designed to help aviation catering
            teams manage their operations efficiently. Our focus is on
            simplifying processes, improving visibility, and supporting reliable
            day-to-day catering operations.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="px-6 py-8">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
              Our Mission
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
              Making Catering Operations More Efficient
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {siteSettings.mission}
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-gray-50 px-6 py-16 dark:bg-gray-900">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
              Our Vision
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
              Building the Future of Connected Aviation Catering
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {siteSettings.vision}
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
              Our People
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
              Meet Our Team
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
              Meet the people behind our aviation catering solutions and
              technology.
            </p>
          </div>

          {team.length > 0 ? (
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {team.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </div>
          ) : (
            <p className="mt-12 text-center text-gray-600 dark:text-gray-300">
              No team members are available at the moment.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
