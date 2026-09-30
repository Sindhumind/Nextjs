import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <main className="bg-white dark:bg-gray-950">
      {/* Page Introduction */}
      <section className="bg-gray-900 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
            Get In Touch
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-5xl">Contact Us</h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Have questions about our flight catering solutions? Send us a
            message and our team will get back to you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          {/* Contact Information */}
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
              Let&apos;s Connect
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
              We would like to hear from you
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Whether you have a question about our services, want to learn more
              about IFCS, or would like to discuss your aviation catering
              requirements, feel free to contact us.
            </p>

            <div className="mt-8 space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                <span className="font-semibold text-gray-900 dark:text-white">
                  Services:
                </span>{" "}
                Flight catering management, meal planning, and inventory
                management.
              </p>

              <p>
                <span className="font-semibold text-gray-900 dark:text-white">
                  Response:
                </span>{" "}
                Submit the form and our team will review your message.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Send Us a Message
            </h2>

            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Fill out the form below and provide your contact details.
            </p>

            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
