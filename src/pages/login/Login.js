import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useAuth } from '../../context/auth'

import Form from '../../components/form'

const Login = () => {    
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthTokens } = useAuth();

    if(isLoggedIn) {
        return <Redirect to="/tasks" />
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(email, password)
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
            { isError && <div style={{ color: "red" }}>The username or password provided were incorrect!</div> }
        </div>
    )
}

export default Login