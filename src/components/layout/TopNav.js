import React from 'react';
import './header.css';  // Optional: If you want to use external CSS

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Book Your Ticket</h1>
      </div>
      <nav>
        <ul className="nav-list">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
