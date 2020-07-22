import React, { useState } from 'react'
import { useMutation  } from '@apollo/client'

import { ADD_TODO } from '../../../utils/Queries'
import Form from '../../../components/form'

const TaskAdd = () => {
    const [task, setTask] = useState('')
    const [description, setDescription] = useState('')
    const [addTodo] = useMutation(ADD_TODO)

    const handleSubmit = event => {
        event.preventDefault()
        if(!task) return alert('Fill task field')
        if(!description) return alert('Fill description field')
        addTodo({
            variables: {
                task,
                description
            },
            refetchQueries: ["getTodos"],
        })
        alert('Task added')
        setTask('')
        setDescription('')
        return 1
    }
    
    const fields = [
        {
            labelName: "Task",
            type: "text",
            value: task,
            onChange: e => setTask(e.target.value)
        },
        {
            labelName: "Description",
            type: "text",
            value: description,
            onChange: e => setDescription(e.target.value)
        },
    ]
 
    return (
        <Form title="Add Todo" handleSubmit={handleSubmit} fields={fields} submitValue="Submit" />
    )
}

export default TaskAdd