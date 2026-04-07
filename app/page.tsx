import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import StackSection from "./components/StackSection";
import ProjectCard from "./components/ProjectCard";
import ContactSection from "./components/ContactSection";
import ServicesSection from "./components/ServicesSection";
import Footer from "./components/Footer";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <>
      <main className="container">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <StackSection />
        <ServicesSection />
        <section id="projects" className="projects">
          {projects.map((p) => (
            <ProjectCard key={p.slug} {...p} />
          ))}
        </section>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}