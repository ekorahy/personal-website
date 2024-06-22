import { blogCard } from "@/types/blog";
import BlogItem from "../atom/BlogItem";

export default function BlogList({ blog }: { blog: blogCard[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
