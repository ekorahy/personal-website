import { BlogCard } from "@/types";
import { urlFor } from "@/utils/sanity";
import Image from "next/image";
import Link from "next/link";

export default function BlogItem({
  title,
  smallDescription,
  currentSlug,
  titleImage,
}: BlogCard) {
  return (
    <section className="overflow-hidden rounded-md border border-zinc-200 dark:border-zinc-800">
      <div className="relative mb-4 overflow-hidden">
        <Image
          className="h-60 w-full transform transition-transform duration-300 hover:scale-125 sm:h-80"
          src={urlFor(titleImage).url()}
          width={486.667}
          height={320}
          alt={`${title} image`}
          unoptimized
          priority={true}
        />
      </div>
      <div className="my-2 px-6">
        <h3 className="relative mb-2 block w-max text-lg font-bold">
          <Link
            href={`/blog/${currentSlug}`}
            className="group inline-block hover:text-zinc-950 dark:text-zinc-200 dark:hover:text-zinc-50"
          >
            {title}
            <span className="absolute bottom-0 left-0 h-0.5 w-full origin-bottom-right scale-x-0 transform bg-gradient-to-r from-emerald-200 to-cyan-400 transition-transform duration-300 group-hover:origin-bottom-left group-hover:scale-x-100"></span>
          </Link>
        </h3>
        <p className="line-clamp-3 text-justify">{smallDescription}</p>
      </div>
    </section>
  );
}