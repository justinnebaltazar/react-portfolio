import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const PastProjects = () => {
  const pastProjects = projects.filter((project) => !project.recent);

  return (
    <div>
      {pastProjects.map((project, i) => (
        <ProjectCard key={i} project={project} />
      ))}
    </div>
  );
};
