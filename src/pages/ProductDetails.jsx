import './App.css'
import { BrowserRouter, Route, Routes, NavLink, Link,Navigate } from 'react-router-dom'
//import React, {useState} from 'react';

// page components
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
// import Test1 from './pages/Test1'
function App() {

  const articles = [
    {
    id: 1,
    name: "Sample Product",
    price: 100,
    description: "Short product description",
    imageUrl: "https://example.com/sample.jpg"
    }
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
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <Routes>
          <Route path="/" element = {<Home articles={articles}/>} />              
          <Route path="/about" element = {<About />} />
          <Route path="/contact" element = {<Contact />} />
          <Route path="/articles/:urlId" element ={<Product articles={articles} />} />   
          <Route path="/*" element={<Navigate to="/"/> }/>       
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App
