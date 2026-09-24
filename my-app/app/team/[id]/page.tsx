import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchTeam, fetchTeamMember } from "../../lib/api/team";
import { STRAPI_URL } from "../../lib/api/config";

export async function generateStaticParams() {
  const team = await fetchTeam();

  return team.map((member) => ({
    id: member.documentId,
  }));
}

export default async function TeamMemberDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const member = await fetchTeamMember(id);

  if (!member) {
    notFound();
  }

  return (
    <main className="bg-white dark:bg-gray-950">
      <section className="bg-gray-900 px-6 py-20 text-center text-white">
        <h1 className="text-4xl font-bold">{member.name}</h1>

        <p className="mt-3 text-lg text-gray-300">{member.designation}</p>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          {member.photo?.url && (
            <Image
              src={`${STRAPI_URL}${member.photo.url}`}
              alt={member.name}
              width={200}
              height={200}
              unoptimized
              className="mx-auto h-48 w-48 rounded-full object-cover"
            />
          )}

          <h2 className="mt-8 text-2xl font-bold text-gray-900 dark:text-white">
            {member.name}
          </h2>

          <p className="mt-2 font-medium text-sky-600">{member.designation}</p>

          <p className="mt-6 leading-8 text-gray-600 dark:text-gray-300">
            {member.bio}
          </p>

          <Link
            href="/team"
            className="mt-8 inline-block rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
          >
            Back to Team
          </Link>
        </div>
      </section>
    </main>
  );
}
