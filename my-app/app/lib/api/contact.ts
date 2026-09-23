import type { ContactFormData } from "../../type/contact";

export async function submitContactForm(
  formData: ContactFormData
) {
  const response = await fetch(
    "http://localhost:1337/api/contact-messages",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: formData,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to submit contact form");
  }

  return response.json();
}