import React from 'react';
import Headder from './Components/Headder'
import Footer from './Components/Footer';
import {Outlet} from 'react-router-dom';
function Layout() {
  return (
    <>
        <Headder/>
        <Outlet/>
        <Footer/> 
    </>
  );
}

export default Layout;
