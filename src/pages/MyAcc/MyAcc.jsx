import React from 'react'
// import { useAuth } from '../../auth'
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router'
import LayOut from '../../layouts/LayoutFile'
import LogIn from '../LogIn'
const MyAccount = ({user}) => {
    if(!user) {
        return <Navigate to="/login" replace />
    }
    // // const auth = useAuth()
    // const navigate = useNavigate()
    // const handleLogout = () => {
    //     // auth.logout()
    //     navigate('/my-account')
    // }
    // return (
    //     <div>
    //         {/* Welcome {auth.user} */}
    //         <button onClick={handleLogout}>Log Out</button>
    //     </div>
    // )

}

export default LayOut(MyAccount)