import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <main className="bg-white dark:bg-gray-950">
      <section className="bg-gray-900 px-6 py-20 text-center text-white">
        <h1 className="text-4xl font-bold">Contact Us</h1>

        <p className="mx-auto mt-4 max-w-2xl text-gray-300">
          Have questions about our flight catering solutions? Get in touch with
          us.
        </p>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
