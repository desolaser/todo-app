import { gql  } from '@apollo/client'

export const ADD_TODO = gql`
mutation addTodo($task: String!, $description: String!) {
    addTodo(task: $task, description: $description) {
        id
        task
        description
    }
}
`;

export const GET_TODOS = gql`
    query getTodos {
        todos {
            id
            task
            description
        }
    }
`

export const GET_TODO = gql`
    query getTodo($id: ID!) {
        todo(id: $id) {
            id
            task
            description
        }
    }
`

export const UPDATE_TODO = gql`
    query updateTodo($id: ID!, $task: String, $description: String!) {
        updateTodo(id: $id, task: $task, description: $description) {
            id
            task
            description
        }
    }
`

export const DELETE_TODO = gql`
    query deleteTodo($id: ID!) {
        deleteTodo(id: $id) {
            id
            task
            description
        }
    }
`