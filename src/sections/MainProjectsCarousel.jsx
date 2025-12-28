import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { mainProjects } from "../data/mainProjects";

function MainProjectsCarousel() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();
  const total = mainProjects.length;
  const AUTOPLAY_DELAY = 5000; // 5 seconds

  // ▶️ Autoplay logic
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, AUTOPLAY_DELAY);

    return () => clearInterval(timer);
  }, [isHovered, total]);

  const next = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <section className="py-28 px-6 bg-black">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
        Featured Projects
      </h2>

      {/* Carousel Wrapper */}
      <div
        className="relative max-w-5xl mx-auto overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Track */}
        <motion.div
          className="flex"
          animate={{ x: `-${index * 100}%` }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {mainProjects.map((project) => (
            <div key={project.id} className="min-w-full px-6">
              <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-8 md:p-12">
                
                {/* Tags */}
                <div className="flex gap-3 mb-4">
                  {project.tags?.map((tag, i) => (
                    <span
                      key={i}
                      className={`text-xs px-3 py-1 rounded-full
                        ${
                          tag.includes("Top")
                            ? "bg-green-600/20 text-green-400"
                            : tag.includes("AI")
                            ? "bg-blue-600/20 text-blue-400"
                            : tag.includes("Award")
                            ? "bg-yellow-600/20 text-yellow-400"
                            : "bg-gray-700 text-gray-300"
                        }
                      `}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm px-3 py-1 bg-gray-800 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-6">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 px-4 py-2 text-3xl text-white hover:text-gray-300"
        >
          ‹
        </button>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 px-4 py-2 text-3xl text-white hover:text-gray-300"
        >
          ›
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-3 mt-8">
        {mainProjects.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition
              ${i === index ? "bg-white scale-125" : "bg-gray-600"}
            `}
          />
        ))}
      </div>

      {/* Other Projects Button */}
      <div className="flex justify-center mt-14">
        <button
          onClick={() => navigate("/projects")}
          className="group flex items-center gap-2 text-lg font-medium text-blue-400 hover:text-blue-300 transition"
        >
          Other Projects
          <span className="transform transition group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    </section>
  );
}

export default MainProjectsCarousel;
