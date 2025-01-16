import React from "react";

export const ProjectPage = ({ project : {title, projectType, imageSrc, description, skills, demo, source, componentTitle}}) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <h4 className={styles.projectType}>{projectType}</h4>
                <p className={styles.description}>{description}</p>
                <ul className={styles.skills}>
                    {skills.map((skill, id) => {
                        return (
                            <li className={styles.skill} key={id}>{skill}</li>
                        )})
                    }   
                </ul>
            </div>
        </div>
    )    
}