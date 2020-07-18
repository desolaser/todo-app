import React, { useState } from 'react'
import { gql, useMutation  } from '@apollo/client'

import styles from './TaskAdd.module.scss'

const ADD_TODO = gql`
    mutation addTodo($task: String!, $description: String!) {
        addTodo(task: $task, description: $description) {
            id
            task
            description
        }
    }
`;

const TaskAdd = () => {
    const [task, setTask] = useState('')
    const [description, setDescription] = useState('')
    const [addTodo, { data }] = useMutation(ADD_TODO)

    const handleSubmit = event => {
        event.preventDefault()
        if(!task) return alert('Fill task field')
        if(!description) return alert('Fill description field')
        addTodo({
            variables: {
                task,
                description
            }
        })
        alert('Task added')
        setTask('')
        setDescription('')
        return 1
    }
 
    return (
        <div>
            <div className={styles.title}>Add Todo</div>
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

export default TaskAdd