import React from 'react'
// import { useAuth } from '../../auth'
import { Link, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router'
import LayOut from '../../layouts/LayoutFile'
import LogIn from '../LogIn'
const MyAccount = ({logout}) => {
    return(
        <div>
            <Link to="/my-account">My Account</Link>
            <h1>
                Hi you are logged in
            </h1>
            <button onClick={logout}>LogOut</button>
        </div>
    )
}

export default LayOut(MyAccount)