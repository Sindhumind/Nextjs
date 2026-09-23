import Image from "next/image";
import TeamCard from "../components/TeamCard";
import { fetchSiteSettings } from "../lib/api/siteSettings";
import { fetchTeam } from "../lib/api/team";

export default async function About() {
  const [siteSettings, team] = await Promise.all([
    fetchSiteSettings(),
    fetchTeam(),
  ]);

  const heroImageUrl = siteSettings.heroImage?.url
    ? `http://localhost:1337${siteSettings.heroImage.url}`
    : null;

  return (
    <main className="bg-white dark:bg-gray-950">
      <section className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-5xl font-bold">{siteSettings.name}</h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {siteSettings.description}
          </p>
        </div>
      </section>

      {heroImageUrl && (
        <section className="px-6 py-16">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl shadow-lg">
            <div className="relative h-75 md:h-112.5">
              <Image
                src={heroImageUrl}
                alt={`${siteSettings.name} aviation catering`}
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </div>
        </section>
      )}

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Our Mission
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {siteSettings.mission}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16 dark:bg-gray-900">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Our Vision
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {siteSettings.vision}
            </p>
          </div>
        </div>
      </section>

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
              Meet the people behind our aviation catering solutions.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {team.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
