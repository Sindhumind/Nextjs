import Image from "next/image";

type Media = {
  url: string;
};

type SiteSettings = {
  name: string;
  description: string;
  mission: string;
  vision: string;
  heroImage?: Media | null;
};

type TeamMember = {
  id: number;
  name: string;
  designation: string;
  bio: string;
  photo?: Media | null;
};

type SiteSettingsResponse = {
  data: SiteSettings[];
};

type TeamResponse = {
  data: TeamMember[];
};

export default async function About() {
  const [settingsResponse, teamResponse] = await Promise.all([
    fetch("http://localhost:1337/api/site-settings?populate=heroImage", {
      cache: "no-store",
    }),
    fetch("http://localhost:1337/api/team-members?populate=photo", {
      cache: "no-store",
    }),
  ]);

  if (!settingsResponse.ok) {
    throw new Error("Failed to fetch site settings");
  }

  if (!teamResponse.ok) {
    throw new Error("Failed to fetch team members");
  }

  const settings: SiteSettingsResponse = await settingsResponse.json();

  const team: TeamResponse = await teamResponse.json();

  const siteSettings = settings.data[0];

  const heroImageUrl = siteSettings.heroImage?.url
    ? `http://localhost:1337${siteSettings.heroImage.url}`
    : null;

  return (
    <main>
      {/* ================= ABOUT HEADER ================= */}
      <section className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <h1 className="mt-4 text-5xl font-bold">{siteSettings.name}</h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {siteSettings.description}
          </p>
        </div>
      </section>

      {/* ================= COMPANY IMAGE ================= */}
      {heroImageUrl && (
        <section className="px-6 py-16">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl shadow-lg">
            <div className="relative h-[300px] md:h-[450px]">
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

      {/* ================= MISSION ================= */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border bg-white p-8 shadow-sm md:p-12">
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-sky-100 text-2xl">
                🎯
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Our Mission
                </h2>

                <p className="mt-5 text-lg leading-8 text-gray-600">
                  {siteSettings.mission}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VISION ================= */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border bg-white p-8 shadow-sm md:p-12">
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-2xl">
                🚀
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>

                <p className="mt-5 text-lg leading-8 text-gray-600">
                  {siteSettings.vision}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
              Our People
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Meet Our Team
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Meet the people behind our aviation catering solutions.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {team.data.map((member) => (
              <article
                key={member.id}
                className="rounded-2xl border bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                {member.photo?.url ? (
                  <Image
                    src={`http://localhost:1337${member.photo.url}`}
                    alt={member.name}
                    width={128}
                    height={128}
                    unoptimized
                    className="mx-auto h-32 w-32 rounded-full object-cover"
                  />
                ) : (
                  <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-gray-200 text-gray-500">
                    No Photo
                  </div>
                )}

                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>

                <p className="mt-2 font-medium text-sky-600">
                  {member.designation}
                </p>

                <p className="mt-4 leading-7 text-gray-600">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
