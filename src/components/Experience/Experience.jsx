import React from "react";
import { ExperienceCard } from "./ExperienceCard";
import styles from "./Experience.module.css";
import experiences from "../../data/experience.json"

export const Experience = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.experiences}>
                {experiences.map((experience, id) => {
                    return (
                        <ExperienceCard key={id} experience={experience}></ExperienceCard>
                    );
                })}
            </div>
        </section>
    )
};