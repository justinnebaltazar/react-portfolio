import { ProjectCard } from "./ProjectCard";
import projects from "../../data/projects.json";
import styles from "./Projects.module.css";

export const Projects = () => {
    const recentProjects = projects.filter((project) => project.recent);

    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Recent Projects</h2>
            <div className={styles.projects}>
                {recentProjects.map((project, id) => {
                    return (
                        <ProjectCard key={id} project={project}></ProjectCard>
                    );

                })
            }
            </div>
        </section>
    )
};
