type Service = {
  id: number;
  title: string;
  Description: string;
  Price: number;
};

type ServicesResponse = {
  data: Service[];
};

export default async function Services() {
  const response = await fetch("http://localhost:1337/api/services");

  if (!response.ok) {
    throw new Error("Failed to fetch services");
  }

  const result: ServicesResponse = await response.json();

  return (
    <main className="px-6 py-20">
      <h1 className="text-center text-4xl font-bold">Our Services</h1>

      <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-3">
        {result.data.map((service) => (
          <div
            key={service.id}
            className="rounded-lg border bg-white p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold">{service.title}</h2>

            <p className="mt-3 text-gray-600">{service.Description}</p>

            <p className="mt-4 font-semibold">${service.Price}</p>

            <button className="mt-6 rounded-lg bg-gray-900 px-5 py-2 text-white">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
