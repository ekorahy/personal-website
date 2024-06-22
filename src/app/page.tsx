import { TechList } from "@/components/molecule/TechList";
import TitleSection from "@/components/atom/TitleSection";
import CareerList from "@/components/molecule/CareerList";
import HeaderPage from "@/components/molecule/HeaderPage";
import Image from "next/image";
import Link from "next/link";
import { BiLogoGmail } from "react-icons/bi";
import { MdOutlineWorkHistory, MdFileDownload } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import ContentSection from "@/components/molecule/ContentSection";

export default function Home() {
  return (
    <article>
      <HeaderPage
        title="Home"
        description="Introduction and professional career journey."
      />
      <ContentSection>
        <div className="mb-2 flex gap-2 sm:hidden">
          <Image
            src="/profile.jpg"
            className="rounded-full"
            width={55}
            height={55}
            alt="Profil photo"
            unoptimized
            priority={true}
          />
          <div className="flex flex-col justify-center">
            <h3 className="font-bold">Eko Rahayu Widodo</h3>
            <p className="font-light">@ekorahy</p>
          </div>
        </div>
        <p className="mb-2 text-xl font-bold text-slate-950 dark:text-white">
          Hi, I&apos;m Eko{" "}
          <span className="inline-block animate-wave text-3xl">👋</span>
        </p>
        <ul className="mx-4 mb-2 list-disc">
          <li>Front-end Engineer.</li>
          <li>Tech Enthusiast.</li>
          <li>Lifelong Learner.</li>
        </ul>
        <p className="mb-4">
          Working within the React ecosystem for front-end web development and
          Kotlin for mobile app development (Android).
        </p>
        <q className="block w-full rounded-md bg-slate-50 px-4 py-2 italic dark:bg-slate-950">
          Manifesting ideas into digital reality that are easily accessible and
          inclusive for user.
        </q>
        <div className="my-4 flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gradient-to-r from-lime-200 to-cyan-400 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-gradient-to-r from-lime-200 to-cyan-400"></span>
          </span>
          <p className="bg-gradient-to-r from-lime-200 to-cyan-400 bg-clip-text text-transparent">
            Available for opportunities.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-md bg-gradient-to-r from-lime-200 to-cyan-400 px-4 py-3 text-white hover:from-lime-300 hover:to-cyan-500 dark:text-slate-950"
          >
            <BiLogoGmail className="text-xl" />
            Email Me
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-slate-950 dark:hover:text-white"
          >
            <MdFileDownload className="text-xl" />
            Download CV
          </Link>
        </div>
      </ContentSection>
      <ContentSection>
        <TitleSection title="Career" icon={<MdOutlineWorkHistory />} />
        <CareerList />
      </ContentSection>
      <ContentSection>
        <TitleSection title="Tech Stack" icon={<FaCode />} />
        <TechList />
        <TechList direction="right" />
      </ContentSection>
    </article>
  );
}
