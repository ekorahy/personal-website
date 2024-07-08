import ContentSection from "@/components/molecules/ContentSection";
import HeaderPage from "@/components/molecules/HeaderPage";
import NotFoundTemplate from "@/components/molecules/NotFoundTemplate";
import { getBlogDetail } from "@/data/remote/blog";
import { FullBlog } from "@/types";
import { urlFor } from "@/utils/sanity";
import { Metadata } from "next";
import { PortableText } from "next-sanity";
import Image from "next/image";

export const revalidate = 30;

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blogDetail: FullBlog | null = await getBlogDetail(params.slug);

  if (!blogDetail) {
    return {
      title: "Page Not Found",
    };
  }

  return {
    title: `Blog - ${blogDetail.title}`,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const blogDetail: FullBlog | null = await getBlogDetail(params.slug);

  if (!blogDetail) {
    return (
      <article>
        <HeaderPage title="Error" description="Page not found" />
        <ContentSection>
          <NotFoundTemplate />
        </ContentSection>
      </article>
    );
  }

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
        <div className="prose mt-8 !max-w-none text-zinc-700 dark:text-zinc-400 dark:prose-headings:text-white dark:prose-strong:text-white">
          <PortableText value={blogDetail.content} />
        </div>
      </ContentSection>
    </article>
  );
}
