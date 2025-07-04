import './App.css'
import { BrowserRouter, Route, Routes, NavLink, Link,Navigate } from 'react-router-dom'
//import React, {useState} from 'react';

// page components
import Home from './pages/Home'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import Product from './pages/Product'

function App() {

  const articles = [
    {
      "id": "1",
      "title": "Product List",
    },
    // {
    //   "id": "2",
    //   "title": "Product Details",
    // },
  ];

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>Mini Product Catalog</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
        </nav>

        <Routes>
          <Route path="/" element = {<Home articles={articles}/>} />              
          <Route path="/shop" element = {<Shop />} />
          <Route path="/*" element={<Navigate to="/"/> }/>       
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App
