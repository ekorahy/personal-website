import { client } from "@/lib/sanity";

export async function getBlog() {
  const query = `
  *[_type == 'blog'] | order(createdAt desc) {
  title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage
  }`;

  const data = await client.fetch(query);
  return data;
}

export async function getBlogDetail(slug: string) {
  const query = `
  *[_type == 'blog' && slug.current == '${slug}'] {
  'currentSlug': slug.current,
    title,
    content,
    titleImage
  }[0]`;

  const data = await client.fetch(query);
  return data;
}