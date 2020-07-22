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
    mutation updateTodo($id: ID!, $task: String, $description: String!) {
        updateTodo(id: $id, task: $task, description: $description) {
            id
            task
            description
        }
    }
`

export const DELETE_TODO = gql`
    mutation deleteTodo($id: ID!) {
        deleteTodo(id: $id) {
            id
            task
            description
        }
    }
`

export const REGISTER = gql`
    mutation register($email: String!, $password: String!) {
        register(email: $email, password: $password) {
            id
            email
            password
        }
    }  
`

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                id
                email
                password
            }
        }
    }
`