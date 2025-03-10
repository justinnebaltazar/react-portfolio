import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Justinne Baltazar
                </h1>
                <p className={styles.description}>An aspiring software developer with an interest in web development and computer systems</p>
                <ul className={styles.links}>
                    <li><a href="https://github.com/justinnebaltazar"><img src={getImageUrl("hero/github-white.png")} alt="github-icon" className={styles.github} /></a></li>
                    <li><a href="https://www.linkedin.com/in/justinnebaltazar/"><img src={getImageUrl("hero/linkedin-white.png")} alt="github-icon" className={styles.linkedin} /></a></li>
                    <li><a href="mailto:jfb3@sfu.ca"><img src={getImageUrl("hero/email-white.png")} className={styles.email}></img></a></li>
                </ul>
            </div>
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
    )
};