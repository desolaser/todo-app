import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useAuth } from '../../context/auth'

import Form from '../../components/form'

const Register = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const { setAuthTokens } = useAuth();

    if(isLoggedIn) {
        return <Redirect to="/tasks" />        
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (password !== repeatPassword) return setIsError(true)
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
        {
            labelName: "Repeat password",
            type: "password",
            value: repeatPassword,
            onChange: e => setRepeatPassword(e.target.value)
        },
    ]

    return (
        <div>
            <Form title="Register form" handleSubmit={handleSubmit} fields={fields} submitValue="Register" />
            { isError && <div style={{ color: "red" }}>The username or password provided were incorrect!</div> }
        </div>
    )
}

export default Register