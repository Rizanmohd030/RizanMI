import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section id="about" className="py-24 sm:py-32 lg:py-40 px-8 sm:px-16 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs sm:text-sm uppercase tracking-[0.3em] text-black/30 font-medium mb-6"
        >
          About
        </motion.p>

        {/* Heading & Profile Pic */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center gap-10 md:gap-14"
        >
          {/* Profile Image — Simple Neo-brutalist shadow */}
          <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 shrink-0 group perspective-1000">
            <div className="w-full h-full border-2 border-black rounded-xl overflow-hidden bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300 group-hover:-translate-y-3 group-hover:-translate-x-3 group-hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative flex flex-col">

              {/* Image Container */}
              <div className="relative overflow-hidden flex-1 bg-surface">
                <img
                  src="/src/assets/images/RizanProfile.JPG"
                  alt="Rizan"
                  className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>

            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-black leading-tight max-w-[800px]">
            Heyy, I'm Rizan.
          </h2>
        </motion.div>

        {/* Bio */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            <p className="text-base sm:text-lg md:text-xl text-black/50 leading-relaxed">
              Final-year Computer Science student and MERN Stack Developer based in Bangalore, India. I specialize in building scalable, high-performance web applications with clean architecture and smooth UI interactions.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-black/50 leading-relaxed">
              I enjoy turning complex problems into elegant digital experiences using modern technologies. Currently exploring AI-driven solutions to create real-world impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Skills */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.3em] text-black/30 font-medium mb-3">
                Technologies
              </h4>
              <p className="text-base sm:text-lg text-black/70 leading-relaxed">
                React · Node.js · Express · MongoDB · JavaScript · Tailwind CSS · GSAP · Framer Motion · Git
              </p>
            </div>

            {/* Currently */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.3em] text-black/30 font-medium mb-3">
                Currently
              </h4>
              <p className="text-base sm:text-lg text-black/70 leading-relaxed">
                Exploring GenAI and building cool projects.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
