import TeamCard from "../components/TeamCard";
import { fetchTeam } from "../lib/api/team";

export default async function Team() {
  const team = await fetchTeam();

  return (
    <main className="bg-white dark:bg-gray-950">
      <section className="bg-gray-900 px-6 py-20 text-center text-white">
        <h1 className="text-4xl font-bold">Our Team</h1>

        <p className="mx-auto mt-4 max-w-2xl text-gray-300">
          Meet the people behind our aviation catering solutions.
        </p>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            {team.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
