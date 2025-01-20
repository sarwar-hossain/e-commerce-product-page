import React from "react";
import './style/Navbar.css';


function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">Shop App</div>
        <div className="page">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="shop">Shop</a></li>
            <li><a href="about">About</a></li>
            <li><a href="contact">Contact</a></li>
          </ul>
        </div>

        <p className="login-btn">Login</p>
      </div>
    </>
  )
}

export default Navbar
