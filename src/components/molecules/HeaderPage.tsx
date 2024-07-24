"use client";

import { HeaderPageProps } from "@/types";
import { motion } from "framer-motion";
import clsx from "clsx";
import TitlePage from "../atoms/TitlePage";
import DescriptionPage from "../atoms/DescriptionPage";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";

export default function HeaderPage({
  title,
  description,
  backButton = false,
}: HeaderPageProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className={clsx(
        "border-b border-dashed border-zinc-200 pb-6 dark:border-zinc-800",
        {
          "flex items-center gap-4": backButton,
        },
      )}
    >
      {backButton && (
        <Link href="/blog">
          <IoMdArrowBack className="text-xl" />
        </Link>
      )}
      <div>
        <TitlePage title={title} />
        {description && <DescriptionPage description={description} />}
      </div>
    </motion.header>
  );
}
