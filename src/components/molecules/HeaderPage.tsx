"use client";

import { HeaderPageProps } from "@/types";
import { motion } from "framer-motion";
import TitlePage from "../atoms/TitlePage";
import DescriptionPage from "../atoms/DescriptionPage";

export default function HeaderPage({ title, description }: HeaderPageProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="border-b border-dashed border-zinc-200 pb-6 dark:border-zinc-800"
    >
      <TitlePage title={title} />
      {description && <DescriptionPage description={description} />}
    </motion.header>
  );
}
