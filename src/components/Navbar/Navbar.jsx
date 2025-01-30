import React from "react";
import { useState } from "react";

import styles from "./Navbar.module.css";
 
export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Justinne's Portfolio</a>
            <div className={styles.menu}>
                <img className={styles.menuBtn} src={
                    menuOpen ? "./assets/nav/white-closeBtn.png" : "./assets/nav/white-menuBtn.png"} 
                    alt="menu-button"
                    onClick={() => {
                        setMenuOpen(!menuOpen);
                    }}>
                    </img>
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li> 
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#experience">Skills</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            
        </nav>
    )
};