import Link from "next/link";

export default function NavFooterItem({
  name,
  link,
}: {
  name: string;
  link: string;
}) {
  return (
    <Link href={link} className="group relative inline-block">
      <span className="group-hover:text-zinc-950 dark:group-hover:text-white">
        {name}
      </span>
      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-emerald-200 to-cyan-400 scale-x-0 group-hover:scale-x-100 transform origin-bottom-right group-hover:origin-bottom-left transition-transform duration-300"></span>
    </Link>
  );
}
