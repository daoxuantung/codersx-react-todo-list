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
            <span className="Header-link-content">
                coder
                <span>X</span>
            </span>
        </div>
        <div className="Header-signup">
            <a href="/" className="Header-signup-link">Sign up</a>
        </div> 
    </header>
  );
}

export default Header;
