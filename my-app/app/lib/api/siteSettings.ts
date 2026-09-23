import type { SiteSettings } from "../../type/site";

export async function fetchSiteSettings(): Promise<SiteSettings> {
  const response = await fetch(
    "http://localhost:1337/api/site-settings?populate=heroImage"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch site settings");
  }

  const result = await response.json();

  return result.data[0];
}