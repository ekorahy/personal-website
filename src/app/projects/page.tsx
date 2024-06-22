import ContentSection from "@/components/molecule/ContentSection";
import HeaderPage from "@/components/molecule/HeaderPage";
import ProjectList from "@/components/molecule/ProjectList";

export default function Page() {
  return (
    <article>
      <HeaderPage
        title="Projects"
        description="Showcase my works on front-end development."
      />
      <ContentSection>
        <ProjectList />
      </ContentSection>
    </article>
  );
}
