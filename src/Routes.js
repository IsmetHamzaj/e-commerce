import React from "react";
import Home from './pages/Home'
import Blog from './pages/Blog'
import LogIn from './pages/LogIn'
import Shop from './pages/Shop'
import Product from './components/Product'
import Contact from './pages/Contact'
import OurStory from './pages/OurStory'
import MyAccount from './pages/MyAcc'
import AccountAddresses from './components/AccAddresses'
import AccountDashboard from './components/AccDashboard'
import AccountDetails from './components/AccDetails'
import AccountDownloads from './components/AccDownloads'
import AccountOrders from './components/AccOrders'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import Privacy from './components/Privacy'
import ResetPassword from './components/ResetPassword'
import ShoppingBag from './components/ShoppingBag'
import ViewOrder from './components/ViewOrder'
const Links = [
        {
            path: "/",
            Component: <Home />,
            private: false
        },
        // {
        //     path: '/login',
        //     Component: <LogIn />
        // },
        {
            path: "/shop",
            Component: <Shop />,
            private: false
        },
        {
            path: "/product",
            Component: <Product />,
            private: false
        },
        {
            path: "/contact",
            Component: <Contact />,
            private: false
        },
        {
            path: "/blog",
            Component: <Blog />,
            private: false
        },
        {
            path: "/ourstory",
            Component: <OurStory />,
            private: false
        },
        {
            path: "/my-account",
            Component: <MyAccount />,
            private: true
        },
        {
            path: "/my-account/address",
            Component: <AccountAddresses />,
            private: true
        },
        {
            path: "/my-account/dashboard",
            Component: <AccountDashboard />,
            private: true
        },
        {
            path: "/my-account/details",
            Component: <AccountDetails />,
            private: true
        },
        {
            path: "/my-account/downloads",
            Component: <AccountDownloads />,
            private: true
        },
        {
            path: "/my-account/orders",
            Component: <AccountOrders />,
            private: true
        },
        {
            path: "/my-account/cart",
            Component: <Cart />,
            private: true
        },
        {
            path: "/my-account/checkout",
            Component: <Checkout />,
            private: true
        },
        {
            path: "/my-account/reset-password",
            Component: <ResetPassword />,
            private: true
        },
        {
            path: "/my-account/privacy",
            Component: <Privacy />,
            private: true
        },
        {
            path: "/my-account/view-order",
            Component: <ViewOrder />,
            private: true
        },
        {
            path: "/my-account/shopping-bag",
            Component: <ShoppingBag />,
            private: true
        },
]

export default Links