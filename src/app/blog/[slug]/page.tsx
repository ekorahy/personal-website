import ContentSection from "@/components/molecule/ContentSection";
import HeaderPage from "@/components/molecule/HeaderPage";
import { getBlogDetail } from "@/data/remote/blog";
import { urlFor } from "@/lib/sanity";
import { fullBlog } from "@/types/blog";
import { PortableText } from "next-sanity";
import Image from "next/image";

export const revalidate = 30;

export default async function Page({ params }: { params: { slug: string } }) {
  const blogDetail: fullBlog = await getBlogDetail(params.slug);

  return (
    <article>
      <HeaderPage title="Blog Detail" description={`${blogDetail.title}`} />
      <ContentSection>
        <Image
          className="w-full rounded-md"
          src={urlFor(blogDetail.titleImage).url()}
          width={100}
          height={100}
          alt={`${blogDetail.title} image`}
          unoptimized
          priority={true}
        />
        <div className="prose mt-4">
          <PortableText value={blogDetail.content} />
        </div>
      </ContentSection>
    </article>
  );
}
