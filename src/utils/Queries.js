import { gql  } from '@apollo/client'

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

export const GET_USER_TODOS = gql`
    query userTodos($userId: ID!) {
        userTodos(userId: $userId) {
            id
            task
            description
        }
    }
`

export const ADD_TODO = gql`
    mutation addTodo($task: String!, $description: String!, $userId: ID!) {
        addTodo(task: $task, description: $description, userId: $userId) {
            id
            task
            description
        }
    }
`

export const UPDATE_TODO = gql`
    mutation updateTodo($id: ID!, $task: String, $description: String!, $userId: ID!) {
        updateTodo(id: $id, task: $task, description: $description, userId: $userId) {
            id
            task
            description
        }
    }
`

export const DELETE_TODO = gql`
    mutation deleteTodo($id: ID!, $userId: ID!) {
        deleteTodo(id: $id, userId: $userId) {
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