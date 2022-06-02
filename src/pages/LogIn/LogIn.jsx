import { React, useState } from 'react'
import { useAuth } from '../../auth'
import { useNavigate } from 'react-router-dom'
import auth from '../../auth'
import LayOut from '../../layouts/LayoutFile'
const LogIn = () => {
    const [user, setUser] = React.useState(null);

    const handleLogin = () => setUser({ id: '1', name: 'robin' });
    const handleLogout = () => setUser(null);
    return (
        <>
            {
                user ? (
                    <button onClick={handleLogout} > Sign Out</button>
                ) : (
                    <button onClick={handleLogin}>Sign In</button>
                )
            }
        </>
    )
    // const [user, setUser] = useState("")
    // const auth = useAuth()
    // const navigate = useNavigate()
    // const handleLogin = () => {
    //     auth.login(user)
    //     navigate('/my-account')
    // }
    // return (
    //     <div>
    //         <label>
    //             Username: {' '}
    //             <input type="text" onChange={(e) => setUser(e.target.value)} />
    //         </label>
    //         <button onClick={handleLogin}>LogIn</button>
    //     </div>
    // )
}

export default LayOut(LogIn)