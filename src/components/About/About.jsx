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

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis vel erat sit amet accumsan. Pellentesque non porta nisl, in scelerisque mauris. Morbi velit massa, euismod nec sem ac, tristique vehicula sem. Donec arcu leo, ultricies vel arcu in, pellentesque lobortis ex.</p>
                
                <p>Fusce vulputate at nunc quis elementum. Aenean nisi mauris, pellentesque et suscipit ut, tempor at tortor. Sed lacus enim, tincidunt rutrum accumsan nec, viverra in tellus. Cras consequat, lectus sed tempor dignissim, purus nisi convallis orci, et ultrices massa erat ut risus. Aliquam eu nulla ligula. Donec hendrerit libero sapien, eu vestibulum nulla bibendum vitae. Nunc mollis neque eu elit rhoncus, in viverra sapien molestie.
                Donec vel metus mattis augue lacinia tristique. Ut sit amet ligula id diam pharetra tincidunt. Aenean id dignissim lorem. Etiam turpis mi, tincidunt sit amet sagittis a, viverra sit amet mi. Vivamus enim orci, bibendum sed fringilla et, sagittis id erat. Donec mi ante, posuere quis est non, pellentesque posuere magna. Nam a pretium neque. Morbi euismod lorem sit amet justo posuere, ac pretium nibh vulputate. Donec et ante enim.
                </p>
            </div>
        </section>
    )
};