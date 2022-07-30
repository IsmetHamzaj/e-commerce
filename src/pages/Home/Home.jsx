import React from 'react'
import LayOut from '../../layouts/LayoutFile'
import { useSelector } from 'react-redux'
import { store } from '../../Store/Store'
import { useState } from 'react'
import { action, slice } from '../../Store/Reducer/auth'
import './Home.module.scss'
// import auth from '../../auth'
const Home = () => {
    return(
        <div>
            <h1 className='title'>My Account</h1>
            <button className='signin_btn'>Sign in</button>
            <button className='register_btn'>Register</button>

            <input type="email" placeholder='Email' className='email' />
            <input type="password" placeholder='Password' className='password' />
            <input type="checkbox" className='check' /><p className='remember'>Remember me</p>

            <button className='btn'>Sign in</button>
            <a href="#" className='password_frg'>Have you forgotten your password?</a>
        </div>
    )
    // const authData = useSelector(store => store.auth)
    // const addProduct = () => {
    //     for(let i = 0; i< authData.products.length; i++) {
    //         if(inputValue == authData.products[i]){
    //             return alert("This item exists")
    //         }
    //     }
    //     store.dispatch(action.addProduct(inputValue))
        
    // }
    // const deleteProduct = (index) => {
    //     store.dispatch(action.deleteProduct(index))
    // }
    //return (
        // <div>
        //     <input type="text" placeholder='Add product' onChange={(e) => setInputValue(e.target.value)} />
        //     <button onClick={addProduct}>Add</button>
        //     {/* <h1>This is the home page</h1> */}
        //     <div>
        //         {authData.products.map((product, index) => {
        //             return (
        //                 <div key={index}>
        //                     <li>{product}</li>
        //                     <button onClick={() => {deleteProduct(index)}}>Delete</button>
        //                 </div>
        //             )
        //         })}
        //     </div>
        //     {/* <button onClick={
        //         () => {
        //             auth.login(() => {
        //                 this.props.history.push("/my-account")
        //             })
        //         }
        //     }>Login</button> */}
        // </div>
    //)
}

export default Home