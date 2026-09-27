import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const routes = [
    "",
    "/storia",
    "/dispense",
    "/berlinguer",
    "/pensiero",
    "/pci-oggi",
    "/documenti",
    "/chi-siamo",
    "/metodologia",
    "/contatti",
    "/dispense/livorno-1921-nascita-pcdi",
    "/dispense/gramsci-egemonia",
    "/dispense/clandestinita-resistenza-togliatti",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === "/pci-oggi"
        ? "daily"
        : route === ""
        ? "weekly"
        : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/dispense" ||
          route === "/storia" ||
          route === "/pci-oggi"
        ? 0.9
        : 0.7,
  }));
}
