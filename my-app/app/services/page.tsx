import ServiceCard from "../components/ServiceCard";
import { fetchServices } from "../lib/api/service";

export default async function Services() {
  const services = await fetchServices();

  return (
    <main className="bg-white dark:bg-gray-950">
      {/* Page Introduction */}
      <section className="bg-gray-900 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
            What We Offer
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-5xl">Our Services</h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Explore our software solutions designed to help aviation catering
            teams manage flights, meals, inventory, and daily operations more
            efficiently.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
              Our Solutions
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
              Solutions for Aviation Catering Operations
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
              Our services are designed to support reliable and organized
              catering operations throughout the flight preparation process.
            </p>
          </div>

          {services.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <p className="py-10 text-center text-gray-600 dark:text-gray-300">
              No services are available at the moment.
            </p>
          )}
        </div>
      </section>

      {/* Closing Section */}
      <section className="bg-gray-50 px-6 py-16 dark:bg-gray-900">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Supporting More Efficient Operations
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            From inventory management to meal planning and flight operations,
            IFCS helps aviation catering teams organize their processes and
            improve operational visibility.
          </p>
        </div>
      </section>
    </main>
  );
}
