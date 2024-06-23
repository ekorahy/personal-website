"use client";

import DescriptionPage from "../atom/DescriptionPage";
import TitlePage from "../atom/TitlePage";
import { motion } from "framer-motion";

export default function HeaderPage({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="border-b border-dashed border-zinc-200 pb-6 dark:border-zinc-800"
    >
      <TitlePage title={title} />
      <DescriptionPage description={description} />
    </motion.header>
  );
}
