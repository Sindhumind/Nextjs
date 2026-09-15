export default function About() {
  return (
    <main>
      {/* Mission & Vision */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold">About IFCS</h1>

          <p className="mt-6 text-lg text-gray-600">
            IFCS provides solutions designed to simplify and manage flight
            catering operations.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-2">
          <div className="rounded-lg border p-8">
            <h2 className="text-2xl font-semibold">Our Mission</h2>

            <p className="mt-4 text-gray-600">
              To provide efficient and reliable solutions that help
              organizations manage their flight catering operations.
            </p>
          </div>

          <div className="rounded-lg border p-8">
            <h2 className="text-2xl font-semibold">Our Vision</h2>

            <p className="mt-4 text-gray-600">
              To improve aviation catering operations through technology and
              connected workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="bg-gray-100 px-6 py-20">
        <h2 className="text-center text-3xl font-bold">Our Team</h2>

        <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-white p-6 text-center">
            <div className="mx-auto h-24 w-24 rounded-full bg-gray-300" />

            <h3 className="mt-4 text-xl font-semibold">John Doe</h3>

            <p className="mt-2 text-gray-500">Software Engineer</p>

            <p className="mt-3 text-gray-600">
              Works on developing and improving aviation software solutions.
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 text-center">
            <div className="mx-auto h-24 w-24 rounded-full bg-gray-300" />

            <h3 className="mt-4 text-xl font-semibold">Jane Smith</h3>

            <p className="mt-2 text-gray-500">Product Manager</p>

            <p className="mt-3 text-gray-600">
              Helps define products and improve the user experience.
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 text-center">
            <div className="mx-auto h-24 w-24 rounded-full bg-gray-300" />

            <h3 className="mt-4 text-xl font-semibold">Alex Brown</h3>

            <p className="mt-2 text-gray-500">Business Analyst</p>

            <p className="mt-3 text-gray-600">
              Works with teams to understand business requirements.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
