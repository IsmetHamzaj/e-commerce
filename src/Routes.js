import React from "react";
import Home from './pages/Home'
import Blog from './pages/Blog'
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
const Links = () => {
    [
        {
            path: "/",
            Component: <Home />
        },
        {
            path: "/shop",
            Component: <Shop />
        },
        {
            path: "/product",
            Component: <Product />
        },
        {
            path: "/contat",
            Component: <Contact />
        },
        {
            path: "/blog",
            Component: <Blog />
        },
        {
            path: "/ourstory",
            Component: <OurStory />
        },
        {
            path: "*",
            Component: "This route doesnt exist"
        },
        {
            path: "/ourstory",
            Component: <OurStory />
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
}

export default Links