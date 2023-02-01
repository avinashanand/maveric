
import React from 'react'
import Catalog from '../component/Catalog.jsx';
import ResponsiveAppBar from '../component/header';
import Footer from '../component/footer';

export default function Home(){
    
    return(
        <>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Catalog></Catalog>
            <Footer></Footer>
        </>
    );
}