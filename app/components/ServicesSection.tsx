"use client";

import { motion } from "framer-motion";

type Service = {
  icon: string;
  title: string;
  description: string;
  features: string[];
};

const services: Service[] = [
  {
    icon: "◻",
    title: "Site vitrine",
    description:
      "Un site rapide, moderne et optimisé pour convertir vos visiteurs en clients. Parfait pour les indépendants et PME.",
    features: [
      "Design sur mesure",
      "100% responsive",
      "SEO optimisé",
      "Score Lighthouse 90+",
    ],
  },
  {
    icon: "◈",
    title: "E-commerce",
    description:
      "Une boutique en ligne complète avec gestion des produits, panier et paiement sécurisé.",
    features: [
      "Catalogue produits",
      "Paiement sécurisé",
      "Gestion des commandes",
      "Interface d'administration",
    ],
  },
  {
    icon: "⬡",
    title: "Application web",
    description:
      "Des outils métier sur mesure pour automatiser vos processus et gagner en productivité.",
    features: [
      "Authentification",
      "Base de données",
      "API REST",
      "Tableau de bord",
    ],
  },
  {
    icon: "⟳",
    title: "Refonte & maintenance",
    description:
      "Votre site existant est lent ou vieillissant ? Je le modernise sans tout reconstruire from scratch.",
    features: [
      "Audit de performance",
      "Correction de bugs",
      "Mise à jour technique",
      "Amélioration UX",
    ],
  },
  {
    icon: "⬚",
    title: "Intégration Figma",
    description:
      "Vous avez une maquette Figma ? Je l'intègre pixel-perfect en code propre et maintenable.",
    features: [
      "Intégration fidèle",
      "Animations fluides",
      "Code TypeScript propre",
      "Responsive inclus",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <motion.div
        className="services-header"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="hero-eyebrow">Services</span>
        <h2 className="section-heading">Ce que je construis pour vous</h2>
        <p className="section-sub">
          Chaque projet est unique — je m&apos;adapte à vos besoins et
          votre budget. Devis gratuit sous 24h.
        </p>
      </motion.div>

      <div className="services-grid">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            className="service-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            viewport={{ once: true }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.description}</p>
            <ul className="service-features">
              {service.features.map((f) => (
                <li key={f} className="service-feature">
                  <span className="service-check">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <a href="#contact" className="service-cta">
              Demander un devis →
            </a>
          </motion.div>
        ))}

        {/* Carte CTA — toujours en dernier */}
        <motion.div
          className="service-card service-card-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: services.length * 0.07 }}
          viewport={{ once: true }}
        >
          <div className="service-icon">?</div>
          <h3 className="service-title">Autre besoin ?</h3>
          <p className="service-desc">
            Votre projet ne rentre dans aucune case ? Décrivez-moi ce
            dont vous avez besoin — on trouvera une solution ensemble.
          </p>
          <a href="#contact" className="btn-primary" style={{ marginTop: "auto" }}>
            Parlons-en →
          </a>
        </motion.div>
      </div>
    </section>
  );
}