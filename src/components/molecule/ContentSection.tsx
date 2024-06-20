export default function ContentSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="border-b py-8">{children}</section>;
}
