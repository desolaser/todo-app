import React from 'react'
import styles from './Error.module.scss'

const Error = ({ children }) => {
    return (
        <div className={styles.window}>
            {children}
        </div>
    )
}

export default Error