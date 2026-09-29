import { NextRequest } from "next/server";
import { STRAPI_URL } from "../../lib/api/config";

export async function GET(request: NextRequest) {
  const imageUrl = request.nextUrl.searchParams.get("url");

  if (!imageUrl) {
    return new Response("Image URL is required", {
      status: 400,
    });
  }

  try {
    const url = new URL(imageUrl);
    const strapiUrl = new URL(STRAPI_URL);

   if (
  url.origin !== strapiUrl.origin ||
  !url.pathname.startsWith("/uploads/")
) {
  return new Response("Invalid image source", {
    status: 403,
  });
}

    const response = await fetch(imageUrl, {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    });

    if (!response.ok) {
      return new Response("Failed to fetch image", {
        status: response.status,
      });
    }

    const contentType = response.headers.get("content-type");

    if (!contentType?.startsWith("image/")) {
      return new Response("Invalid image type", {
        status: 415,
      });
    }

    return new Response(await response.arrayBuffer(), {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch {
    return new Response("Failed to fetch image", {
      status: 500,
    });
  }
}