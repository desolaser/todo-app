import React from 'react';
import { useQuery, gql } from '@apollo/client'

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

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error :(</div>;

    return (
        <div>
            <h1>Todo's list</h1>
            <ul>
                {data.todos.map(todo => {
                    return (
                        <li key={todo.id}>
                            <p>{todo.task}</p>
                            <p>{todo.name}</p>
                            <button>Edit</button>
                            <button>Delete</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Tasks