"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Une erreur est survenue.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setErrorMsg("Impossible de contacter le serveur.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <motion.div
        className="contact-inner"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* En-tête */}
        <div className="contact-header">
          <span className="hero-eyebrow">Contact</span>
          <h2 className="section-heading">Parlons de votre projet</h2>
          <p className="section-sub">
            Une idée, un projet, une question ? Écrivez-moi, je réponds sous
            24h.
          </p>
        </div>

        <div className="contact-layout">
          {/* Infos à gauche */}
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-icon">@</div>
              <div>
                <p className="contact-info-label">Email</p>
                <p className="contact-info-value">{SITE.email}</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon">✓</div>
              <div>
                <p className="contact-info-label">Disponibilité</p>
                <p className="contact-info-value">
                  {SITE.available ? "Disponible pour nouveaux projets" : "Complet pour le moment"}
                </p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon">24h</div>
              <div>
                <p className="contact-info-label">Délai de réponse</p>
                <p className="contact-info-value">Sous 24h en semaine</p>
              </div>
            </div>
          </div>

          {/* Formulaire à droite */}
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="name">
                  Nom *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-input"
                  placeholder="Jean Dupont"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="jean@exemple.fr"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="subject">
                Sujet
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="form-input"
                placeholder="Création d'un site vitrine…"
                value={form.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                className="form-input form-textarea"
                placeholder="Décrivez votre projet, vos besoins, votre budget…"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
              />
            </div>

            {/* Feedback erreur */}
            {status === "error" && (
              <motion.p
                className="form-error"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {errorMsg}
              </motion.p>
            )}

            {/* Feedback succès */}
            {status === "success" && (
              <motion.div
                className="form-success"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Message envoyé ! Je vous réponds sous 24h.
              </motion.div>
            )}

            <button
              type="submit"
              className="btn-primary"
              disabled={status === "loading"}
              style={{ width: "100%", justifyContent: "center" }}
            >
              {status === "loading"
                ? "Envoi en cours…"
                : "Envoyer le message →"}
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
