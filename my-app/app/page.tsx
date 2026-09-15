
const services = [
  {
    id: 1,
    title: "Flight Catering Management",
    description: "Manage flight catering requirements and daily operations.",
  },
  {
    id: 2,
    title: "Inventory Management",
    description:
      "Track catering inventory and ensure the required items are available.",
  },
  {
    id: 3,
    title: "Meal Planning",
    description: "Plan and manage meals according to flight requirements.",
  },
];

const blogs = [
  {
    id: 1,
    title: "Improving Flight Catering Operations",
    description: "Learn how technology can improve flight catering operations.",
    author: "IFCS Team",
    date: "September 15, 2026",
  },
  {
    id: 2,
    title: "The Future of Aviation Catering",
    description: "Explore new technologies changing aviation catering.",
    author: "IFCS Team",
    date: "September 10, 2026",
  },
  {
    id: 3,
    title: "Managing Catering Inventory",
    description: "Best practices for managing catering inventory efficiently.",
    author: "IFCS Team",
    date: "September 5, 2026",
  },
];

export default function Home() {
  return (
    <main>

      {/* Company Banner */}
      <section className="bg-gray-900 px-6 py-24 text-center text-white">
        <h1 className="text-5xl font-bold">IFCS</h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
          InFlight Catering Software designed to simplify and manage flight
          catering operations.
        </p>

        <button className="mt-8 rounded-lg bg-white px-6 py-3 font-semibold text-gray-900">
          Learn More
        </button>
      </section>

      {/* Services */}
      <section className="px-6 py-20">
        <h2 className="text-center text-3xl font-bold">Our Services</h2>

        <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.id} className="rounded-lg border p-6">
              <h3 className="text-xl font-semibold">{service.title}</h3>

              <p className="mt-3 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="bg-gray-100 px-6 py-20">
        <h2 className="text-center text-3xl font-bold">Featured Blog Posts</h2>

        <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="rounded-lg bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold">{blog.title}</h3>

              <p className="mt-3 text-gray-600">{blog.description}</p>

              <div className="mt-5 text-sm text-gray-500">
                <p>{blog.author}</p>
                <p>{blog.date}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
