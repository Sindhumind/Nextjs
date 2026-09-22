import Image from "next/image";
type Service = {
  id: number;
  title: string;
  Description: string;
  Price: number;
  image?: {
    url: string;
  } | null;
};

type ServicesResponse = {
  data: Service[];
};

export default async function Services() {
  const response = await fetch(
    "http://localhost:1337/api/services?populate=image",
  );

  if (!response.ok) {
    throw new Error("Failed to fetch services");
  }

  const result: ServicesResponse = await response.json();

  return (
    <main>
      {/* Page Header */}
      <section className="bg-gray-900 px-6 py-20 text-center text-white">
        <h1 className="text-4xl font-bold">Our Services</h1>

        <p className="mx-auto mt-4 max-w-2xl text-gray-300">
          Explore our flight catering management solutions designed to support
          efficient airline operations.
        </p>
      </section>

      {/* Services List */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            {result.data.map((service) => (
              <article
                key={service.id}
                className="overflow-hidden rounded-lg border bg-white shadow-sm"
              >
                {/* Service Image */}
                {service.image?.url ? (
                  <div className="relative h-52 w-full">
                    <Image
                      src={`http://localhost:1337${service.image.url}`}
                      alt={service.title}
                      fill
                      unoptimized
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                ) : (
                  <div className="flex h-52 items-center justify-center bg-gray-100 text-gray-500">
                    No image available
                  </div>
                )}

                {/* Service Information */}
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h2>

                  <p className="mt-4 leading-7 text-gray-600">
                    {service.Description}
                  </p>

                  <p className="mt-5 text-lg font-bold text-gray-900">
                    ${service.Price}
                  </p>

                  <button
                    type="button"
                    className="mt-6 rounded-lg bg-gray-900 px-5 py-2 text-white hover:bg-gray-700"
                  >
                    Learn More
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
