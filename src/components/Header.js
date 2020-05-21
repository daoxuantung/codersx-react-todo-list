import React from 'react';
import logo from '../logo.png';

function Header() {
  return (
    <header className="Header">
        <div className="Header-back" >
            <a href="/" className="Header-back-link">
                <i class="fas fa-long-arrow-alt-left"></i>
                Go back
            </a>   
        </div>
        <div className="Header-link" >
            <img src={logo} alt="logo"></img>
        </div>
        <div className="Header-signup">
            <a href="/" className="Header-signup-link">Signup</a>
        </div> 
    </header>
  );
}

export default Header;
