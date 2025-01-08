import React from "react";
import styles from "./Hero.module.css";
import { TypeAnimation } from "react-type-animation";

export const Animation = () => {
    return (
        <div>
            <TypeAnimation className={styles.animation} sequence={[
                `- aspiring software developer - student\n
                - tutor - coding instructor - HR assistant\n
                - language-learner - music-enthusiast`
            ]}>
            </TypeAnimation>
        </div>
    )
}