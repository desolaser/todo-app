import React from 'react'
import styles from './Loading.module.scss'

const Loading = ({ children }) => {
    return (
        <div className={styles.window}>
            {children}
        </div>
    )
}

export default Loading