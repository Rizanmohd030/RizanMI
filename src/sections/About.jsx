import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-28 px-6 ">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          About Me
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-3xl">
          I’m a final-year Computer Science student and MERN Stack Developer
          with hands-on experience building full-stack applications,
          AI-powered systems, and real-world products. I enjoy designing
          clean architectures, scalable APIs, and modern user experiences
          that solve real problems.
        </p>

        {/* Focus Areas */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">
              Full-Stack Development
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building end-to-end MERN applications with clean architecture,
              reusable components, and production-ready workflows.
            </p>
          </div>

          <div className="border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">
              Agentic & GenAI Systems
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Designing AI-driven features using Gemini APIs, automation
              workflows, and intelligent decision pipelines beyond
              simple API calls.
            </p>
          </div>

          <div className="border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">
              Problem Solving & Impact
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Passionate about building systems with real-world impact,
              including award-winning IoT safety solutions and scalable
              web platforms.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
