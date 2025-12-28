import { motion } from "framer-motion";

function ProjectCard({ project }) {
  const isTop = project.priority === "top";
  const isAward = project.priority === "award";

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className={`rounded-xl p-6 border transition
        ${isTop ? "border-blue-500 bg-[#0f172a]" : "border-gray-800 bg-[#111]"}
      `}
    >
      {/* Tags */}
      <div className="flex gap-2 mb-3">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className={`text-xs px-3 py-1 rounded-full
              ${tag.includes("AI") ? "bg-blue-600/20 text-blue-400" : ""}
              ${tag.includes("Award") ? "bg-yellow-500/20 text-yellow-400" : ""}
              ${tag.includes("Top") ? "bg-green-600/20 text-green-400" : ""}
            `}
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="text-xl font-semibold mb-3">
        {project.title}
      </h3>

      <p className="text-gray-400 mb-4 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech, index) => (
          <span
            key={index}
            className="text-sm px-3 py-1 bg-gray-800 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            GitHub
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            Live Demo
          </a>
        )}
        {isAward && (
          <span className="text-yellow-400 font-medium">
            🏆 Award Project
          </span>
        )}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
