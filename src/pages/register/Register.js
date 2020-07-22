import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useMutation } from '@apollo/client'

import { REGISTER } from '../../utils/Queries'

import Form from '../../components/form'

const Register = () => {
    const [isError, setIsError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [register] = useMutation(REGISTER)

    const handleSubmit = e => {
        e.preventDefault()
        if (email === "") return alert("Fill email field")
        if (password === "") return alert("Fill password field")
        if (repeatPassword === "") return alert("Fill repeat password field")
        if (password !== repeatPassword) return setIsError(true)
        register({ variables: { email, password } })
        alert("Registration successful, now you can log in")

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
            { isError && <div style={{ color: "red" }}>Password and repeated password aren't the same</div> }
        </div>
    )
}

export default Register