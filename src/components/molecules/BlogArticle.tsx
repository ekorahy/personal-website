"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import SearchBar from "@/components/atoms/SearchBar";
import BlogList from "@/components/molecules/BlogList";
import ContentSection from "@/components/molecules/ContentSection";
import HeaderPage from "@/components/molecules/HeaderPage";
import { BlogArticleProps, BlogCard } from "@/types";
import ErrorResponse from "./ErrorResponse";

export default function BlogArticle({ initialBlog }: BlogArticleProps) {
  const [blog, setBlog] = useState<BlogCard[]>(initialBlog);
  const searchParams = useSearchParams();
  const router = useRouter();
  const [keyword, setKeyword] = useState<string>(
    () => searchParams.get("keyword") || "",
  );

  useEffect(() => {
    setKeyword(searchParams.get("keyword") || "");
  }, [searchParams]);

  const onKeywordChangeHandler = (newKeyword: string) => {
    setKeyword(newKeyword);
    const params = new URLSearchParams(window.location.search);
    if (newKeyword) {
      params.set("keyword", newKeyword);
    } else {
      params.delete("keyword");
    }
    router.push(`?${params.toString()}`, undefined);
  };

  const onRemoveKeywordHandler = () => {
    setKeyword("");
    const params = new URLSearchParams(window.location.search);
    params.delete("keyword");
    router.push(`?${params.toString()}`, undefined);
  };

  const filteredBlog = blog.filter((article) => {
    const lowerCaseKeyword = keyword.toLowerCase();
    const matchesTitle = article.title.toLowerCase().includes(lowerCaseKeyword);
    const matchesDescription = article.smallDescription
      .toLowerCase()
      .includes(lowerCaseKeyword);
    const matchesTags = article.tags.some((tag) =>
      tag.toLowerCase().includes(lowerCaseKeyword),
    );

    return matchesTitle || matchesDescription || matchesTags;
  });

  return (
    <article>
      <HeaderPage
        title="Blog"
        description="Share my thoughts, personal stories, tips, tricks, tech reviews, tutorials, etc."
      />
      <ContentSection>
        <section className="mb-8">
          <SearchBar
            keyword={keyword}
            keywordChange={onKeywordChangeHandler}
            removeKeyword={onRemoveKeywordHandler}
          />
        </section>
        {filteredBlog.length === 0 ? (
          <ErrorResponse title="Blog Not Found" />
        ) : (
          <BlogList blog={filteredBlog} />
        )}
      </ContentSection>
    </article>
  );
};
