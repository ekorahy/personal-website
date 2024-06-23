export default function TitleSection({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) {
  return (
    <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-950 dark:text-white">
      <span className="text-2xl">{icon}</span>
      {title}
    </h3>
  );
}
