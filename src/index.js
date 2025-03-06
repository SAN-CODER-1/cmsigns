import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Contact from './contact';
import Footer from './footer';
import Serviceshow from './service/serviceshow';
import Nav from './Nav';
import Hero from './hero';
import Works from './works';
// import Prevwork from './previouswork';
import Reviews from './rewiev';
import AboutUs from './about';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
    <Routes>
    <Route path="/service" element={<Serviceshow />} />
    <Route path="/contact" element={<Contact/>} />
    <Route path='/' element={ <>
    <Nav />
    <Hero/>
    <Works/>
    {/* <Prevwork/>  */}
    <Reviews/>
    <AboutUs/>
    <Contact/>
    <Footer/></> }/>
  </Routes>
  </BrowserRouter>,
      </>
);
