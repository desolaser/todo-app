import React from 'react';
import { useQuery, gql } from '@apollo/client'

import styles from './Tasks.module.scss'
import TaskItem from '../../components/taskItem'

const GET_TODOS = gql`
    query getTodos {
        todos {
            id
            task
            description
        }
    }
`

const Tasks = () => {
    const { loading, error, data } = useQuery(GET_TODOS)

    if (loading) return <div className={styles.loading}>Loading...</div>;
    if (error) return <div className={styles.error}>Error :(</div>;

    return (
        <div>
            <h1 className={styles.title}>Todo's list</h1>
            <ul className={styles.list}>
                {data.todos.map((todo) => <TaskItem key={todo.id} todo={todo} />)}
            </ul>
        </div>
    )
}

export default Tasks