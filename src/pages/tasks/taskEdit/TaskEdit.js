import React, { useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { useAuth } from '../../../context/auth'

import { UPDATE_TODO, GET_TODO } from '../../../utils/Queries'
import Form from '../../../components/form'
import Error from '../../../components/error'

const TaskEdit = ({ match }) => {
    const [task, setTask] = useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState('')
    const { user } = useAuth()
    const [updateTodo] = useMutation(UPDATE_TODO)
    const { loading, graphqlError } = useQuery(GET_TODO, {
        variables: {
            id: match.params.id
        },
        onCompleted: data => {
            setTask(data.todo.task);
            setDescription(data.todo.description);
        }
    })    

    if (loading) return <div>Loading...</div>;
    if (graphqlError) return <Error>Error :(</Error>;

    const handleSubmit = event => {
        event.preventDefault()
        if (!task) return setError("You must fill task field")
        if (!description) return setError("You must fill description field")
        updateTodo({
            variables: {
                id: match.params.id,
                task,
                description,
                userId: user.id
            },
            refetchQueries: ["getUserTodos"],
        })
        setError('')
        return alert('Task updated')
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
            <Form title="Add Todo" handleSubmit={handleSubmit} fields={fields} submitValue="Submit" />
            { error && <Error>{error}</Error> }
        </div>
    )
}

export default TaskEdit