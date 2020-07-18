import React from 'react';
import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'

import styles from './Tasks.module.scss'
import TaskItem from '../../components/taskItem'
import { GET_TODOS } from '../../utils/Queries'


const Tasks = () => {
    const { loading, error, data } = useQuery(GET_TODOS)

    if (loading) return <div className={styles.loading}>Loading...</div>;
    if (error) return <div className={styles.error}>Error :(</div>;

    return (
        <div>
            <div className={styles.title}>Todo's list</div>
            <Link className={styles.btnAdd} to="/tasks/add">Add a task</Link>
            <ul className={styles.list}>
                {data.todos.map((todo) => <TaskItem key={todo.id} todo={todo} />)}
            </ul>
        </div>
    )
}

export default Tasks