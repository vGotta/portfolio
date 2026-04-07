export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  context: string;
  tech: string[];
  features: string[];
  img: string;
  images: string[];
  github?: string;
  site?: string;
  type: string;
  year: string;
};

export const projects: Project[] = [
  {
    slug: "coiffure",
    title: "Hair Lounge",
    tagline: "Site vitrine moderne pour une coiffeuse indépendante",
    description:
      "Conception et développement complet d'un site vitrine pour une cliente réelle. L'objectif : une présence en ligne professionnelle qui reflète son univers et convertit les visiteurs en rendez-vous.",
    context:
      "Projet client réel, actuellement en production. La coiffeuse avait besoin d'un site qui lui ressemble, facile à trouver sur Google et qui permette à ses clients de la contacter directement.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Présentation des prestations et tarifs",
      "Galerie photos des réalisations",
      "Formulaire de contact intégré",
      "Prise de rendez-vous en ligne",
      "Design responsive mobile-first",
      "SEO optimisé pour référencement local",
    ],
    img: "/projects/coiffure/coiffure.jpg",
    images: [
      "/projects/coiffure/coiffure.jpg",
      "/projects/coiffure/coiffure-services.jpg",
      "/projects/coiffure/coiffure-galerie.jpg",
      "/projects/coiffure/coiffure-contact.jpg",
    ],
    github: "https://github.com/vGotta/hair-lounge",
    type: "Site vitrine",
    year: "2026",
  },
  {
    slug: "ecommerce",
    title: "Luxurious Palace",
    tagline: "Plateforme e-commerce complète — secteur luxe",
    description:
      "Plateforme e-commerce full-stack développée dans le cadre de mon diplôme de développeur web. Projet ambitieux couvrant l'intégralité du cycle d'achat, de la navigation produit au suivi de commande — entièrement construit avec Symfony et PHP.",
    context:
      "Projet de diplôme conçu pour démontrer la maîtrise d'une stack full-stack complète. Chaque fonctionnalité a été implémentée de A à Z : du front-end Twig/Bootstrap au back-end Symfony, en passant par la containerisation Docker et l'intégration des paiements Stripe et PayPal.",
    tech: [
      "PHP",
      "Docker",
      "Symfony",
      "Twig",
      "Bootstrap",
      "MySQL",
      "Stripe",
      "PayPal SDK",
    ],
    features: [
      "Authentification JWT complète",
      "Gestion du profil & adresses de livraison",
      "Catalogue avec filtres et recherche",
      "Panier d'achat persistant",
      "Double paiement Stripe & PayPal",
      "Suivi de commande en temps réel",
      "Notifications email automatiques",
      "Interface d'administration complète",
      "Gestion des promotions & codes promo",
      "Support client intégré",
    ],
    img: "/projects/ecommerce/ecommerce.png",
    images: [
      "/projects/ecommerce/ecommerce.png",
      "/projects/ecommerce/ecommerce-produit-detail.png",
      "/projects/ecommerce/ecommerce-creation-commande.png",
      "/projects/ecommerce/ecommerce-catalogue.png",
      "/projects/ecommerce/ecommerce-panier.png",
    ],
    github: "https://github.com/vGotta/Luxurious-Palace",
    type: "E-commerce",
    year: "2022",
  },
  {
  slug: "delapierreaulogis",
  title: "DeLaPierrEauLogis",
  tagline: "Site vitrine BTP pour un artisan maçon spécialisé",
  description:
    "Conception et développement complet d'un site vitrine pour mon frère, artisan maçon polyvalent. L'objectif : une présence en ligne professionnelle qui met en valeur ses 5 domaines d'expertise et génère des demandes de devis.",
  context:
    "Projet client réel, actuellement en production. L'entreprise intervenait sans présence web. Le site devait refléter la diversité des compétences — de la maçonnerie traditionnelle aux installations agroalimentaires — et permettre aux prospects de soumettre une demande de devis directement en ligne.",
  tech: ["Next.js", "TypeScript", "CSS Modules", "Resend", "Vercel"],
  features: [
    "5 pages de services avec contenu détaillé",
    "Galerie de réalisations avec filtres par catégorie",
    "Formulaire de devis structuré avec validation",
    "Envoi d'emails via Resend (contact@delapierreaulogis.fr)",
    "Nom de domaine custom OVH + SSL automatique",
    "Design responsive mobile-first",
    "SEO optimisé par page",
    "Architecture Next.js App Router",
  ],
  img: "/projects/delapierreaulogis/delapierreaulogis.png",
  images: [
    "/projects/delapierreaulogis/delapierreaulogis.png",
    "/projects/delapierreaulogis/delapierreaulogis-services.png",
    "/projects/delapierreaulogis/delapierreaulogis-realisations.png",
    "/projects/delapierreaulogis/delapierreaulogis-devis.png",
  ],
  site: "https://delapierreaulogis.fr",
  type: "Site vitrine",
  year: "2026",
  },
];
