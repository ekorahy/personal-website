import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";

export default function BlogItem({
  title,
  smallDescription,
  currentSlug,
  titleImage,
}: {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: any;
}) {
  return (
    <section className="rounded-md p-4 shadow-md">
      <Image
        className="w-full"
        src={urlFor(titleImage).url()}
        width={100}
        height={100}
        alt={`${title} image`}
        unoptimized
      />
      <div className="my-2">
        <h3 className="block text-lg font-bold underline hover:text-slate-950">
          <Link href={`/blog/${currentSlug}`}>{title}</Link>
        </h3>
        <p className="line-clamp-3">{smallDescription}</p>
      </div>
    </section>
  );
}
