import Image from "next/image";
import type { TeamMember } from "../type/team";

type TeamCardProps = {
  member: TeamMember;
};

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <article className="rounded-2xl border bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
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
    </article>
  );
}
