import { React, useState } from 'react'
import { useAuth } from '../../auth'
import { useNavigate } from 'react-router-dom'
import auth from '../../auth'
import LayOut from '../../layouts/LayoutFile'
const LogIn = () => {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const database = [
        {
            username: "user1",
            password: "pass1"
        },
        {
            username: "user2",
            password: "pass2"
        }
    ];

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        var { uname, pass } = document.forms[0];


        const userData = database.find((user) => user.username === uname.value);


        if (userData) {
            if (userData.password !== pass.value) {
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
            }
        } else {
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };


    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );


    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required />
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );

    return (
        <div className="app">
            <div className="login-form">
                <div className="title">Sign In</div>
                {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
            </div>
        </div>
    );


    //     const [user, setUser] = React.useState(null);

    //     const handleLogin = () => setUser({ id: '1', name: 'robin' });
    //     const handleLogout = () => setUser(null);
    //     return (
    //         <>
    //             {
    //                 user ? (
    //                     <button onClick={handleLogout} > Sign Out</button>
    //                 ) : (
    //                     <button onClick={handleLogin}>Sign In</button>
    //                 )
    //             }
    //         </>
    //     )
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