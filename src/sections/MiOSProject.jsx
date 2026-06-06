import { mainProjects } from "../data/mainProjects";
import ProjectCard from "../components/ProjectCard";

export default function MiOSProject() {
  const data = mainProjects.find((p) => p.id === "mios");
  if (!data) return null;

  return (
    <ProjectCard
      title="Mi-OS"
      description="A comprehensive, full-stack personal 'Operating System' dashboard. Acts as a centralized workspace to manage productivity, track projects, organize tasks, and manage financial ledgers in a unified, highly animated interface."
      tech="Next.js · .NET 8 · PostgreSQL · Zustand"
      liveUrl={data.live}
      gitUrl={data.git}
      image={data.heroImage}
      accentColor="#FF0000"
      imageMode="cover-top"
    />
  );
}
