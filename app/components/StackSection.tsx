"use client";

import { motion } from "framer-motion";

type Skill = {
  name: string;
  level: "expert" | "avancé" | "intermédiaire";
};

type Category = {
  title: string;
  icon: string;
  skills: Skill[];
};

const categories: Category[] = [
  {
    title: "Front-end",
    icon: "🖥",
    skills: [
      { name: "JavaScript", level: "avancé" },
      { name: "TypeScript", level: "avancé" },
      { name: "React / Next.js", level: "avancé" },
      { name: "Vue.js", level: "intermédiaire" },
      { name: "jQuery", level: "avancé" },
      { name: "Tailwind CSS", level: "avancé" },
    ],
  },
  {
    title: "Back-end",
    icon: "⚙",
    skills: [
      { name: "Node.js", level: "avancé" },
      { name: "PHP", level: "avancé" },
      { name: "Laravel", level: "intermédiaire" },
      { name: "MySQL / phpMyAdmin", level: "avancé" },
      { name: "API REST", level: "avancé" },
      { name: "Sécurité XSS", level: "avancé" },
    ],
  },
  {
    title: "Outils & DevOps",
    icon: "🔧",
    skills: [
      { name: "Git / GitLab", level: "avancé" },
      { name: "Docker", level: "intermédiaire" },
      { name: "Linux / Ubuntu", level: "intermédiaire" },
      { name: "Postman", level: "avancé" },
      { name: "Figma", level: "intermédiaire" },
      { name: "VirtualBox", level: "intermédiaire" },
    ],
  },
  {
    title: "Intégrations & No-code",
    icon: "🔗",
    skills: [
      { name: "Zapier", level: "avancé" },
      { name: "Make (Integromat)", level: "avancé" },
      { name: "Zoho CRM", level: "avancé" },
      { name: "HubSpot", level: "intermédiaire" },
      { name: "CMS divers", level: "avancé" },
      { name: "ngrok / tunnels", level: "intermédiaire" },
    ],
  },
];

const levelConfig = {
  expert:         { label: "Expert",         width: "100%", color: "var(--accent)" },
  avancé:         { label: "Avancé",         width: "75%",  color: "var(--accent)" },
  intermédiaire:  { label: "Intermédiaire",  width: "50%",  color: "var(--accent)" },
};

const experience = [
  {
    what: "3 ans en entreprise",
    detail: "Maintenance, nouvelles features et intégrations sur des produits SaaS en production réelle",
  },
  {
    what: "Sécurité web",
    detail: "Blocage de failles XSS, gestion des accès, vérification d'accessibilité",
  },
  {
    what: "Relation client & doc",
    detail: "CR, études de marché, support client, rédaction technique et traduction EN",
  },
];

export default function StackSection() {
  return (
    <section id="stack" className="stack-section">

      <motion.div
        className="stack-header"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="hero-eyebrow">Stack & compétences</span>
        <h2 className="section-heading">
          Des outils maîtrisés en conditions réelles
        </h2>
        <p className="section-sub">
          3 ans d&apos;expérience en entreprise sur des projets en production —
          pas seulement des projets d&apos;école.
        </p>
      </motion.div>

      {/* Grille des catégories */}
      <div className="stack-grid">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            className="stack-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: ci * 0.08 }}
            viewport={{ once: true }}
          >
            <div className="stack-card-header">
              <span className="stack-icon">{cat.icon}</span>
              <h3 className="stack-card-title">{cat.title}</h3>
            </div>

            <div className="stack-skills">
              {cat.skills.map((skill) => {
                const cfg = levelConfig[skill.level];
                return (
                  <div key={skill.name} className="skill-row">
                    <div className="skill-top">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{cfg.label}</span>
                    </div>
                    <div className="skill-bar-bg">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: cfg.width }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bande expérience pro */}
      <motion.div
        className="stack-xp"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p className="stack-xp-label">Ce que j&apos;ai fait en vrai</p>
        <div className="stack-xp-grid">
          {experience.map((e) => (
            <div key={e.what} className="xp-item">
              <span className="xp-dot" />
              <div>
                <p className="xp-what">{e.what}</p>
                <p className="xp-detail">{e.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}