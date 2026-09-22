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

  const settings: SiteSettingsResponse = await settingsResponse.json();

  const team: TeamResponse = await teamResponse.json();

  const siteSettings = settings.data[0];

  const heroImageUrl = siteSettings.heroImage?.url
    ? `http://localhost:1337${siteSettings.heroImage.url}`
    : null;

  return (
    <main>
      {/* ABOUT */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto grid max-w-7xl md:grid-cols-2">
          <div className="flex flex-col justify-center px-8 py-16 md:px-12">
            <p className="text-sm uppercase tracking-widest text-sky-300">
              About
            </p>

            <h1 className="mt-4 text-5xl font-bold">{siteSettings.name}</h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              {siteSettings.description}
            </p>
          </div>

          <div className="relative min-h-[350px]">
            {heroImageUrl && (
              <Image
                src={heroImageUrl}
                alt={siteSettings.name}
                fill
                unoptimized
                className="object-cover"
              />
            )}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            {siteSettings.mission}
          </p>
        </div>
      </section>

      {/* VISION */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            {siteSettings.vision}
          </p>
        </div>
      </section>

      {/* TEAM */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Our Team
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {team.data.map((member) => (
              <article
                key={member.id}
                className="rounded-xl border bg-white p-6 text-center shadow-sm"
              >
                {member.photo?.url && (
                  <Image
                    src={`http://localhost:1337${member.photo.url}`}
                    alt={member.name}
                    width={128}
                    height={128}
                    unoptimized
                    className="mx-auto h-32 w-32 rounded-full object-cover"
                  />
                )}

                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>

                <p className="mt-2 text-blue-600">{member.designation}</p>

                <p className="mt-4 text-gray-600">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
