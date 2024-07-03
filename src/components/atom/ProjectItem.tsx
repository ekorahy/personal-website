import { TechStack } from "@/types/projects";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import TechStackList from "../molecule/TechStackList";

export default function ProjectItem({
  name,
  category,
  image,
  description,
  linkDemo,
  techStack,
}: {
  name: string;
  category: string;
  image: string;
  description: string;
  linkDemo: string;
  techStack: TechStack[];
}) {
  return (
    <section className="overflow-hidden rounded-md border border-zinc-200 pb-6 dark:border-zinc-800">
      <div className="relative h-full pb-8">
        <div className="relative overflow-hidden mb-4">
          <Image
            className="w-full transform transition-transform duration-300 hover:scale-125"
            src={image}
            width={100}
            height={100}
            alt={`${name} image`}
            priority={true}
            unoptimized
          />
        </div>
        <div className="mb-4 px-6">
          <h3 className="mb-1 w-max text-lg font-bold">
            <Link
              href={linkDemo}
              className="group relative flex items-center gap-1 hover:text-zinc-950 dark:hover:text-white"
            >
              {name}
              <GoArrowUpRight className="text-xl" />
              <span className="absolute bottom-0 left-0 h-0.5 w-full origin-bottom-right scale-x-0 transform bg-gradient-to-r from-emerald-200 to-cyan-400 transition-transform duration-300 group-hover:origin-bottom-left group-hover:scale-x-100"></span>
            </Link>
          </h3>
          <p className="mb-2 bg-gradient-to-r from-emerald-200 to-cyan-400 bg-clip-text text-transparent dark:from-emerald-300 dark:to-cyan-500">
            {category}
          </p>
          <p className="text-justify">{description}</p>
        </div>
        <TechStackList techStack={techStack} />
      </div>
    </section>
  );
}
