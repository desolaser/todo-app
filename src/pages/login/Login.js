import React from 'react'
import Form from '../../components/form'

const Login = () => {
    const handleSubmit = e => {
        e.preventDefault()
    }

    const fields = [
        {
            labelName: "Email",
            type: "text",
            value: "",
            onChange: () => 1
        },
        {
            labelName: "Password",
            type: "password",
            value: "",
            onChange: () => 1
        },
    ]

    return (
        <Form title="Log in form" handleSubmit={handleSubmit} fields={fields} submitValue="Log In" />
    )
}

export default Login