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
    <section className="rounded-md p-6 shadow-md dark:shadow-white">
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
        <h3 className="mb-2 text-lg font-bold hover:text-slate-950 dark:hover:text-white">
          <Link href={linkDemo} className="flex items-center gap-1">
            {name}
            <GoArrowUpRight className="text-xl" />
          </Link>
        </h3>
        <p>{description}</p>
      </div>
      <TechStackList techStack={techStack} />
    </section>
  );
}
