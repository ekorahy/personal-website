import Link from "next/link";
import React from "react";

export default function NavItem({
  name,
  icon,
  linkTo,
  category,
}: {
  name: string;
  icon: React.ReactNode;
  linkTo: string;
  category: "navbar" | "navside";
}) {
  return (
    <Link href={linkTo} className="flex items-center gap-2">
      <div className="w-max rounded-full bg-slate-950 p-1.5 text-2xl text-slate-100">
        <span className="">{icon}</span>
      </div>
      <span>{category === "navside" && name}</span>
    </Link>
  );
}
