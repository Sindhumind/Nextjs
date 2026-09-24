import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { STRAPI_URL } from "../lib/api/config";
type SiteSettings = {
  name: string;
  logo?: {
    url: string;
  } | null;
};

type SiteSettingsResponse = {
  data: SiteSettings[];
};

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "Team", href: "/team" },
];

export default async function Header() {
  const response = await fetch(`${STRAPI_URL}/api/site-settings?populate=logo`);

  if (!response.ok) {
    throw new Error("Failed to fetch site settings");
  }

  const result: SiteSettingsResponse = await response.json();
  const siteSettings = result.data[0];

  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          {siteSettings.logo?.url ? (
            <Image
              src={`${STRAPI_URL}${siteSettings.logo.url}`}
              alt={siteSettings.name}
              width={100}
              height={50}
              unoptimized
              loading="eager"
              className="h-12 w-auto object-contain"
            />
          ) : (
            <span className="text-2xl font-bold text-gray-900">
              {siteSettings.name}
            </span>
          )}
        </Link>

        <nav className="flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 transition hover:text-black"
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
