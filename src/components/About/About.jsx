import React from "react";
import styles from "./About.module.css";
import { TypeAnimation } from "react-type-animation";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <div className={styles.content}>
                <img src={getImageUrl("about/test-2.png")} alt="photo-of-me" />
                <div className={styles.type}>
                    <h2 className={styles.title}>About me</h2>
                    <div className={styles.animation}>
                        <TypeAnimation sequence={[
                        `["aspiring software developer", "student"] 
                        \n["tutor", "coding instructor", "HR assistant"] 
                        \n["language-learner", "music enthusiast]`
                        ]}>
                        </TypeAnimation>
                    </div>
                </div>

                <p className={styles.intro}>Hi, my name is Justinne! I'm a Computing Science student at Simon Fraser University.<br/></p>
                
                <p> <br/> Currently, I work part-time as a Tutor and volunteer as a Coding Instructor. As a tutor, I teach students from Grades 2 to 12 in subject areas such as, Math, English, and Chemistry. 
                As a Coding Instructor, I teach programming and computer science topics to neurodivergent children. My experience as a tutor and coding instructor has allowed me 
                to master rudimentary mathematical and programming concepts. It also developed my communication and problem-solving abilities.
                </p>
                
                <p> <br/> Outside of school and work, I enjoy thrifting, visiting record stores, reading, going to the gym, hiking, journaling, photography,
                    and learning new languages such as German and French.
                </p>
            </div>
        </section>
    )
};