import { Outlet } from "react-router";
import LogIn from './pages/LogIn/index'

const useAuth = () => {
    const user = { loggedIn: false }
    return user && user.loggedIn
}

const ProtectedRoutes = () => {
    const isAuth = useAuth()
    return isAuth ? <Outlet /> : <LogIn />
}
export default ProtectedRoutes