import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app';
import Shop from './components/Shop/index'
import Product from './components/Product/index'
import Contact from './components/Contact/index'
import Blog from './components/Blog/index';
import OurStory from './components/OurStory/index'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product" element={<Product />} />
      <Route path="/contact" element={<Contact />} />
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
    </Routes>
  </BrowserRouter>
);