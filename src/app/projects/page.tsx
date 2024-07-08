import ContentSection from "@/components/molecules/ContentSection";
import HeaderPage from "@/components/molecules/HeaderPage";
import ProjectList from "@/components/molecules/ProjectList";
import { Metadata } from "next";
import Link from "next/link";
import { MdFileDownload } from "react-icons/md";

export const metadata: Metadata = {
  title: "Projects",
};

export default function Page() {
  return (
    <article>
      <HeaderPage title="Projects" description="Showcasing my works." />
      <ContentSection>
        <div className="flex justify-end mb-4">
          <Link
            href="/docs/Portfolio.pdf"
            download
            className="group relative flex items-center gap-1 w-max"
          >
            <MdFileDownload className="text-xl group-hover:text-zinc-950 dark:group-hover:text-white" />
            <span className="group-hover:text-zinc-950 dark:text-zinc-400 dark:group-hover:text-white">
              Download Portfolio
            </span>
            <span className="absolute bottom-0 left-0 h-0.5 w-full origin-bottom-right scale-x-0 transform bg-gradient-to-r from-emerald-200 to-cyan-400 transition-transform duration-300 group-hover:origin-bottom-left group-hover:scale-x-100"></span>
          </Link>
        </div>
        <ProjectList />
      </ContentSection>
    </article>
  );
}
