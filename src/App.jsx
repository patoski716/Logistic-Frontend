
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Homepage'
import Service from './components/Service'
import Tracking from './components/Tracking'
import Contact from './components/Contact'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from 'react';



function App() {
  
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