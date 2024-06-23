import { TechStack } from "@/types/projects";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import TechStackList from "../molecule/TechStackList";

export default function ProjectItem({
  name,
  image,
  description,
  linkDemo,
  techStack,
}: {
  name: string;
  image: string;
  description: string;
  linkDemo: string;
  techStack: TechStack[];
}) {
  return (
    <section className="rounded-md border border-zinc-200 p-6 pb-6 dark:border-zinc-800">
      <Image
        className="mb-4 w-full"
        src={image}
        width={100}
        height={100}
        alt={`${name} imaage`}
        priority={true}
        unoptimized
      />
      <div className="mb-4">
        <h3 className="mb-2 w-max text-lg font-bold">
          <Link
            href={linkDemo}
            className="group relative flex items-center gap-1 hover:text-zinc-950 dark:hover:text-white"
          >
            {name}
            <GoArrowUpRight className="text-xl" />
            <span className="absolute bottom-0 left-0 h-0.5 w-full origin-bottom-right scale-x-0 transform bg-gradient-to-r from-emerald-200 to-cyan-400 transition-transform duration-300 group-hover:origin-bottom-left group-hover:scale-x-100"></span>
          </Link>
        </h3>
        <p>{description}</p>
      </div>
      <TechStackList techStack={techStack} />
    </section>
  );
}
