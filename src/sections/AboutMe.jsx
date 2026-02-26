import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Portal from "../components/Portal";

export default function AboutMe() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="about" className="py-24 sm:py-32 lg:py-40 px-8 sm:px-16 lg:px-24">
      <div className="max-w-[1400px] mx-auto relative">
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

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-black leading-tight max-w-[800px] transition-transform duration-300 hover:-translate-y-2 hover:-translate-x-2 cursor-default">
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
            <p className="text-lg sm:text-xl md:text-2xl text-black/60 leading-relaxed font-medium">
              Final-year Computer Science student and MERN Stack Developer based in Bangalore, India. I specialize in building scalable, high-performance web applications with clean architecture and smooth UI interactions.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-black/60 leading-relaxed font-medium">
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
              <p className="text-lg sm:text-xl md:text-2xl text-black/70 leading-relaxed font-medium">
                React · Node.js · Express · MongoDB · JavaScript · Tailwind CSS · GSAP · Framer Motion · Git
              </p>
            </div>

            {/* Currently */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.3em] text-black/30 font-medium mb-3">
                Currently
              </h4>
              <p className="text-lg sm:text-xl md:text-2xl text-black/70 leading-relaxed font-medium">
                Exploring GenAI and building cool projects.
              </p>
            </div>

            {/* Achievements Link */}
            <div className="pt-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-block text-xl sm:text-2xl lg:text-3xl font-bold text-black border-b-[3px] border-transparent hover:border-black transition-colors duration-300 pb-1"
              >
                Want to learn about my achievements? →
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Achievements Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <Portal>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsModalOpen(false)}
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              />

              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                className="relative w-full max-w-2xl bg-white border-2 border-black rounded-xl p-8 sm:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col max-h-[90vh]"
              >
                {/* Header Bar */}
                <div className="absolute top-0 left-0 right-0 border-b-2 border-black bg-surface px-4 py-3 flex items-center justify-between rounded-t-xl z-20">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full border border-black bg-[#FF5F56]" />
                    <div className="w-3 h-3 rounded-full border border-black bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full border border-black bg-[#27C93F]" />
                  </div>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-black font-bold text-sm tracking-widest uppercase hover:text-[#FF5F56] transition-colors"
                  >
                    Close [X]
                  </button>
                </div>

                {/* Scrollable Content Area */}
                <div className="mt-12 overflow-y-auto pr-4 custom-scrollbar flex-1">
                  <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black mb-6">
                    Achievements
                  </h3>

                  <div className="space-y-6">
                    <div className="p-4 border-2 border-black/10 rounded-lg rounded-tl-none relative group hover:border-[#FFBD2E] transition-colors">
                      <div className="absolute -top-3 -left-0.5 bg-[#FFBD2E] text-black text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 border-2 border-black rounded-sm">2024</div>
                      <h4 className="text-xl font-bold text-black mb-2">Hackathon Winner</h4>
                      <p className="text-black/60 leading-relaxed text-sm">Description of the achievement goes right here. What did you build, what was the impact?</p>
                    </div>

                    <div className="p-4 border-2 border-black/10 rounded-lg rounded-tl-none relative group hover:border-[#27C93F] transition-colors">
                      <div className="absolute -top-3 -left-0.5 bg-[#27C93F] text-white text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 border-2 border-black rounded-sm">2023</div>
                      <h4 className="text-xl font-bold text-black mb-2">Certification Name</h4>
                      <p className="text-black/60 leading-relaxed text-sm">Details about the certification or award and why it matters.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Portal>
        )}
      </AnimatePresence>
    </section>
  );
}
