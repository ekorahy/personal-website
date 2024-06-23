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
    <section className="rounded-md border border-zinc-200 p-4 dark:border-zinc-800">
      <Image
        className="w-full"
        src={urlFor(titleImage).url()}
        width={100}
        height={100}
        alt={`${title} image`}
        unoptimized
        priority={true}
      />
      <div className="my-2">
        <h3 className="w-max mb-2 relative block text-lg font-bold">
          <Link
            href={`/blog/${currentSlug}`}
            className="group inline-block hover:text-zinc-950 dark:hover:text-white"
          >
            {title}
            <span className="absolute bottom-0 left-0 h-0.5 w-full origin-bottom-right scale-x-0 transform bg-gradient-to-r from-emerald-200 to-cyan-400 transition-transform duration-300 group-hover:origin-bottom-left group-hover:scale-x-100"></span>
          </Link>
        </h3>
        <p className="line-clamp-3">{smallDescription}</p>
      </div>
    </section>
  );
}
