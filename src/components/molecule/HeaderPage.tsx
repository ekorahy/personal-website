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
    <header className="border-b border-dashed border-zinc-200 pb-6 dark:border-zinc-800">
      <TitlePage title={title} />
      <DescriptionPage description={description} />
    </header>
  );
}
