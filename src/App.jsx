import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Homepage'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <>
    <Header/>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
    </Router>
    <Footer/>
    </>
  )
}

export default App