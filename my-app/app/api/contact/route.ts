import { NextRequest } from "next/server";
import { STRAPI_URL } from "../../lib/api/config";

type ContactRequest = {
  name: string;
  email: string;
  message: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body: unknown = await request.json();

    if (typeof body !== "object" || body === null) {
      return new Response("Invalid request body", {
        status: 400,
      });
    }

    const data = body as Partial<ContactRequest>;

    const name = typeof data.name === "string" ? data.name.trim() : "";
    const email = typeof data.email === "string" ? data.email.trim() : "";
    const message =
      typeof data.message === "string" ? data.message.trim() : "";

    if (!name || !email || !message) {
      return new Response("All fields are required", {
        status: 400,
      });
    }

    if (!isValidEmail(email)) {
      return new Response("Invalid email address", {
        status: 400,
      });
    }

    if (message.length < 10) {
      return new Response("Message must be at least 10 characters", {
        status: 400,
      });
    }

    const response = await fetch(
      `${STRAPI_URL}/api/contact-messages`,
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
      }
    );

    if (!response.ok) {
      return new Response("Failed to submit contact message", {
        status: response.status,
      });
    }

    const result = await response.json();

    return Response.json(result, {
      status: 201,
    });
  } catch {
    return new Response("Invalid request", {
      status: 400,
    });
  }
}