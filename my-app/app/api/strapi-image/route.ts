import { NextRequest } from "next/server";
import { STRAPI_URL } from "../../lib/api/config";

const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5 MB

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

    // Only allow images hosted by our configured Strapi server.
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

    const contentLength = response.headers.get("content-length");

    if (contentLength && Number(contentLength) > MAX_IMAGE_SIZE) {
      return new Response("Image is too large", {
        status: 413,
      });
    }

    const imageBuffer = await response.arrayBuffer();

    if (imageBuffer.byteLength > MAX_IMAGE_SIZE) {
      return new Response("Image is too large", {
        status: 413,
      });
    }

    return new Response(imageBuffer, {
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