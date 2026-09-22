type SiteSettings = {
  footerText: string;
};

type SiteSettingsResponse = {
  data: SiteSettings[];
};

export default async function Footer() {
  const response = await fetch("http://localhost:1337/api/site-settings", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch site settings");
  }

  const result: SiteSettingsResponse = await response.json();

  const siteSettings = result.data[0];

  return (
    <footer className="border-t bg-gray-900 px-6 py-8 text-white">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-sm text-gray-300">{siteSettings.footerText}</p>
      </div>
    </footer>
  );
}
