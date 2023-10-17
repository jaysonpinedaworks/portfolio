import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Cards from './components/cards';
import './components/Navbar/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer';


function App() {
  return (
    <>
    <div className='body-bg'>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
       
          
        <Route path="/about" element={<About/>} />
        
        
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cardsComponent" element={<Cards/>}/>

        
         
         
      </Routes>
      <Footer/>
      
      </Router>
      <br></br>
      

     
    </div>
    
    
    </>
  );
}

export default App;
