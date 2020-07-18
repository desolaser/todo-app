import React from 'react';

import styles from './TaskItem.module.scss'

const TaskItem = ({ todo }) => {
    return (
        <li className={styles.item}>
            <div className={styles.datacontainer}>
                <p className={styles.name}><b>Task:</b> {todo.task}</p>
                <p className={styles.description}><b>Description:</b> {todo.description}</p>
            </div>
            <div className={styles.buttoncontainer}>
                <button className={styles.btnedit}>Edit</button>
                <button className={styles.btndelete}>Delete</button>
            </div>
        </li>
    )
}

export default TaskItem