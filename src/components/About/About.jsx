import React from "react";
import styles from "./About.module.css";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            
            <div className={styles.content}>
            <img src="./assets/about/aboutImage.png" alt="me-sitting-with-computer" className={styles.aboutImage}></img>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}> 
                    <img src="./assets/about/cursorIcon.png" alt="cursor-icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Student</h3>
                        <p>I'm 3rd Year Computing Science student at Simon Fraser University</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src="./assets/about/serverIcon.png" alt="server-icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Tutor</h3>
                        <p>I'm 3rd Year student at Simon Fraser University</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src="./assets/about/uiIcon.png" alt="ui-icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Coding Instructor</h3>
                        <p>I am a volunteer Instructor at the C.O.D.E Initiative. I teach neurodivergent children.</p>
                    </div>
                </li>
            </ul>
            </div>
        </section>
    )
};