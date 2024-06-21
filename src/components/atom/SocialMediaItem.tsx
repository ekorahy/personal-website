import Link from "next/link";

export default function SocialMediaItem({
  title,
  logo,
  color,
  link,
}: {
  title: string;
  logo: React.ReactNode;
  color: string | string[];
  link: string;
}) {
  const linkStyle = {
    background: Array.isArray(color)
      ? `linear-gradient(45deg, ${color.join(",")})`
      : color,
  };

  return (
    <Link
      href={link}
      className="flex w-full justify-center items-center gap-2 rounded-md px-3 py-2 text-white sm:w-max"
      style={linkStyle}
    >
      {logo} {title}
    </Link>
  );
}
