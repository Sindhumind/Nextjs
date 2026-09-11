import Header from "./components/Header";

export default function Home() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="px-8 py-20 text-center">
        <h1 className="text-5xl font-bold">Welcome to IFCS</h1>

        <p className="mt-4 text-xl">
          Building innovative solutions for your business
        </p>

        <button className="mt-8 rounded-lg bg-blue-600 px-6 py-3 text-white">
          Learn More
        </button>
      </section>
    </main>
  );
}
