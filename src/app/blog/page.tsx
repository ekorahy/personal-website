import BlogList from "@/components/molecule/BlogList";
import ContentSection from "@/components/molecule/ContentSection";
import HeaderPage from "@/components/molecule/HeaderPage";
import { getBlog } from "@/data/remote/blog";
import { blogCard } from "@/types/blog";
import { Metadata } from "next";

export const revalidate = 30;

export const metadata: Metadata = {
  title: "Blog",
};

export default async function Page() {
  const blog: blogCard[] = await getBlog();

  return (
    <article>
      <HeaderPage
        title="Blog"
        description="Share my thoughts and tutorials about software engineering."
      />
      <ContentSection>
        <BlogList blog={blog} />
      </ContentSection>
    </article>
  );
}
