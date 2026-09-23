import ServiceCard from "../components/ServiceCard";
import { fetchServices } from "../lib/api/service";

export default async function Services() {
  const services = await fetchServices();

  return (
    <main className="bg-white dark:bg-gray-950">
      <section className="bg-gray-900 px-6 py-20 text-center text-white">
        <h1 className="text-4xl font-bold">Our Services</h1>

        <p className="mx-auto mt-4 max-w-2xl text-gray-300">
          Explore our flight catering management solutions designed to support
          efficient airline operations.
        </p>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
