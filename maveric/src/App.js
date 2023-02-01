import React from 'react';
import logo from './logo.svg';

import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import './App.css';

import Home from './pages/home';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import Products from './pages/Product';

function App() {
  return (
    
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/products' element={<Products/>} />
          <Route path='/pricing' element={<Pricing/>} />
          <Route path='/blog' element={<Blog/>} />
        </Routes>
      
      </Router>
    </>
    
  );
}

export default App;
