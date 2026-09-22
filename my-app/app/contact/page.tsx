"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch(
        "http://localhost:1337/api/contact-messages",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: {
              name,
              email,
              message,
            },
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("Your message has been sent successfully.");

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-center text-4xl font-bold">Contact Us</h1>

        <p className="mt-4 text-center text-gray-600">
          Have questions about IFCS? Get in touch with our team.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6 rounded-lg border p-8 shadow-sm"
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="mb-2 block font-medium">
              Name
            </label>

            <input
              id="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter your name"
              required
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
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              required
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
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Enter your message"
              required
              className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {/* Status */}
          {status && (
            <p className="text-center text-sm text-gray-600">{status}</p>
          )}
        </form>
      </div>
    </main>
  );
}
