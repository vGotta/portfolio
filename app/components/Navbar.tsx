/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";
import { SITE } from "@/lib/constants";

export default function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Nécessaire pour éviter une erreur d'hydratation SSR
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && open) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [open]);

  const toggleDark = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <nav className="navbar">
      <a href="/#home" className="navbar-logo-link">
        <Image
          src={
            mounted && resolvedTheme === "dark"
              ? "/icons/logo-icon-dark-svg.svg"
              : "/icons/logo-icon-light-svg.svg"
          }
          alt={SITE.name}
          width={40}
          height={40}
          priority
        />
      </a>

      {/* Desktop */}
      <div className="nav-links desktop">
        <a href="#about">À propos</a>
        <a href="#stack">Stack</a>
        <a href="#services">Services</a>
        <a href="#projects">Projets</a>
        <a href="#contact">Contact</a>
        <button
          onClick={toggleDark}
          className="theme-btn"
          aria-label="Changer le thème"
        >
          {/* On attend le montage pour afficher l'icône correcte */}
          {mounted ? theme === "dark" ? <FiSun /> : <FiMoon /> : <FiMoon />}
        </button>
      </div>

      {/* Burger */}
      <button
        className="burger"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
      >
        {open ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <a href="#about" onClick={() => setOpen(false)}>
          À propos
        </a>
        <a href="#stack" onClick={() => setOpen(false)}>
          Stack
        </a>
        <a href="#services" onClick={() => setOpen(false)}>
          Services
        </a>
        <a href="#projects" onClick={() => setOpen(false)}>
          Projets
        </a>
        <a href="#contact" onClick={() => setOpen(false)}>
          Contact
        </a>
        <button
          onClick={toggleDark}
          className="theme-btn"
          aria-label="Changer le thème"
        >
          {mounted ? theme === "dark" ? <FiSun /> : <FiMoon /> : <FiMoon />}
        </button>
      </div>
    </nav>
  );
}
