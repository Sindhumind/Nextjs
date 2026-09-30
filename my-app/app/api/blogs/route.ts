import { STRAPI_URL } from "../../lib/api/config";
import { fetchFromStrapi } from "../../lib/api/fetcher";

export async function GET() {
  try {
    const response = await fetchFromStrapi(
      `${STRAPI_URL}/api/blog-posts`,
    );

    if (!response.ok) {
      return new Response("Failed to fetch blog posts", {
        status: 502,
      });
    }

    const result: unknown = await response.json();

    if (
      typeof result !== "object" ||
      result === null ||
      !("data" in result) ||
      !Array.isArray(result.data)
    ) {
      return new Response("Invalid blog data received", {
        status: 502,
      });
    }

    return Response.json(result.data);
  } catch {
    return new Response("Failed to fetch blog posts", {
      status: 502,
    });
  }
}