// Footer.js
import React from "react";
import Logoss from '../../Assets/Logoss.png'; // Tell webpack this JS file uses this image

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div
        style={{
          alignItems: "flex-start",
          width: "40%",
          justifyContent: "flex-start",
          padding:10,
          paddingLeft:80

        }}
      >
        <img src={Logoss} alt="Logo" width={200} height={60} style={{paddingTop:20}}/>
        {/* <h1>My ticket</h1> */}
        <p>MyTickets, Sri Lanka's premier and most trusted online ticket partner, serves as the official marketplace providing a secure and safe platform for purchasing tickets to all entertainment events in Sri Lanka.</p>
      </div>
      <div
        style={{
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
        }}
      >
   
        <p style={styles.text}>
          &copy; 2024 Your Company Name. All Rights Reserved.
        </p>
      </div>
      <div
        style={{
          alignItems: "center",
         // width: "100%",
          justifyContent: "center",
          textAlign:'center',
          paddingBottom:12
          
        }}
      >
        <a href="/privacy-policy" style={styles.link}>
          Privacy Policy
        </a>
        <a href="/terms" style={styles.link}>
          Terms of Service
        </a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#041434",
    color: "white",
    //  textAlign: 'center',
  //  padding: "10px 0",
   // position: "absolute",
   

    bottom: 0,
    width: "100%",
    
  },
  text: {
    margin: "5px 0",
    textAlign: 'center',
  },
  link: {
    color: "#61dafb",
    textDecoration: "none",
    margin: "0 5px",
    textAlign: 'center',
    

    
  },
};

export default Footer;
