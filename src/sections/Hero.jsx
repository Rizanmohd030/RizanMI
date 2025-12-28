import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I’m <span className="text-blue-500">Rizan</span>
        </h1>

        <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
          MERN Stack Developer
        </h2>

        <p className="text-gray-400 mb-8 leading-relaxed">
          I build clean, scalable web applications with modern UI,
          real-world logic, and performance in mind.
        </p>

        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="px-6 py-3 border border-gray-500 rounded-lg hover:bg-gray-800 transition"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
