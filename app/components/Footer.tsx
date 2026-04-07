import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SITE } from "@/lib/constants";

const links = [
  { label: "Projets", href: "#projects" },
  { label: "À propos", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "GitHub", href: SITE.github, icon: FiGithub },
  { label: "LinkedIn", href: SITE.linkedin, icon: FiLinkedin },
  { label: "Email", href: `mailto:${SITE.email}`, icon: FiMail },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Colonne gauche — identité */}
        <div className="footer-brand">
          <span className="footer-logo">{SITE.name}</span>
          <p className="footer-tagline">
            Développeur Full-Stack freelance.
            <br />
            {SITE.tagline}
          </p>
          <div className="footer-socials">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="footer-social-btn"
                aria-label={label}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Colonne droite — navigation */}
        <div className="footer-nav">
          <p className="footer-nav-title">Navigation</p>
          <ul className="footer-nav-list">
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="footer-nav-link">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bas de page */}
      <div className="footer-bottom">
        <p className="footer-copy">
          © {year} {SITE.name} — Tous droits réservés
        </p>
        <p className="footer-made">Fait avec Next.js & TypeScript</p>
      </div>
    </footer>
  );
}
