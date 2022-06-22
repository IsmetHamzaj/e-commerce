import React from 'react'
import { useForm } from 'react-hook-form'
import useForm from './useForm'
const Register = () => {

    const { handleChanges, values } = useForm();

    return (
        <div>
            <form>
                <div>
                    <label htmlFor='email'>Email:
                        <input id='email' type="email" name="email" placeholder='Enter your email' value={values.email} onChange={handleChanges} />
                    </label>
                </div>
                <div>
                    <label htmlFor='password'>Password:
                        <input id='password' type="password" name="password" placeholder='Enter your password' value={values.password} onChange={handleChanges} />
                    </label>
                </div>
                <div>
                    <label htmlFor='name'>Name:
                        <input id='name' type="text" name="name" placeholder='Enter your name' value={values.name} onChange={handleChanges} />
                    </label>
                </div>
                <div>
                    <label htmlFor='lastname'>Last Name:
                        <input id='lastname' type="text" name="lastname" placeholder='Enter your last name' value={values.lastname} onChange={handleChanges} />
                    </label>
                </div>
                <div>
                    <button type='submit'>Register</button>
                    <span>Already have an account? Login <a href='#'>here</a></span>
                </div>
            </form>
        </div>
    )
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

export default Register