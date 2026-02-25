import { motion } from "framer-motion";
import StickyNavbar from "../components/StickyNavbar";
import Hero from "../sections/Hero";
import VelocityText from "../components/VelocityText";
import RecipeHunt from "../sections/RecipeHunt";
import GenAI from "../sections/GenAI";
import ProjectBlog from "../sections/ProjectBlog";
import AboutMe from "../sections/AboutMe";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";
import MoreProjects from "../sections/MoreProjects";

export default function Home() {
  return (
    <>
      <StickyNavbar />
      <Hero />

      {/* Projects */}
      <section id="projects" className="py-24 sm:py-32 lg:py-40 px-8 sm:px-16 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          {/* Section label */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm uppercase tracking-[0.3em] text-black/30 font-medium mb-16 sm:mb-20"
          >
            Selected Work
          </motion.p>

          {/* Project cards */}
          <div className="space-y-24 sm:space-y-32 lg:space-y-40">
            <RecipeHunt />
            <GenAI />
            <ProjectBlog />
            <MoreProjects />
          </div>
        </div>
      </section>

      <AboutMe />
      <Contact />
      <Footer />
    </>
  );
}
