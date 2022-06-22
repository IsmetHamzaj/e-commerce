import React from 'react'
import { useState, useEffect } from 'react'
const useForm = (validate) => {
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
        setErrors(validate(values))
    }


    return { handleChanges, values, handleSubmit, errors }
}

export default useForm