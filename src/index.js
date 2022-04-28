import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app';
import Blog from './components/Blog/index'
import Shop from './components/Shop/index'
import Product from './components/Product/index'
import Contact from './components/Contact/index'
import OurStory from './components/OurStory/index'
import MyAccount from './components/MyAcc'
import AccountAddresses from './components/AccAddresses/index'
import AccountDashboard from './components/AccDashboard/index'
import AccountDetails from './components/AccDetails/index'
import AccountDownloads from './components/AccDownloads/index'
import AccountOrders from './components/AccOrders/index'
import Cart from './components/Cart/index'
import Checkout from './components/Checkout/index'
import Privacy from './components/Privacy/index'
import ResetPassword from './components/ResetPassword/index'
import ShoppingBag from './components/ShoppingBag/index'
import ViewOrder from './components/ViewOrder/index'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ProtectedRoutes from './ProtectedRoutes'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product" element={<Product />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="blog" element={<Blog />} />
      <Route path="ourstory" element={<OurStory />} />
      <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
    <Route path="/blog" element={<Blog />} />
    <Route path="/ourstory" element={<OurStory />} />
    <Route element={<ProtectedRoutes />}>
      <Route path="/my-account" element={<MyAccount />}>
        <Route path="addresses" element={<AccountAddresses />} />
        <Route path="dashboard" element={<AccountDashboard />} />
        <Route path="details" element={<AccountDetails />}/>
        <Route path='downloads' element={<AccountDownloads />} />
        <Route path="orders" element={<AccountOrders />} />
        <Route path='cart' element={<Cart />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="shopping-bag" element={<ShoppingBag />} />
        <Route path="view-order" element={<ViewOrder />} />
        <Route />
      </Route>
    </Route>
    </Routes>
  </BrowserRouter>
);