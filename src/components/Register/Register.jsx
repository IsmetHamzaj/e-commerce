import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form'
import LayOut from '../../layouts/LayoutFile';
// import useForm from './useForm'
// import ValidateInfo from './validateInfo'
const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState(false)

    const handleName = (e) => {
        setName(e.target.value)
        setSubmitted(false)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
        setSubmitted(false)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
        setSubmitted(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if( name === '' || email === '' || password === '') {
            setError(true)
        } else {
            setSubmitted(true)
            setError(false)
        }
    }

    const successMessage = () => {
        return(
            <div className='success' style={{display: submitted ? '' : 'none'}}>
                <h1>User {name} successesfully logged in</h1>
            </div>
        )
    }

    const errorMessage = () => {
        return(
            <div className='error' style={{display: error ? '' : 'none'}}>
                <h1>Please enter all the fields</h1>
            </div>
        )
    }





    const handleChanges = () => {};

    return(
        <div>
            <div className='form'>
                <h1>User Registration</h1>
            </div>
            <div className='messages'>
                {errorMessage()}
                {successMessage()}
            </div>
            <form>
                <label className='label'>Name</label>
                <input onChange={handleName} className="input" value={name} type="text" />

                <label className='label'>Email</label>
                <input onChange={handleEmail} className="input" value={email} type="email" />

                <label className='label'>Password</label>
                <input onChange={handlePassword} className="input" value={password} type="password" />

                <button onClick={handleSubmit} type="submit" className='btn'>Submit</button>
            </form>
        </div>
    );



    // const { handleChanges, values, handleSubmit, errors } = useForm(ValidateInfo);

    // return (
    //     <div>
    //         <form>
    //             <div>
    //                 <label htmlFor='email'>Email:
    //                     <input id='email' type="email" name="email" placeholder='Enter your email' value={values.email} onChange={handleChanges} />
    //                 </label>
    //             </div>
    //             {errors.email && <p>{errors.email}</p>}
    //             <div>
    //                 <label htmlFor='password'>Password:
    //                     <input id='password' type="password" name="password" placeholder='Enter your password' value={values.password} onChange={handleChanges} />
    //                 </label>
    //             </div>
    //             {errors.password && <p>{errors.password}</p>}
    //             <div>
    //                 <label htmlFor='name'>Name:
    //                     <input id='name' type="text" name="name" placeholder='Enter your name' value={values.name} onChange={handleChanges} />
    //                 </label>
    //             </div>
    //             {errors.name && <p>{errors.name}</p>}
    //             <div>
    //                 <label htmlFor='lastname'>Last Name:
    //                     <input id='lastname' type="text" name="lastname" placeholder='Enter your last name' value={values.lastname} onChange={handleChanges} />
    //                 </label>
    //             </div>
    //             {errors.lastname && <p>{errors.lastname}</p>}
    //             <div>
    //                 <button type='submit'>Register</button>
    //                 <span>Already have an account? Login <a href='#'>here</a></span>
    //             </div>
    //         </form>
    //     </div>
    // )
    //     const {register, handleSubmit, formState: { errors }} = useForm();

    //     const onSubmit = (data) => console.log(data)

    //     return (
    //         <>
    //             <p>Register form</p>
    //             <form>
    //                 <input type="text" {...register("name")} />
    //                 <input type="email" {...register("email", {required: true})} />
    //                 {errors.email && <span>*Email* is mandat    ory</span>}
    //                 <input type="password" {...register("password")}/>
    //                 <input type={"submit"} />
    //             </form>
    //         </>
    //     )
}

export default LayOut(Register)