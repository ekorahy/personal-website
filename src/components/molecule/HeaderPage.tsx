import DescriptionPage from "../atom/DescriptionPage";
import TitlePage from "../atom/TitlePage";

export default function HeaderPage({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <header className="border-b border-dashed pb-6">
      <TitlePage title={title} />
      <DescriptionPage description={description} />
    </header>
  );
}
