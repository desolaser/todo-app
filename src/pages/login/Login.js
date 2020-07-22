import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useAuth } from '../../context/auth'

import { useMutation } from '@apollo/client'
import { LOGIN } from '../../utils/Queries'

import Form from '../../components/form'

const Login = () => {
    const [isLoggedIn, setLoggedIn] = useState(false)
    const [error, setError] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { setAuthTokens, setUser } = useAuth()

    const [mutation, mutationResults] = useMutation(LOGIN, {
        onCompleted: (data) => {
            setAuthTokens(data.login.token)
            setUser(data.login.user)
            setLoggedIn(true)
        },
        onError: (error) => {
            console.log(error.message)
            setError(error.message)
        }
    })

    if(isLoggedIn) {
        return <Redirect to="/tasks" />
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (email === "") return setError("Fill email field")
        if (password === "") return setError("Fill password field")
        const login = mutation({ variables: { email, password }})        
        return [login, mutationResults]
    }

    const fields = [
        {
            labelName: "Email",
            type: "text",
            value: email,
            onChange: e => setEmail(e.target.value)
        },
        {
            labelName: "Password",
            type: "password",
            value: password,
            onChange: e => setPassword(e.target.value)
        },
    ]

    return (
        <div>
            <Form title="Log in form" handleSubmit={handleSubmit} fields={fields} submitValue="Log In" />
            <Link to="/register">Don't have an account?</Link>
            { error && <div style={{ color: "red" }}>{error}</div> }
        </div>
    )
}

export default Login