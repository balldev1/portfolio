// useSeo.js
import { useHead } from "@vueuse/head";

export function useSeo({ title, description, keywords, url }) {
  useHead({
    title: title || "Default Title",
    meta: [
      { name: "description", content: description || "Default description" },
      { name: "keywords", content: keywords || "default, keywords" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { property: "og:title", content: title || "Default Title" },
      {
        property: "og:description",
        content: description || "Default description",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content:
          "https://portfolio-frontend-ten-steel.vercel.app/project/dns.jpg",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
    ],
    link: [{ rel: "canonical", href: url || "https://default-url.com" }],
  });
}
