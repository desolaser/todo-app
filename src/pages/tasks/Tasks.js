import React from 'react';
import { useQuery, useMutation } from '@apollo/client'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/auth'

import styles from './Tasks.module.scss'
import TaskItem from '../../components/taskItem'
import Loading from '../../components/loading'
import Error from '../../components/error'
import { GET_USER_TODOS, DELETE_TODO } from '../../utils/Queries'


const Tasks = () => {
    const { user } = useAuth()
    const { loading, error, data } = useQuery(GET_USER_TODOS, { variables: { userId: user.id } })
    const [deleteTodo] = useMutation(DELETE_TODO)

    if (loading) return <Loading>Loading...</Loading>
    if (error) return <Error>{error.message}</Error>
    
    const todos = data.userTodos

    return (
        <div>
            <div className={styles.title}>Todo's list</div>
            <Link className={styles.btnAdd} to="/tasks/add">Add a task</Link>
            <ul className={styles.list}>
                {todos.map((todo) => <TaskItem key={todo.id} todo={todo} deleteTodo={deleteTodo}/>)}
            </ul>
        </div>
    )
}

export default Tasks