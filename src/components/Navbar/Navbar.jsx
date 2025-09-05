import React from "react";
import { useState } from "react";

import styles from "./Navbar.module.css";
 
export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Welcome!</a>
            <div className={styles.menu}>
                <img className={styles.menuBtn} src={
                    menuOpen ? "./assets/nav/blackCloseBtn.png" : "./assets/nav/blackMenuBtn.png"} 
                    alt="menu-button"
                    onClick={() => {
                        setMenuOpen(!menuOpen);
                    }}>
                    </img>
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}>
                    <li> 
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
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