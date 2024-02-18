import React from 'react';
import Logo from "../assets/logo.png";

function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg">
  <div className="container">
    <a className="navbar-brand" href="#"><img src={Logo} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  mx-auto">
        <li className="nav-item">
          <a className="nav-link active text-danger" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">Service</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link text-dark" href=''>Tracking</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href=''>Contact</a>
        </li>
      </ul>
      <a href="" className="btn btn-danger">Requote Quote</a>
    </div>
  </div>
</nav>


    </>
  )
}

export default Header