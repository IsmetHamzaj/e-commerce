import React, {useState} from 'react'
// import { useAuth } from '../../auth'
import { Link, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router'
import LayOut from '../../layouts/LayoutFile'
import LogIn from '../LogIn'
const MyAccount = () => {
    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"
    }
    const [user,setUser] = useState({name: "", email: ""})
    const [error, setError] = useState("")

    const Login = details => {
        if(details.email == adminUser.email && details.password == adminUser.password) {
            console.log("Logged in")
        } else{
            console.log("wrong credentials")
            setError("Wrong credentials")
        }
    }

    const Logout = () => {
        setUser({name: "", email: "" })
    }
    return(
        <div>
            <h1>My Account</h1>
            {
                (user.email != "") ? (
                    <div>
                        <h2>Welcome <span>{user.name}</span></h2>
                        <button onClick={Logout}>Logout</button>
                    </div>
                ) : (
                    <LogIn Login={Login} error={error} />
                )
            }
        </div>
    )
}

export default LayOut(MyAccount)