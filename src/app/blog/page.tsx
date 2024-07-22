import BlogList from "@/components/molecules/BlogList";
import ContentSection from "@/components/molecules/ContentSection";
import HeaderPage from "@/components/molecules/HeaderPage";
import { getBlog } from "@/data/remote/blog";
import { BlogCard } from "@/types";
import { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog",
};

export default async function Page() {
  const blog: BlogCard[] = await getBlog();

  return (
    <article>
      <HeaderPage
        title="Blog"
        description="Share my thoughts, personal stories, tips, tricks, tech reviews, tutorials, etc."
      />
      <ContentSection>
        <BlogList blog={blog} />
      </ContentSection>
    </article>
  );
}
