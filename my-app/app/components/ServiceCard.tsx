import Image from "next/image";
import type { Service } from "../types/service";
import { STRAPI_URL } from "../lib/api/config";

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const serviceImageUrl = service.image?.url
    ? `/api/strapi-image?url=${encodeURIComponent(
        `${STRAPI_URL}${service.image.url}`,
      )}`
    : null;

  return (
    <article className="overflow-hidden rounded-lg border bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
      {serviceImageUrl ? (
        <div className="relative h-52 w-full">
          <Image
            src={serviceImageUrl}
            alt={service.title}
            fill
            unoptimized
            className="object-cover"
          />
        </div>
      ) : (
        <div className="flex h-52 items-center justify-center bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-300">
          No image available
        </div>
      )}

      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          {service.title}
        </h2>

        <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
          {service.Description}
        </p>

        <p className="mt-5 text-lg font-bold text-gray-900 dark:text-white">
          ${service.Price}
        </p>
      </div>
    </article>
  );
}
