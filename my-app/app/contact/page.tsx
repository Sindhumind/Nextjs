export default function Contact() {
  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-center text-4xl font-bold">Contact Us</h1>

        <p className="mt-4 text-center text-gray-600">
          Have questions about IFCS? Get in touch with our team.
        </p>

        <form className="mt-10 space-y-6 rounded-lg border p-8 shadow-sm">
          {/* Name */}
          <div>
            <label htmlFor="name" className="mb-2 block font-medium">
              Name
            </label>

            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="mb-2 block font-medium">
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="mb-2 block font-medium">
              Message
            </label>

            <textarea
              id="message"
              rows={6}
              placeholder="Enter your message"
              className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white hover:bg-gray-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
