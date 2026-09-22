import Image from "next/image";

type TeamMember = {
  id: number;
  name: string;
  designation: string;
  bio: string;
  photo?: {
    url: string;
  };
};

type TeamMembersResponse = {
  data: TeamMember[];
};

export default async function Team() {
  const response = await fetch(
    "http://localhost:1337/api/team-members?populate=photo",
  );

  if (!response.ok) {
    throw new Error("Failed to fetch team members");
  }

  const result: TeamMembersResponse = await response.json();

  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-center text-4xl font-bold">Our Team</h1>

        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
          Meet the team behind IFCS and our flight catering solutions.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {result.data.map((member) => (
            <div
              key={member.id}
              className="rounded-lg border bg-white p-6 text-center shadow-sm"
            >
              {member.photo?.url && (
                <Image
                  src={`http://localhost:1337${member.photo.url}`}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="mx-auto h-32 w-32 rounded-full object-cover"
                  unoptimized
                />
              )}

              <h2 className="mt-5 text-xl font-semibold">{member.name}</h2>

              <p className="mt-2 font-medium text-gray-600">
                {member.designation}
              </p>

              <p className="mt-4 text-sm leading-6 text-gray-600">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
