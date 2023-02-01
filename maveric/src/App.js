import React from 'react';
import logo from './logo.svg';
import Catalog from './component/Catalog.jsx';
import ResponsiveAppBar from './component/header';
import Footer from './component/footer';
import './App.css';

function App() {
  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Catalog></Catalog>
      <Footer></Footer>
    </>
    
  );
}

export default App;
