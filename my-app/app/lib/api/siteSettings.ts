import type { SiteSettings } from "../../types/site";
import { STRAPI_URL } from "./config";
import { fetchFromStrapi } from "./fetcher";

export async function fetchSiteSettings(): Promise<SiteSettings> {
   const response = await fetchFromStrapi(
   `${STRAPI_URL}/api/site-settings?populate=heroImage`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch site settings");
  }

  const result = await response.json();

  return result.data[0];
}