import ContentSection from "@/components/molecules/ContentSection";
import HeaderPage from "@/components/molecules/HeaderPage";
import ProjectList from "@/components/molecules/ProjectList";
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
