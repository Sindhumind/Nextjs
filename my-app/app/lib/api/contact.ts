import type { ContactFormData } from "../../types/contact";

export async function submitContactForm(formData: ContactFormData) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "Failed to submit contact form");
  }

  return response.json();
}