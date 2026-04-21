import { mainProjects } from "../data/mainProjects";
import ProjectCard from "../components/ProjectCard";

export default function GenAI() {
  const data = mainProjects.find((p) => p.id === "genai");
  if (!data) return null;

  return (
    <ProjectCard
      title="Interview Assistant"
      description="Generates personalized 1-to-1 interview questions based on your role and skills. Helps you build resumes, practice real scenarios, and crack tech interviews."
      tech="React · GenAI"
      liveUrl={data.live}
      gitUrl={data.git}
      image={data.heroImage}
      accentColor="#1691DB"
      reverse
      imageMode="cover-top"
      imagePosition="object-left-top"
    />
  );
}
