import type { Service } from "../../types/service";
import { STRAPI_URL } from "./config";
import { fetchFromStrapi } from "./fetcher";

export async function fetchServices(): Promise<Service[]> {
  const response = await fetchFromStrapi(
    `${STRAPI_URL}/api/services?populate=image`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch services");
  }

  const result = await response.json();

  return result.data;
}