// src/sections/Projects.jsx

import { mainProjects } from "../data/mainProjects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section className="py-32">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col md:flex-row gap-16 justify-center items-start">
          {mainProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
