import React from "react";
import './style/Navbar.css';


function Navbar(){
    return(
        <>
      <div className="navbar">
        <div className="logo">Shop App</div>
        <div className="page">
            <ul>
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>

        <p className="login-btn">Login</p>
      </div>
        </>
    )
}

export default Navbar