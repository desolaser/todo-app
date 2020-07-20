import React, { useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'

import { UPDATE_TODO, GET_TODO } from '../../../utils/Queries'
import styles from './TaskEdit.module.scss'


const TaskEdit = ({ match }) => {
    const [task, setTask] = useState('')
    const [description, setDescription] = useState('')
    const { loading, error } = useQuery(GET_TODO, {
        variables: {
            id: match.params.id
        },
        onCompleted: data => {
            setTask(data.todo.task);
            setDescription(data.todo.description);
        }
    })
    const [updateTodo] = useMutation(UPDATE_TODO)

    if (loading) return <div className={styles.loading}>Loading...</div>;
    if (error) return <div className={styles.error}>Error :(</div>;

    const handleSubmit = event => {
        event.preventDefault()
        updateTodo({
            variables: {
                id: match.params.id,
                task,
                description
            },
            refetchQueries: ["getTodos"],
        })
        alert('Task updated')
        return 1
    }
 
    return (
        <div>
            <div className={styles.title}>Edit Todo</div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formControl}>
                    <label className={styles.formLabel}>Task</label>
                    <input className={styles.formInput} type="text" value={task} onChange={e => setTask(e.target.value)} />
                </div>
                <div className={styles.formControl}>
                    <label className={styles.formLabel}>Description</label>
                    <input className={styles.formInput} type="text" value={description} onChange={e => setDescription(e.target.value)} />
                </div>
                <input className={styles.formSubmit} type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default TaskEdit