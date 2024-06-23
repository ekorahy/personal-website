import ContentSection from "@/components/molecule/ContentSection";
import HeaderPage from "@/components/molecule/HeaderPage";
import NotFoundTemplate from "@/components/molecule/NotFoundTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <article>
      <HeaderPage title="Error" description="Page not found" />
      <ContentSection>
        <NotFoundTemplate />
      </ContentSection>
    </article>
  );
}
