import React from 'react';
import './header.css';  // Optional: If you want to use external CSS
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setUserID  } from '../../Slices/userId';
const Header = () => {
  const auserId = useSelector((state) => state.userId.userId);
console.log(auserId,'auserIdauserIdauserIdauserIdauserIdauserId')
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleEventClick = (item) => {
    navigate("/signup", { state: item });
    // e.preventDefault();
  // window.location.reload(); 
  };
  const handlesignin = (item) => {
    navigate("/login", { state: item });
    // e.preventDefault();
  //  window.location.reload();
  };
  const handleEventlogout = (item) => {
    dispatch(setUserID(null)); // Dispatch the action

    // e.preventDefault();
    window.location.reload();
  };


  return (
    <header className="header">
      <div className="logo">
        <h1 style={{color:'#0e54e0'}}>SS</h1>
        <h1 style={{color:'#4A4D4D'}}>TICKETS</h1>
        <nav style={{marginLeft:'40px'}}>
        <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutus">About</Link></li>
            {/* <li><Link to="/mytickets">My Tickets</Link></li> */}
        </ul>
      </nav>
      </div>
      {auserId ? (
        <div style={styles.container}>
          {/* Display user-specific content here, e.g., username, profile picture, logout button */}
          <h3>Welcome</h3>
          <button style={styles.button} onClick={()=>handleEventlogout()}>Logout</button>
        </div>
      ) : (
        <div style={styles.container}>
          <button onClick={() => handleEventClick()} style={styles.button}>Register</button>
          <button onClick={() => handlesignin()} style={styles.button}>Sign In</button>
        </div>
      )}
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
    padding: "8px 20px",      // Adds padding inside the button
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
