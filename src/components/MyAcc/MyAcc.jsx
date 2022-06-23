import React from 'react'
import useAuth from '../../auth'
import { useNavigate } from 'react-router-dom'
const MyAccount = () => {
    const auth = useAuth()
    const navigate = useNavigate()
    const handleLogout = () => {
        auth.logout()
        navigate('/my-account')
    }
    return (
        <div>
            Welcome {auth.user}
            <button onClick={handleLogout}>Log Out</button>
        </div>
    )
}

export default MyAccount