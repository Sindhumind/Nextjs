"use client";

import { useState } from "react";
import type { ContactFormData } from "../type/contact";
import { submitContactForm } from "../lib/api/contact";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitted(false);
    setError("");

    try {
      await submitContactForm(formData);

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch {
      setError("Failed to submit your message. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block font-medium">
          Name
        </label>

        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-2 w-full rounded-lg border px-4 py-3"
        />
      </div>

      <div>
        <label htmlFor="email" className="block font-medium">
          Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-2 w-full rounded-lg border px-4 py-3"
        />
      </div>

      <div>
        <label htmlFor="message" className="block font-medium">
          Message
        </label>

        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="mt-2 w-full rounded-lg border px-4 py-3"
        />
      </div>

      {submitted && (
        <p className="text-green-600">
          Your message has been submitted successfully.
        </p>
      )}

      {error && <p className="text-red-600">{error}</p>}

      <button
        type="submit"
        className="rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white hover:bg-gray-700"
      >
        Send Message
      </button>
    </form>
  );
}
