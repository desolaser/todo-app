import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../../context/auth'

import styles from './Header.module.scss'

const Header = () => {
    const { authTokens, setAuthTokens } = useAuth()

    const logout = () => {
        setAuthTokens("")
    }

    return (
        <nav className={styles.header}>
            <div className={styles.navtitle}>
                Todo App
            </div>
            <ul className={styles.navlist}>
                <li className={styles.navitem}>
                    <Link className={styles.navlink} to="/">Home</Link>
                </li>
                {authTokens &&
                    <>
                        <li className={styles.navitem}>
                            <Link className={styles.navlink} to="/tasks">Tasks</Link>
                        </li>
                        <li className={styles.navitem}>
                            <div className={styles.navlink} onClick={logout}>Logout</div>
                        </li> 
                    </>     
                }
                {!authTokens &&
                    <>
                        <li className={styles.navitem}>
                            <Link className={styles.navlink} to="/login">Login</Link>
                        </li>
                        <li className={styles.navitem}>
                            <Link className={styles.navlink} to="/register">Register</Link>
                        </li>                        
                    </>
                }
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