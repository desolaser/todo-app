import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useMutation } from '@apollo/client'

import { REGISTER } from '../../utils/Queries'

import Form from '../../components/form'

const Register = () => {
    const [error, setError] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [register] = useMutation(REGISTER)

    const handleSubmit = e => {
        e.preventDefault()
        if (email === "") return setError("Fill email field")
        if (password === "") return setError("Fill password field")
        if (repeatPassword === "") return setError("Fill repeat password field")
        if (password !== repeatPassword) return setError("Password and repeated password aren't the same")
        register({ variables: { email, password } })
        alert("Registration successful, now you can log in")
        setError()
        return <Redirect to='/login' />
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
            { error && <div style={{ color: "red" }}>{error}</div> }
        </div>
    )
}

export default Register