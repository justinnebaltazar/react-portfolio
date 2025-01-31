import React from "react";
import styles from "./ExperienceCard.module.css"

export const ExperienceCard = ({ experience : {role, date, organization, descriptions, skills}}) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h3 className={styles.role}>{role}</h3>
                <h4 className={styles.date}>{date}</h4>
                <h4 className={styles.org}>{organization}</h4>
                <ul className={styles.descriptions}>
                    {descriptions.map((desc, id) => {
                        return (
                            <li className={styles.desc} key={id}>{desc}</li>
                        )})
                    }
                </ul>
            </div>
        </div>
    )
}