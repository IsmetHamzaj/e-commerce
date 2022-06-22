import React from 'react'
import { useForm } from 'react-hook-form'
const Register = () => {
    const {register, handleSubmit, formState: { errors }} = useForm();

    const onSubmit = (data) => console.log(data)

    return (
        <>
            <p>Register form</p>
            <form>
                <input type="text" {...register("name")} />
                <input type="email" {...register("email", {required: true})} />
                {errors.email && <span>*Email* is mandat    ory</span>}
                <input type="password" {...register("password")}/>
                <input type={"submit"} />
            </form>
        </>
    )
}

export default Register