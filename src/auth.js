// class Auth {
//     constructor() {
//         this.authenticated = false
//     }


//     login(cb) {
//         this.authenticated = true
//         cb()
//     }

//     logout(cb) {
//         this.authenticated = false
//         cb()
//     }

//     isAuthenticated() {
//         return this.authenticated
//     }
// }

// export default new Auth()
import React from "react";
import { useNavigate } from "react-router-dom";

const Auth = ({ authenticate }) => {
    const navigate = useNavigate()
    const onClick = () => {
        authenticate()
        navigate("/my-account")
    }
    return (
        <div>
            <h2>Please authenticate to continue</h2>
            <button onClick={onClick}>Authenticate</button>
        </div>
    )
}