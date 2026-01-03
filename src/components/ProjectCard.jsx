// src/components/ProjectCard.jsx

export default function ProjectCard({ project }) {
  return (
    <div className="relative w-[380px]">

      {/* TEXT CONTAINER */}
      <div
        className="
          bg-[rgba(0,0,0,0.04)]
          px-6
          pt-6
          pb-40
          min-h-[260px]
          rounded-md
        "
      >
        <h3 className="text-lg font-semibold mb-3">
          {project.title}
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* FLOATING IMAGE — SAME WIDTH */}
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="
          absolute
          left-1/2
          -bottom-28
          -translate-x-1/2
        "
      >
        <div
          className="
            bg-white
            p-2
            shadow-lg
            transition
            duration-300
            hover:-translate-y-2
          "
        >
          <img
            src={project.image}
            alt={project.title}
            className="
              w-[340px]
              h-[190px]
              object-cover
              rounded-sm
            "
          />
        </div>
      </a>
    </div>
  );
}
