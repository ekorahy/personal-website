import ContentSection from "@/components/molecules/ContentSection";
import HeaderPage from "@/components/molecules/HeaderPage";
import NotFoundTemplate from "@/components/molecules/NotFoundTemplate";
import TagList from "@/components/molecules/TagList";
import { getBlogDetail } from "@/data/remote/blog";
import { FullBlog } from "@/types";
import formattedDate from "@/utils/formattedDate";
import { urlFor } from "@/utils/sanity";
import { Metadata } from "next";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { IoMdTime } from "react-icons/io";

export const revalidate = 3600;

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
      <HeaderPage title="Blog Detail" />
      <ContentSection>
        <div className="relative overflow-hidden rounded-md">
          <Image
            className="h-60 w-full transform object-cover transition-transform duration-300 hover:scale-125 sm:h-96"
            src={urlFor(blogDetail.titleImage).url()}
            width={736}
            height={384}
            alt={`${blogDetail.title} image`}
            unoptimized
            priority={true}
          />
          <div className="absolute bottom-4 right-4 flex w-4/5 flex-wrap justify-end gap-2 lg:w-1/2">
            <TagList tags={blogDetail.tags} />
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-2xl font-bold dark:text-white">
            {blogDetail.title}
          </h2>
          <p className="mb-4">
            Written on {formattedDate(blogDetail.createdAt)} by Ekorahy
          </p>
          <div className="flex items-center gap-6 font-light dark:text-white">
            <p className="flex items-center gap-2">
              <IoMdTime className="text-xl" />
              <span className="bg-gradient-to-r from-emerald-200 to-cyan-400 px-1 dark:from-emerald-300 dark:to-cyan-500">
                {blogDetail.readingTime} min read
              </span>
            </p>
          </div>
        </div>
      </ContentSection>
      <ContentSection>
        <div className="prose !max-w-none text-zinc-700 dark:text-zinc-400 dark:prose-headings:text-white dark:prose-strong:text-white">
          <PortableText value={blogDetail.content} />
        </div>
      </ContentSection>
    </article>
  );
}
