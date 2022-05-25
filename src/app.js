import React from 'react'
import Links from './Routes'
import ProtectedRoutes from './ProtectedRoutes'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
const App = () => {
    <BrowserRouter>
        <Routes>
            {
                Links?.map((route, index) => (route?.private ? <ProtectedRoutes /> : <Route path={route?.path} element={route?.Component} />))
            }
        </Routes>
    </BrowserRouter>
}



export default App
