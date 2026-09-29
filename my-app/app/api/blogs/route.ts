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

    const result = await response.json();

    return Response.json(result.data);
  } catch {
    return new Response("Failed to fetch blog posts", {
      status: 502,
    });
  }
}