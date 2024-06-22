import Link from "next/link";

export default function NavFooterItem({
  name,
  link,
}: {
  name: string;
  link: string;
}) {
  return (
    <Link className="hover:text-slate-950 dark:hover:text-white" href={link}>
      {name}
    </Link>
  );
}
