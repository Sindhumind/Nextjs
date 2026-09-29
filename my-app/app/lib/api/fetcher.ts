import { STRAPI_URL } from "./config";

export async function fetchFromStrapi(
  url: string,
  options?: RequestInit,
) {
  const requestUrl = new URL(url);
  const strapiUrl = new URL(STRAPI_URL);

  if (requestUrl.origin !== strapiUrl.origin) {
    throw new Error("Invalid Strapi URL");
  }

  return fetch(requestUrl, {
    ...options,
    headers: {
      ...options?.headers,
      "ngrok-skip-browser-warning": "true",
    },
  });
}