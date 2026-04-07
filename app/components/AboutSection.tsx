"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";

const stats = [
  { value: "2", label: "Projets construits" },
  { value: "3+", label: "Ans d'expérience pro" },
  { value: "100%", label: "Investissement" },
];

const values = [
  {
    title: "Code propre",
    description:
      "J'écris du code maintenable, typé et documenté. Pas de dette technique cachée.",
  },
  {
    title: "Livraison rapide",
    description:
      "Je m'engage sur des délais réalistes et je les tiens. Votre temps a de la valeur.",
  },
  {
    title: "Communication claire",
    description:
      "Vous êtes informé à chaque étape. Pas de jargon, juste de la transparence.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-inner">
        {/* Colonne gauche — texte */}
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="hero-eyebrow">À propos</span>

          <h2 className="about-title">
            Développeur passionné,
            <br />
            freelance sérieux
          </h2>

          <p className="about-body">
            Je m&apos;appelle <strong>{SITE.name}</strong>, développeur web full-stack basé en
            France. Après ma formation en développement web, j&apos;ai décidé de me
            lancer en freelance pour aider les indépendants et petites
            entreprises à avoir une présence en ligne à la hauteur de leur
            ambition.
          </p>

          <p className="about-body">
            Je construis des applications web modernes avec{" "}
            <strong>Next.js</strong>, <strong>TypeScript</strong> et{" "}
            <strong>Node.js</strong> — des outils choisis pour leur fiabilité et
            leur performance, pas pour suivre les tendances.
          </p>

          {/* Stats */}
          <div className="about-stats">
            {stats.map((s) => (
              <div key={s.label} className="about-stat">
                <span className="about-stat-value">{s.value}</span>
                <span className="about-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Colonne droite — valeurs */}
        <motion.div
          className="about-values"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              className="value-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="value-icon">
                {i === 0 ? "⌨" : i === 1 ? "⚡" : "💬"}
              </div>
              <div>
                <h3 className="value-title">{v.title}</h3>
                <p className="value-desc">{v.description}</p>
              </div>
            </motion.div>
          ))}

          {/* CTA */}
          <a
            href="#contact"
            className="btn-primary"
            style={{ marginTop: "0.5rem", alignSelf: "flex-start" }}
          >
            Travaillons ensemble →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
