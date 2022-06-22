import React from 'react'
import { useState, useEffect } from 'react'
const useForm = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
        name: "",
        lastname: ""
    })
    const [errors, setErrors] = useState({})


    const handleChanges = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
    }


    return { handleChanges, values, handleSubmit }
}

export default useForm