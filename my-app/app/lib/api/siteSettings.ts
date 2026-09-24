import type { SiteSettings } from "../../type/site";
import { STRAPI_URL } from "./config";

export async function fetchSiteSettings(): Promise<SiteSettings> {
  const response = await fetch(
    `${STRAPI_URL}/api/site-settings?populate=heroImage`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch site settings");
  }

  const result = await response.json();

  return result.data[0];
}