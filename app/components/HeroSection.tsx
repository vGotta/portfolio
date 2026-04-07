"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="hero">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="hero-eyebrow">Développeur Full-Stack</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Je construis des sites<br />qui convertissent
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Sites modernes, performants et optimisés —
        conçus pour transformer vos visiteurs en clients.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="hero-buttons"
      >
        <a href="#projects" className="btn-primary">Voir mes projets</a>
        <a href="#contact" className="btn-secondary">Me contacter</a>
      </motion.div>
    </section>
  );
}