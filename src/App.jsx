
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Homepage'
import Service from './components/Service'
import Tracking from './components/Tracking'
import Contact from './components/Contact'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
    AOS.init({
      // Global settings for AOS (optional)
      duration: 3000
    });
  }, []); // Ensure this useEffect runs only once after component mount
  return (
    <>
    <Header/>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/service" element={<Service/>}/>
        <Route exact path="/tracking" element={<Tracking/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
    <Footer/>
    </>
  )
}

export default App