import React, { useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'

import { UPDATE_TODO, GET_TODO } from '../../../utils/Queries'
import Form from '../../../components/form'

const TaskEdit = ({ match }) => {
    const [task, setTask] = useState('')
    const [description, setDescription] = useState('')
    const [updateTodo] = useMutation(UPDATE_TODO)
    const { loading, error } = useQuery(GET_TODO, {
        variables: {
            id: match.params.id
        },
        onCompleted: data => {
            setTask(data.todo.task);
            setDescription(data.todo.description);
        }
    })    

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error :(</div>;

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

export default TaskEdit