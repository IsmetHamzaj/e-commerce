import {React, useState} from 'react'
import { useAuth } from './../../auth'
import { useNavigate } from 'react-router-dom'
const LogIn = () => {
    const [user, setUser] = useState("")
    const auth = useAuth()
    const navigate = useNavigate()
    const handleLogin = () => {
        auth.login(user)
        navigate('/my-account')
    }
    return (
        <div>
            <label>
                Username: {' '}
                <input type="text" onChange={(e) => setUser(e.target.value)} />
            </label>
            <button onClick={handleLogin}>LogIn</button>
        </div>
    )
}

export default LogIn