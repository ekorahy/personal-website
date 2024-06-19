import Link from "next/link";
import React from "react";

export default function NavItem({
  name,
  icon,
  linkTo,
}: {
  name: string;
  icon: React.ReactNode;
  linkTo: string;
}) {
  return (
    <Link
      href={linkTo}
      className="rounded-full bg-slate-950 p-1.5 text-2xl text-slate-100"
    >
      {icon}
    </Link>
  );
}
