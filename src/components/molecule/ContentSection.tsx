export default function ContentSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-zinc-200 py-8 pb-6 dark:border-zinc-800">
      {children}
    </section>
  );
}
