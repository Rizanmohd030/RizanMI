import ProjectCard from "../components/ProjectCard";
import { mainProjects } from "../data/mainProjects";

function Projects() {
      console.log("Projects data:", mainProjects);
  return (
    <section
      id="projects"
      className="py-24 px-6 max-w-6xl mx-auto"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Featured Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {mainProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
