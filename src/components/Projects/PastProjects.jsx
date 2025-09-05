import projects from "../../data/projects.json";
import { PastProjectCard } from "./PastProjectCard";
import styles from "./PastProjects.module.css";

export const PastProjects = () => {
  const pastProjects = projects.filter((project) => !project.recent);

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Past Projects</h2>
      <div className={styles.projects}>
        {pastProjects.map((project, i) => (
          <PastProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  );
};