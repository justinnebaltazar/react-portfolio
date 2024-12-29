import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Hi, I am Justinne
                </h1>
                <p className={styles.description}>I'm a full-time student at Simon Fraser University, studying Computing Science. Reach out if you'd like to learn more.</p>
                <a className={styles.contactBtn} href="jfb3@sfu.ca">Contact Me</a>
            </div>
            <img className={styles.heroImg} src="./assets/hero/heroImage.png" alt="hero-image-of-me"></img>
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
    )
};