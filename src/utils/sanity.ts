import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const client = createClient({
  apiVersion: '2022-03-07',
  dataset: 'production',
  projectId: 'ntnjvk6i',
  useCdn: false
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}