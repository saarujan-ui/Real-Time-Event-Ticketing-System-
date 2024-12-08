import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserID  } from '../Slices/userId';
import {  setRole, setroles } from '../Slices/role';
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log({ email, password, rememberMe });
    const data = {
      email: email,
      password: password,
    };
    try {
      // Make the POST request using Axios
      const response = await axios.post("http://localhost:8088/auth/login", JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json"
        }
      });
  
      console.log("Responsestatus:", response);
  
      // Check for success
      if (response.data ) {

        // const userIdRegex = /userId: ([a-f0-9-]+)/;
        // const match = response.data.match(userIdRegex);
        
        const userId = response?.data.slice(':'); // Extract the userId from the match
        console.log(userId,'userIduserId')
        dispatch(setUserID(userId)); // Dispatch the action
        // dispatch(setroles(role));
        navigate('/'); 
     //   window.location.reload();

        // console.log("Signup successful:", result);
      //alert("Signup successful!");
        // Perform further actions (e.g., redirect, clear form)
      } else {
        console.error("signin failed:", response.data);
        alert("Signup failed: " + (response.data.message || "Unknown error"));
      }
    } catch (err) {
      console.error("Network error or server is unreachable:", err);
     alert("An error occurred. Please check your network connection or try again later.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.logo}>
        <span style={styles.blueText}>My</span>
        <span style={styles.blackText}>Tickets</span>
      </div>
      <h2>Welcome Back</h2>
      <p>Glad to see you again! Sign in to your MyTickets account below</p>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.options}>
          {/* <a href="#" style={styles.forgotPassword}>
            Forgot password
          </a> */}
          <label style={styles.rememberMe}>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember me
          </label>
        </div>
        <button type="submit" style={styles.button}>
          Sign in
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto',
    textAlign: 'center',
    marginTop:'50px',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    border: '1px solid #ddd',
    backgroundColor: '#fff',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  blueText: { color: 'blue' },
  blackText: { color: 'black' },
  form: {
    marginTop: '20px',
    padding: '20px',
    borderRadius: '8px',
  },
  
  inputGroup: {
    marginBottom: '15px',
    textAlign: 'left',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '14px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    outline: 'none',
  },
  options: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '15px',
  },
  forgotPassword: {
    color: 'blue',
    textDecoration: 'none',
    fontSize: '14px',
  },
  rememberMe: {
    fontSize: '14px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#5b85f5',
    color: '#fff',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default LoginForm;
