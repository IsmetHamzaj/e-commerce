import React from 'react'
import Links from './Routes'
import ProtectedRoutes from './ProtectedRoutes'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './Store/Store'
const App = () => {
    return (
            <BrowserRouter>
                <Routes>
                    {Links?.map((route, index) => {
                        return (
                            <Route
                                key={index}
                                path={route?.private ? "/login" : route?.path}
                                element={route?.private ? <ProtectedRoutes route={route} /> : route?.Component}
                            />
                        );
                    })
                    }
                </Routes>
            </BrowserRouter>
        
    );
}

export default App