"use client";
import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";

export default function Loader() {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center"
      style={{ backgroundColor: "var(--bg)", zIndex: 9999 }}
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
          color: "var(--accent)",
          letterSpacing: "0.2em",
        }}
      >
        {SITE.initials}
      </motion.h1>
    </div>
  );
}