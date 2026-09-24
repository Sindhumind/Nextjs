import type { Service } from "../../type/service";
import { STRAPI_URL } from "./config";

export async function fetchServices(): Promise<Service[]> {
  const response = await fetch(
    `${STRAPI_URL}/api/services?populate=image`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch services");
  }

  const result = await response.json();

  return result.data;
}