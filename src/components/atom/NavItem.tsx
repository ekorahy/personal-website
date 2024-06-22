"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  return (
    <Link
      href={linkTo}
      className={clsx(
        "font-bold flex items-center gap-2 text-slate-950 dark:text-white sm:rounded-md sm:px-5 sm:py-2 sm:hover:bg-slate-200 dark:sm:hover:bg-slate-950",
        {
          "sm:bg-gradient-to-r sm:from-lime-200 sm:to-cyan-400":
            pathname === linkTo,
        },
      )}
    >
      <div
        className={clsx(
          "sm:hover:bg-transparant w-max rounded-full bg-slate-950 p-1.5 text-2xl text-white hover:bg-slate-100 hover:text-slate-950 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-950 dark:hover:text-white sm:bg-transparent sm:text-slate-950 sm:hover:bg-transparent dark:sm:bg-transparent dark:sm:text-white",
          {
            "bg-gradient-to-r from-lime-200 to-cyan-400 sm:bg-none":
              pathname === linkTo,
          },
        )}
      >
        <span>{icon}</span>
      </div>
      <span>{category === "navside" && name}</span>
    </Link>
  );
}
