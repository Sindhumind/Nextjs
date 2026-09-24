import type { ContactFormData } from "../../type/contact";
import { STRAPI_URL } from "./config";

export async function submitContactForm(
  formData: ContactFormData
) {
  const response = await fetch(
    `${STRAPI_URL}/api/contact-messages`,
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