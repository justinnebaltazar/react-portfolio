import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";
import { Link } from "react-router-dom";

export const ProjectCard = ({ project : {title, projectType, imageSrc, description, skills, demo, source, componentTitle}}) => {
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

                <div className={styles.links}>
                        <a className={styles.link} href={demo}>Demo</a>
                        <a className={styles.link} href={source}>Source</a>
                        <a className={styles.link} href={`../${componentTitle}.jsx`}>More info!</a>
                        <Link className={styles.link} to="/undercooked">More info!</Link>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className={`${styles.image} ${styles.aboutItem}`}/>
            </div>
            

        </div>
    )
}