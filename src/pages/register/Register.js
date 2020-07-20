import React from 'react'
import Form from '../../components/form'

const Register = () => {
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
        {
            labelName: "Repeat password",
            type: "password",
            value: "",
            onChange: () => 1
        },
    ]

    return (
        <Form title="Register form" handleSubmit={handleSubmit} fields={fields} submitValue="Register" />
    )
}

export default Register