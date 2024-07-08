import { BlogListProps } from "@/types";
import BlogItem from "../atoms/BlogItem";

export default function BlogList({ blog }: BlogListProps) {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
      {blog.map((post, idx) => (
        <BlogItem
          key={idx}
          title={post.title}
          smallDescription={post.smallDescription}
          currentSlug={post.currentSlug}
          titleImage={post.titleImage}
        />
      ))}
    </div>
  );
}
