import { NavFooterItemProps } from "@/types";
import Link from "next/link";

export default function NavFooterItem({ name, link }: NavFooterItemProps) {
  return (
    <Link href={link} className="group relative inline-block">
      <span className="group-hover:text-zinc-950 dark:group-hover:text-white">
        {name}
      </span>
      <span className="absolute bottom-0 left-0 h-0.5 w-full origin-bottom-right scale-x-0 transform bg-gradient-to-r from-emerald-200 to-cyan-400 transition-transform duration-300 group-hover:origin-bottom-left group-hover:scale-x-100"></span>
    </Link>
  );
}
