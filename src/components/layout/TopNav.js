import React from 'react';
import './header.css';  // Optional: If you want to use external CSS

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1 style={{color:'#0e54e0'}}>SS</h1>
        <h1 style={{color:'#4A4D4D'}}>TICKETS</h1>
        <nav style={{marginLeft:'40px'}}>
        <ul className="nav-list">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
      {/* //    <li><a href="/services">Services</a></li> */}
          <li><a href="/contact">My Tickets</a></li>
        </ul>
      </nav>
      </div>
      <div style={styles.container}>
      <button style={styles.button}>Register</button>
      <button style={styles.button}>Sign In</button>
    </div>
    </header>
  );
}



const styles = {
  container: {
    display: "flex", // Aligns buttons in a row
    gap: "10px",     // Adds space between the buttons
    justifyContent: "center", // Centers the buttons horizontally
   // marginTop: "20px", // Adds spacing at the top
  },
  button: {
    padding: "10px 20px",      // Adds padding inside the button
    fontSize: "16px",          // Adjusts the font size
    borderRadius: "5px",       // Rounds button corners
    border: "1px solid #007BFF", // Adds a border
    backgroundColor: "#007BFF", // Button color
    color: "white",            // Text color
    cursor: "pointer",         // Changes cursor to pointer on hover
    transition: "0.3s ease",   // Smooth transition effect
  },
};

export default Header;
