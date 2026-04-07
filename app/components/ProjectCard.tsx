"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

export default function ProjectCard({
  slug,
  title,
  description,
  tech,
  img,
}: Project) {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="card-img-wrapper">
        <Image
          src={img}
          alt={title}
          width={600}
          height={400}
          className="card-img"
        />
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="card-tech">
          {tech.map((t) => (
            <span key={t} className="badge">{t}</span>
          ))}
        </div>
        <div className="card-links">
          <Link href={`/projects/${slug}`} className="card-detail-link">
            Voir le projet →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}