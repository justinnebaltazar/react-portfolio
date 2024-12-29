import React from "react";
import { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils"
 
export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Portfolio</a>
            <div className={styles.menu}>
                <img className={styles.menuBtn} src="./assets/nav/menuIcon.png" alt="menu-button"></img>
                <ul className={styles.menuItems}>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li> 
                        <a href="/">Projects</a>
                    </li>
                    <li>
                        <a href="/">Experience</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                </ul>
            </div>
            
        </nav>
    )
};