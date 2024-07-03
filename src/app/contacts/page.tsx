import TitleSection from "@/components/atom/TitleSection";
import ContentSection from "@/components/molecule/ContentSection";
import HeaderPage from "@/components/molecule/HeaderPage";
import SocialMediaList from "@/components/molecule/SocialMediaList";
import { BiNetworkChart } from "react-icons/bi";
import { BiLogoGmail } from "react-icons/bi";
import { Metadata } from "next";
import EmailInput from "@/components/molecule/EmailInput";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Page() {
  return (
    <article>
      <HeaderPage title="Contact" description="Reach out to me." />
      <ContentSection>
        <TitleSection title="Find me on" icon={<BiNetworkChart />} />
        <SocialMediaList />
      </ContentSection>
      <ContentSection>
        <TitleSection title="Or send me an email" icon={<BiLogoGmail />} />
        <EmailInput />
      </ContentSection>
    </article>
  );
}
