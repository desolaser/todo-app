import React from 'react'
import { Link } from 'react-router-dom'

import styles from './TaskItem.module.scss'

const TaskItem = ({ todo, deleteTodo }) => {
    return (
        <li className={styles.item}>
            <div className={styles.datacontainer}>
                <p className={styles.name}><b>Task:</b> {todo.task}</p>
                <p className={styles.description}><b>Description:</b> {todo.description}</p>
            </div>
            <div className={styles.buttoncontainer}>
                <Link to={`/tasks/edit/${todo.id}`} className={styles.btnedit}>Edit</Link>
                <button className={styles.btndelete} onClick={() => deleteTodo({ variables: { id: todo.id } })}>Delete</button>
            </div>
        </li>
    )
}

export default TaskItem