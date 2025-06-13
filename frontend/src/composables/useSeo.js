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
    ],
    link: [{ rel: "canonical", href: url || "https://default-url.com" }],
  });
}
