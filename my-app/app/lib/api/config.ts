const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

if (!strapiUrl) {
  throw new Error("NEXT_PUBLIC_STRAPI_URL is not configured");
}

export const STRAPI_URL: string = strapiUrl;