const services = [
  {
    id: 1,
    title: "Flight Catering Management",
    description:
      "Manage flight catering requirements and daily operations efficiently.",
    price: "$500",
    image: "/service-1.jpg",
  },
  {
    id: 2,
    title: "Inventory Management",
    description:
      "Track catering inventory and ensure the required items are available.",
    price: "$400",
    image: "/service-2.jpg",
  },
  {
    id: 3,
    title: "Meal Planning",
    description:
      "Plan and manage meals according to flight and passenger requirements.",
    price: "$300",
    image: "/service-3.jpg",
  },
];

export default function Services() {
  return (
    <main className="px-6 py-20">
      <h1 className="text-center text-4xl font-bold">Our Services</h1>

      <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
        Explore our flight catering solutions designed to simplify and manage
        catering operations.
      </p>

      <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.id}
            className="overflow-hidden rounded-lg border bg-white"
          >
            {/* Image */}
            <div className="flex h-48 items-center justify-center bg-gray-200">
              <span className="text-gray-500">Service Image</span>
            </div>

            {/* Details */}
            <div className="p-6">
              <h2 className="text-xl font-semibold">{service.title}</h2>

              <p className="mt-3 text-gray-600">{service.description}</p>

              <p className="mt-4 text-lg font-bold">{service.price}</p>

              <button className="mt-5 rounded-lg bg-gray-900 px-5 py-2 text-white">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
