"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiGithub, FiExternalLink } from "react-icons/fi";
import { useState } from "react";
import type { Project } from "@/lib/projects";


export default function ProjectPageClient({ project }: { project: Project }) {
  const [lightbox, setLightbox] = useState<string | null>(null);
  return (
    <div className="project-page">
      {/* Bouton retour */}
      <div className="project-back-wrap">
        <Link href="/#projects" className="project-back">
          <FiArrowLeft size={16} />
          Retour aux projets
        </Link>
      </div>

      {/* Header */}
      <motion.div
        className="project-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="project-meta">
          <span className="project-type">{project.type}</span>
          <span className="project-year">{project.year}</span>
        </div>
        <h1 className="project-title">{project.title}</h1>
        <p className="project-tagline">{project.tagline}</p>

        <div className="project-actions">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <FiGithub size={16} />
              Voir le code
            </a>
          )}
          {project.site && (
            <a
              href={project.site}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <FiExternalLink size={16} />
              Voir le site web
            </a>
          )}
        </div>
      </motion.div>

      {/* Image principale */}
      <motion.div
        className="project-hero-img"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Image
          src={project.img}
          alt={project.title}
          width={1200}
          height={675}
          className="project-main-img"
          priority
        />
      </motion.div>

      {/* Galerie images */}
      {project.images && project.images.length > 1 && (
        <>
          <div className="project-gallery">
            {project.images.slice(1).map((img, i) => (
              <motion.div
                key={i}
                className="project-gallery-img"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                onClick={() => setLightbox(img)}
              >
                <Image
                  src={img}
                  alt={`${project.title} — capture ${i + 2}`}
                  width={800}
                  height={500}
                  className="gallery-img"
                  loading={i === 0 ? "eager" : "lazy"}
                />
                <div className="gallery-overlay">
                  <span className="gallery-zoom">⊕</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Lightbox */}
          {lightbox && (
            <motion.div
              className="lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setLightbox(null)}
            >
              <button
                className="lightbox-close"
                onClick={() => setLightbox(null)}
              >
                ✕
              </button>
              <div
                className="lightbox-img-wrap"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={lightbox}
                  alt="Aperçu"
                  width={1400}
                  height={900}
                  className="lightbox-img"
                />
              </div>
            </motion.div>
          )}
        </>
      )}

      {/* Contenu */}
      <div className="project-content">
        {/* Colonne principale */}
        <motion.div
          className="project-main"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="project-section">
            <h2 className="project-section-title">Le projet</h2>
            <p className="project-section-text">{project.description}</p>
          </div>

          <div className="project-section">
            <h2 className="project-section-title">Contexte</h2>
            <p className="project-section-text">{project.context}</p>
          </div>

          <div className="project-section">
            <h2 className="project-section-title">Fonctionnalités</h2>
            <ul className="project-features">
              {project.features.map((f) => (
                <li key={f} className="project-feature">
                  <span className="project-feature-check">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Sidebar */}
        <motion.aside
          className="project-sidebar"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="sidebar-card">
            <h3 className="sidebar-title">Stack technique</h3>
            <div className="sidebar-tech">
              {project.tech.map((t) => (
                <span key={t} className="badge">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="sidebar-card">
            <h3 className="sidebar-title">Détails</h3>
            <div className="sidebar-details">
              <div className="sidebar-detail-row">
                <span className="sidebar-detail-label">Type</span>
                <span className="sidebar-detail-value">{project.type}</span>
              </div>
              <div className="sidebar-detail-row">
                <span className="sidebar-detail-label">Année</span>
                <span className="sidebar-detail-value">{project.year}</span>
              </div>
              <div className="sidebar-detail-row">
                <span className="sidebar-detail-label">Statut</span>
                <span className="sidebar-detail-value sidebar-status">
                  {project.site ? "En ligne" : "En développement"}
                </span>
              </div>
            </div>
          </div>

          <a
            href="#contact"
            className="btn-primary"
            style={{ width: "100%", justifyContent: "center" }}
          >
            Projet similaire ? Contactez-moi →
          </a>
        </motion.aside>
      </div>
    </div>
  );
}
