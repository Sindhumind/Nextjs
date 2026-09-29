import Image from "next/image";
import Link from "next/link";

import type { TeamMember } from "../types/team";
import { STRAPI_URL } from "../lib/api/config";

type TeamCardProps = {
  member: TeamMember;
};

export default function TeamCard({ member }: TeamCardProps) {
  const memberPhotoUrl = member.photo?.url
    ? `/api/strapi-image?url=${encodeURIComponent(
        `${STRAPI_URL}${member.photo.url}`,
      )}`
    : null;

  return (
    <article className="rounded-2xl border bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
      {memberPhotoUrl ? (
        <Image
          src={memberPhotoUrl}
          alt={member.name}
          width={128}
          height={128}
          unoptimized
          className="mx-auto h-32 w-32 rounded-full object-cover"
        />
      ) : (
        <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-300">
          No Photo
        </div>
      )}

      <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
        {member.name}
      </h2>

      <p className="mt-2 font-medium text-sky-600">{member.designation}</p>

      <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
        {member.bio}
      </p>

      <Link
        href={`/team/${member.documentId}`}
        aria-label={`View profile of ${member.name}`}
        className="mt-6 inline-block rounded-lg bg-gray-900 px-5 py-2 text-white hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
      >
        View Profile
      </Link>
    </article>
  );
}
