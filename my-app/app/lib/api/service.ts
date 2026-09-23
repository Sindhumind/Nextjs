import type { Service } from "../../type/service";

export async function fetchServices(): Promise<Service[]> {
  const response = await fetch(
    "http://localhost:1337/api/services?populate=image"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch services");
  }

  const result = await response.json();

  return result.data;
}