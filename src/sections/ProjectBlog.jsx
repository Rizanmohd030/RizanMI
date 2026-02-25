import { mainProjects } from "../data/mainProjects";
import ProjectCard from "../components/ProjectCard";

export default function ProjectBlog() {
  const data = mainProjects.find((p) => p.id === "blog");
  if (!data) return null;

  return (
    <ProjectCard
      title="Blog Platform"
      description="A full-stack blogging platform with admin authentication and complete content management. Manage posts, images, and edits — all in one place."
      tech="React · Node.js"
      liveUrl={data.live}
      gitUrl={data.git}
      image={data.heroImage}
      accentColor="#7C3AED"
    />
  );
}
