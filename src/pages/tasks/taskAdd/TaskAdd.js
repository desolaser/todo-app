import React, { useState } from 'react'
import { useMutation  } from '@apollo/client'
import { useAuth } from '../../../context/auth'

import { ADD_TODO } from '../../../utils/Queries'
import Form from '../../../components/form'
import Error from '../../../components/error'

const TaskAdd = () => {
    const [task, setTask] = useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState('')
    const { user } = useAuth()
    const [addTodo] = useMutation(ADD_TODO)

    const handleSubmit = event => {
        event.preventDefault()
        if(!task) return setError('You must fill task field')
        if(!description) return setError('You must fill description field')
        addTodo({
            variables: {
                task,
                description,
                userId: user.id
            },
            refetchQueries: ["getUserTodos"],
        })
        setTask('')
        setDescription('')
        setError('')
        return alert('Task added')
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
        <div>
            <Form title="Edit Todo" handleSubmit={handleSubmit} fields={fields} submitValue="Submit" />
            { error && <Error>{error}</Error> }
        </div>
    )
}

export default TaskAdd