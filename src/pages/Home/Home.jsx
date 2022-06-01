import React from 'react'
import LayOut from '../../layouts/LayoutFile'
import auth from '../../auth'
const Home = () => {
    return(
        <div>
            <h1>Log In</h1>
            <button onClick={
                () => {
                    auth.login(() => {
                        this.props.history.push("/my-account")
                    })
                }
            }>Login</button>
        </div>
    )
}

export default LayOut(Home)