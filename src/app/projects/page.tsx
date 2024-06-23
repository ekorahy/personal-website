import ContentSection from "@/components/molecule/ContentSection";
import HeaderPage from "@/components/molecule/HeaderPage";
import ProjectList from "@/components/molecule/ProjectList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

export default function Page() {
  return (
    <article>
      <HeaderPage title="Projects" description="Showcasing my works." />
      <ContentSection>
        <ProjectList />
      </ContentSection>
    </article>
  );
}
