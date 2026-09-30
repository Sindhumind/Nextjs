import TeamCard from "../components/TeamCard";
import { fetchTeam } from "../lib/api/team";

export default async function Team() {
  const team = await fetchTeam();

  return (
    <main className="bg-white dark:bg-gray-950">
      {/* Page Introduction */}
      <section className="bg-gray-900 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
            Our People
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-5xl">Meet Our Team</h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Meet the people behind our aviation catering solutions and
            technology.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
              Our Experts
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
              The People Behind IFCS
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
              Our team works together to develop and support solutions that help
              aviation catering teams manage their operations efficiently.
            </p>
          </div>

          {team.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-3">
              {team.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </div>
          ) : (
            <p className="py-10 text-center text-gray-600 dark:text-gray-300">
              No team members are available at the moment.
            </p>
          )}
        </div>
      </section>

      {/* Closing Section */}
      <section className="bg-gray-50 px-6 py-16 dark:bg-gray-900">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Working Together for Better Operations
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            By combining aviation knowledge with technology, our team focuses on
            creating practical solutions for modern catering operations.
          </p>
        </div>
      </section>
    </main>
  );
}
