import React, { useState } from "react";
import TopNav from "../components/layout/TopNav";
import Footer from "../components/layout/footer";
import tickets from "../Assets/tickets.png"; // Tell webpack this JS file uses this image
import { Link, useNavigate } from "react-router-dom";
import SearchInput from "../components/searchInput";
import "./home.css"; // Optional: If you want to use external CSS
import "./PopupForm.css"; // Import the CSS file
import axios from 'axios';

import { Input, Card, Button } from "antd";
// import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";


const EventUpdate = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const [tickets, setTickets] = useState([]); // Array to store ticket data
  const [eventName, setEventName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [place, setPlace] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');


  const [password, setPassword] = useState('');
  const userId = useSelector((state) => state.userId.userId);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalTickets = tickets;

    // Process the finalTickets array as needed
    console.log(finalTickets,'finalTicketsfinalTickets'); // Log the array to the console
    const data = {
        eventId: userId,
        eventName: eventName,
        date: date,
        time: time,
        ticketDetails:finalTickets,
        place:place,
        description:description,
        moreInfo:'',
        ticketPolicy:'',
        imagePath:image,
        image:image
      };
      console.log(data,'eventdetails')
    try {
        // Make the POST request using Axios
        const response = await axios.post(`http://localhost:8088/events/${userId}/add`, JSON.stringify(data), {
          headers: {
            "Content-Type": "application/json"
          }
        });
    
        console.log("Response status:", response);
    
        // Check for success
        if (response.status === 200 || response.status === 201) {
  
        //   const userIdRegex = /userId: ([a-f0-9-]+)/;
        //   const match = response.data.match(userIdRegex);
          
        //   const userId = match[1]; // Extract the userId from the match
        //   console.log(userId,'userIduserId')
      //    dispatch(setUserID(userId)); // Dispatch the action
  
     //     navigate('/'); 
       //   window.location.reload();
  
           console.log("update successful:", response);
        //alert("Signup successful!");
          // Perform further actions (e.g., redirect, clear form)
        } else {
          console.error("Signup failed:", response.data);
          alert("Signup failed: " + (response.data.message || "Unknown error"));
        }
      } catch (err) {
        console.error("Network error or server is unreachable:", err);
        alert("An error occurred. Please check your network connection or try again later.");
      }
  };


  const handleAddTicket = () => {
    setTickets((prevTickets) => [
      ...prevTickets,
      { ticketRate: '', ticketsAvailable: '' }, // Add empty ticket object
    ]);
  };

  const handlePriceChange = (event, index) => {
    const updatedTickets = [...tickets];
    updatedTickets[index].ticketRate = event.target.value;
    setTickets(updatedTickets);
  };

  const handleCountChange = (event, index) => {
    const updatedTickets = [...tickets];
    updatedTickets[index].ticketsAvailable = event.target.value;
    setTickets(updatedTickets);
  };
  return (
    <>
      <TopNav />
      {/*header section*/}
      <div
        style={{
          width: "80%",
          padding: "8px",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h2>Update your event details</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label>Event Name</label>
            <input
              type="first name"
              placeholder="Enter the event name"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label>Event Date</label>
            <input
              type="date"
              placeholder="Enter your date"
               value={date}
               onChange={(e) => setDate(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label>Event Time</label>
            <input
              type="time"
              placeholder="Enter your password"
                 value={time}
                 onChange={(e) => setTime(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label>Event Place</label>
            <input
              type="text"
              placeholder="Enter the place"
                 value={place}
                 onChange={(e) => setPlace(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label>Event Image</label>
            <input
              type="file"
              placeholder="Update your event image"
                 value={image}
                 onChange={(e) => setImage(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label>Description</label>
            <input
              type="text"
              placeholder="Enter the details"
                 value={description}
                 onChange={(e) => setDescription(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={{ marginBottom: "15px", textAlign: "left" }}>
      <label>Event ticket price range</label>
      {tickets.map((ticket, index) => (
        <div
          key={index} // Essential for proper React updates
          style={{
            flexDirection: "row",
            padding:5,
            width: "80%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            gap: 12,
          }}
        >
          <input
            type="number"
            placeholder="Enter the price"
            value={ticket.ticketRate} // Set initial value
            onChange={(event) => handlePriceChange(event, index)}
            style={styles.input}
            required
          />
          <input
            type="number"
            placeholder="Enter the count"
            value={ticket.ticketsAvailable} // Set initial value
            onChange={(event) => handleCountChange(event, index)}
            style={styles.input}
            required
          />
          {/* Remove unnecessary Button component if not intended for deletion */}
          {/* <Button style={{ backgroundColor: "#5b85f5" }}>Remove Ticket</Button> */}
        </div>
      ))}
      <Button style={{ backgroundColor: "#5b85f5",marginLeft:5 }} onClick={handleAddTicket}>
        Add tickets
      </Button>
    </div>

          <button type="submit" style={styles.button}>
            Update
          </button>
        </form>
      </div>
      <div
        style={{
          alignItems: "flex-end",
          justifyContent: "flex-end",
          position: "relative",
          paddingTop: 20,
        }}
      >
        <Footer />
      </div>
    </>
  );
};

const styles = {
  card: {
    display: "flex",
    flexDirection: "column", // Makes the card content stack vertically
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px", // Portrait width
    margin: "20px auto",
    backgroundColor: "#fff",
  },
  image: {
    width: "250px", // Image takes full card width
    height: "200px", // Adjust height for portrait orientation
    objectFit: "cover",
  },
  details: {
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    gap: "8px", // Space between rows
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#333",
  },
  infoRow: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    color: "#555",
  },
  icon: {
    fontSize: "18px",
    color: "#007BFF",
  },
  container: {
    width: "80%",
    maxWidth: "400px",
    margin: "0 auto",
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    border: "1px solid #ddd",
    backgroundColor: "#fff",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  blueText: { color: "blue" },
  blackText: { color: "black" },
  form: {
    marginTop: "20px",
    padding: "20px",
    borderRadius: "8px",
  },

  inputGroup: {
    marginBottom: "15px",
    textAlign: "left",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "14px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    outline: "none",
  },
  options: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px",
  },
  forgotPassword: {
    color: "blue",
    textDecoration: "none",
    fontSize: "14px",
  },
  rememberMe: {
    fontSize: "14px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#5b85f5",
    color: "#fff",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default EventUpdate;
