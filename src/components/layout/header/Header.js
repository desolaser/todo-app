import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss'

const Header = () => {
    return (
        <nav className={styles.header}>
            <div className={styles.navtitle}>
                Todo App
            </div>
            <ul className={styles.navlist}>
                <li className={styles.navitem}>
                    <Link className={styles.navlink} to="/">Home</Link>
                </li>
                <li className={styles.navitem}>
                    <Link className={styles.navlink} to="/task">Tasks</Link>
                </li>
                <li className={styles.navitem}>
                    <Link className={styles.navlink} to="/about">About</Link>
                </li>
                <li className={styles.navitem}>
                    <Link className={styles.navlink} to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header