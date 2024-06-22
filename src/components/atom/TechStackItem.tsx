export default function TechStackItem({
  name,
  logo,
  color,
}: {
  name: string;
  logo: React.ReactNode;
  color: string;
}) {
  return (
    <div className="text-3xl" style={{ color: color }}>
      {logo}
    </div>
  );
}
