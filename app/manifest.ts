import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "La Via Italiana",
    short_name: "La Via Italiana",
    description:
      "Storia, pensiero e attualità del comunismo italiano.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F1E8",
    theme_color: "#A7191F",
    lang: "it",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
