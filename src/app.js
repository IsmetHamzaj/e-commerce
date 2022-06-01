import React from 'react'
import Links from './Routes'
import ProtectedRoutes from './ProtectedRoutes'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
const App = () => {
    <BrowserRouter>
        <Routes>
            {Links?.map((route, index) => {
                <Route
                    index={index}
                    path={route?.private ? "/login" : route?.path}
                    element={route?.private ? <ProtectedRoutes route={route} /> : route?.Component}
                />
            })
            }
        </Routes>
    </BrowserRouter>
}

export default App