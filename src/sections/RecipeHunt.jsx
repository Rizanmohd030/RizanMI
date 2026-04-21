import { mainProjects } from "../data/mainProjects";
import ProjectCard from "../components/ProjectCard";

export default function RecipeHunt() {
  const data = mainProjects.find((p) => p.id === "recipehunt");
  if (!data) return null;

  return (
    <ProjectCard
      title={data.title}
      description="An AI-powered recipe discovery platform that turns food images into instant, relevant recipes. Powered by an intelligent food scanner."
      tech="MERN · AI"
      liveUrl={data.live}
      gitUrl={data.git}
      image={data.heroImage}
      accentColor="#FF4500"
      imageMode="cover-top"
    />
  );
}
